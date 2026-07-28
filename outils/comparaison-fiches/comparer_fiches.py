#!/usr/bin/env python3
"""
Compare un dossier de fiches Excel avec un fichier programme.

Pour chaque fiche du dossier :
  1. L'identification (ex. "APP-11") est extraite du nom de fichier.
  2. Cette identification est recherchée dans la colonne B du fichier programme.
  3. La valeur de la cellule S34 de la fiche est comparée à la valeur de la
     cellule H<ligne trouvée> du programme.

Un rapport (console + fichier Excel) liste :
  - les fiches dont l'identification est introuvable dans le programme ;
  - les fiches dont la valeur comparée diffère de celle du programme ;
  - les fiches en accord (pour référence).

Utilisation :
    pip install openpyxl
    python comparer_fiches.py --fiches ./fiches --programme ./programme.xlsx

Options utiles :
    --sortie rapport.xlsx          chemin du rapport généré
    --feuille-fiche NomFeuille      feuille à lire dans chaque fiche (def. feuille active)
    --feuille-programme NomFeuille  feuille à lire dans le programme (def. feuille active)
    --cellule-fiche S34             cellule à lire dans la fiche
    --colonne-id B                  colonne où chercher l'identification dans le programme
    --colonne-valeur H              colonne à comparer dans le programme
"""

import argparse
import re
import sys
from pathlib import Path

from openpyxl import load_workbook
from openpyxl.utils import column_index_from_string

ID_PATTERN = re.compile(r"^([A-Za-z]{3}-\d{2})")


def extraire_id(nom_fichier: str) -> str | None:
    match = ID_PATTERN.match(nom_fichier)
    return match.group(1).upper() if match else None


def normaliser(valeur):
    """Normalise une valeur de cellule pour la comparaison (texte/nombre)."""
    if valeur is None:
        return ""
    if isinstance(valeur, float) and valeur.is_integer():
        valeur = int(valeur)
    return str(valeur).strip()


def construire_index_programme(chemin_programme: Path, feuille: str | None, colonne_id: str):
    """Retourne un dict {identification: numero_de_ligne} à partir de la colonne B."""
    wb = load_workbook(chemin_programme, data_only=True)
    ws = wb[feuille] if feuille else wb.active

    col_idx = column_index_from_string(colonne_id)
    index = {}
    for ligne in range(1, ws.max_row + 1):
        valeur = ws.cell(row=ligne, column=col_idx).value
        if valeur is None:
            continue
        cle = str(valeur).strip().upper()
        if ID_PATTERN.match(cle):
            index[cle] = ligne
    return wb, ws, index


def comparer(dossier_fiches: Path, chemin_programme: Path, feuille_fiche: str | None,
             feuille_programme: str | None, cellule_fiche: str, colonne_id: str,
             colonne_valeur: str):
    wb_programme, ws_programme, index_programme = construire_index_programme(
        chemin_programme, feuille_programme, colonne_id
    )
    col_valeur_idx = column_index_from_string(colonne_valeur)

    fichiers = sorted(
        f for f in dossier_fiches.iterdir()
        if f.is_file() and f.suffix.lower() in (".xlsx", ".xlsm")
    )

    resultats = {
        "introuvables": [],   # fiches sans ligne correspondante
        "differences": [],    # fiches avec valeurs différentes
        "conformes": [],      # fiches avec valeurs identiques
        "sans_id": [],        # fichiers dont le nom ne contient pas d'identification valide
    }

    for fichier in fichiers:
        identification = extraire_id(fichier.name)
        if not identification:
            resultats["sans_id"].append(fichier.name)
            continue

        ligne = index_programme.get(identification)
        if ligne is None:
            resultats["introuvables"].append((fichier.name, identification))
            continue

        try:
            wb_fiche = load_workbook(fichier, data_only=True)
            ws_fiche = wb_fiche[feuille_fiche] if feuille_fiche else wb_fiche.active
            valeur_fiche = ws_fiche[cellule_fiche].value
        except Exception as exc:
            resultats["introuvables"].append((fichier.name, f"{identification} (erreur lecture: {exc})"))
            continue

        valeur_programme = ws_programme.cell(row=ligne, column=col_valeur_idx).value

        entree = {
            "fichier": fichier.name,
            "id": identification,
            "ligne": ligne,
            "valeur_fiche": valeur_fiche,
            "valeur_programme": valeur_programme,
        }

        if normaliser(valeur_fiche) == normaliser(valeur_programme):
            resultats["conformes"].append(entree)
        else:
            resultats["differences"].append(entree)

    return resultats


