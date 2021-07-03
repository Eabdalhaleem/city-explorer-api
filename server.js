const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
// eslint-disable-next-line no-unused-vars
const weather = require('./weather.json');
const PORT = process.env.PORT;

app.use(cors());


app.get('/weather', (req, res) => {
  // let userName =req.query.name;
  // let jobUser =req.query.job;
  let lon = req.query.lon;
  let lat = req.query.lat;
  let searchQuery = req.query.searchQuery;
  // let myData = [weather];
  try {
    let myData = () => {
      let city = weather.find((city) => {
        return city.city_name.toLowerCase() === searchQuery.toLowerCase() && city.lat === Number(lat) && city.lon === Number(lon)
      });
    };
    return city.valid_date.map(item => {
      return new ForCast(item);
    });
  
    res.json(myData());
    catch (error) {
      res.json({
        res.status(400)
        messag: 'sorry there is an Error', error: error

      })
    }
 
  }
  // let newArrayObj = myData.find((ele=>searchQuery===ele.city_name));
  // console.log(newArrayObj);
  // if(newArrayObj === undefined){
  //   res.send('Error');
  // }

  // let forCastList= newArrayObj.map((item)=>{
  //   return new ForCast(item);
  // });
  // res.json(forCastList);
  // let dataJson={
  //   name:userName,
  //   major:jobUser,


  // };
  // app.get('./weather',(req,res)=>{
  //   let lat=req.query.lat;
  //   let lon=req.query.lon;
  //   let searchQuery=req.query.searchQuery;

 //   let findData=()=>{
 //     return weather.data.map((value)=>{
 //       return new ForCast(value);
 //     })
 //   }
  //  res.json(findData()  

  // 

})

class ForCast {
  constructor(weatherlist) {
    this.valid_date = weatherlist.valid_date;
    this.description = weatherlist.weather.description;
  }
}

app.listen(PORT, () => {
  console.log(`start at : ${PORT}`);
});

