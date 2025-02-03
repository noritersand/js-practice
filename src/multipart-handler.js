import multer from 'multer';
import path from 'path';
import fs from 'fs';

const UPLOAD_LOCATION = 'upload/';

if (!fs.existsSync(UPLOAD_LOCATION)) {
  fs.mkdirSync(UPLOAD_LOCATION);
}

// Multer 설정
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    // console.debug('file:', file);
    callback(null, UPLOAD_LOCATION); // 업로드된 파일이 저장될 디렉토리 경로
  },
  filename: (req, file, callback) => {
    file.originalname = Buffer.from(file.originalname, 'latin1').toString('utf8')
    console.debug('multer.diskStorage.filename.file:', file);
    const ext = path.extname(file.originalname);
    callback(null, Date.now() + ext); // 업로드된 파일의 이름 설정 (현재 시간 + 확장자)
  },
});

export const upload = multer({ storage: storage });
