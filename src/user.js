function hello(){
    let firstName = "Nacime";
    console.log(`Bonjour ${firstName}`);
}

function login(){

}

module.exports = {hello, login};
// module.exports permet d'exporter des éléments contenus dans le fichier pour les importer dans d'autres fichiers.
// export est un équivalent plus récent de module.exports.