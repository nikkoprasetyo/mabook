let {AccountProfile , Post , User} = require('../models/index')

class ControllerAccount {
    //? MY PROFILE
    //*Lempar ke halaman my profile,berisi form untuk menampilkan username,email,dll(data user) kemudian dibawahnya tampilkan list postingan berdasarkan id user(postingan user tersebut)
    static myProfile(req , res){
       
    }

    //*Halaman yang berisi form untuk update tabel AccountProfile, seperti column profileCaption dan profileImage.
    static updateProfile(req , res){

    }

    //!Memasukkan data yang ingin di-update ke database.
    static postUpdateProfile(req , res){

    }
}

module.exports = ControllerAccount