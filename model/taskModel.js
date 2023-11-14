// require mongoose
//from mongoose , we would use a mthod called schema. thos defines d structure of the document that we would store in the collection. model is used to wrap the schema and then send it to d DB

const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    name: { 
        type: String, 
        required: true 
    },
    title: {
         type: String, 
         required: true
        } ,
    task:{
          type: String,
          required:true
    }

}, {timestamps:true})

// lets create awa model(model is what surround the schema and provides us with an interface by wich to communicate wit our database)

const TASKS = mongoose.model('Task',taskSchema);
module.exports= TASKS