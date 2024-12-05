const{MongoClient}=require('mongodb')
const uri="mongodb://localhost:27017/FIT1"

async function connectDB(){
    try{
        const client=new MongoClient(uri)
        await client.connect()
        console.log("Connected to MongoDB")
        const database=client.db()
        const collection=database.collection("STUDENTS")
        const data=await collection.insertOne({Name: "Rajat Dey",Roll:21})
        console.log("Data inserted successfully")
    }
    catch(err){
        if(err) console.log("Error connecting to MongoDB",err)
    }
}
connectDB()