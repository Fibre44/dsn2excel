
const fs = require('fs/promises')
const path = require('path')
const { DsnParser } = require('@fibre44/dsn-parser')
const upload = async (req, res, next) => {

    try {
        const folderUuid = req.uuid
        const pathDsn = path.join(process.cwd(), '/uploads/', folderUuid)
        const filesList = await fs.readdir(pathDsn)
        for (let file of filesList) {
            let filePath = path.join(process.cwd(), '/uploads/', folderUuid, file)
            const options = {
                controleDsnVersion: true,
                deleteFile: true
            }
            let dsn = new DsnParser()
            try {
                await dsn.asyncInit(filePath, options)
                console.log(dsn.smartExtraction.sender)
            } catch (e) {
                console.error(e)
                res.status(500).json({ e })
                return
            }
        }
        res.status(200).json({ message: 'ok' })

    } catch (e) {
        console.error(e)
        res.status(500).json({ e })
    }
}

module.exports = upload