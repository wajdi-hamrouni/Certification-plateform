var cloudinary = require('cloudinary').v2

cloudinary.config({ 
    cloud_name: process.env.cloud_name, 
    api_key:process.env.api_key, 
    api_secret: process.env.api_secret
  });

const uploadCertificate = (certifPath,cb)=>{
    return Promise((resolve,reject)=>{
        cloudinary.uploader.upload(certifPath,{width: 500, height: 500}, function(error, result) { 
            if(error){
                reject(error)
            }
            resolve(result.secure_url) });
    })
} 

const deleteCertificate = (certif,cb)=>{
    return Promise((resolve,reject)=>{
        cloudinary.uploader.destroy(certifPath,{width: 500, height: 500}, function(error, result) { 
            if(error){
                reject(error)
            }
            resolve(result.secure_url) });
    })
} 

module.exports= {
    uploadCertificate,
    deleteCertificate
}