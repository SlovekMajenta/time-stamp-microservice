const express = require('express');
const app = express();

app.get('/api/timestamp/:date_string', (req,res)=>{
    const stamp = req.params.date_string;

    const x = parseInt(stamp);
    if(x > 10000){
        const obj = {
            unix: new Date(x).getTime(),
            utc: new Date(x).toUTCString()
        };
        res.send(obj);
        return 0;
    }

    let unix1 = new Date(stamp).getTime();
    let utc1 = new Date(stamp).toUTCString();

    if(utc1 == 'Invalid Date'){
        res.send({error:"Invalid Date"});
    }
    else{
        const obj = {
            unix: unix1,
            utc: utc1
        };
        res.send(obj)
    }
})

app.get('/api/timestamp', (req,res)=>{
    const obj = {
        unix: new Date().getTime(),
        utc: new Date().toUTCString()
    };
    res.send(obj);
})

app.listen(3000, ()=> console.log("Server is now running"))