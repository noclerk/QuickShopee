var express = require('express')
var router = express.Router()
var pool=require('./pool')
var upload=require('./multer')

router.post('/productlist_by_productid',upload.single('picture'),function(req,res,next){

    try
    {
        pool.query("select PL.*,(select P.productname from products P where P.productid=PL.productid) as productname from productlist PL where PL.productid=?",[req.body.productid], function(error,result){
            if(error)
            {console.log(error)
                return res.status(200).json({status:false,data:[]})
            }
            else{
                return res.status(200).json({status:true,data:result})
            }
        })
    } 
    catch(e)
        { console.log(error)
        return res.status(200).json({status:false,data:[]})
    }
});


router.post('/submit_product_pictures',upload.any(),function(req,res,next){
    var pictures=''
    req.files.map((item)=>{
        pictures+=item.filename+","
    })
    pictures=pictures.substring(0,pictures.length-1)
    try
    {
        pool.query("insert into productpictures(categoryid,subcategoryid,productid,productlistid,pictures) values(?,?,?,?,?)",[req.body.categoryid,req.body.subcategoryid,req.body.productid,req.body.productlistid,pictures], function(error,result){
            if(error)
            {console.log(error)
                return res.status(200).json({status:false,message:'Server error (database).......'})
            }
            else{
                return res.status(200).json({status:true,message:'Product pictures submitted successfully.......'})
            }
        })
    } 
    catch(e)
        { console.log(error)
        return res.status(200).json({status:false,message:'Server error.......'})
    }
});

module.exports=router;  