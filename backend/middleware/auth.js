import jwt from 'jsonwebtoken';

const authUser = (req, res, next) => {
    console.log("hala")
    const {token} = req.headers;
    console.log("Token is read")
    if (!token) {
        return res.status(401).json({ success: false, message: 'No token provided' });
    }
    try {
        console.log("inside try")
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);
        console.log("Decoded Token is",token_decode)
        req.body.userId = token_decode.id;
        next();
    } catch (error) {
        return res.status(401).json({ success: false, message: 'Invalid token' });
    }
};

export { authUser };
