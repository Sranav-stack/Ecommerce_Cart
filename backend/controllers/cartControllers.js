import { userModel } from "../models/userModel.js";
/**
 * Adds a product to the user's cart.
 * Expects req.body to contain productId and quantity.
 */
const addToCart = async (req, res) => {
    try {
        const { userId, itemId, size } = req.body;
        let userData = await userModel.findById(userId);

        if (!userData) {
            return res.status(404).json({ error: 'User not found' });
        }
        let cartData = userData.cartData;

        if (cartData[itemId]){
            if(cartData[itemId][size]){
                cartData[itemId][size]+=1
            }else{
                cartData[itemId][size]=1
            }

        }else{
            cartData[itemId]={}
            cartData[itemId][size]=1
        }

        await userModel.findByIdAndUpdate(userId,{cartData})


        res.status(201).json({ message: 'Product added to cart' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to add product to cart',details: error.message });
    }
};

/**
 * Updates a product's quantity in the user's cart.
 * Expects req.body to contain productId and new quantity.
 */
const updateCart = async (req, res) => {
    try {
        // Example: Find user's cart and update product quantity
        // Replace with actual DB logic
        // const cart = await Cart.findOne({ userId: req.user.id });
        // const product = cart.products.find(p => p.productId === productId);
        // if (product) product.quantity = quantity;
        // await cart.save();
        const { userId, itemId, size, quantity } = req.body;
        let userData = await userModel.findById(userId);

        if (!userData) {
            return res.status(404).json({ error: 'User not found' });
        }

        let cartData = userData.cartData;     
        cartData[itemId][size]=quantity
        await userModel.findByIdAndUpdate(userId,{cartData})
        res.status(200).json({ message: 'Product updated in cart' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to update product in cart' });
    }
};

/**
 * Removes a product from the user's cart.
 * Expects req.params.productId to specify which product to remove.
 */
const getUserCart = async (req, res) => {
    try {
        // Get the user's cart details by userId
        const { userId } = req.body;
        let userData = await userModel.findById(userId);

        if (!userData) {
            return res.status(404).json({ error: 'User not found' });
        }

        const cartData = userData.cartData;
        res.status(200).json({ message: 'Cart fetched successfully',cartData });
    } catch (error) {
        res.status(500).json({ error: 'Failed to remove product from cart' });
    }
};

export { addToCart,getUserCart, updateCart }


