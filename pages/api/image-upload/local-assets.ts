require('dotenv').config();
import cloudinary from 'cloudinary';

console.log(cloudinary.v2.config().cloud_name);

const imageUpload = (imagePath: string) => {

    cloudinary.v2.uploader
        .upload('../../public/image/ProWorkforce-Logo.svg', {
            resource_type: 'image',
        })
        .then((res) => {
            return void res.status(200).JSON.stringify(res); 
        })
        .catch((err) => {
            return void err.status(500).JSON.stringify(err); 
        });

};

export default imageUpload;