var express=require('express')
var router=express.Router()
var pool=require('./pool')
var upload=require('./multer')



/* submit product data in database*/
router.post('/productsubmit',upload.single('picture'),function(req,res,next){

    try
    {
        pool.query('insert into products (productname,categoryid,subcategoryid,description,status,picture) values(?,?,?,?,?,?)',[req.body.productname,req.body.categoryid,req.body.subcategoryid,req.body.description,req.body.status,req.file.filename],function(error,result){
            if(error)
            {
                return res.status(200).json({status:false,message:'Server error(Database)....'})
            }
            else{
                return res.status(200).json({status:true,message:'Product submitted successfully....'})
            }
        })
    } 
    catch(e)
    {
        return res.status(200).json({status:false,message:'Server error....'})
    }
});
    

/* Edit product data in database*/
router.post('/product_edit_data',function(req,res,next){

    try
    {
        pool.query("update products set productname=?,categoryid=?,subcategoryid=?,description=?,status=? where productid=?",[req.body.productname,req.body.categoryid,req.body.subcategoryid,req.body.description,req.body.status,req.body.productid],function(error,result){
            if(error)
            {
                return res.status(200).json({status:false,message:'Server error(Database)....'})
            }
            else{
                return res.status(200).json({status:true,message:'Product Edited successfully....'})
            }
        })
    } 
    catch(e)
    {
        return res.status(200).json({status:false,message:'Server error....'})
    }
});

/* Edit product icon in database*/
router.post('/product_edit_icon',upload.single('picture'),function(req,res,next){

    try
    {
        pool.query("update products set picture=? where productid=?",[req.file.filename,req.body.productid], function(error,result){
            if(error)
            {
                return res.status(200).json({status:false,message:'Server error(Database)....'})
            }
            else{
                return res.status(200).json({status:true,message:'Icon Edited successfully....'})
            }
        })
    } 
    catch(e)
    {
        return res.status(200).json({status:false,message:'Server error....'})
    }
});
/*delete product from database */
router.post('/product_delete',upload.single('picture'),function(req,res,next){

    try
    {
        pool.query("delete from products where productid=?",[req.body.productid], function(error,result){
            if(error)
            {
                return res.status(200).json({status:false,message:'Server error(Database)....'})
            }
            else{
                return res.status(200).json({status:true,message:'Icon Deleted successfully....'})
            }
        })
    } 
    catch(e)
    {
        return res.status(200).json({status:false,message:'Server error....'})
    }
});
    
/* fetch categoryname and subcategory from database and display to the productdisplay*/


router.post('/product_list_by_subcategoryid',function(req,res,next){

    try
    {
        pool.query("select P.*,(select C.categoryname from category C where C.categoryid=P.categoryid)as categoryname,(select S.subcategoryname from subcategory S where S.subcategoryid=P.subcategoryid)as subcategoryname from products P where P.subcategoryid=?",[req.body.subcategoryid],function(error,result){
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




router.get('/product_list',function(req,res,next){

    try
    {
        pool.query("select P.*,(select C.categoryname from category C where C.categoryid=P.categoryid)as categoryname,(select S.subcategoryname from subcategory S where S.subcategoryid=P.subcategoryid)as subcategoryname from products P",function(error,result){
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


module.exports=router;