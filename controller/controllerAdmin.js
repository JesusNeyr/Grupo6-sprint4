const fs=require('fs');
const jsonDb=fs.readFileSync('./data/db.json');
const db=JSON.parse(jsonDb);

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
    changeProduct:(req,res)=>{
        res.render('admin/product/changeProduct.ejs')
    },
    ListProduct:(req,res)=>{
        let Cat = []
        let arregloCat = db.forEach(element => {
            
        });
        res.render('admin/product/listProduct.ejs',{db:db})
    },
}
module.exports=controllerAdmin;