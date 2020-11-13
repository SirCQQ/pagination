const express =require("express")
const PORT = process.env.PORT || 3000
const {db} = require("./Helped/dbConnetion")
let app = express()




app.listen(PORT, ()=>{
  console.log(`Listening on http://localhost:${PORT}`);
})