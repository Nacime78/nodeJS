const fs = require('fs');

// Core module : les modules natifs à node.
// Il en exisre plusieurs dont : "fs" (file system)

// Le module fs permet de travailler avec les fichiers du système grâce à node.

// fs nous propose un ensemble de fonction pour travailler avec les fichiers :

// .appendFile() : cette fonction va permettre l'ajout de contenu dans un fichier. 
// Si jamais le fichier n'existe pas, il va être créé.

// Le premier paramètre est le chemin d'accès au fichier (s'il n'existe pas, il le crée).
fs.appendFile('log.txt', 'Bonjour le monde !', function(error){
    if(error) throw error;
});

// \r : permet un retour
// \n : permet un saut de ligne

// .writeFile() : permet de remplacer le contenu d'un fichier. Il le crée si jamais il n'existe pas

fs.writeFile('log.txt', "Ceci est un remplacement", function(error){
    if(error){
        throw error;
    }
});

// .readFile permet de lire le contenu du fichier.

fs.readFile('log.txt', 'utf8', function(error, data){ // fichier + encodage
    console.log(data);
});

// .copyFile : permet de copier un fichier pour créer des sauvegardes

fs.copyFile("log.txt", "log_save.txt", function(error){ // fichier + nom du fichier sur lequel on va sauvegarder
    if(error) throw error;
});

// Une fonction javascript
// Un bloc de code nommé qui peut être réutilisé autant de fois que l'on veut.

function sum(firstNumber, secondNumber){
    let a = firstNumber + secondNumber;
    return a; // return permet de retourner une valeur en fin de fonction.
}

let result = sum(39, 45);
sum(18, 30);