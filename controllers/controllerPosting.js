let {AccountProfile , Post , User} = require('../models/index')

class ControllerPosting {
    //*Menampilkan semua postingan di beranda,terdapat 2 tombol navbar yaitu myprofile,post picture dan logout
    static home(req , res) {
        console.log(req.query.id , 'ini dari id');
        let id = +req.query.id
        User.findByPk()
        res.render('Home')
    }

    //*Menambahkan jumlah vote dari sebuah posting,property vote dari model posting ditambahkan value nya
    static like(req , res){

    }
}

module.exports = ControllerPosting