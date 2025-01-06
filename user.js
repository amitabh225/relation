//one to few

const mongoose=require("mongoose");
main().
then(()=>{
    console.log("connection with db");
})

.catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relation');

 
}
const schema=mongoose.Schema;
const userSchema=new schema({
    username:String,
    
   address:[{
    _id:false,
    location:String,
    city:String
   }],
   
});
const user=mongoose.model("user",userSchema);
const addUsers=async()=>{
    const user1=new user({
        username:"rajat",
        address:[{
            location:"gangapur",
            city:"bareilly",
        }],
     
    }); 
     user1.address.push({location:"kk",city:"ll"});
     await user1.save();
}
addUsers();

 
 
 
 
// const hello=async()=>{
//    await user1.save();
// }
// hello();


