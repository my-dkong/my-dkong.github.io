// @bugfix arrêt de la boucle infinie while //
var motsFetches, words=[], mots;
var words=[
  {
    "name": "savoureux",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "décider",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "file",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "bas",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "violence",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "demain",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "poutre",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "matériel",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "beurre",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "supposer",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "après",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "répartir",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "héros",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "redouter",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "femelle",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "porteur",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "attachement",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "vérité",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "son",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "accord",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "anneau",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "puissance",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "que",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "masse",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "habitant",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "cheveu",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "poulailler",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "changement",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "longer",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "dangereux",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "remercier",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "promenade",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "supprimer",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "énergie",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "échec",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "œillet",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "imagination",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "village",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "lécher",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "successivement",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "laine",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "graine",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "plume",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "vaillant",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "cadre",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "baignoire",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "fêter",
    "categorie": "LES ARTS"
  },
  {
    "name": "limite",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "symbole",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "plafond",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "convenir",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "reflet",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "ver",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "rameau",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "honnête",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "construire",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "décembre",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "étude",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "horrible",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "proverbe",
    "categorie": "LES ARTS"
  },
  {
    "name": "doigt",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "reine",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "interdire",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "protecteur",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "devoir",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "aviation",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "base",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "nord",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "éclat",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "tulipe",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "brouillon",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "entrepreneur",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "digne",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "septembre",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "avoir",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "appel",
    "categorie": "LES ARTS"
  },
  {
    "name": "différer",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "majestueux",
    "categorie": "LES ARTS"
  },
  {
    "name": "imprimé",
    "categorie": "LES ARTS"
  },
  {
    "name": "réciter",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "reculer",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "buffet",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "excellence",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "marquis",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "air",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "insecte",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "centime",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "respiration",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "rêveur",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "grand",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "repartir",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "rappeler",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "inonder",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "obtenir",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "poule",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "commencement",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "domicile",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "longueur",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "trancher",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "chair",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "pression",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "équilibre",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "soutenir",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "côté",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "féroce",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "côte",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "vulgaire",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "déposer",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "histoire",
    "categorie": "LES ARTS"
  },
  {
    "name": "donner",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "couver",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "tapis",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "déclarer",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "princesse",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "écluse",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "modeste",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "départ",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "angoisse",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "sincérité",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "résigner",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "rester",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "anxieux",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "perte",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "fleurir",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "trouer",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "récompense",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "nuit",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "cœur",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "utilité",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "pardessus",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "direction",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "carrousel",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "livre",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "patron",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "flamand",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "ramper",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "organiser",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "dur",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "durant",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "étoilé",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "accepter",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "néanmoins",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "acheter",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "morne",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "actif",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "livret",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "mauve",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "bonhomme",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "orgue",
    "categorie": "LES ARTS"
  },
  {
    "name": "essuyer",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "arrivée",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "sol",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "enseigner",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "semblable",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "gendarme",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "enterrement",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "clavier",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "mèche",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "tacher",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "mécanicien",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "rocher",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "vallée",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "barbe",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "suite",
    "categorie": "LES ARTS"
  },
  {
    "name": "casser",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "marcassin",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "décorer",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "orphelin",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "matinal",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "serpent",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "aucun",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "geste",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "transparent",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "responsable",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "allié",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "soigneux",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "réparation",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "chausser",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "dicter",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "futur",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "troupeau",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "hésitant",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "tendre",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "perroquet",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "baraque",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "accompagner",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "pousser",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "assembler",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "embarquer",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "pain",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "calme",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "visage",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "haleine",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "impressionner",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "sinistre",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "paiement",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "descendre",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "rire",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "transmettre",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "suffisant",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "incertain",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "confrère",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "aveugle",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "étang",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "couronner",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "creuser",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "poursuite",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "informer",
    "categorie": "LES ARTS"
  },
  {
    "name": "matière",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "témoigner",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "canard",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "brûlant",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "poirier",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "bousculer",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "roue",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "illustrer",
    "categorie": "LES ARTS"
  },
  {
    "name": "tourner",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "affectueusement",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "fardeau",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "rapporter",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "dévouement",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "vouloir",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "ventre",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "lien",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "précis",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "arroser",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "hiver",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "sourd",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "remuer",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "noir",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "seulement",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "adoucir",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "exposer",
    "categorie": "LES ARTS"
  },
  {
    "name": "jurer",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "arme",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "mercredi",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "paisible",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "atteler",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "purifier",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "disposer",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "renseigner",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "étirer",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "étudiant",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "merci",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "brusquement",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "commandement",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "terreur",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "kermesse",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "élargir",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "promesse",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "mélodieux",
    "categorie": "LES ARTS"
  },
  {
    "name": "entièrement",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "juillet",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "essence",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "bourdonner",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "indépendance",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "gourmand",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "duc",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "resplendir",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "dedans",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "chêne",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "soigneusement",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "midi",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "colis",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "observer",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "chapeau",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "lutter",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "pâturage",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "froid",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "veiller",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "préparation",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "aurore",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "assiette",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "assurance",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "œuf",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "pardonner",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "promptement",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "résolution",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "bétail",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "trace",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "bœuf",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "heureux",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "lors",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "escadron",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "zone",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "comparer",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "quand",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "tôt",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "battre",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "tiroir",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "santé",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "propriété",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "user",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "vêtir",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "liberté",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "effrayer",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "érable",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "laboureur",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "estomac",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "artificiel",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "coupable",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "craquer",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "libraire",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "tente",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "exprès",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "impossibilité",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "victoire",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "mieux",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "semer",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "réellement",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "ailleurs",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "naufrage",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "étonnement",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "noyer",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "tombe",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "centaine",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "football",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "chute",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "torture",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "pli",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "rarement",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "débarrasser",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "contenu",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "tarder",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "marin",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "émission",
    "categorie": "LES ARTS"
  },
  {
    "name": "neige",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "rôle",
    "categorie": "LES ARTS"
  },
  {
    "name": "renvoyer",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "sale",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "pire",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "faiblement",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "rond",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "langage",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "musée",
    "categorie": "LES ARTS"
  },
  {
    "name": "lourd",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "parquet",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "vanter",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "appareil",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "risque",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "fuite",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "idéal",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "malle",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "éveiller",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "rapidement",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "ruelle",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "remplacer",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "mystère",
    "categorie": "LES ARTS"
  },
  {
    "name": "songer",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "calmement",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "profondément",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "façon",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "remettre",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "annoncer",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "dictée",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "allée",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "usage",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "pointe",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "tasse",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "multicolore",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "sûr",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "orage",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "sot",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "distinction",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "doute",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "herbe",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "cité",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "mobile",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "maire",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "grondement",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "secouer",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "bénéfice",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "filer",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "dehors",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "balancer",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "couturière",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "légume",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "vivant",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "retourner",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "relire",
    "categorie": "LES ARTS"
  },
  {
    "name": "effectuer",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "araignée",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "million",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "huit",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "généreux",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "coupe",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "enfermer",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "imprimer",
    "categorie": "LES ARTS"
  },
  {
    "name": "céleste",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "replier",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "établissement",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "pinceau",
    "categorie": "LES ARTS"
  },
  {
    "name": "enfin",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "pharmacien",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "patriote",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "croiser",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "colonial",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "cachette",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "erreur",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "prévenir",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "comparaison",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "bête",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "gardien",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "assister",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "insuffisant",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "four",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "écorce",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "entretenir",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "seau",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "coude",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "agir",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "brave",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "attention",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "perpétuel",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "animation",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "cortège",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "offre",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "cent",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "nier",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "mathématique",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "station",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "louer",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "fois",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "multiplicande",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "extraire",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "distraire",
    "categorie": "LES ARTS"
  },
  {
    "name": "contenter",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "refroidir",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "convenable",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "occuper",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "attente",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "art",
    "categorie": "LES ARTS"
  },
  {
    "name": "contrarier",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "éclatant",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "surveillant",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "solution",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "aligner",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "geler",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "vapeur",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "détail",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "maladroitement",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "favori",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "écharpe",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "lamentable",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "spectacle",
    "categorie": "LES ARTS"
  },
  {
    "name": "barque",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "nouer",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "glace",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "introduire",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "engagement",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "fonction",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "magasin",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "large",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "minuscule",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "promeneur",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "admirable",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "probablement",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "couloir",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "signifier",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "français",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "joue",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "collier",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "clairement",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "combien",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "effacer",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "révision",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "mobilier",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "nombreux",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "bourrasque",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "haut",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "absence",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "foulard",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "douloureux",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "éclair",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "ruban",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "ravi",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "bienfaisant",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "berceau",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "deuxième",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "fixe",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "concours",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "sublime",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "sept",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "inviter",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "peuplier",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "horreur",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "prisonnier",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "tourbillon",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "esprit",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "continuer",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "foudre",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "superficiel",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "géographie",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "répéter",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "chétif",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "grogner",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "manier",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "gloire",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "avril",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "certes",
    "categorie": "LES ARTS"
  },
  {
    "name": "frais",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "hier",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "mémoire",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "automne",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "savoir",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "regrettable",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "pinson",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "monde",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "loyal",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "poulain",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "colorer",
    "categorie": "LES ARTS"
  },
  {
    "name": "pur",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "quartier",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "pois",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "galoper",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "foie",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "honte",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "refermer",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "tailler",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "superbe",
    "categorie": "LES ARTS"
  },
  {
    "name": "cesse",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "fouet",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "définitif",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "nourriture",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "bossu",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "mesure",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "pratiquer",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "démarche",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "repas",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "minuit",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "cuisinière",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "groupe",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "graisse",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "évanouir",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "soif",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "heureusement",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "tricoter",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "protester",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "grève",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "aventure",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "violet",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "désirer",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "prolonger",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "front",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "regarder",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "acquitter",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "chiffre",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "durcir",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "quatrième",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "plupart",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "redire",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "banquier",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "blanc",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "client",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "encadrer",
    "categorie": "LES ARTS"
  },
  {
    "name": "transformer",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "coller",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "déception",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "renfermer",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "bagages",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "chasser",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "chevet",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "boucher",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "alors",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "voler",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "possession",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "ennuyeux",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "orteil",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "largement",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "intention",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "appuyer",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "enchanter",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "corps",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "épouvanter",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "enquête",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "pêcheur",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "promener",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "bicyclette",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "deux",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "album",
    "categorie": "LES ARTS"
  },
  {
    "name": "interroger",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "chevelure",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "chance",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "huile",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "pencher",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "cuisine",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "apprécier",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "rieur",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "domaine",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "étudier",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "cause",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "divers",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "chasse",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "cuire",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "lunettes",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "peut-être",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "ficelle",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "cultivateur",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "dispute",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "cependant",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "bouquet",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "crâne",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "débattre",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "raison",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "poudre",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "ouvrage",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "lire",
    "categorie": "LES ARTS"
  },
  {
    "name": "chiffon",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "tram",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "immédiat",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "schiste",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "perpendiculaire",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "homme",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "gentiment",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "flotter",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "disparaître",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "attentivement",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "chercher",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "régner",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "sec",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "copain",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "rompre",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "abriter",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "renseignement",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "lieutenant",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "poche",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "meuble",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "tonnerre",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "création",
    "categorie": "LES ARTS"
  },
  {
    "name": "suivre",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "mensonge",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "tenter",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "durée",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "idée",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "procurer",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "bateau",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "imitation",
    "categorie": "LES ARTS"
  },
  {
    "name": "distance",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "plonger",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "sanglot",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "horizontal",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "plumage",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "fumée",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "consacrer",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "quarante",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "joie",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "roche",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "approuver",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "gland",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "monseigneur",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "dommage",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "île",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "suffrage",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "pile",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "canne",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "poêle",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "diviseur",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "chanson",
    "categorie": "LES ARTS"
  },
  {
    "name": "congrès",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "ingratitude",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "poilu",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "environ",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "contentement",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "écrit",
    "categorie": "LES ARTS"
  },
  {
    "name": "proprement",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "secourir",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "défendre",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "politique",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "trait",
    "categorie": "LES ARTS"
  },
  {
    "name": "nation",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "populaire",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "noircir",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "hêtre",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "compliquer",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "difficulté",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "policier",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "clouer",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "offensive",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "chocolat",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "représentation",
    "categorie": "LES ARTS"
  },
  {
    "name": "blessure",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "palais",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "nuage",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "calcaire",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "effort",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "fâcheux",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "délicat",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "boisson",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "inquiétude",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "fortement",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "officier",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "compassion",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "communiquer",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "kilomètre",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "incendie",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "boulevard",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "royaume",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "imprévu",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "réduire",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "dater",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "vin",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "pâté",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "produit",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "durement",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "billet",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "sécant",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "paraître",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "lèvre",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "festin",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "entasser",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "offenser",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "domestique",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "punir",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "échapper",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "sève",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "lundi",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "presser",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "rude",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "grammaire",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "bizarre",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "acheteur",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "modestie",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "grandeur",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "arbre",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "tard",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "manœuvrer",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "abri",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "penser",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "conseil",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "crainte",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "soustraction",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "réussir",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "museau",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "illustré",
    "categorie": "LES ARTS"
  },
  {
    "name": "musique",
    "categorie": "LES ARTS"
  },
  {
    "name": "deuil",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "teinte",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "cheval",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "rôder",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "désoler",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "merle",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "destination",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "former",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "saigner",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "reste",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "expérience",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "ensoleillé",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "retenue",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "bouche",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "tortue",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "américain",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "décourager",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "conscience",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "écaille",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "mérite",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "agitation",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "rare",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "demi-heure",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "tir",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "architecte",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "lit",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "suffisamment",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "trop",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "défaire",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "fatiguer",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "tellement",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "charitable",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "poursuivre",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "vivement",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "mai",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "primevère",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "quantité",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "effroyable",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "gazon",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "vertu",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "quitter",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "constater",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "rendre",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "privation",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "déborder",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "pensionnaire",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "faim",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "novembre",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "recouvrir",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "riant",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "mer",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "brise",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "mensuel",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "force",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "lecteur",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "lors",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "refuser",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "percer",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "poète",
    "categorie": "LES ARTS"
  },
  {
    "name": "héroïque",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "seul",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "défaut",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "éclater",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "admiration",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "commune",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "vaste",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "tendrement",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "lisse",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "enchanté",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "venir",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "obéir",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "dépasser",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "différence",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "chameau",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "atelier",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "extrémité",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "présent",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "pensée",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "bourse",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "réel",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "gaiement",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "chien",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "faible",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "précisément",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "lierre",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "cou",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "ligne",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "calcul",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "mardi",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "papier",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "amusement",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "colline",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "miroir",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "multiplication",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "hôpital",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "échanger",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "espérance",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "saisissant",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "allemand",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "nid",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "directement",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "émotion",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "faiblir",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "dissiper",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "supporter",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "satisfaction",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "sentir",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "proche",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "fier",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "aigu",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "filet",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "locomotive",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "détacher",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "attendre",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "grelotter",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "jardinier",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "culotte",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "cinq",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "chaleur",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "peser",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "nouveau",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "émerveiller",
    "categorie": "LES ARTS"
  },
  {
    "name": "bruit",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "soustraction",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "arc",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "château",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "provisions",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "treize",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "plaintif",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "application",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "écureuil",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "chemin",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "vendredi",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "amuser",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "envier",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "examen",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "balance",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "vieux",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "charmant",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "vérifier",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "associer",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "eau",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "fourneau",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "matériaux",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "reproche",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "entendre",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "comptoir",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "effet",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "pigeon",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "bombardement",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "flatter",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "admirer",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "piquer",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "mécontent",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "opinion",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "piste",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "hâte",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "gai",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "soigner",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "recourir",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "immédiatement",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "végétation",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "national",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "plomb",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "bougie",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "de",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "rassurer",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "honorable",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "azur",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "néanmoins",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "ici",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "condamné",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "position",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "décharger",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "belge",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "photographe",
    "categorie": "LES ARTS"
  },
  {
    "name": "pincer",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "cabaret",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "accident",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "manquer",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "dévorer",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "quai",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "phrase",
    "categorie": "LES ARTS"
  },
  {
    "name": "style",
    "categorie": "LES ARTS"
  },
  {
    "name": "ennui",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "pavé",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "agriculture",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "confus",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "coûteux",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "brute",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "phoque",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "sanglier",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "lanterne",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "inspirer",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "gland",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "morceau",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "canot",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "opposer",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "aide",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "encre",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "glisser",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "laver",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "scier",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "choisir",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "familier",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "éléphant",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "régler",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "haillons",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "habituer",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "haine",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "satisfaisant",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "bise",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "éclairage",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "étoffe",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "creux",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "bague",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "mâchoire",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "détourner",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "uniquement",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "nature",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "jaloux",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "sapin",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "bien-être",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "affamé",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "vestibule",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "vitesse",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "emmener",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "image",
    "categorie": "LES ARTS"
  },
  {
    "name": "boule",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "poteau",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "livrer",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "crème",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "récolter",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "troisième",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "boutique",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "capuchon",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "cruel",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "avenue",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "soupçonner",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "signal",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "ancien",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "ronger",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "buis",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "surveiller",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "supplier",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "contact",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "dessiner",
    "categorie": "LES ARTS"
  },
  {
    "name": "taxi",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "compter",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "pic",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "appartenir",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "pêcher",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "récolte",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "modèle",
    "categorie": "LES ARTS"
  },
  {
    "name": "éducation",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "refléter",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "ample",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "dimanche",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "empoisonner",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "unique",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "règlement",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "multiple",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "mouchoir",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "affection",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "doucement",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "bavard",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "redoubler",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "température",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "renard",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "briquet",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "roi",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "pied",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "signature",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "anxiété",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "acquérir",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "conserver",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "ravages",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "précéder",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "moins",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "bouteille",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "chanteur",
    "categorie": "LES ARTS"
  },
  {
    "name": "timide",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "utilisation",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "désordre",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "épanouir",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "appui",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "pompe",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "craquement",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "estimer",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "contrée",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "pente",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "premier",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "marchand",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "manteau",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "charme",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "traverser",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "emplacement",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "jambe",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "attirer",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "bébé",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "juin",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "match",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "oblique",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "armer",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "ressort",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "précaution",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "régulier",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "reposer",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "sourire",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "gratitude",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "sauter",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "salon",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "tant",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "vilain",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "juger",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "voir",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "exquis",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "furieux",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "brin",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "lentement",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "implorer",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "franc",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "paysan",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "colombe",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "désert",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "accrocher",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "date",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "jusque",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "réclamer",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "chaud",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "aiguille",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "élégant",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "dessin",
    "categorie": "LES ARTS"
  },
  {
    "name": "apparence",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "final",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "bondir",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "douter",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "bataillon",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "imprudent",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "négligence",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "ampoule",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "octobre",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "cire",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "fable",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "multitude",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "arranger",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "reconnaître",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "scène",
    "categorie": "LES ARTS"
  },
  {
    "name": "conservation",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "trois",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "participer",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "grêle",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "vraiment",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "grenier",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "connaître",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "remarquable",
    "categorie": "LES ARTS"
  },
  {
    "name": "enfuir",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "finalement",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "minute",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "assemblée",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "ranger",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "travail",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "calendrier",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "guerre",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "article",
    "categorie": "LES ARTS"
  },
  {
    "name": "être",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "distrait",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "utile",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "condamner",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "intéressant",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "aimer",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "doux",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "bord",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "affectionner",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "chauffer",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "neuf",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "traiter",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "exiger",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "jaune",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "brouillard",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "vitre",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "cloison",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "houille",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "raisonnable",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "cigarette",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "court",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "voiture",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "éloigner",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "comparable",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "salaire",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "réservoir",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "univers",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "passion",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "devant",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "salir",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "carnet",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "réserver",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "habiter",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "commercial",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "terrible",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "trajet",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "voter",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "période",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "goûter",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "également",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "nerveux",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "mare",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "fragile",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "folie",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "tristesse",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "onde",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "automatique",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "pan",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "cuisse",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "charrue",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "politesse",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "école",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "témoin",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "instituteur",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "courant",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "curiosité",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "imposer",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "étonnant",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "piscine",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "pénible",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "défense",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "voile",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "mûrir",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "dépêcher",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "résistance",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "étonner",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "présence",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "fendre",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "poste",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "dividende",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "renoncule",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "vaincre",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "sifflet",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "écran",
    "categorie": "LES ARTS"
  },
  {
    "name": "boucler",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "métallique",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "cesser",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "casque",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "sonnerie",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "baisser",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "exact",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "bois",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "particulièrement",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "immobile",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "total",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "aider",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "mélange",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "colle",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "occasion",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "avant-hier",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "garder",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "consolation",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "poli",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "fourrer",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "forêt",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "passer",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "entrevoir",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "écrier",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "bassin",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "mètre",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "courage",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "tordre",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "représentant",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "espoir",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "gravir",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "expliquer",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "composition",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "transporter",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "soumettre",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "caisse",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "bloc",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "tempête",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "soixante",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "convaincre",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "berger",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "vaisselle",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "terre",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "fusiller",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "écouler",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "interruption",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "gras",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "complètement",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "orange",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "instruire",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "briller",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "écriture",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "valise",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "conduite",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "ressentiment",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "masquer",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "souffrance",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "pénétrer",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "provoquer",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "fatigant",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "ravissant",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "journalier",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "inventeur",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "mallette",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "fourrure",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "vice",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "blé",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "tressaillir",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "éblouissant",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "cochon",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "coussin",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "tourmenter",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "conte",
    "categorie": "LES ARTS"
  },
  {
    "name": "comble",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "capitaine",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "atteindre",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "librement",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "détour",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "abaisser",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "caserne",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "arbitre",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "écrire",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "réputation",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "reconnaissant",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "principalement",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "dire",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "débris",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "oreiller",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "maladroit",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "préparer",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "apercevoir",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "quelques",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "solitaire",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "composer",
    "categorie": "LES ARTS"
  },
  {
    "name": "chef",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "ornement",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "rue",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "boucherie",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "trésor",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "corde",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "méchanceté",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "moisson",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "gémissement",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "meule",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "vacances",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "recoucher",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "auteur",
    "categorie": "LES ARTS"
  },
  {
    "name": "falloir",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "produit",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "régime",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "cinquante",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "combattre",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "drôle",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "an",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "demi",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "bière",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "gazette",
    "categorie": "LES ARTS"
  },
  {
    "name": "trouver",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "vent",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "défilé",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "inégal",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "banque",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "tige",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "renoncer",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "bras",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "bibliothèque",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "passe",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "chambre",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "nain",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "liquide",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "deviner",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "gentil",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "constituer",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "priver",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "marteau",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "quotidien",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "facile",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "armoire",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "approcher",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "FALSE",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "ménagère",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "sécher",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "mignon",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "objet",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "clou",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "paroi",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "reverdir",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "asseoir",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "changer",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "mille",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "éclaircir",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "voleur",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "panier",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "malin",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "serrer",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "gâter",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "passif",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "mordre",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "ajouter",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "égal",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "parfait",
    "categorie": "LES ARTS"
  },
  {
    "name": "flamber",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "couvrir",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "incapable",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "marron",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "inconvénient",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "gazouiller",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "portefeuille",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "choc",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "grâce",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "laideur",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "communal",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "isoler",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "reconduire",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "figurer",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "mot",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "applaudir",
    "categorie": "LES ARTS"
  },
  {
    "name": "savourer",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "souris",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "tuyau",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "différent",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "hui",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "fenêtre",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "honneur",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "armée",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "amer",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "voyage",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "tuile",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "barrage",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "taille",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "muraille",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "spectateur",
    "categorie": "LES ARTS"
  },
  {
    "name": "brochure",
    "categorie": "LES ARTS"
  },
  {
    "name": "villageois",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "orgueil",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "obligation",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "faire",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "corsage",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "lier",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "singe",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "librement",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "farouche",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "institutrice",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "partage",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "cimetière",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "créature",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "ours",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "murmurer",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "diamant",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "expédition",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "hésitation",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "nager",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "scolaire",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "brusque",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "moderne",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "gauche",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "soulier",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "joncher",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "revenir",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "agiter",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "perle",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "friandise",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "souple",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "trône",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "brebis",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "totalement",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "coûter",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "magnifique",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "planter",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "sitôt",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "victime",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "énergique",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "sang",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "radieux",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "exprimer",
    "categorie": "LES ARTS"
  },
  {
    "name": "fruitier",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "difficilement",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "tremblement",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "rejeter",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "bleu",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "classe",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "ambulance",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "copier",
    "categorie": "LES ARTS"
  },
  {
    "name": "déshabiller",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "centre",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "orchestre",
    "categorie": "LES ARTS"
  },
  {
    "name": "limpide",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "malheureux",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "oubli",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "obus",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "poire",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "bien",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "coiffer",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "sembler",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "baigner",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "majestueux",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "chaux",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "canon",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "revolver",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "mériter",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "rossignol",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "ressembler",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "pêche",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "caresse",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "devenir",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "cahier",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "séance",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "murmure",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "rêver",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "désastre",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "générosité",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "chasseur",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "salle",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "étouffer",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "que",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "hangar",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "dossier",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "général",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "peiner",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "obscurité",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "splendide",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "lisière",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "raconter",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "accabler",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "électrique",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "automobile",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "abîmer",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "laborieux",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "reconnaissable",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "fureur",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "avocat",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "mépriser",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "amusant",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "illuminer",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "caoutchouc",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "photo",
    "categorie": "LES ARTS"
  },
  {
    "name": "loup",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "journaliste",
    "categorie": "LES ARTS"
  },
  {
    "name": "parure",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "ébranler",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "accent",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "inscrire",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "lorsque",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "œil",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "poser",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "habile",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "triomphant",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "siffler",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "poison",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "ivoire",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "obstacle",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "lieu",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "épine",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "travailleur",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "souvent",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "volonté",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "caresser",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "acheminer",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "suc",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "recette",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "éclairer",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "honnêteté",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "mouton",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "souvenir",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "équipe",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "prompt",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "entretien",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "couteau",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "grotte",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "coucher",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "ranimer",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "paire",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "reconnaissance",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "coquelicot",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "fondre",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "chapitre",
    "categorie": "LES ARTS"
  },
  {
    "name": "disperser",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "exhaler",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "âgé",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "foire",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "penchant",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "mortel",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "numéro",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "richesse",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "motif",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "propre",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "paresseux",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "régulièrement",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "franchise",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "sincère",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "poignard",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "collège",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "tâcher",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "fatigue",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "courrier",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "humain",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "désespoir",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "balcon",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "absolument",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "chevalier",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "raser",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "antérieur",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "porc",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "remarquer",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "seuil",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "revêtir",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "réunion",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "Noël",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "périr",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "tenir",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "monter",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "capital",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "succéder",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "tapisserie",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "émeraude",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "faveur",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "abondant",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "campagne",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "briser",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "sage",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "brigand",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "endormir",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "verger",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "revivre",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "jamais",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "gratuit",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "plage",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "liste",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "rétablir",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "table",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "découper",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "tromper",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "joueur",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "tronc",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "fumer",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "autre",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "question",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "précieux",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "après-midi",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "éteindre",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "fabriquer",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "tas",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "poussin",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "situer",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "moteur",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "préférence",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "rosier",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "consoler",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "douleur",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "autorité",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "gaieté",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "continuel",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "hâter",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "bourgeon",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "encourager",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "instituteur",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "guetter",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "exécution",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "astre",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "paysage",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "sacrifice",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "pitié",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "merveille",
    "categorie": "LES ARTS"
  },
  {
    "name": "étendue",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "sain",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "hérissé",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "rideau",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "guider",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "peur",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "désormais",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "quelquefois",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "traitement",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "prendre",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "robustesse",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "dégager",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "compléter",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "fer",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "solliciter",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "fiévreux",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "veille",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "population",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "poumon",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "preuve",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "sagesse",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "tableau",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "loin",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "rosée",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "poignet",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "joint",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "laie",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "marguerite",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "ivre",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "industrie",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "commander",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "militaire",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "souci",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "couler",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "lieue",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "grandiose",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "commande",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "coffre",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "porc",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "bravo",
    "categorie": "LES ARTS"
  },
  {
    "name": "partout",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "prince",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "parvenir",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "étourdi",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "fléau",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "de",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "segment",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "pavillon",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "cents",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "répondre",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "rivière",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "médecin",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "corne",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "moustique",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "maintenir",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "plaire",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "ruine",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "émouvoir",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "enveloppe",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "bourgmestre",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "élever",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "moquer",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "boire",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "veine",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "contenir",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "arrondissement",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "pierre",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "franchement",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "conduite",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "renverser",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "organe",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "difficile",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "portière",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "favorable",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "achat",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "placer",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "manœuvre",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "souverain",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "réveiller",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "climat",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "craintif",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "moineau",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "impossible",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "étalage",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "tabac",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "allure",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "agneau",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "préparatifs",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "sécurité",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "panda",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "fièvre",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "arrêt",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "cas",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "poil",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "rapprocher",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "chéri",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "averse",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "aire",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "branche",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "attrait",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "refus",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "agréablement",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "guêpe",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "janvier",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "retard",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "fraction",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "jupon",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "revanche",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "cuillère",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "division",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "calice",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "procéder",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "voie",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "oiseau",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "monter",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "lapin",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "peintre",
    "categorie": "LES ARTS"
  },
  {
    "name": "pouvoir",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "immeuble",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "emploi",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "aussitôt",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "train",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "alouette",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "quotient",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "mûr",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "entier",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "refaire",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "troupe",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "labourer",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "statue",
    "categorie": "LES ARTS"
  },
  {
    "name": "terrestre",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "indépendant",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "insigne",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "quinze",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "entrain",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "plaie",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "agrément",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "fier",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "lune",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "robe",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "pistolet",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "pratique",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "carreau",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "part",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "quart",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "entreprendre",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "péniblement",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "jaillir",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "estrade",
    "categorie": "LES ARTS"
  },
  {
    "name": "aboutir",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "avantage",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "décision",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "ménage",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "profiter",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "désagréable",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "pleurer",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "favoriser",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "sangloter",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "intervenir",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "attraper",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "enrichir",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "lièvre",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "classique",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "vase",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "division",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "frémir",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "suspendre",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "couper",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "muscle",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "luisant",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "acier",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "aliment",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "coquet",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "manque",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "sirène",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "léger",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "liqueur",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "tousser",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "signification",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "satin",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "bouleverser",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "raccommoder",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "laisser",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "lettre",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "ardent",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "rampe",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "été",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "de",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "puissant",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "sabre",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "gonfler",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "ouverture",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "conviction",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "ôter",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "vache",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "tissu",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "métal",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "écarter",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "impatient",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "fort",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "subir",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "buisson",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "épi",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "aisance",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "inerte",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "massif",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "rusé",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "textile",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "compte",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "certainement",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "soulagement",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "alphabet",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "cerisier",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "remonter",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "solide",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "réchauffer",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "analyser",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "balai",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "précision",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "légèrement",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "étroit",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "apprêter",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "affiche",
    "categorie": "LES ARTS"
  },
  {
    "name": "abandon",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "glissoire",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "outil",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "fleur",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "ouvrir",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "coquille",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "perdrix",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "bâtiment",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "combinaison",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "forme",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "décoration",
    "categorie": "LES ARTS"
  },
  {
    "name": "onze",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "obligation",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "terminer",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "perdre",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "soupe",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "carrefour",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "assez",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "ressentir",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "sûrement",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "dizaine",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "colonel",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "mois",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "charrette",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "panache",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "parmi",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "sonore",
    "categorie": "LES ARTS"
  },
  {
    "name": "jour",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "ténèbres",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "halte",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "verdure",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "parole",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "unité",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "rapide",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "bon",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "tomber",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "nettement",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "cuivre",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "système",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "traversée",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "résolution",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "couvert",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "matelas",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "cordial",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "gris",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "jardin",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "café",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "fruit",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "embaumer",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "fâcher",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "lever",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "élan",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "ignorance",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "aplatir",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "rein",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "montagne",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "centimètre",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "pétrole",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "recevoir",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "obéissance",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "dépenser",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "imposant",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "préau",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "sensationnel",
    "categorie": "LES ARTS"
  },
  {
    "name": "prévoir",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "mort",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "sévèrement",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "valet",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "pomme",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "réjouir",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "exception",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "abandonner",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "indiquer",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "dos",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "barrer",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "propice",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "humeur",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "bracelet",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "confiture",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "échelle",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "négociant",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "gratter",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "lumineux",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "citer",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "pièce",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "casquette",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "craindre",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "maigre",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "chat",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "panorama",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "hanche",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "dépôt",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "espace",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "cheville",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "garnir",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "demeure",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "genou",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "projeter",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "ignorer",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "clarté",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "mont",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "propreté",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "leçon",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "robuste",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "obligatoire",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "épreuve",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "verre",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "ravin",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "paix",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "sourcil",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "enthousiasme",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "dresser",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "rhume",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "sommet",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "muguet",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "parfumer",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "conter",
    "categorie": "LES ARTS"
  },
  {
    "name": "crépuscule",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "grossier",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "cérémonie",
    "categorie": "LES ARTS"
  },
  {
    "name": "longuement",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "noyau",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "toujours",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "réflexion",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "ennemi",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "ferrer",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "défenseur",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "serein",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "surprendre",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "inondation",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "brique",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "prise",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "courir",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "adroit",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "âne",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "agréer",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "malheur",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "travers",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "trou",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "portrait",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "tournant",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "jouet",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "garde",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "écurie",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "lent",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "soie",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "valoir",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "monstre",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "chaumière",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "portée",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "matinée",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "prison",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "blessé",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "ci-joint",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "membre",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "plateau",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "étendre",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "successivement",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "papillon",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "régiment",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "gare",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "plus",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "hurler",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "colonie",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "bonheur",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "abords",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "revoir",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "davantage",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "regretter",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "concert",
    "categorie": "LES ARTS"
  },
  {
    "name": "étage",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "plaindre",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "violon",
    "categorie": "LES ARTS"
  },
  {
    "name": "cracher",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "rallumer",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "empressement",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "réserve",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "interrompre",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "voici",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "violent",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "moitié",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "trompette",
    "categorie": "LES ARTS"
  },
  {
    "name": "dépense",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "rattacher",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "guérison",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "autrement",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "acte",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "bonté",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "possibilité",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "boueux",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "pont",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "endroit",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "soulever",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "raide",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "amener",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "repasser",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "hasard",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "préserver",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "revue",
    "categorie": "LES ARTS"
  },
  {
    "name": "tracer",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "tristement",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "bûche",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "entraînement",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "flûte",
    "categorie": "LES ARTS"
  },
  {
    "name": "mouiller",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "savant",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "découvrir",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "égayer",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "prouver",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "mineur",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "bâiller",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "insupportable",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "forestier",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "hérisson",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "sifflement",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "supérieur",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "parfum",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "vert",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "environner",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "vieillard",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "moqueur",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "médecine",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "envoler",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "épouvantable",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "odeur",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "ordonner",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "contribuer",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "repousser",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "route",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "grandiose",
    "categorie": "LES ARTS"
  },
  {
    "name": "problème",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "ingrat",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "tranquillement",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "texte",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "débiter",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "boue",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "cuir",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "masque",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "conseiller",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "atmosphère",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "céder",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "dentelle",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "risquer",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "dormeur",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "conduire",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "expirer",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "aborder",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "œuvre",
    "categorie": "LES ARTS"
  },
  {
    "name": "crise",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "ralentir",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "rustique",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "pâquerette",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "gigantesque",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "idiot",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "jaunir",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "gagner",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "projet",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "girafe",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "nettoyer",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "prononcer",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "pantoufle",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "jeudi",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "limiter",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "cour",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "chariot",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "officiel",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "gibier",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "distribuer",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "triple",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "rechercher",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "redescendre",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "lance",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "délaisser",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "cime",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "pâtre",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "mécanique",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "bouger",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "démonter",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "thé",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "descente",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "respirer",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "refuge",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "balayer",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "retentir",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "recherche",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "loi",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "passager",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "exigeant",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "séjour",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "chemise",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "songe",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "plier",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "couleur",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "consolant",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "invisible",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "mélodie",
    "categorie": "LES ARTS"
  },
  {
    "name": "port",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "autour",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "marque",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "haie",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "solitude",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "urgent",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "chanter",
    "categorie": "LES ARTS"
  },
  {
    "name": "impression",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "récit",
    "categorie": "LES ARTS"
  },
  {
    "name": "police",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "douzaine",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "rayonner",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "accueillir",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "précipiter",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "dérober",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "barre",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "obscur",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "humide",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "affaire",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "tapisser",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "ferme",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "règle",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "muet",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "chaussée",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "marine",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "fidèle",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "attaque",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "douze",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "gouverner",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "conquérant",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "champion",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "tête",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "révéler",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "paletot",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "betterave",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "joyeusement",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "faiblesse",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "sucré",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "cabine",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "facilité",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "flamme",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "tombeau",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "touffe",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "élégamment",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "réfectoire",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "absent",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "utiliser",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "mou",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "moment",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "analyse",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "peindre",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "expression",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "déchirer",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "saleté",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "soudain",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "artiste",
    "categorie": "LES ARTS"
  },
  {
    "name": "attester",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "ombre",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "gant",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "prairie",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "ardeur",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "appétit",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "plan",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "éternel",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "bec",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "vitrine",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "TRUE",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "serviette",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "plaque",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "vente",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "distinguer",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "fin",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "réponse",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "faciliter",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "verser",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "détendre",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "répétition",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "joindre",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "faner",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "regret",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "rentrer",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "professeur",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "grille",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "sens",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "préférer",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "ronces",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "fabrique",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "naissance",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "supprimer",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "flaque",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "résoudre",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "os",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "immense",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "heure",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "fontaine",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "jonquille",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "ordinateur",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "amateur",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "conquérir",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "posséder",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "rentrée",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "rage",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "consulter",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "actuellement",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "anglais",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "oreille",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "costume",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "exposition",
    "categorie": "LES ARTS"
  },
  {
    "name": "parer",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "dévouer",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "gazouillement",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "luxe",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "inconnu",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "augmenter",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "cri",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "lutte",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "foncé",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "cristal",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "dessus",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "gracieux",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "ardoise",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "tentation",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "farce",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "embellir",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "fuir",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "juge",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "endosser",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "excellent",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "vigoureux",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "renaître",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "temps",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "fièrement",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "contraire",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "velours",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "volet",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "prodigieux",
    "categorie": "LES ARTS"
  },
  {
    "name": "découverte",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "millier",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "soleil",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "squelette",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "arrêter",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "glissant",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "intéresser",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "moustache",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "coucou",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "conséquence",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "désireux",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "glacer",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "lampe",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "ronfler",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "rouge",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "porte",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "protection",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "jet",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "montre",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "dépouiller",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "hôtel",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "secrétaire",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "considérable",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "extrême",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "sillon",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "fauteuil",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "âge",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "Pâques",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "soir",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "sonnette",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "constamment",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "pleurs",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "marchandise",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "grimace",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "délivrer",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "fromage",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "administration",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "chose",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "ruisseler",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "remise",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "obscurcir",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "discours",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "indication",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "maintenant",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "bienveillance",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "tournoyer",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "épicier",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "but",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "culbuter",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "bâtir",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "tranquille",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "parc",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "attrister",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "pipe",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "brume",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "lambeau",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "vainqueur",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "pourvoir",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "usine",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "épée",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "amour",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "franchir",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "destinée",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "entrer",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "allonger",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "auprès",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "pointu",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "trottoir",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "long",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "amitié",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "chant",
    "categorie": "LES ARTS"
  },
  {
    "name": "moyenne",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "naturellement",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "confier",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "maudire",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "hameau",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "épuiser",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "épaisseur",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "récréation",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "navire",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "talent",
    "categorie": "LES ARTS"
  },
  {
    "name": "désir",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "plancher",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "épais",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "crapaud",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "adieu",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "parler",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "noix",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "race",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "forge",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "dominer",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "camion",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "fouiller",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "intense",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "regard",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "reparaître",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "empereur",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "timidité",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "excuser",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "étable",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "sauvage",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "mal",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "habiller",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "durer",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "direct",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "envoi",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "mousse",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "pécher",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "métallurgie",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "second",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "cinéma",
    "categorie": "LES ARTS"
  },
  {
    "name": "collection",
    "categorie": "LES ARTS"
  },
  {
    "name": "finir",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "sueur",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "lointain",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "charger",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "vif",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "sortir",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "chatouiller",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "depuis",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "local",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "commencer",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "arrière",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "képi",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "début",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "violemment",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "plaine",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "terrasse",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "milieu",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "rat",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "lion",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "avancer",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "retenir",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "jeter",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "lancer",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "service",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "prudence",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "voiler",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "vigne",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "pittoresque",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "couture",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "lâcher",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "menacer",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "seconde",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "degré",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "dessous",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "carte",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "exercice",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "borne",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "calculer",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "développer",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "galerie",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "œil",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "main",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "douceur",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "gorge",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "embarrasser",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "maussade",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "poignée",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "remords",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "sortie",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "place",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "étincelant",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "aviateur",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "sentiment",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "résumé",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "tambour",
    "categorie": "LES ARTS"
  },
  {
    "name": "blancheur",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "frontière",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "salé",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "poussière",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "culture",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "travailler",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "degré",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "marcher",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "existence",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "botte",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "commerçant",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "ensemble",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "peau",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "pantalon",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "timbre",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "rougir",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "respectueux",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "tache",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "lilas",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "courageux",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "étaler",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "envoyer",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "bâton",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "fameux",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "surprise",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "hirondelle",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "fusée",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "prospérité",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "piège",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "partir",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "allumer",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "besogne",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "ministre",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "prêt",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "bataille",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "ceinture",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "écolier",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "bientôt",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "aigle",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "bal",
    "categorie": "LES ARTS"
  },
  {
    "name": "permettre",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "science",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "carton",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "femme",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "crêpe",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "menu",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "cuisinier",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "librairie",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "dalle",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "journée",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "facteur",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "commission",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "affaiblir",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "gelée",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "samedi",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "bain",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "central",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "détruire",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "coton",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "description",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "aspirer",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "forgeron",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "élastique",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "retrousser",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "brun",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "dague",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "pré",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "hélas",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "série",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "course",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "réaliser",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "inquiéter",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "violette",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "camarade",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "chauffeur",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "enseignement",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "sérieux",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "intellectuel",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "menton",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "intelligence",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "page",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "annuel",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "individu",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "occupant",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "abuser",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "avant",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "hameçon",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "marquer",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "clair",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "net",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "aussi",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "fouetter",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "tabouret",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "message",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "rouler",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "éviter",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "attarder",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "nez",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "inscription",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "neutre",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "docile",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "nœud",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "moindre",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "hausser",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "instant",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "sac",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "curieux",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "introduction",
    "categorie": "LES ARTS"
  },
  {
    "name": "aller",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "taquiner",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "nullement",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "défunt",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "coupure",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "soyeux",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "affliger",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "lenteur",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "communication",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "tenue",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "cabane",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "congé",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "alliance",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "silencieusement",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "abondance",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "replacer",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "musicien",
    "categorie": "LES ARTS"
  },
  {
    "name": "catastrophe",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "innocence",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "pelouse",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "cigare",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "cavalier",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "miel",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "indifférent",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "gerbe",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "essayer",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "apparition",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "sucre",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "marronnier",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "bond",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "firmament",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "signe",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "étouffant",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "hésiter",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "droite",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "garantie",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "activité",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "cours",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "ton",
    "categorie": "LES ARTS"
  },
  {
    "name": "exister",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "contempler",
    "categorie": "LES ARTS"
  },
  {
    "name": "lumière",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "périlleux",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "longtemps",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "note",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "loger",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "profond",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "neiger",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "pourrir",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "fabrication",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "persévérer",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "permission",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "chandelle",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "pirate",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "terrain",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "étincelle",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "partager",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "déjeuner",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "cacher",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "doré",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "sujet",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "clairière",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "poisson",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "paupière",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "échange",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "adresser",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "perspective",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "crime",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "poésie",
    "categorie": "LES ARTS"
  },
  {
    "name": "manuel",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "réussite",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "réclame",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "attribuer",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "arbuste",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "téléphoner",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "griffe",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "buveur",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "tuer",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "six",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "bandit",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "là-haut",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "quatre",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "calmer",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "poids",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "sentier",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "négliger",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "joli",
    "categorie": "LES ARTS"
  },
  {
    "name": "pommier",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "habituel",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "passé",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "pendre",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "fleuve",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "envelopper",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "brûlure",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "nombre",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "continuellement",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "télévision",
    "categorie": "LES ARTS"
  },
  {
    "name": "commandant",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "brutal",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "chauffage",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "mur",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "frissonner",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "tort",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "dernier",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "enlever",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "pourquoi",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "aboyer",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "romain",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "conclure",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "fond",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "proposer",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "président",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "brochet",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "exactement",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "punition",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "frayeur",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "redresser",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "vider",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "couche",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "provenir",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "coiffure",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "refrain",
    "categorie": "LES ARTS"
  },
  {
    "name": "toilette",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "peste",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "meilleur",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "connaissance",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "manger",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "téléphone",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "déjà",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "amplitude",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "inférieur",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "habitude",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "tablier",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "situation",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "cercle",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "amende",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "importer",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "vendeur",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "maigrir",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "terriblement",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "petit",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "délicieux",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "diminuer",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "réparer",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "remporter",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "somme",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "physionomie",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "hauteur",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "efforcer",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "obéissant",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "prodiguer",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "attaquer",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "mauvais",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "embarras",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "paquet",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "seize",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "lot",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "adversaire",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "corbeau",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "exécuter",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "sacrifier",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "danser",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "quatorze",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "secousse",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "repentir",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "suivant",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "habit",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "cendre",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "royal",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "organisation",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "tournée",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "prudent",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "incroyable",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "prétendre",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "interrogation",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "acteur",
    "categorie": "LES ARTS"
  },
  {
    "name": "salade",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "notaire",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "addition",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "déboucher",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "recommencer",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "or",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "sensible",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "souffrir",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "toutefois",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "justice",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "gronder",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "empresser",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "apporter",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "gravier",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "capable",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "lecture",
    "categorie": "LES ARTS"
  },
  {
    "name": "fournir",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "triompher",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "mouvoir",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "écrouler",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "grandir",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "crever",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "pot",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "accourir",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "droite",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "corridor",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "déplacer",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "addition",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "établir",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "jeune",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "derrière",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "regagner",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "gouvernement",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "chevreuil",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "logement",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "carré",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "étoile",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "hors",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "sou",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "saisir",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "autoriser",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "guérir",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "protéger",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "fortune",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "menteur",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "rassembler",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "annonce",
    "categorie": "LES ARTS"
  },
  {
    "name": "tigresse",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "viande",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "chérir",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "moulin",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "surgir",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "délicatesse",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "acclamation",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "fréquenter",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "avertir",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "autrefois",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "parfum",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "électricité",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "luire",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "vite",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "couchant",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "planche",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "vivre",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "veston",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "aile",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "mesurer",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "garage",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "injustice",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "dernièrement",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "voyager",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "camper",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "capitale",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "libre",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "empêcher",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "triste",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "primaire",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "grippe",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "diviser",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "trompeur",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "magique",
    "categorie": "LES ARTS"
  },
  {
    "name": "bureau",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "symbole",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "témoignage",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "rattraper",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "humble",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "ouvrier",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "cube",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "charbon",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "silencieux",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "décor",
    "categorie": "LES ARTS"
  },
  {
    "name": "cave",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "agent",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "foin",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "printanier",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "remplir",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "affreux",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "gros",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "patrie",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "pâlir",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "épaule",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "conférence",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "ruisseau",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "rose",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "langue",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "torrent",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "linge",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "grouper",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "varier",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "rédaction",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "rez-de-chaussée",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "télégramme",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "tonneau",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "succès",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "auberge",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "caprice",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "bande",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "infirme",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "retraite",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "observation",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "cueillir",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "mélancolie",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "physique",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "appartement",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "équipage",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "état",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "fusil",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "extraordinaire",
    "categorie": "LES ARTS"
  },
  {
    "name": "ivresse",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "année",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "lac",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "entourer",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "onduler",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "bruyant",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "discuter",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "malheureusement",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "peine",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "dent",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "matin",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "guide",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "fossé",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "invitation",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "renouveler",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "formidable",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "pardon",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "vague",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "nu",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "éblouir",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "grain",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "chaise",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "fête",
    "categorie": "LES ARTS"
  },
  {
    "name": "paille",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "essai",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "imaginer",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "champ",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "déployer",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "angle",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "lasser",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "précédent",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "ordinairement",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "dormir",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "avenir",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "résister",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "nuisible",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "mars",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "recommander",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "frisson",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "orgueilleux",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "soirée",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "aisément",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "viser",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "champignon",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "original",
    "categorie": "LES ARTS"
  },
  {
    "name": "autorisation",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "retarder",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "flatteur",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "poitrine",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "grange",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "banc",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "bonnet",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "sévère",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "matelot",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "normal",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "région",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "colère",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "avouer",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "trimestre",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "éprouver",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "jalousie",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "roseau",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "saison",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "hêtre",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "parfaitement",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "farine",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "voyageur",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "peu",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "véritable",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "désespérer",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "mât",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "jouer",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "cirque",
    "categorie": "LES ARTS"
  },
  {
    "name": "instrument",
    "categorie": "LES ARTS"
  },
  {
    "name": "redoutable",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "questionner",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "mélancolique",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "explication",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "tartine",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "fée",
    "categorie": "LES ARTS"
  },
  {
    "name": "ville",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "souffle",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "danse",
    "categorie": "LES ARTS"
  },
  {
    "name": "propos",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "siège",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "fréquent",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "vieillesse",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "vélo",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "orageux",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "point",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "veau",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "partie",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "jument",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "intérieur",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "tigre",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "explosion",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "marbre",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "truie",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "gravement",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "barrer",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "nerf",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "libérer",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "soulager",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "graver",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "trembler",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "imperméable",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "incliner",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "sabot",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "chaume",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "œuvre",
    "categorie": "LES ARTS"
  },
  {
    "name": "aspect",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "échantillon",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "simplement",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "sommeil",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "demeurer",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "tirer",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "déplaire",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "frite",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "imprudence",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "zèbre",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "volontiers",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "maint",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "métier",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "désobéissance",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "harmonieux",
    "categorie": "LES ARTS"
  },
  {
    "name": "négation",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "espèce",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "soldat",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "produire",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "fréquemment",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "tendresse",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "grappe",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "drapeau",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "droit",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "multiplier",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "injuste",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "remerciement",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "production",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "invention",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "hache",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "nourrir",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "suer",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "relativement",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "adresse",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "coq",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "border",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "dette",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "examiner",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "mince",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "mourant",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "vallon",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "source",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "employer",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "créer",
    "categorie": "LES ARTS"
  },
  {
    "name": "oser",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "rangée",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "mettre",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "précéder",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "messagère",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "bienfait",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "correspondance",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "excursion",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "tranche",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "chaussure",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "frapper",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "bijoutier",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "blesser",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "gaz",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "atterrir",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "coin",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "jouir",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "fixer",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "larme",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "proie",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "cerf",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "remarque",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "sérieusement",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "goût",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "règne",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "communiqué",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "bulletin",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "découragement",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "moyen",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "pressé",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "intérêt",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "dictionnaire",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "couronne",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "rafraîchir",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "mouche",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "rêve",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "sable",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "refus",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "facilement",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "nul",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "manche",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "tâche",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "drap",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "mansarde",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "trouble",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "propriétaire",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "agacer",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "boucle",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "dix",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "double",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "colonne",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "tantôt",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "fou",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "blond",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "arrondir",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "espérer",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "au-dessus",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "imprimerie",
    "categorie": "LES ARTS"
  },
  {
    "name": "faute",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "feuillage",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "abondamment",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "trotter",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "comment",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "redevenir",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "mener",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "mode",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "théâtre",
    "categorie": "LES ARTS"
  },
  {
    "name": "respecter",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "arête",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "mine",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "balle",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "choix",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "arriver",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "ignorant",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "illustre",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "commerce",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "entrée",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "reprise",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "eau",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "imiter",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "comprendre",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "horloge",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "grenouille",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "cheminée",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "engloutir",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "salut",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "apparaître",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "pension",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "rejoindre",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "combat",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "phare",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "bleuet",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "joyeux",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "déchaîner",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "persuader",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "disputer",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "chagrin",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "tiers",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "bavarder",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "féliciter",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "végétal",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "exclamation",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "sergent",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "parfois",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "patience",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "feu",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "lugubre",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "danger",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "canal",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "zèle",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "profit",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "franc",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "clochette",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "barbu",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "lait",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "enfouir",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "plante",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "constant",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "caverne",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "réfléchir",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "chaussette",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "monument",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "repos",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "vol",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "barrière",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "transport",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "moral",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "laid",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "disparition",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "respect",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "toile",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "surveillance",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "bout",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "répandre",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "hache",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "silence",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "fantastique",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "défiler",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "expédier",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "pendule",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "marche",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "voix",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "avion",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "poulet",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "boulanger",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "vieillir",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "fatal",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "piquet",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "indigne",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "garantir",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "apprendre",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "géranium",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "soupir",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "alentours",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "soins",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "débarquer",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "médaille",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "horizon",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "actuel",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "pareil",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "écraser",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "dîner",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "rigoureux",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "confondre",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "monotone",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "restaurant",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "visible",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "montée",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "géant",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "incident",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "flèche",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "hypocrite",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "installer",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "parallèle",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "ronde",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "vide",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "ferraille",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "entreprise",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "vendre",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "proposition",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "surface",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "volume",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "illusion",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "subitement",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "beaucoup",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "flanc",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "cheval",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "piano",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "signaler",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "caractère",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "encombrer",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "suave",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "redonner",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "élancer",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "écrivain",
    "categorie": "LES ARTS"
  },
  {
    "name": "monnaie",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "exciter",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "prochain",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "contact",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "poème",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "parapluie",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "avantageux",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "copie",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "rayon",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "tilleul",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "payer",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "distraction",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "barreau",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "entraîner",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "contrarier",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "danseur",
    "categorie": "LES ARTS"
  },
  {
    "name": "corolle",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "passage",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "commode",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "frisson",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "fagot",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "saut",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "printemps",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "demande",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "reprendre",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "occupation",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "germer",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "malade",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "oublier",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "inspecteur",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "tribunal",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "élève",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "cadavre",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "engager",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "baguette",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "seigneur",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "croûte",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "siècle",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "intelligent",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "épargner",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "différence",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "somme",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "représenter",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "industriel",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "palier",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "transformation",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "célébrer",
    "categorie": "LES ARTS"
  },
  {
    "name": "mourir",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "souffler",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "aborder",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "labeur",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "conducteur",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "voilà",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "août",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "traversée",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "possible",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "lin",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "réveil",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "jacinthe",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "combattant",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "récompenser",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "reporter",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "évidemment",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "vierge",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "pourpre",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "bienfaiteur",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "fraîcheur",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "construction",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "quinzaine",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "poing",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "grimper",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "agréable",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "vertical",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "chaîne",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "proclamer",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "torturer",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "content",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "charité",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "avance",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "impatience",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "écho",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "accueil",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "exercer",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "éternité",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "fermier",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "simple",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "balançoire",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "allumette",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "vie",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "vue",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "brillant",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "niche",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "plat",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "perfection",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "circulation",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "magie",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "soupirer",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "cygne",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "wagon",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "argent",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "qualité",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "enflammer",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "cabinet",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "pastille",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "exemple",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "juste",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "discussion",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "villa",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "opérer",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "traîner",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "rien",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "taire",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "queue",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "logis",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "beauté",
    "categorie": "LES ARTS"
  },
  {
    "name": "acheminer",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "pâle",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "flot",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "splendeur",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "journal",
    "categorie": "LES ARTS"
  },
  {
    "name": "exemplaire",
    "categorie": "LES ARTS"
  },
  {
    "name": "blanchir",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "munir",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "forcer",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "angle",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "plusieurs",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "agile",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "prix",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "cultiver",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "avare",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "sauver",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "toit",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "février",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "économie",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "pluie",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "fourche",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "ensuite",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "tapage",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "gâteau",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "courber",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "rang",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "bouton",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "pâte",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "lendemain",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "compliment",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "action",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "avaler",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "bonbon",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "prudemment",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "tour",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "sel",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "troubler",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "toucher",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "assaut",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "poireau",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "maison",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "parsemer",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "démontrer",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "multiplicateur",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "emparer",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "gravure",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "époque",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "méthode",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "cueillette",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "tailleur",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "grossir",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "infiniment",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "brouter",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "envie",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "dimension",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "réfugier",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "ressource",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "méchant",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "sincèrement",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "jeunesse",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "cervelle",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "parcourir",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "chêne",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "camp",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "fantôme",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "innocent",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "corbeille",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "ballon",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "pas",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "désigner",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "bazar",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "ciel",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "ordre",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "résultat",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "ciseaux",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "désolation",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "fil",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "croître",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "directeur",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "sport",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "république",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "titre",
    "categorie": "LES ARTS"
  },
  {
    "name": "cerise",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "programme",
    "categorie": "LES ARTS"
  },
  {
    "name": "fourmi",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "niveau",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "mouvement",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "souterrain",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "paresse",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "attentif",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "agricole",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "dérouler",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "enfoncer",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "là-bas",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "coudre",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "promettre",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "employé",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "tiède",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "secours",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "planer",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "feuille",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "plein",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "infini",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "admettre",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "remède",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "digérer",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "vingt",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "trente",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "figure",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "roux",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "prêter",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "océan",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "crier",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "sud",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "gymnastique",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "absolu",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "aéroport",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "venger",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "abattre",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "chèvre",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "énorme",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "plaisir",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "habitation",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "photographie",
    "categorie": "LES ARTS"
  },
  {
    "name": "aisé",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "correct",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "achever",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "justement",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "abeille",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "souper",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "sombre",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "isométrique",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "puits",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "cage",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "frotter",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "broder",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "retrouver",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "ramasser",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "ingénieur",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "voltiger",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "tranchant",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "vacances",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "estime",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "manufacture",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "faucher",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "cerveau",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "campagnard",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "nappe",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "maladie",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "debout",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "opération",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "diriger",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "flacon",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "ruiner",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "circuler",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "dessert",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "correction",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "besoin",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "quelconque",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "blouse",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "parti",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "quoique",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "couverture",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "spécialement",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "escalier",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "sorte",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "autant",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "animal",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "rapidité",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "pays",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "distribution",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "goutte",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "personnage",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "réunir",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "arracher",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "clairon",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "indien",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "continuellement",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "jadis",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "retirer",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "défaite",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "kilogramme",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "fauve",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "machine",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "flambeau",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "progrès",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "sympathie",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "alcool",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "envahir",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "énerver",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "confiance",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "terme",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "préférable",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "empire",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "yeux",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "corriger",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "tranquillité",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "majesté",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "piéton",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "doubler",
    "categorie": "CALCUL ET MESURES"
  },
  {
    "name": "vigueur",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "parterre",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "bûcheron",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "union",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "vêtement",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "écouter",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "retomber",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "poupée",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "peinture",
    "categorie": "LES ARTS"
  },
  {
    "name": "pluvieux",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "mentir",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "docteur",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "enterrer",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "las",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "accuser",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "extérieur",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "encore",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "raisin",
    "categorie": "L'AGRICULTURE"
  },
  {
    "name": "bosquet",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "irrégulier",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "fonds",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "condition",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "attacher",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "chauve",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "ramener",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "stupide",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "charge",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "semaine",
    "categorie": "ÉPOQUE – TEMPS - SAISONS"
  },
  {
    "name": "humidité",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "jugement",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "déranger",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "chalet",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "mélanger",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "montant",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "détester",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "emporter",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "façade",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "taper",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "bonne",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "délice",
    "categorie": "LES ALIMENTS – LES BOISSONS- LES REPAS"
  },
  {
    "name": "simplicité",
    "categorie": "QUALITÉS ET DÉFAUTS"
  },
  {
    "name": "commettre",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "instruction",
    "categorie": "L'ÉCOLE – LA CLASSE – L'INSTRUCTION"
  },
  {
    "name": "professeur",
    "categorie": "VILLE – VILLAGE – UNIVERS - DIMENSIONS"
  },
  {
    "name": "loisirs",
    "categorie": "SPORTS ET JEUX"
  },
  {
    "name": "approche",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "surmonter",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "fixement",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "alerte",
    "categorie": "L'ARMÉE"
  },
  {
    "name": "destruction",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "tourbillonner",
    "categorie": "VERGER – BOIS – CHASSE - PÊCHE"
  },
  {
    "name": "assistant",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "valeur",
    "categorie": "LE COMMERCE"
  },
  {
    "name": "pleuvoir",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "gémir",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "affectueux",
    "categorie": "JOIES ET PEINES"
  },
  {
    "name": "plainte",
    "categorie": "VIE HUMAINE – MALADIES - HYGIÈNE"
  },
  {
    "name": "obliger",
    "categorie": "LES SENS – LA VOLONTE – L'INTELLIGENCE"
  },
  {
    "name": "véhicule",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "rapport",
    "categorie": "LES ARTS"
  },
  {
    "name": "accomplir",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "serrure",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "effrayant",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "plaisir",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "relever",
    "categorie": "LE CORPS HUMAIN"
  },
  {
    "name": "porter",
    "categorie": "LA COMMUNICATION"
  },
  {
    "name": "profession",
    "categorie": "L'INDUSTRIE ET LE TRAVAIL"
  },
  {
    "name": "claquer",
    "categorie": "GESTES ET MOUVEMENTS"
  },
  {
    "name": "gilet",
    "categorie": "VÊTEMENTS – TOILETTE - PARURES"
  },
  {
    "name": "tremper",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "abîme",
    "categorie": "PAYSAGES – CLIMAT – FORMES"
  },
  {
    "name": "racine",
    "categorie": "EAUX – MINÉRAUX - VÉGÉTAUX"
  },
  {
    "name": "fermer",
    "categorie": "LA MAISON – LE BATIMENT"
  },
  {
    "name": "comte",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "patte",
    "categorie": "LES ANIMAUX"
  },
  {
    "name": "foyer",
    "categorie": "L'INTÉRIEUR ET LE MOBILIER"
  },
  {
    "name": "merveilleusement",
    "categorie": "LES VOYAGES"
  },
  {
    "name": "présider",
    "categorie": "GOUVERNEMENT ET JUSTICE"
  },
  {
    "name": "généralement",
    "categorie": "LA COMMUNICATION"
  }
];
var event=new Object();
event.replace=(string, catactereATrouver, caractereARemplacer)=>{
	var rendu="";
	for(var i;i<string.length;i++){
		letter=string.substr(i, 1);
		if(letter===catactereATrouver){
			letter=caractereARemplacer;
		}
		rendu+=letter; //////////////////////////////////////////// ICI
	}
}

