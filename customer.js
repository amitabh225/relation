

//one to many
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
const orderSchema=new schema({
    item:String,
    price:Number,
});
const custmerSchema=new schema({
    name:String,
    orders:[{
        type:schema.Types.ObjectId,
        ref:"order"
    }]
});

const order=mongoose.model("order",orderSchema);
const customer=mongoose.model("customer",custmerSchema);
//post mongoose middleware
custmerSchema.post("findOneAndDelete",async(customer)=>{
    if(customer.orders.length){
        const resu= await order.deleteMany({_id:{$in:customer.orders}});
        console.log(resu);
        
    }
   
    
});
// const addCustomer=async()=>{
//     let cust1=new customer({
//         name:"rajat",
        
//     });
//     let cust2=new customer({
//         name:"ayush",
        
//     });
//     let order1=await order.findOne({item:"samosa"});
    
//     let order2=await order.findOne({item:"burger"});
//     cust1.orders.push(order1);
//     cust1.orders.push(order2);
//     await cust2.save();
// }
// addCustomer();
// const addOrders=async()=>{
//     await order.insertMany([
//         {
//         item:"samosa",
//         price:150
//     },
//     {
//         item:"chowmin",
//         price:190
//     },
//     {
//         item:"burger",
//         price:180
//     }]
// )
// };
// addOrders();

//delete custmer by id and delte custmer related orders 
const delCust=async()=>{
    let data=await customer.findByIdAndDelete("677b848227428d90e4197bdc");
//console.log(data);
}
delCust();






















































































































































































































































































































































