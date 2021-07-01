const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
// eslint-disable-next-line no-unused-vars
const weather= require('./weather.json');
const PORT=process.env.PORT;

app.use(cors());


app.get('/weather', (req, res)=> {
  // let lon=req.query.lon;
  // let lat=req.query.lat;
  // let searchQuery=req.query.searchQuery;

  let forCastList=weather.map((item)=>{
    return new ForCast(item);
  });
  res.json(forCastList);
});

class ForCast{
  constructor(weatherlist){
    this.date=weatherlist.valid_date;
    this.description=weatherlist.weather.description;
  }
}

app.listen(PORT,()=>{
  console.log(`start at : ${PORT}`);
});
