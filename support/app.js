let $ = require('jquery');
let user = require('../src/user.js'); // ./ est nécessaire
// require permet d'importer des dépendances pour travailler avec.
// sur angular on utilisera import
// import est cependant plus récent et ne fonctionnera pas nativement avec node.js

// Le système de module avec Node. Les modules représentent nos packages.
// Généralement, on importe les packages au début du script.

// Trois types de module :
// - Core module (Module natif à node : fs, http)
// - Local module (Module que l'on crée dans son projet)
// - Third party module (Module tiers, créés par d'autres développeurs)

user.hello;
user.login;

// (optionnel) : ES = ecmascript (ES6 est le plus connu)


console.log('Hello World !');

let a = 1;
let b = 5;

let c = a * b;

console.log(c);

// node a pour outil npm
// npm est un gestionnaire de paquets
// npm va permettre d'installer des dépendances (ce sont des fichiers contenant un ensemble de code réutilisable). (bootstrap, jQuery)
// Les paquets sont des ensembles de dépendances.

// npm init permet d'initialiser un projet. Plusieurs informations seront demandées (c'est surtout dans l'optique où vous partagerez le projet).
// On s'en servira plutôt lorsque l'on voudra créer un projet à partir de 0.

// .JSON : Javascript Object Notation. (extension de fichier qui contient des objets javascripts).
// Cette extension est utilisée pour la transmission de données (majoritairement).

// Objet littéral Javascript :
/*

    {
        "clé": "valeur",
        "clé2": "valeur"
    }

*/

// package.json permet de récapituler les informations de notre projet
// Mais il récapitule aussi les dépendances du projet (et ça c'est très important)

// npm install <nom du paquet>
// ex : npm install jquery
// jquery est installé dans notre projet (on peut le voir dans notre package.json)

// Lorsque l'on éxécute "npm install", deux éléments sont créés :
// - node_modules contient les fichiers de dépendances.
// - package-lock.json contient les chemins vers les dépendances.

// npm uninstall : permet de désinstaller un package.
console.log($);

// Etapes
// 1 - npm install jquery
// 2 - vérifier l'installation sur le fichier package.json
// 3 - ajouter ligne : let $ = require('jquery'); au fichier app.js
// 4 - console.log($) dans le fichier app.js
// 5 - node app.js -> [Function (anonymous)] est apparu
// 6 - supprimer dossier node_modules -> puis node app.js
// 7 - écrire "npm install" pour réinstaller node_modules, et rééxécuter app.js
// Tout fonctionne grâce au fichier package.json
// 8 - "npm uninstall jquery" permet de totalement désinstaller la dépendance jquery
// Vérifier le fichier package.json pour être sûr de la suppression