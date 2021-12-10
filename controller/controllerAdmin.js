const controllerAdmin={
    index:(req,res)=>{
        res.render('admin/admin.ejs')
    },
    stock:(req,res)=>{
        res.render('admin/product/stockProduct.ejs')
    },
    addProduct:(req,res)=>{
        res.render('admin/product/addProduct.ejs')
    },
    addProduct2:(req,res)=>{
        res.render('admin/product/addProduct2.ejs')
    },
    changeProduct:(req,res)=>{
        res.render('admin/product/changeProduct.ejs')
    }
}
module.exports=controllerAdmin;