getFrenchWords();
for(var i=0;i<2574;i++){
	mots[i]=words[i].name;
}

var r=(rt)=>{
	return rt//
}

var s=r;
var okClicked=false;
var annulerClicked=false;
event.select=(str)=>{
	return document.querySelector(str);
}
event.select(".ok").addEventListener("click", ()=>{
	okClicked=true;
})
event.select(".ok").addEventListener("mouseup", ()=>{
	okClicked=false;
})
event.select(".annuler").addEventListener("click", ()=>{
	annulerClicked=true;
})
event.select(".annuler").addEventListener("mouseup", ()=>{
	annulerClicked=false;
})

/*// Créer un tableau de mots
var mots = [
	"javascript",
	"singe",
	"extraordinaire",
	"pancake",
	"patate",
	"robot",
	"jeu",
	"intergouvernementalisationnelement"
]*/

var delay=(milliseconds)=>{
	const date = Date.now();
	var currentDate;
	do{
		currentDate = Date.now();
	}while(currentDate - date < milliseconds);
}

// Choisir un mot secret au hasard
var motSecret = mots[Math.floor(Math.random() * mots.length)];
var essais=6;
var canvas=document.querySelector("canvas");
var ctx=canvas.getContext("2d");

var alphabet = {
	a: false,
	b: false,
	c: false,
	d: false,
	e: false,
	f: false,
	g: false,
	h: false,
	i: false,
	j: false,
	k: false,
	l: false,
	m: false,
	n: false,
	o: false,
	p: false,
	q: false,
	r: false,
	s: false,
	t: false,
	u: false,
	v: false,
	w: false,
	x: false,
	y: false,
	z: false
}

