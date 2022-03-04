let {User} = require('../models/index')
let {hashingPassword , comparePassword} = require('../helpers/bcrypt')

class ControllerRegisterLogin {
    //*Memunculkan halaman Welcome Page yang memiliki 2 tombol yaitu Register dan Login
    static welcomePage(req , res){
        res.render('WelcomePage')
    }

    //*Memunculkan halaman Register yang berisi form untuk membuat sebuah akun
    static formRegister(req , res){
        res.render('FormRegister')
    }

    //!Memasukkan username serta password kedalam database. 
    static postFormRegister(req , res){
        let {username , password} = req.body
        let hash = hashingPassword(password)
        // console.log(hash);
        User.create({
            username,
            password : hash
        })
        .then(_ => res.redirect('/'))
        .catch(err => res.send(err))

    }

    //*Memunculkan halaman Login yang berisi form yang nantinya akan disesuaikan apa yang di-input dengan yang berada di database.
    static formLogin(req , res){
        res.render('FormLogin')
    }

    //!Mendapatkan input dari form Login yang digunakan untuk verifikasi dengan database,render ke beranda posting (/posting).
    static postFormLogin(req , res){
        let {username , password} = req.body
        User.findOne({
            where : {
                username : username
            }
        })
        .then(user => {
            if (user && comparePassword(password , user.password)) {
                req.session.user = user.username
                // console.log(req.session , 'ini sesudah')
                //res.render('Home' , {user.id})
                res.redirect(`/posting?id=${user.id}`)
            } else {
                throw new Error ('username / password tidak sesuai')
            }
        })
        .catch(err => res.send(err))
    }

    static logout(req , res){
        delete req.session.user
        res.redirect('/')
    }
}

module.exports = ControllerRegisterLogin