const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var multer  = require('multer')
// var uploads = multer({ dest: 'FOREX/images/' })

// For FOREX
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './FOREX/images/')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now()+file.originalname )
    }
  })
  
  const Fil_Filter=(req, file, cb)=>{
      if(file.mimetype ==='image/png' || file.mimetype ==='image/jpeg' || file.mimetype ==='image/jpg'){
          cb(null, true)
      }
      else{
          cb(null, false)
      }
  }
var UploaDs = multer({ 
    storage:storage,
    limits:{
        fileSize: 1024 * 1024 * 5
    },
    Fil_Filter:Fil_Filter
 })

// for CFD
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './CFD/images/')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now()+file.originalname )
    }
  })
  
  const Files_Filter=(req, file, cb)=>{
      if(file.mimetype ==='image/png' || file.mimetype ==='image/jpeg' || file.mimetype ==='image/jpg'){
          cb(null, true)
      }
      else{
          cb(null, false)
      }
  }
var UploaD = multer({ 
    storage:storage,
    limits:{
        fileSize: 1024 * 1024 * 5
    },
    Files_Filter:Files_Filter
 })
// for FAV
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './FAV/images/')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now()+file.originalname )
    }
  })
  
  const file_Filter=(req, file, cb)=>{
      if(file.mimetype ==='image/png' || file.mimetype ==='image/jpeg' || file.mimetype ==='image/jpg'){
          cb(null, true)
      }
      else{
          cb(null, false)
      }
  }
var up_loads = multer({ 
    storage:storage,
    limits:{
        fileSize: 1024 * 1024 * 5
    },
    file_Filter:file_Filter
 })
// for All.js
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './quotes/images/')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now()+file.originalname )
    }
  })
  
  const filFilter=(req, file, cb)=>{
      if(file.mimetype ==='image/png' || file.mimetype ==='image/jpeg' || file.mimetype ==='image/jpg'){
          cb(null, true)
      }
      else{
          cb(null, false)
      }
  }
var uploaded = multer({ 
    storage:storage,
    limits:{
        fileSize: 1024 * 1024 * 5
    },
    filFilter:filFilter
 })

//  end all.js

// for file
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './upload/images/')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now()+file.originalname )
    }
  })
  
  const fileFilter=(req, file, cb)=>{
      if(file.mimetype ==='image/png' || file.mimetype ==='image/jpeg' || file.mimetype ==='image/jpg'){
          cb(null, true)
      }
      else{
          cb(null, false)
      }
  }
var upload = multer({ 
    storage:storage,
    limits:{
        fileSize: 1024 * 1024 * 5
    },
    fileFilter:fileFilter
 })
//  end file
// for modify order

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './modify/images/')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now()+file.originalname )
    }
  })
  
  const filesFilter=(req, file, cb)=>{
      if(file.mimetype ==='image/png' || file.mimetype ==='image/jpeg' || file.mimetype ==='image/jpg'){
          cb(null, true)
      }
      else{
          cb(null, false)
      }
  }
var uploading = multer({ 
    storage:storage,
    limits:{
        fileSize: 1024 * 1024 * 5
    },
    filesFilter:filesFilter
 })
//  for close orders

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/images/')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now()+file.originalname )
    }
  })
  
  const fileFiltered=(req, file, cb)=>{
      if(file.mimetype ==='image/png' || file.mimetype ==='image/jpeg' || file.mimetype ==='image/jpg'){
          cb(null, true)
      }
      else{
          cb(null, false)
      }
  }
var upload_s = multer({ 
    storage:storage,
    limits:{
        fileSize: 1024 * 1024 * 5
    },
    fileFiltered:fileFiltered
 })

// const fileupload = require('express-fileupload');
// mongoose.connect("mongodb://localhost/register", {useNewUrlParser: true, useUnifiedTopology:true})