var cercle=(x, y, rayon, cerclePlein, epaisseur, couleur)=>{
	if (cerclePlein) {
		ctx.strokeStyle=couleur;
	} else {
		ctx.fillStyle=couleur;
	}
	ctx.lineWidth = epaisseur;
	ctx.beginPath();
	ctx.arc(x, y, rayon, 0, Math.PI * 2, false);
	if (cerclePlein) {
		ctx.fill();
	} else {
		ctx.stroke();
	}
}

var membres=[
	function(){
		cercle(250, 225, 20, true, 5, "#000");
	},
	function(){
		ctx.strokeStyle="#000";
		ctx.lineWidth=5;
		ctx.beginPath();
		ctx.moveTo(250, 225);
		ctx.lineTo(250, 275);
		ctx.stroke();
	},
	function(){
		ctx.strokeStyle="#000";
		ctx.lineWidth=5;
		ctx.beginPath();
		ctx.moveTo(250, 265);
		ctx.lineTo(225, 230);
		ctx.stroke();
	},
	function(){
		ctx.strokeStyle="#000";
		ctx.lineWidth=5;
		ctx.beginPath();
		ctx.moveTo(250, 265);
		ctx.lineTo(275, 230);
		ctx.stroke();
	},
	function(){
		ctx.strokeStyle="#000";
		ctx.lineWidth=5;
		ctx.beginPath();
		ctx.moveTo(250, 275);
		ctx.lineTo(230, 295);
		ctx.stroke();
	},
	function(){
		ctx.strokeStyle="#000";
		ctx.lineWidth=5;
		ctx.beginPath();
		ctx.moveTo(250, 275);
		ctx.lineTo(270, 295);
		ctx.stroke();
	}
]

