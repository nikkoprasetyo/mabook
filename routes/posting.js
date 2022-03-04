const express = require('express')
const routerPosting = express.Router()
const ControllerPosting = require('../controllers/controllerPosting')

//*Menampilkan semua postingan di beranda,terdapat 2 tombol navbar yaitu myprofile,post picture dan logout
routerPosting.get('/' , ControllerPosting.home)

//*Menambahkan jumlah vote dari sebuah posting,property vote dari model posting ditambahkan value nya
routerPosting.get('/:id/like' , ControllerPosting.like)

module.exports = routerPosting