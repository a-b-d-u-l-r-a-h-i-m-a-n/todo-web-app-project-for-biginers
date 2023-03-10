const express=require('express');
const app=express();
const path=require('path');
const port=8001;
const ob=require('./config/todo_');
const todolist=require('./modals/mongoose')
// app.use('/',require('./routes'));
app.set('view engine','ejs');
app.set('views','./views');
app.use(express.static('./assets'));
app.use(express.urlencoded());
// var ta=[{
//     task:"hggjasdghfjedjf",
//     categery:'work',
//     date:"04/24/2005"
// }]
// const homecontroller=require('./controllers/home_controller');
// var arr=selected;
app.get('/',async function(err,res){
    const ta=await todolist.find();
    return res.render('home',{
        title:'Home',
        data:ta
    })
});
app.post('/taskdata',async function(req,res){
    try{
        const x=await todolist.create(req.body);
        return res.redirect('/');
    }catch(err){
        connsole.log("error while adding a task");
    }
});
app.post('/delete_',async function(req,res){
    console.log(req.body.color);
    if(req.body.color==undefined){
        return res.redirect('back');
    }
    for(let i=0;i<req.body.color.length;i++){
        await todolist.deleteOne({_id:req.body.color[i]});
    }
    return res.redirect('back');
});

app.listen(port,function(err){
    if(err){
        console.log(err+ "error while running the server");
        return;
    }
    console.log("here the server running succesfully at port number  "+port);
})