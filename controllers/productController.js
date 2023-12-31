const Product = require('../models/productModel')


//Get products - /api/v1/products
exports.getProducts = async (req, res, next) => {
    const products = await Product.find();
    res.status(200).json({
        success: true,
        count: products.length,
        products
    })
}

//create product - /api/v1/product/new
exports.newProduct = async (req, res, next) => {

    req.body.user = req.user.id 
    const product = await Product.create(req.body);
    res.status(201).json({
        success: true,
        product
    })

}

//Get Single product - /api/v1/product/id
exports.getSingleProduct = async (req, res, next) => {
    const product = await Product.findById(req.params.id);

    if (!product) {
        return res.status(404).json({
            success: false,
            message: "product not found"
        })
    }

    res.status(201).json({
        success: true,
        product
    })

}

//update product - /api/v1/product/id
exports.updateProduct = async (req, res, next) => {
    let product = await Product.findById(req.params.id);

    if (!product) {
        return res.status(404).json({
            success: false,
            message: "product not found"
        })
    }

    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    })

    res.status(200).json({
        success: true,
        product
    })

}

//Delete product - /api/v1/product/id
exports.deleteProduct = async (req, res, next) => {
    let product = await Product.findById(req.params.id);

    try {
        const deletedProduct = await Product.findByIdAndDelete(product);

        if (deletedProduct) {
            res.status(200).json({
                message: 'Product deleted successfully',
                deletedProduct
            });
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({
            message: 'Internal server error',
            error: error.message
        });
    }

} 