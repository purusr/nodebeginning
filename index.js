import express from 'express';
import mongoose from 'mongoose';
import Student from './studentmodel.js';

mongoose.connect('mongodb+srv://krish-node:Krishna8686@cluster0.emvic.mongodb.net/?retryWrites=true&w=majority',{ useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> console.log('DB connected'))
.catch((error)=> console.log('DB has connection error'));

const app = express();


app.get('/', (req,res)=>{
  res.send('Server is live')
})


app.get('/createstudent', async(req,res)=>{
  
   const user = new Student({roll:1, name: 'kunal', department: 'BCA',contact: 1234,identity:'M'})
   try {
    await user.save()
    console.log('student added')
    const std = Student.find();
    res.json(std);
   }catch(error){
    console.log('Student not created')
    res.send('error')
   }
})


app.get('/studentdata', async(req,res)=>{
    const user = await Student.find()

    res.json(user);
})
app.listen(5000,()=>{
    console.log('Running on port 5000')
})
