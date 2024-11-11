// MVC --> Model , View , Controller (Routers)
let mongoose = require('mongoose')
// create a model class
let bookModel = mongoose.Schema({
    PetName:String,
    PetAge: String,
    PetBreed:String,
    PetDescription:String,
    PetPrice: Number
},
{
    collection:"Bio_books"
}
)
module.exports = mongoose.model('Book',bookModel)