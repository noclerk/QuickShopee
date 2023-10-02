var express = require('express');
var router = express.Router();
var pool = require("./pool")
var upload = require("./multer")

router.post('/productlistsubmit', upload.single("picture"), function (req, res, next) {
    try {     
        pool.query("insert into productlist (productlistname, productid, categoryid, subcategoryid, description, rate, offer, weight, stock, status, picture) values(?,?,?,?,?,?,?,?,?,?,?)", [req.body.productlistname, req.body.productid, req.body.categoryid, req.body.subcategoryid, req.body.description, req.body.rate, req.body.offer, req.body.weight, req.body.stock, req.body.status, req.file.filename], function (error, result) {
            if (error) {
                console.log(error)
                return res.status(200).json({ status: false, message: "Server Error (Database)...!" })
            }
            else { return res.status(200).json({ status: true, message: "Product List Submitted Successfully...!"}) }
        })
    }
    catch (e) {
        return res.status(200).json({ status: false, message: "Server not responding plz contact server administrator...!" })
    }
});
router.get('/list_product_list', function (req, res, next) {
    try {     
        pool.query("Select PL.*, (select C.categoryname from category C where C.categoryid=PL.categoryid) as categoryname, (select S.subcategoryname from subcategory S where S.subcategoryid=PL.subcategoryid) as subcategoryname, (select P.productname from products P where P.productid=PL.productid) as productname from productlist PL", function (error, result) {
            if (error) {
               console.log(error)
                return res.status(200).json({ status: false,data:[]})
            }
            else { return res.status(200).json({ status: true,data:result})}
        })
    }
    catch (e) {
        return res.status(200).json({ status: false,data:[]})
    }
});
router.post('/productlist_edit_data', function (req, res, next) {

    try {     
        pool.query("update productlist set productlistname=?, productid=?, categoryid=?, subcategoryid=?, description=?, rate=?, offer=?, weight=?, stock=?, status=? where productlistid=?", [req.body.productlistname, req.body.productid, req.body.categoryid, req.body.subcategoryid, req.body.description, req.body.rate, req.body.offer, req.body.weight, req.body.stock, req.body.status, req.body.productlistid], function (error, result) {
            if (error) {
                return res.status(200).json({ status: false, message: "Server Error (Database)...!" })
            }
            else {
                return res.status(200).json({ status: true, message: "Product List Edited Successfully...!"}) }
        })
    }
    catch (e) {
        return res.status(200).json({ status: false, message: "Server not responding plz contact server administrator...!" })
    }
});
router.post('/productlist_edit_picture', upload.single("picture"), function (req, res, next) {
    try {     
        pool.query("update productlist set picture=? where productlistid=?", [req.file.filename,req.body.productlistid], function (error, result) {
            if (error) {
                return res.status(200).json({ status: false, message: "Server Error (Database)...!" })
            }
            else { return res.status(200).json({ status: true, message: "Picture Updated Successfully...!"}) }
        })
    }
    catch (e) {
        return res.status(200).json({ status: false, message: "Server not responding plz contact server administrator...!" })
    }
});

router.post('/productlist_delete', function (req, res, next) {
    try {     
        pool.query("delete from productlist where productlistid=?", [req.body.productlistid], function (error, result) {
            if (error) {
                return res.status(200).json({ status: false, message: "Server Error (Database)...!" })
            }
            else { return res.status(200).json({ status: true, message: "Product List Deleted Successfully...!"}) }
        })
    }
    catch (e) {
        return res.status(200).json({ status: false, message: "Server not responding plz contact server administrator...!" })
    }
});

module.exports=router