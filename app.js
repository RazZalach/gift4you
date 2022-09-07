const express=require('express');
const app=express();
const cors=require('cors');
const morgan=require('morgan');
const mongoose=require('mongoose');
const hbs=require('hbs');
const path=require('path');
const cookieParser= require("cookie-parser");
const managerrouter=require('./api/v1/route/managersr.js');
const presrouter=require('./api/v1/route/presentsr.js');
const workrouter=require('./api/v1/route/workersr.js');
const categoryrouter=require('./api/v1/route/categoriesr.js');
const auth=require("./api/v1/middleware/auth");



mongoose.connect("mongodb+srv://ManagerLea:yaron123@cluster0.rgjna9k.mongodb.net/GiftForYou",{useNewUrlParser:true,useUnifiedTopology:true}).then(
    ()=>{console.log("mongodb connect!")});

app.use(cookieParser());
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({extended:false}));
//app.set('views'.path.join(__dirname,'views'));
app.set('view engine','hbs');


app.use("/mang",managerrouter);

app.get('/wm',(req,res)=>{
    res.render('wm');
})
app.get('/loginWm',(req,res)=>{
    res.render('loginwm');
})
app.get('/recover',(req,res)=>{
    res.render('recoverpass');
})
app.get('/reset',(req,res)=>{
    res.render('resetpass');
})


if(limitrenderpagebytime())
{
    app.use("/pres",presrouter);
    app.use("/work",workrouter);
    app.use("/cate",categoryrouter);


    app.get('/win',(req,res)=>{
    res.render('winnergift');
    });

    app.get('/',(req,res)=>{
    
    res.render('index');
    });


    app.get('/leader',(req,res)=>{
        res.render('leader');
    });
 
 
}
else{
    require('./api/v1/controller/workersc.js').sendgiftemail();
    app.all('*',(req,res)=>{
        res.render('expired');
    })
}




module.exports=app;



function limitrenderpagebytime(){

    const myyear=process.env.YEAR;
    const mymonth=process.env.MONTH;
    const myday=process.env.DAY;
    let ts = Date.now();
    let date_ob = new Date(ts);
    let day = date_ob.getDate();
    let month = date_ob.getMonth() + 1;

    
    if(  month < mymonth){
        return true;
    }
    else if(month == mymonth && day <=myday){
        return true;
    }
    return false; 
}


