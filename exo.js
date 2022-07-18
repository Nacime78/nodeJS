const fs = require('fs');

// fs.appendFile('product.txt', 'ordinateur', function(error){
//     if(error) throw error;
// });

// fs.readFile('product.txt', 'utf8', function(error, data){
//     console.log(data);
// });

function connexion(num){
    let a = "connexion réussie pour l'utilisateur n°" + num;
    console.log(a);

    fs.appendFile('externe.txt', a + '\n', function(error){
    if(error) throw error;
    });
}

connexion(5);
connexion(7);
connexion(14);
connexion(52);
connexion(75);
connexion(146);

