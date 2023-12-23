const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, "please enter product name"],
        trim: true,
        maxLength: [100, "product name cannot exceed 100 characters"]
    },
    price: {
        type: Number,
        require: true,
        default: 0.0
    },
    description: {
        type: String,
        require: [true, "please enter product description"]
    },
    ratings: {
        type: String,
        default: 0
    },
    images: [
        {
            image: {
                type: String,
                require: true
            }
        }
    ],
    category: {
        type: String,
        require: [true, "please enter product category"],
        enum: {
            values: [
                'Electronics',
                'Mobile Phones',
                'Laptops',
                'Accessories',
                'Headphones',
                'Food',
                'Books',
                'Clothes/Shoes',
                'Beauty/Health',
                'Sports',
                'Outdoor',
                'Home'
            ],
            message: "please select correct category"
        }
    },
    seller: {
        type: String,
        require: [true, "please enter product seller"]
    },
    stack: {
        type: String,
        require: [true, "please enter product stack"],
        maxLength: [20, "product stack cannot exceed 20"]
    },
    numOfReviews: {
        type: Number,
        default: 0
    },
    reviews: [
        {
            name: {
                type: String,
                require: true
            },
            rating: {
                type: String,
                require: true
            },
            comment: {
                type: String,
                require: true
            },
        }
    ],
    user: {
        type: mongoose.Schema.Types.ObjectId
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

let schema = mongoose.model('Product', productSchema)

module.exports = schema; 