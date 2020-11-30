const express = require('express');
const app = express();
const bodyParser= require('body-parser');
const mongoose = require('mongoose');

const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');
const userRoutes= require('./api/routes/users');

const { MONGO_URI } = require('./config')

const postsRoutes = require('./api/routes/products')

//connect to MongoDB
mongoose.connect(MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(()=> console.log('MongoDB connected'))
.catch(err => console.log(err));
mongoose.Promise = global.Promise;


//User routes
app.use('/api/products', postsRoutes)
  
app.use('/uploads',express.static('uploads'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use((req,res,next)=>{
    res.header('Access-Controll-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers',
    'Origin X-Requested-With, Content-Type, Accept, Authorization');

    if(req.method==='OPTIONS'){
        res.header('Access-Control-Allow-Methods',
        'PUT,POST,PATCH,DELETE,GET');
        return res.status(200).json({});
    }
    next();
});

//routes which should handle requests
app.use('/products', productRoutes);
app.use('/orders',orderRoutes);
app.use('/user',userRoutes);

app.use((req,res,next)=>{
const error = new Error ('Not found');
error.status = 404;
next(error);

});

app.use((error, req,res,next)=>{
res.status(error.status||500);
res.json({
    error:{
        message: error.message

    }
});
});

module.exports = app;