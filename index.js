const addDays=require("date-fns/addDays");
const getDateXdays=(days)=>{
    let date=addDays(new Date(2020,07,22),days)
    return `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`
}
module.exports=getDateXdays