// MVC --> Model , View , Controller (Routers)
let mongoose = require('mongoose')
// create a model class
let moviesModel = mongoose.Schema({
    Title:String,
    Genre: String,
    releaseYear:Number,
    Progress:String,
    Status:String
},
{
    collection:"movies"
}
)
module.exports = mongoose.model('Movies', moviesModel)