var express = require('express');
var router = express.Router();
var pool = require("./pool");
var upload = require("./multer");

/* Action submit button subcategoryinterface */
router.post('/subcategorysubmit',upload.single('icon'), function(req, res, next) {
    try{
        pool.query("insert into subcategory(categoryid,subcategoryname,status,icon) value(?,?,?,?)",[req.body.categoryid,req.body.subcategoryname,req.body.status,req.file.filename],function(error,result){
            if(error)
            {
                return res.status(200).json({status:false,message:'server Error(Database).....'})
            }
            else{
                return res.status(200).json({status:true,message:'subcategory submitted successfuly.....'})
            }
        })
    }
    catch(e)
    {
        return res.status(200).json({status:false,message:'server not responding pls contact server admin.....'})
    }
});


  router.get('/subcategorylist', function(req, res, next) {
    try{
        pool.query("select S.*,(select C.categoryname from category C where C.categoryid=S.categoryid) as categoryname from subcategory S",function(error,result){
            if(error)
            {
                return res.status(200).json({status:false,data:[]})
            }
            else{
                return res.status(200).json({status:true,data:result})
            }
        })
    }
    catch(e)
    {
        return res.status(200).json({status:false,data:[]})
    }
});

router.post('/subcategoryEditData',upload.single('icon'), function(req, res, next) {
    try{
        pool.query("update subcategory set categoryid=?,subcategoryname=?,status=? where subcategoryid=?",[req.body.categoryid,req.body.subcategoryname,req.body.status,req.body.subcategoryid],function(error,result){
            if(error)
            {
                return res.status(200).json({status:false,message:'server Error(Database).....'})
            }
            else{
                return res.status(200).json({status:true,message:'Subcategory Edited successfuly.....'})
            }
        })
    }
    catch(e)
    {
        return res.status(200).json({status:false,message:'server not responding pls contact server admin.....'})
    }
});

router.post('/subcategoryediticon',upload.single('icon'), function(req, res, next) {
    try{
        pool.query("update subcategory set icon=? where subcategoryid=?",[req.file.filename,req.body.subcategoryid],function(error,result){
            if(error)
            {
                return res.status(200).json({status:false,message:'server Error(Database).....'})
            }
            else{
                return res.status(200).json({status:true,message:'Icon Updated successfuly.....'})
            }
        })
    }
    catch(e)
    {
        return res.status(200).json({status:false,message:'server not responding pls contact server admin.....'})
    }
});

router.post('/subcategory_deletedata', function(req, res, next) {
    try{
        pool.query("delete from subcategory where subcategoryid=?",[req.body.subcategoryid],function(error,result){
            if(error)
            {
                return res.status(200).json({status:false,message:'server Error(Database).....'})
            }
            else{
                return res.status(200).json({status:true,message:'Subcategory Deleted successfuly.....'})
            }
        })
    }
    catch(e)
    {
        return res.status(200).json({status:false,message:'server not responding pls contact server admin.....'})
    }
});


router.post('/subcategorylist_by_categoryid', function(req, res, next) {
    try{
        pool.query("select S.*,(select C.categoryname from category C where C.categoryid=S.categoryid) as categoryname from subcategory S where S.categoryid=?",[req.body.categoryid],function(error,result){
            if(error)
            {
                return res.status(200).json({status:false,data:[]})
            }
            else{
                return res.status(200).json({status:true,data:result})
            }
        })
    }
    catch(e)
    {
        return res.status(200).json({status:false,data:[]})
    }
});


module.exports = router;