event.montrer=(elem)=>{
	event.select(elem).hidden=false;
}
event.cacher=(elem)=>{
	event.select(elem).hidden=true;
}
event.alert=(str, tt)=>{
	event.select(".absolute").hidden=false;
	event.select(".title").innerHTML=tt;
	event.select(".paragraph").innerHTML=str;
	event.cacher(".letter");
	event.select(".annuler").style.display="none"; // Hide event.select(".annuler")
	event.montrer(".ok");
}
event.confirm=(str, tt)=>{
	event.select(".absolute").hidden=false;
	event.select(".title").innerHTML=tt;
	event.select(".paragraph").innerHTML=str;
	event.cacher(".letter");
	event.select(".annuler").style.display="block"; // Show event.select(".annuler")
	event.montrer(".ok");
}
event.prompt=(str, tt, textElem)=>{
	event.select(".absolute").hidden=false;
	event.select(".title").innerHTML=tt;
	event.select(".paragraph").innerHTML=str;
	event.montrer(".letter");
	event.select(".annuler").style.display="block"; // Show event.select(".annuler")
	event.montrer(".ok");
	event.select(textElem).focus();
}
event.inverse=new Object();
event.inverse["6"]=0;
event.inverse["5"]=1;
event.inverse["4"]=2;
event.inverse["3"]=3;
event.inverse["2"]=4;
event.inverse["1"]=5;
event.inverse["0"]=6;

