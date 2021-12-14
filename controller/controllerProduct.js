const controllerProduct={
    create:(req,res)=>{
        res.render('admin/product/addProduct.ejs')
    },
    edit:(req,res)=>{
        let id=req.params.id;
        
        res.render('admin/product/editProduct.ejs')
    }
};
module.exports=controllerProduct;