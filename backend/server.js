// Core Framework and Environment
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

// Security & Auth
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import validator from 'validator';

// File Upload
import multer from 'multer';
import cloudinary from 'cloudinary';

// Database
import mongoose from 'mongoose';

// Payment Gateways
import razorpay from 'razorpay';
import Stripe from 'stripe'; // stripe is a class, capitalize first letter

//importing functions
import {connectDB} from './config/mongodb.js';
import { connectCloudinary } from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import { productRouter } from './routes/productRoute.js';
import cartRouter from './routes/cartRoute.js';
import {orderRouter} from './routes/orderRoute.js';


// Optional: dotenv config load
dotenv.config();


//App Config
const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()


//MiddleWares
app.use(express.json());
app.use(cors());
 

//Api endpoints
app.get('/',(req,res)=>{
    res.send('api working')
})

app.use('/api/user',userRouter)
app.use('/api/product',productRouter)
app.use('/api/cart',cartRouter)
app.use('/api/order',orderRouter)

app.listen(port,()=>{
    console.log('Server started on '+port);
    
})