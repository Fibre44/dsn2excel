const multer = require('multer');
const path = require('path')
// Configuration de Multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const uuid = req.uuid
        const pathFiles = path.join('uploads', uuid)

        cb(null, pathFiles);
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

module.exports = multer({ storage: storage }).array('file');
