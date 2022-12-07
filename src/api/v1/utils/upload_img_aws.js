import dotenv from 'dotenv'
dotenv.config()
import multer from "multer";
import { S3Client } from "@aws-sdk/client-s3";
import multerS3 from "multer-s3";

//s3
const s3 = new S3Client({
    region: process.env.REGION,
    credentials: {
        accessKeyId: process.env.ACCESS_KEY_ID,
        secretAccessKey: process.env.SECRET_ACCESS_KEY,
    },
});

const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: "jura-coffee-s3",
        contentType: multerS3.AUTO_CONTENT_TYPE,

        key: function (req, file, cb) {
            cb(null, Date.now().toString());
        },
    }),
});

export default upload