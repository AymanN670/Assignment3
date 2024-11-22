// MVC --> Model , View , Controller (Routers)
let mongoose = require('mongoose')
// create a model class
let bookModel = mongoose.Schema({
    PetName:String,
    Age: String,
    Breed:String,
    Description:String,
    Price: Number
},
{
    collection:"Bio_books"
}
)
module.exports = mongoose.model('Book',bookModel)