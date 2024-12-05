const mongoose = require('mongoose')
const url="mongodb://localhost:27017/FIT1"

async function connectMongoose(){
    await mongoose.connect(url)
    console.log('Connected to MongoDB')

    const userSchema = mongoose.Schema({
        name: String,
        email: String,
        age:Number

    })
    const userCollection=mongoose.model('User Details',userSchema)

    const users=userCollection({name:'Rajat Dey',email:'okrajat2004@gmail.com',age:20})
    await users.save()
    console.log('User saved successfully')




}
connectMongoose()