def imprimer_rapport(resultats: dict, cellule_fiche: str, colonne_valeur: str):
    print("=" * 70)
    print("RAPPORT DE COMPARAISON DES FICHES")
    print("=" * 70)

    print(f"\nFiches conformes : {len(resultats['conformes'])}")

    print(f"\nFiches SANS ligne correspondante dans le programme : {len(resultats['introuvables'])}")
    for nom, ident in resultats["introuvables"]:
        print(f"  - {nom}  (identification recherchée : {ident})")

    print(f"\nFiches avec VALEURS DIFFÉRENTES ({cellule_fiche} vs {colonne_valeur}<ligne>) : "
          f"{len(resultats['differences'])}")
    for e in resultats["differences"]:
        print(f"  - {e['fichier']}  [{e['id']}, ligne {e['ligne']}] : "
              f"fiche={e['valeur_fiche']!r}  programme={e['valeur_programme']!r}")

    if resultats["sans_id"]:
        print(f"\nFichiers ignorés (nom sans identification valide, ex. ABC-12) : "
              f"{len(resultats['sans_id'])}")
        for nom in resultats["sans_id"]:
            print(f"  - {nom}")

    print("\n" + "=" * 70)


def ecrire_rapport_excel(resultats: dict, chemin_sortie: Path, cellule_fiche: str, colonne_valeur: str):
    from openpyxl import Workbook

    wb = Workbook()

    ws1 = wb.active
    ws1.title = "Introuvables"
    ws1.append(["Fichier", "Identification recherchée"])
    for nom, ident in resultats["introuvables"]:
        ws1.append([nom, ident])

    ws2 = wb.create_sheet("Differences")
    ws2.append(["Fichier", "Identification", "Ligne programme",
                f"Valeur fiche ({cellule_fiche})", f"Valeur programme ({colonne_valeur})"])
    for e in resultats["differences"]:
        ws2.append([e["fichier"], e["id"], e["ligne"], e["valeur_fiche"], e["valeur_programme"]])

    ws3 = wb.create_sheet("Conformes")
    ws3.append(["Fichier", "Identification", "Ligne programme", "Valeur"])
    for e in resultats["conformes"]:
        ws3.append([e["fichier"], e["id"], e["ligne"], e["valeur_fiche"]])

    if resultats["sans_id"]:
        ws4 = wb.create_sheet("Ignores")
        ws4.append(["Fichier"])
        for nom in resultats["sans_id"]:
            ws4.append([nom])

    wb.save(chemin_sortie)


def main():
    parser = argparse.ArgumentParser(description="Compare des fiches Excel avec un fichier programme.")
    parser.add_argument("--fiches", required=True, type=Path, help="Dossier contenant les fiches Excel")
    parser.add_argument("--programme", required=True, type=Path, help="Fichier Excel du programme")
    parser.add_argument("--sortie", type=Path, default=Path("rapport_comparaison.xlsx"),
                         help="Chemin du rapport Excel généré (défaut : rapport_comparaison.xlsx)")
    parser.add_argument("--feuille-fiche", default=None, help="Nom de la feuille à lire dans les fiches")
    parser.add_argument("--feuille-programme", default=None, help="Nom de la feuille à lire dans le programme")
    parser.add_argument("--cellule-fiche", default="S34", help="Cellule à lire dans chaque fiche (défaut : S34)")
    parser.add_argument("--colonne-id", default="B", help="Colonne du programme contenant les identifications (défaut : B)")
    parser.add_argument("--colonne-valeur", default="H", help="Colonne du programme à comparer (défaut : H)")

    args = parser.parse_args()

    if not args.fiches.is_dir():
        print(f"Erreur : le dossier de fiches '{args.fiches}' est introuvable.", file=sys.stderr)
        sys.exit(1)
    if not args.programme.is_file():
        print(f"Erreur : le fichier programme '{args.programme}' est introuvable.", file=sys.stderr)
        sys.exit(1)

    resultats = comparer(
        dossier_fiches=args.fiches,
        chemin_programme=args.programme,
        feuille_fiche=args.feuille_fiche,
        feuille_programme=args.feuille_programme,
        cellule_fiche=args.cellule_fiche,
        colonne_id=args.colonne_id,
        colonne_valeur=args.colonne_valeur,
    )

    imprimer_rapport(resultats, args.cellule_fiche, args.colonne_valeur)
    ecrire_rapport_excel(resultats, args.sortie, args.cellule_fiche, args.colonne_valeur)
    print(f"\nRapport Excel enregistré : {args.sortie}")


if __name__ == "__main__":
    main()