// Créer le tableau de réponses
var tableauReponses = [];
for (var i = 0; i < motSecret.length; i++) {
	tableauReponses[i]="_";
}

var win=true;
var nombreLettresManquantes = motSecret.length;
var reponse;
var sortie;

event.select(".ok").addEventListener("click", ()=>{
	const reponse1=event.select(".letter").innerHTML;
	event.select(".letter").innerHTML="";
	if(event.circuit===0){
		//event.cacher(".absolute");
		event.prompt("Devine une lettre, ou clique sur Annuler pour quitter la partie.", "Action utilisateur 🙏", ".letter"); ///  L.319-321
		event.circuit=1;
	}else if(event.circuit===1){
		reponse=reponse1;
		//event.cacher(".absolute");
		reponse=reponse.toLowerCase(); // Transcription en minuscule
		
  	 	/*if (reponse === null) {
			// Quitter la boucle du jeu
				event.circuit=2;
				event.confirm("Quitter ?", "Action requise 🤔 :";
			} else if (reponse!=="") {
				event.circuit=3; // Tableau
				event.alert("Tu ne dois saisir qu'une seule lettre.", "Oups...");
			} else {
				*/// Mettre à jour l'état de la partie
				if (!alphabet[reponse]) {
					var s=true;
					for (var j = 0; j < motSecret.length; j++) {
						if (motSecret[j] === reponse) {
							tableauReponses[j] = reponse;
							nombreLettresManquantes--;
							s=false;
						}
					}
					if (s===true) {
						membres[event.inverse[String(essais--)]]();
					}
					alphabet[reponse]=true;
					if(nombreLettresManquantes<1){
						win=true;
						verif();
					}
					if(essais<1){
						win=false;
						verif();
					}
				} else {
					event.circuit=0;
					event.alert("La lettre a déjà été mentionnée.", "Oups...");
				}
		//}
	}else if(event.circuit===2){
		event.cacher(".absolute");
	}else if(event.circuit===3){
		event.alert(tableauReponses.join(" "), "Tableau :");
		event.circuit=0;
	}else if(event.circuit===1000){
		window.location.reload();
	}else if(event.circuit===999){
		verif();
	}
	event.select(".tableau-reponses").innerHTML=tableauReponses.join(" ");
});

