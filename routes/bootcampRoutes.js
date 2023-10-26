const express =require('express')
const BootcampModel = require('../models/BootcampsModels')
const router = express.Router()

//traer todos los camp por id
router.get('/',
        (request,response)=> {
                response
                        .status(200)
                        .json({
                             "success" : true,
                             "msg" : "mostrar todos los botcamps"
                        })
        })

//traer todos los campos bootcamps por id
router.get('/:id',
        (request,response)=> {
                response
                        .status(200)
                        .json({
                             "success" : true,
                             "msg" : `seleccionado con bootcamp con id ${request.params.id}`
                        })
        })

//crear todos loscampos de bootcamps
router.post('/',
        (request,response)=> {
        //crear el nuevo bootcamp
        //const bootcamp= BootcampModel.
                    //create(request.body )

        response
                        .status(201)
                        .json({
                             "success" : true,
                             "data" : request.body
                        })
        })

//actualizar bootcamp por id 
router.put('/:id',
        (request,response)=> {
                response
                        .status(201)
                        .json({
                             "success" : true,
                             "msg" : `actualizando bootcamp con id ${request.params.id}`    
                        })
        })

//eliminar bootcamp por id 
router.delete('/:id',
        (request,response)=> {
                response
                        .status(201)
                        .json({
                             "success" : true,
                             "msg" : `eliminando bootcamp con id ${request.params.id}`    
                        })
        })

//evidencia: uris de courses
//traer todos los campos courses
router.get('/',
        (request,response)=> {
                response
                        .status(200)
                        .json({
                             "success" : true,
                             "msg" : "mostrar todos los courses"   
                        })
        })

//traer todos los campos courses por id
router.get('/:id',
        (request,response)=> {
                response
                        .status(200)
                        .json({
                             "success" : true,
                             "msg" : `seleccionado con courses con id ${request.params.id}`   
                        })
        })

//crear todos los campos de courses
router.post('/',
        (request,response)=> {
                response
                        .status(201)
                        .json({
                             "success" : true,
                             "msg" : "crear course"   
                        })
        })

//actualizar courses por id 
router.put('/:id',
        (request,response)=> {
                response
                        .status(201)
                        .json({
                             "success" : true,
                             "msg" : `actualizando course con id ${request.params.id}`    
                        })
        })

//eliminar courses por id 
router.delete('/:id',
        (request,response)=> {
                response
                        .status(201)
                        .json({
                             "success" : true,
                             "msg" : `eliminando courses con id ${request.params.id}`    
                        })
        })

//evidencia: uris para reviews
//traer todos los campos reviews
router.get('/',
        (request,response)=> {
                response
                        .status(200)
                        .json({
                             "success" : true,
                             "msg" : "mostrar todos los reviews"   
                        })
        })

//traer todos los campos reviews por id
router.get('/:id',
        (request,response)=> {
                response
                        .status(200)
                        .json({
                             "success" : true,
                             "msg" : `seleccionado con review con id ${request.params.id}`   
                        })
        })

//crear todos los campos de reviews
router.post('/',
        (request,response)=> {
                response
                        .status(201)
                        .json({
                             "success" : true,
                             "msg" : "crear review"   
                        })
        })

//actualizar reviews por id
router.put('/:id',
        (request,response)=> {
                response
                        .status(201)
                        .json({
                             "success" : true,
                             "msg" : `actualizando review con id ${request.params.id}`    
                        })
        })

//eliminar reviews por id
router.delete('/:id',
        (request,response)=> {
                response
                        .status(201)
                        .json({
                             "success" : true,
                             "msg" : `eliminando review con id ${request.params.id}`    
                        })
        })

//evidencia: uris para users
//traer todos los campos users
router.get('/',
        (request,response)=> {
                response
                        .status(200)
                        .json({
                             "success" : true,
                             "msg" : "mostrar todos los users"   
                        })
        })

//traer todos los campos users por id
router.get('/:id',
        (request,response)=> {
                response
                        .status(200)
                        .json({
                             "success" : true,
                             "msg" : `seleccionado con user con id ${request.params.id}`   
                        })
        })

//crear todos los campos de users
router.post('/',
        (request,response)=> {
                response
                        .status(201)
                        .json({
                             "success" : true,
                             "msg" : "crear user"   
                        })
        })

//actualizar users por id 
router.put('/:id',
        (request,response)=> {
                response
                        .status(201)
                        .json({
                             "success" : true,
                             "msg" : `actualizando users con id ${request.params.id}`    
                        })
        })

//eliminar users por id 
router.delete('/:id',
        (request,response)=> {
                response
                        .status(201)
                        .json({
                             "success" : true,
                             "msg" : `eliminando users con id ${request.params.id}`
                        })
        })

module.exports= router
