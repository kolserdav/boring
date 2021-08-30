import * as uuid from 'uuid'
import * as path from 'path'

class fileService {
    saveFile(file, filepath) {
        try {
            let fileName
            if(file.mimetype == 'image/svg+xml'){
                fileName = uuid.v4() + '.svg'
            }
            if(file.mimetype == 'image/jpeg') {
                fileName = uuid.v4() + '.jpg'
            }
            const filePath = path.resolve(`static/${filepath}`, fileName)
            file.mv(filePath)
            return fileName
        }catch(e){
            console.log(e)
        }
    }
}

export default new fileService()