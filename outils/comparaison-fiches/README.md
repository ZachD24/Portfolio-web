# Comparaison des fiches avec le programme

Script Python qui compare un dossier de fiches Excel avec un fichier
« programme » Excel.

## Principe

Pour chaque fiche (`.xlsx` / `.xlsm`) du dossier :

1. L'identification (ex. `APP-11`) est extraite du **début du nom de
   fichier** (3 lettres, un tiret, 2 chiffres — ex. `APP-11_classe_régulière.xlsx`,
   `CAC-14_depot_gymnase.xlsx`).
2. Cette identification est recherchée dans la **colonne B** du fichier
   programme, ce qui donne un numéro de ligne (ex. ligne 30).
3. La valeur de la cellule **S34** de la fiche est comparée à la valeur de la
   cellule **H\<ligne trouvée\>** du programme (ex. H30).

## Rapport produit

- **À l'écran** : résumé des fiches conformes, des fiches sans ligne
  correspondante, des fiches avec des valeurs différentes, et des fichiers
  ignorés (nom sans identification valide).
- **Fichier Excel** (`rapport_comparaison.xlsx` par défaut) avec 3-4 feuilles :
  `Introuvables`, `Differences`, `Conformes`, `Ignores`.

## Installation

```bash
pip install -r requirements.txt
```

## Utilisation

```bash
python comparer_fiches.py --fiches ./fiches --programme ./programme.xlsx
```

### Options

| Option | Défaut | Description |
|---|---|---|
| `--fiches` | (requis) | Dossier contenant les fiches Excel |
| `--programme` | (requis) | Fichier Excel du programme |
| `--sortie` | `rapport_comparaison.xlsx` | Chemin du rapport généré |
| `--feuille-fiche` | feuille active | Nom de la feuille à lire dans chaque fiche |
| `--feuille-programme` | feuille active | Nom de la feuille à lire dans le programme |
| `--cellule-fiche` | `S34` | Cellule à lire dans chaque fiche |
| `--colonne-id` | `B` | Colonne du programme contenant les identifications |
| `--colonne-valeur` | `H` | Colonne du programme à comparer |

Exemple avec des feuilles nommées et des cellules différentes :

```bash
python comparer_fiches.py \
  --fiches ./fiches \
  --programme ./programme.xlsx \
  --feuille-fiche "Fiche" \
  --feuille-programme "Programme" \
  --cellule-fiche S34 \
  --colonne-id B \
  --colonne-valeur H \
  --sortie rapport.xlsx
```

## Notes

- Les valeurs sont comparées après normalisation (espaces superflus retirés,
  nombres entiers stockés en flottant traités comme des entiers) afin
  d'éviter les faux positifs dus au formatage.
- Le script lit les valeurs **calculées** des cellules (pas les formules).
