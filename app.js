const Express=require("express")
const Mongoose=require("mongoose")
const BodyParser=require("body-parser")
const res=require("express/lib/response")

let app=Express()
app.use(BodyParser.urlencoded({extended:true}))
app.use(BodyParser.json())

var busmodel=Mongoose.model("buses",
new Mongoose.Schema(
    {
        route:String,
        name:String,
        reg:String,
        owner:String,
        contact:String
    }
))
Mongoose.connect("mongodb+srv://ligy:Liji1999@cluster0.25xx9.mongodb.net/busDB")
app.post("/api/busadd",(req,res)=>{
    var getroute=req.body.route
    var getname=req.body.name
    var getreg=req.body.reg
    var getownername=req.body.owner
    var getcontact=req.body.contact
     var data={"route":getroute,"name":getname,"reg":getreg,"owner":getownername,"contact":getcontact}
    let mybus=new busmodel(data)
    mybus.save((error,data)=>
    {
        if(error)
        {
            res.send({"status":"error","data":error})
        }
        else
        {
            res.send({"status":"success","data":data})
        }
    })
    
    
    res.send(data)
})

app.get("/api/viewbus",(req,res)=>{
    res.send(welcome)
})

app.listen(4000,()=>{
    console.log("Server Running")
})