mongoose.connect("mongodb+srv://Gitanjli:s5e8yi2zL0enaooY@cluster0-l1r0o.mongodb.net/StoreData?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology:true})
.then(()=>{
    console.log('connected')
})
.catch((err)=>{
    console.log('connected to mongodb', err)
})

let user = require('./database/user');
let Model = require('./database/country');
let File = require('./database/file');
let closeOrder = require('./database/closeOrder');
let History = require('./database/history');
let modifyOrder = require('./database/modifyOrder');
let All = require('./database/all');
let FAV = require('./database/fav');
let CFD = require('./database/cfd');
let FOREX = require('./database/forex');
let Balance = require('./database/Balance')

const app = express();
app.use(cors());
app.use(bodyParser.json());
// app.use(fileupload());

// For Balance
app.post('/api/balance', function(req, res){
    Equity = req.body.Equity;
    Margin = req.body.Margin;
    Level = req.body.Level;
    Free = req.body.Free;
    Credit = req.body.Credit;
    Profit = req.body.Profit;
    
    balance = new Balance({
        'Equity': Equity,
        'Margin': Margin,
        'Level': Level,
        'Free': Free,
        'Credit': Credit,
        'Profit': Profit
    });
    balance.save( function(err, data){
        if(err) {
            res.json({'err':'1', 'msg': 'Not insert successfully', 'err':err})
        }
        else{
            res.json({'err':0, 'msg': 'insert successfully', 'data':data})
        }
    })
    
})

// for FOREX
app.post('/api/forex', UploaDs.single('image'), function(req, res, next){
    Instr = req.body.Instr;
    Bid = req.body.Bid;
    Ask = req.body.Ask

    Forex = new FOREX({
        'Instr': Instr,
        'Bid': Bid,
        'Ask': Ask,
        'image':req.file.path
    });
    Forex.save(function(err, data){
        if(err){
            res.json({'err':'1', 'msg':'Not Insert Successfully', 'err':err})
        }
        else{
            res.json({'err':'0', 'msg':'Insert Successfully', 'data': data})
        }
    })
})
// For CFD
app.post('/api/cfd', UploaD.single('image'), function(req, res, next){
    Instr = req.body.Instr;
    Bid = req.body.Bid;
    Ask = req.body.Ask

    Cfd = new CFD({
        'Instr': Instr,
        'Bid': Bid,
        'Ask': Ask,
        'image':req.file.path
    });
    Cfd.save(function(err, data){
        if(err){
            res.json({'err':'1', 'msg':'Not Insert Successfully', 'err':err})
        }
        else{
            res.json({'err':'0', 'msg':'Insert Successfully', 'data': data})
        }
    })
})

// For FAV
app.post('/api/fav', up_loads.single('image') ,function(req, res, next){
    Instr = req.body.Instr;
    Bid = req.body.Bid;
    Ask = req.body.Ask

    FaV = new FAV({
        'Instr': Instr,
        'Bid': Bid,
        'Ask': Ask,
        'image': req.file.path
    });
    FaV.save(function(err, data){
        if(err)
        {
            res.json({'err':'1', 'msg': 'Not Insert Successfully', 'err': err})
        }
        else
        {
            res.json({'0': '0', 'msg': 'Insert Successfully', 'data': data})
        }
        console.log(req.body)
    })
})

// for History
app.post('/api/history', function(req, res){
    Instr = req.body.Instr;
    Type = req.body.Type;
    Volume = req.body.Volume;
    Profit = req.body.Profit;
    open_time = req.body.open_time;
    open_price = req.body.open_price;
    commision = req.body.commision;
    Take_profit = req.body.Take_profit;
    spot_loss = req.body.spot_loss;
    swap = req.bodyswap;
    close_time = req.body.close_time;
    close_price = req.body.close_price

    Hist=new History({
        'Instr': Instr,
         'Type':Type, 
         'Volume':Volume,
         'Profit':Profit,
         'open_time':open_time,
         'open_price':open_price,
         'commision':commision,
         'Take_profit':Take_profit,
         'spot_loss':spot_loss,
         'swap':swap,
         'close_time':close_time,
         'close_price': close_price

    });
    Hist.save(function(err, data){
        if(err){
            res.json({'err': 1, 'msg': ' Table Not insert successfully', 'err': err})
     }
     else{
         res.json({'err':0, 'msg': 'Table Insert Successfully', 'data':data})
     }
     console.log(req.body)

    })

})


// close order
app.post('/api/close_order', uploading.single('image'), function(req, res, next){
    console.log(req.file);

    Type = req.body.Type;
    volume = req.body.volume;
    open_price = req.body.open_price;
    open_time = req.body.open_time;
    commission = req.body.commission;
    swap = req.body.swap;
    s_l = req.body.s_l;
    t_p = req.body.t_p;   
    
    close=new closeOrder({
        'Type': Type,
        'volume': volume,
        'open_price': open_price,
        'open_time': open_time,
        'commission': commission,
        'swap': swap,
        's_l': s_l,
        't_p': t_p,
        'image': req.file.path
    });

    close.save()
    .then(doc=>{
        res.status(201).json({
            message:" Inserted successfully",
            results:doc
        });
    })
    .catch(err=>{
        res.json(err);
    });
    
})

// modify order
app.post('/api/modifyorder', upload_s.single('image'), function(req, res, next){
    console.log(req.file);

    Type = req.body.Type;
    volume = req.body.volume;
    open_price = req.body.open_price;
    open_time = req.body.open_time;
    commission = req.body.commission;
    swap = req.body.swap;
    profit = req.body.profit
    s_l = req.body.s_l;
    t_p = req.body.t_p;
    
    Modify=new modifyOrder({
        'Type': Type,
        'volume': volume,
        'open_price': open_price,
        'open_time': open_time,
        'commission': commission,
        'swap': swap,
        'profit': profit,
        's_l': s_l,
        't_p': t_p,
        'image': req.file.path
    });

    Modify.save()
    .then(doc=>{
        res.status(201).json({
            message:" Inserted successfully",
            results:doc
        });
    })
    .catch(err=>{
        res.json(err);
    });
    
})

// All.js
app.post('/api/all', uploaded.single('image'), function(req, res, next){
    console.log(req.file);

    instr = req.body.instr;
    bid = req.body.bid;
    ask = req.body.ask;
    
    alls=new All({
        'instr': instr,
        'bid': bid,
        'ask': ask,
        'image': req.file.path
    });

    alls.save()
    .then(doc=>{
        res.status(201).json({
            message:" Inserted successfully",
            results:doc
        });
    })
    .catch(err=>{
        res.json(err);
    });
    
})
// end all.js

// file or image upload
app.post('/api/upload', upload.single('image'), function(req, res, next){
    console.log(req.file);

    instr = req.body.instr;
    bid = req.body.bid;
    ask = req.body.ask;
    
    details=new File({
        'instr': instr,
        'bid': bid,
        'ask': ask,
        'image': req.file.path
    });

    details.save()
    .then(doc=>{
        res.status(201).json({
            message:"Product Inserted successfully",
            results:doc
        });
    })
    .catch(err=>{
        res.json(err);
    });
    
})

// user register
app.post('/api/register', function(req, res){
    console.log(req.body);
    firstName= req.body.firstName;
    lastName= req.body.lastName;
    country= req.body.country;
    phone= req.body.phone;
    accountCurrency= req.body.accountCurrency;
    email= req.body.email;
    accountType= req.bodyaccountType;
    password= req.bodypassword;

    key=new user({
        'firstName': firstName,
        'lastName': lastName,
        'country': country,
        'phone': phone,
        'accountCurrency': accountCurrency,
        'email': email,
        'accountType': accountType,
        'password': password
    });
    key.save(function(err, data){
        if(err){
            res.json({'err': 1, 'msg': 'Not insert successfully', 'err': err})
     }
     else{
         res.json({'err':0, 'msg': 'Insert Successfully', 'data':data})
     }
     console.log(req.body)

    })

});

app.get("/", (request, response) => {
    response.send({'error':0, 'message':'Api Working Successfully'});
});

// login
app.post('/api/login', function(req, res) {
    let email=req.body.email;
    let pass=req.body.pass;
    console.log(email)
    console.log(pass)
    user.find({'email':email, 'password':pass}, function(err,data){
        if(err) {
            res.json({'err':1, 'msg':'Some error occour'})
        }
        else if(data.length==0){
            res.json({'err':1, 'msg':'Email or pass is not coorect'})
        }
        else
        {
            res.json({'err':0, 'msg':'Login successfully', 'login':email})
        }
    })

})

// country model

app.post('/api/model', function(req, res) {
  let instr=req.body.instr;
   let type= req.body.type;
   let volume= req.body.volume;
   let profit= req.body.profit;
   let open_time= req.body.open_time;
   let open_price= req.body.open_price;
   let commission= req.body.commission;
   let take_profit= req.body.take_profit;
   let stop_loss= req.body.stop_loss;
   let swap = req.body.swap;
   let img_flag = req.bodyimg_flag
   Model.find({
       'instr':instr,
       'type':type, 
       'volume':volume,
       'profit':profit,
       'open_time':open_time,
       'open_price':open_price,
       'commission':commission,
       'take_profit':take_profit,
       'stop_loss':stop_loss,
       'swap':swap,
       'img_flag': img_flag
    }, function(err,data){
        if(err) {
            res.json({'err':1, 'msg':'Some error occour'})
        }
        else if(data.length==0){
            res.json({'err':1, 'msg':'Wrong credentials'})
        }
        else
        {
            res.json({'err':0, 'msg':'Fetch Successfully', 'data':img_flag})
        }
    })

});

// country
app.post('/api/country', function(req, res){
    console.log(req.body);
    instr= req.body.instr;
    type= req.body.type;
    volume= req.body.volume;
    profit= req.body.profit;
    open_time= req.body.open_time;
    open_price= req.body.open_price;
    commission= req.body.commission;
    take_profit= req.body.take_profit;
    stop_loss= req.body.stop_loss;
    swap = req.body.swap;
    img_flag = req.bodyimg_flag

    model=new Model({
        'instr': instr,
        'type': type,
        'volume': volume,
        'profit': profit,
        'open_time': open_time,
        'open_price': open_price,
        'commission': commission,
        'take_profit': take_profit,
        'stop_loss': stop_loss,
        'swap': swap,
        'img_flag': img_flag

    });
    model.save(function(err, data){
        if(err){
            res.json({'err': 0, 'msg': ' Table Not insert successfully', 'err': err})
     }
     else{
         res.json({'err':0, 'msg': 'Table Insert Successfully', 'data':data})
     }
     console.log(req.body)

    })
})

// file or image upload


app.listen(4545, ()=>{'App is running on port 4545'})