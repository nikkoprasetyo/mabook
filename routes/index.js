const express = require('express')
const router = express.Router()
const routerPosting = require('./posting')
const routerAccount = require('./account')
const ControllerRegisterLogin = require('../controllers/controllerRegisterLogin')

//TODO Semua rooting menghandle Welcome Page , Register, Login dan Logout
const afterLogin = (req, res, next) => {
    // console.log(req.session.user , 'ini afterlogin');
    if(req.session.user){
        res.redirect('/posting')
    } else {
        next()
    }
}
    //*Memunculkan halaman Welcome Page yang memiliki 2 tombol yaitu Register dan Login
    router.get('/' , afterLogin , ControllerRegisterLogin.welcomePage)

    //*Memunculkan halaman Register yang berisi form untuk membuat sebuah akun
    router.get('/register' , afterLogin , ControllerRegisterLogin.formRegister)

    //!Memasukkan username serta password kedalam database. 
    router.post('/register' ,  ControllerRegisterLogin.postFormRegister)

    //*Memunculkan halaman Login yang berisi form yang nantinya akan disesuaikan apa yang di-input dengan yang berada di database.
    router.get('/login' , afterLogin , ControllerRegisterLogin.formLogin)

    //!Mendapatkan input dari form Login yang digunakan untuk verifikasi dengan database,render ke beranda posting (/posting).
    router.post('/login'  , ControllerRegisterLogin.postFormLogin)

    //*Session destroy,redirect ke /
    router.get('/logout' , ControllerRegisterLogin.logout)

//!-----------------------------------------------
const beforeLogin = (req, res, next) => {
    // console.log(req.session.user , 'ini beforelogin');
    // console.log('ini req.session beforelogin');
    if (req.session.user) {
        next()
    } else {
        res.redirect('/')
    }
}


router.use('/posting' , beforeLogin , routerPosting)

router.use('/account' , beforeLogin , routerAccount)



module.exports = router