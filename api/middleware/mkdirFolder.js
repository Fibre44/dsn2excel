const { v4: uuidv4 } = require('uuid');
const path = require('path')
const fs = require('fs')
module.exports = (req, res, next) => {

    //Create uploads folder 
    const pathCreateFolderUpload = path.join(process.cwd(), '/uploads')

    if (!fs.existsSync(pathCreateFolderUpload)) {
        fs.mkdir(pathCreateFolderUpload, (err) => {
            if (err) {
                return console.error(err);
            }
            console.log(`Directory /uploads/ created successfully!`);
        });
    }

    const uuid = uuidv4()
    req.uuid = uuid
    const pathCreateFolder = path.join(process.cwd(), '/uploads', uuid)
    if (!fs.existsSync(pathCreateFolder)) {
        fs.mkdir(pathCreateFolder, (err) => {
            if (err) {
                return console.error(err);
            }
            console.log(`Directory /uploads/${uuid} created successfully!`);
        });
    }

    next()
}