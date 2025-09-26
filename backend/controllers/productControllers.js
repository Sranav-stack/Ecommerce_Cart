import {v2 as cloudinary} from "cloudinary"
import {productModel} from "../models/productModels.js"
//import toast from 'react-toastify'

//function to add products
const addProduct = async(req,res)=>{
    try{

        const {name,description,price,category,subCategory,sizes,bestseller} = req.body;

        const image1 = req.files.image1 && req.files.image1[0];
        const image2 = req.files.image2 && req.files.image2[0];
        const image3 = req.files.image3 && req.files.image3[0];
        const image4 = req.files.image4 && req.files.image4[0];

        const images=[image1,image2,image3,image4].filter((item)=>item!==undefined) //create an array to store images to store this is cloudinary

        let imagesUrl = await Promise.all(
            images.map(async(item)=>{
                let result = await cloudinary.uploader.upload(item.path,{resource_type:'image'});
                return result.secure_url
            })
        )

        const productData = {
            name,
            description,
            category,
            price:Number(price),
            subCategory,
            bestseller:bestseller==="true"?true:false,
            sizes:JSON.parse(sizes),
            image:imagesUrl,
            date:Date.now()
        }

        console.log(productData);
        const product = new productModel(productData)
        await product.save()
       
        //toast.success("Product Added");
        res.json({success:true,message:"Sucessfully Added"});
    }catch(error){
        console.log(error);
        res.json({success:false,message:error.message})
    }
}
//function to add products
const listProduct = async(req,res)=>{
    try{
        const products = await productModel.find({});
        res.json({success:true,products})
    }catch(error){
        console.log(error);
        res.json({success:false,message:error.message})
    }
}
//function to add products
const removeProduct = async(req,res)=>{
    try{
        await productModel.findByIdAndDelete(req.body.id);
        res.json({success:true,message:"Product Removed Successfully"})

    }catch(error){
        console.log(error)
        res.json({success:false,message:error.message})
    }

}
//function to add products
const singleProduct = async (req, res) => {
  try {
    const { productId } = req.body;
    console.log("Product ID received:", productId); // Debug log

    const product = await productModel.findById(productId);

    if (!product) {
      return res.json({ success: false, message: "Product not found" });
    }

    return res.json({ success: true, message: product });

  } catch (error) {
    console.log("Error:", error);
    return res.json({ success: false, message: error.message });
  }
};

export { listProduct, addProduct, removeProduct, singleProduct };
