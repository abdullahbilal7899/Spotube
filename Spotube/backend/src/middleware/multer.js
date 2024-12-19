import multer from 'multer';

const storage=multer.diskStorage({
    filename:function(req,file,callback){
callback(null,file.originalname)
    }
})

// const upload = multer({storage})

const upload = multer({
    storage,
    limits: { fileSize: 50 * 1024 * 1024 },  // Limit size to 50MB (you can adjust)
    fileFilter: (req, file, cb) => {
        const allowedTypes = ['image/jpeg', 'image/png', 'audio/mpeg', 'audio/wav'];
        if (allowedTypes.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(new Error('Invalid file type'), false);
        }
    }
});

export default upload;