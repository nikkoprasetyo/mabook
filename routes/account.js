const express = require('express')
const routerAccount = express.Router()
const ControllerAccount = require('../controllers/controllerAccount')

//? MY PROFILE 
//*Lempar ke halaman my profile,berisi form untuk menampilkan username,email,dll(data user) kemudian dibawahnya tampilkan list postingan berdasarkan id user(postingan user tersebut)
routerAccount.get('/:id' , ControllerAccount.myProfile)

//*Halaman yang berisi form untuk update tabel AccountProfile, seperti column profileCaption dan profileImage.
routerAccount.get('/:id/update' , ControllerAccount.updateProfile)

//!Memasukkan data yang ingin di-update ke database.
routerAccount.post('/:id/update' , ControllerAccount.postUpdateProfile)

module.exports = routerAccount