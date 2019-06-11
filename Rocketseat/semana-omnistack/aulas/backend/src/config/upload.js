const multer = require('multer');
const path = require('path');

//Salvando as imagens na pasta Uploads
module.exports = {
    storage: new multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'uploads'), //Especificando diretorio
        filename: function(req, file, cb){ 
            cb(null, file.originalname);
        }
    })
}