event.select(".annuler").addEventListener("click", ()=>{
	if(event.circuit===1){
		event.circuit=2;
		event.confirm("Quitter ?", "Action requise 🤔 :");
	}else if(event.circuit===2){
		//event.cacher(".absolute");
		event.prompt("Devine une lettre, ou clique sur Annuler pour quitter la partie.", "Action utilisateur 🙏", ".letter"); ///  L.319-321
		event.circuit=1;
	}else if(event.circuit===1000){
		event.cacher(".absolute");
	}else if(event.circuit===999){
		verif();
	}
	event.select(".tableau-reponses").innerHTML=tableauReponses.join(" ");
});

event.select(".letter").addEventListener("keydown", (e)=>{
	if(e.keyCode===13) event.select(".ok").click();
});

/*// La boucle du jeu
 var intervalle=setInterval(()=>{
 	// Afficher la progression du joueur
 	*///event.alert(tableauReponses.join(" "), "Tableau :");
	//event.circuit=0;
 	/*// Récupérer un essai du joueur
 	var reponse = event.prompt("Devine une lettre, ou clique sur Annuler pour quitter la partie.", "Une lettre plize 🙏 !!!");
 	if (reponse !== null) {
 		reponse=reponse.toLowerCase(); // Transcription en minuscule
 	}
   	if (reponse === null) {
		// Quitter la boucle du jeu
		if (event.confirm("Quitter ?", "Action requise 🤔 :")) {
			win=NaN;
			verif();
		}
	} else if (reponse.length !== 1) {
		event.alert("Tu ne dois saisir qu'une seule lettre.", "Oups...");
	} else {
		// Mettre à jour l'état de la partie
		if (!alphabet[reponse]) {
			var s=true;
			for (var j = 0; j < motSecret.length; j++) {
				if (motSecret[j] === reponse) {
					tableauReponses[j] = reponse;
					nombreLettresManquantes--;
					s=false;
				}
			}
			if (s=true) {
				essais--;
				membres[5-essais-1]();
			}
			alphabet[reponse]=true;
		} else {
			event.alert("La lettre a déjà été mentionnée.", "Oups...");
		}
	}

	if (!essais>0) {
		win=false;
		verif();
	}
	// Fin de la boucle de jeu
}, 50)*/

event.cacher(".absolute");
event.prompt("Devine une lettre, ou clique sur Annuler pour quitter la partie.", "Action utilisateur 🙏", ".letter");
event.circuit=1;

var verif=()=>{
	/*clearInterval(intervalle);*/
	if (win == true) {
		// Féliciter le joueur gagnant
		event.confirm("Félicitations ! Le mot secret est bien " + motSecret+" !", "Bravo 🥳 ! On reccomence 🥺 ?");
		event.circuit=1000;
	} else if (win == false){
		// Lui afficher le message "Perdu"
		event.confirm("Oups ! Tu as utilisé tous tes essais, le mot était " + motSecret+"...", "Oups... 😭 On reccomence 🥺 ?");
		event.circuit=1000;
	}
}
setInterval(()=>{ // Alternative à while qui forme une boucle infinie
	if(event.select(".letter").innerText.length>1){
		event.select(".letter").innerText=event.select(".letter").innerText.substr(0, 1)//
	}
}, 50)

// End
