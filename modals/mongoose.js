const mongoose=require('mongoose');
const todoSchema=new mongoose.Schema({
    task:{
        type:String,
        require:true
    },
    categery:{
        type:String,
        require:true
    },
    date:{
        type:String,
        require:true
    }
});

const todol=mongoose.model('todolist',todoSchema);
module.exports=todol;