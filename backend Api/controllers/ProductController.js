const productModel = require('../models/Product')
//uploading image on cloudinary
var cloudinary = require('cloudinary').v2;
cloudinary.config({
    cloud_name: 'dtmlikaii',
    api_key: '851966655832888',
    api_secret: '6Nrh9yRy-hTfjucr_ixPR1pDW6k'
});

class ProductController {

    static getAllProducts = async(req,res) => {
        try{
            const allProducts = await productModel.find()
            res.status(200).json({
                success: true,
                allProducts
            })
        }catch(err){
            res.send(err)
        }
    } 

    static getProductDetail = async(req,res) => {
        try{
            const productDetail = await productModel.findById(req.params.id)
            res.status(200).json({
                success: true,
                productDetail
            })
        }catch(err){
            res.send(err)
        }
    }

    static getAdminProduct = async(req,res) => {
        try{
            const data = await productModel.find()
            res.status(200).json({
                success: true,
                data
            })
        }catch(err){
            res.send(err)
        }
    }

    static deleteProduct = async(req,res) => {
        try{
            const data = await productModel.findByIdAndDelete(req.params.id)
            res
            .status(200)
            .send({ status: "success", message: "Product deleted successfully 😃🍻"});
        }catch(err){
            res.send(err)
        }
    }

    static createProduct = async(req,res) => {
        try{
            console.log(req.body)
            console.log(req.files)
            const file = req.files.images
            const myCloud = await cloudinary.uploader.upload(file.tempFilePath,{
                folder : 'userImage'
            })

            const {name, description, price, stock, rating, category} = req.body
            const data = new productModel({
                name: name,
                description: description,
                price: price,
                stock: stock,
                rating: rating,
                category: category,
                images: {
                    public_id: myCloud.public_id,
                    url: myCloud.secure_url,
                },
            })
            const insertedData = await data.save()
            // console.log(insertedData);
            res
            .status(201)
            .json({ status: "success", message: "Product added Successfully 😃🍻",insertedData});
        }catch(err){
            res.send(err)
        }
    }

    static updateProduct = async(req,res) => {
        try {
            //console.log(req.body)
            //console.log(req.files)
            if (req.files) {
                const product = await productModel.findById(req.params.id);
                const image_id = product.images.public_id;
                await cloudinary.uploader.destroy(image_id);
                const file = req.files.images
                const myimage = await cloudinary.uploader.upload(file.tempFilePath, {
                    folder: "profileapi",
                    width: 150,
                });
                var data = {
                    name: req.body.name,
                    description: req.body.description,
                    price: req.body.price,
                    stock: req.body.stock,
                    rating: req.body.rating,
                    images: {
                        public_id: myimage.public_id,
                        url: myimage.secure_url,
                    },
                    category: req.body.category
                }
            } else {
                var data = {
                    name: req.body.name,
                    description: req.body.description,
                    price: req.body.price,
                    stock: req.body.stock,
                    rating: req.body.rating,
                    category: req.body.category
                }
            }

            const updateProduct = await productModel.findByIdAndUpdate(
                req.params.id,
                data
            );
            res.status(200).json({
                success: true,
                updateProduct,
            });
        }catch(err){
            res.send(err)
        }
    }

}

module.exports = ProductController