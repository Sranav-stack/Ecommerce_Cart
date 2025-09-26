import jwt from 'jsonwebtoken'

export const adminAuth = async (req,res,next)=>{
    try{
        const {token} = req.headers
        if(!token){//case where token was not provided in the body
            res.json({success:false,message:"No token is provided"})
        }
        console.log('point1')
        const token_decode = jwt.verify(token,process.env.JWT_SECRET);
        console.log('point2')
        if(token_decode!==process.env.ADMIN_EMAIL+process.env.ADMIN_PASSWORD){
            console.log('point3')
            res.json({success:false,message:"Invalid Token"})
        }
        console.log('beforenext');
        next()
    }catch(error){
        console.log(error)
        res.json({success:false,message:error.message})
    }
}