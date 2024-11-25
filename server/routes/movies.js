var express = require('express');
var router = express.Router();
let Movies = require('../model/movies')
const movies = require('../model/movies');
let moviesController = require('../controllers/movies.js')
/* Get route for the movies list - Read Operation */
/*
GET, 
Post, 
Put --> Edit/Update
*/

/* Read operation --> Get route for displaying the movies list*/


router.get('/',async(req,res,next)=>{
    try{
        const MoviesList = await Movies.find();
        res.render('Movies/list',{
            title:'Pet Shop Information',
            displayName: req.user ? req.user.displayName: '',
            MoviesList:MoviesList
        })
    }
    catch(err){
        console.error(err)
        res.render('Movies/list',{
            error:'Error on Server'})
    }
})
/* Create operation --> Get route for displaying the Add Page */
router.get('/add', async(req, res,next) => {
    try {
        res.render('Movies/add',{
            title: 'Add Pet Information',
            displayName: req.user ? req.user.displayName: ''
        });
    }
    catch(err)
    {
        console.error(err)
        res.render('Movies/list',{
            error:'Error on Server'})
    }
});
/* Create Operation --> Post route for Processing the Add Page */
router.post('/add', async(req, res,next) => {
    try {
        /* change this up for the assignment or project */
        let newMovie = Movies({
            "Title": req.body.Title,
            "Genre": req.body.Genre,
            "releaseYear": req.body.releaseYear,
            "Progress": req.body.Progress,
            "Status": req.body.Status
        });
        Movies.create(newMovie).then(()=> {
            res.redirect('/movieslist');
        })

    }
    catch(err)
    {
        console.error(err)
        res.render('Movies/list',{
            error:'Error on Server'})
    }
});
/* Update operation --> Get route for displaying the Edit Page */
router.get('/edit/:id',async(req, res,next) => {
    try {

        const id = req.params.id;
        const moviesToEdit = await Movies.findById(id);
        res.render('Movies/edit',
            {
                title: 'Edit Pet Information',
                displayName: req.user ? req.user.displayName: '',
                Movies:moviesToEdit
            }
        )

    }
    catch(err)
    {
        console.error(err)
        next(err); //passing the error
    }
});
/* Update Operation --> Post route for Processing the Edit Page */
router.post('/edit/:id',async(req, res,next) => {
    try {
        let id=req.params.id;
        let updatedMovie = Movies({
            "_id":id, 
            "Title":req.body.Title,
            "Genre":req.body.Genre,
            "releaseYear":req.body.releaseYear,
            "Progress":req.body.Progress,
            "Status":req.body.Status
        })
        Movies.findByIdAndUpdate(id, updatedMovie).then(()=>{
            res.redirect('/movieslist')
        })
    }

    catch(err)
    {
        console.error(err)
        res.render('Movies/list',{
            error:'Error on Server'})
    }
});
/* Delete Operation --> Get route to perform Delete operation */
router.get('/delete/:id',async(req, res, next) => {
    try{
        let id=req.params.id;
        Movies.deleteOne({_id:id}).then(()=>{
            res.redirect('/movieslist')
        })
    }
    catch(err){
        console.error(err)
        res.render('Movies/list',{
            error:'Error on Server'})
    }
});
module.exports = router;