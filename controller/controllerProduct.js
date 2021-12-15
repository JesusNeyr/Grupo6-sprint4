const fs=require('fs');
const jsonDb=fs.readFileSync('../model/mainJson');
const db=jsonDb('db');

const controllerProduct={
    productos:(req, res) =>{
        const productos=db.all()
        res.render('pages/productos.ejs',{db:productos})
    },
    create:(req,res)=>{
        res.render('admin/product/addProduct.ejs')
    },
    edit:(req,res)=>{
        let id=req.params.id;
        const buscar=db.buscar(id);
        res.render('admin/product/editProduct.ejs',({productoEncontrado:buscar}))
    },
    update:(req,res)=>{
        let id=req.params.id;
        const buscar=db.buscar(id);
        let objetoNew={
            "id":buscar.id,
            "name":req.body.name,
            "precio":req.body.precio,
            "descripcion":req.body.descripcion,
            "img":" ",
            "peso":req.body.peso,
            "tamanio":req.body.tamanio,
            "cat":req.body.cat,
            "offPorcen":req.body.offPorcen,
            "cantidad":req.body.cantidad,
        }
    },
    productDetail:(req, res) =>{
        res.render('pages/productDetail.ejs')
    }
};
module.exports=controllerProduct;