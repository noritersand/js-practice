const multer = require('multer'); // multipart/form-data 처리용 라이브러리
const path = require('path');
const fs = require('fs');

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
    console.debug('multer.diskStorage.filename.file:', file);
    const ext = path.extname(file.originalname);
    callback(null, Date.now() + ext); // 업로드된 파일의 이름 설정 (현재 시간 + 확장자)
  },
});
const upload = multer({ storage: storage });

module.exports = {
  upload
};
