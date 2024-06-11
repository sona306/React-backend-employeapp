const mongoose=require("mongoose")
const schema=mongoose.Schema
(
    {
        "empid":String,
        "ename":String,
        "dob":String,
        "designation":String
    }
)

let employemodel=mongoose.model("employes",schema);
module.exports={employemodel}
