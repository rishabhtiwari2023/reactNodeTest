var express = require("express")
var bodyParser = require("body-parser")
const dotenv = require('dotenv');
const fs = require('fs')
dotenv.config();
// const jwt = require('jsonwebtoken');
var jsonParser = bodyParser.json();
var mongoose = require("mongoose")
const User = require('./models/user')
const cors = require('cors');
const app = express()
app.use(cors());
app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended: true
}));

const data = JSON.parse(fs.readFileSync('./sample_data.json', 'utf-8'))
// function to compare two pairs for sorting

 city=[];
function compare(p1, p2)
{

// If frequencies are same, compare values
if (p1[1] == p2[1]) {
	return p1[0] < p2[0];
}
return p1[1] > p2[1];
}

// function to print elements sorted by frequency
function printSorted(arr)
{

// Store items and their frequencies
let m = new Map();
for (let i = 0; i < arr.length; i++) {
	if (m.has(arr[i])) {
	m.set(arr[i], m.get(arr[i]) + 1);
	} else {
	m.set(arr[i], 1);
	}
}

// no of distinct values in the array
// is equal to size of map.
let s = m.size;

// an array of pairs
let p = new Array(s);

// Fill (val, freq) pairs in an array of pairs.
let i = 0;
for (let [key, value] of m) {
	p[i] = [key, value];
	i++;
}

// sort the array of pairs using insertion sort algorithm
for (let i = 1; i < s; i++) {
	let j = i - 1;
	let key = p[i];
	while (j >= 0 && compare(p[j], key)) {
	p[j + 1] = p[j];
	j = j - 1;
	}
	p[j + 1] = key;
}

// process.stdout.write("Elements sorted by frequency are: ");
for (let i = s-1; i >= 0; i--) {
	let freq = p[i][1];
	while (freq--) {
        // console.log(p[i][0] + " ");
	}
    city.push(p[i][0]);
}
console.log(city)
}

// driver program
// let arr = [2, 3, 2, 4, 5, 12, 2, 3, 3, 3, 12];


// console.log(data[1])
// var result2=data.filter(function (n,i){
//     re =n.last_name .charAt(0);


//     phone=n.phone_price
//     email=n.email
//     inc=n.income;
//     aa=inc?.replace('$', '');
//     incomeInt=parseFloat(aa);
//     quote=n.quote
//     ln=n.last_name
//     car=n.car
//      return   (incomeInt<5 &&(car=="BMW"||car=="Mercedes"))
// })
// var result0=data.filter(function (n,i){
//     re =n.last_name .charAt(0);


//     phone=n.phone_price
//     email=n.email
//     inc=n.income;
//     aa=inc?.replace('$', '');
//     incomeInt=parseFloat(aa);
//     quote=n.quote
//     ln=n.last_name
//     car=n.car
//      return  ( !/\d/.test(email) && (car==="BMW"||car==="Mercedes"||car==="Audi"));
// })
// var result1=data.filter(function (n,i){
//     re =n.last_name .charAt(0);


//     phone=n.phone_price
//     email=n.email
//     inc=n.income;
//     aa=inc?.replace('$', '');
//     incomeInt=parseFloat(aa);
//     quote=n.quote
//     ln=n.last_name
//     car=n.car

//     // console.log(incomeInt)&&(n.quote.length>15&&email.includes(ln))

//     return    ((re=='M')&&(n.quote.length>15&& email.includes(ln.toLowerCase())))
//     // (re=='M')&&(n.quote.length>15&&)
//         // &&
//     // (incomeInt<5 &&(car=="BMW"||car=="Mercedes"))
//     // &&
//     // phone>10000   &&

//     //     && ( /\d/.test(email) && (car==="BMW"||car==="Mercedes"||car==="Audi"));
// });



var country = data.map(function(item) {
    return item.city;
  });
  const map = new Map();
const getFrequency = (array) => {

    array.forEach(item => {
       if(map[item]){
          map[item]++;
       }else{
          map[item] = 1;
       }
    });
    // console.log(map)
    return map;
 };
 printSorted(country);
 feq= getFrequency(country);
 var mapAsc = new Map([...map.entries()].sort()); 
//  console.log(map);
//  map1 = new Map([...map.entries()].sort());

// // Separately printing only keys
// for (let [key, value] of map1) {
//   console.log(key, " ");
// }
mongoose.connect('mongodb+srv://rishabh:tiwari@cluster0.t2qow.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
var db = mongoose.connection;

db.on('error', () => console.log("Error in Connecting to Database"));
db.once('open', () => console.log("Connected to Database"))

app.get("/table", async (req, res) => {



    db.collection('testjob').find({}).toArray((err, result) => {
        if (err) throw err
        results = result
        var result2 = results.filter(function (n, i) {
            re = n.last_name.charAt(0);


            phone = n.phone_price
            email = n.email
            inc = n.income;
            aa = inc?.replace('$', '');
            incomeInt = parseFloat(aa);
            quote = n.quote
            ln = n.last_name
            car = n.car
            return (incomeInt < 5 && (car == "BMW" || car == "Mercedes"))
        })

        var result0 = results.filter(function (n, i) {
            re = n.last_name.charAt(0);


            phone = n.phone_price
            email = n.email
            inc = n.income;
            aa = inc?.replace('$', '');
            incomeInt = parseFloat(aa);
            quote = n.quote
            ln = n.last_name
            car = n.car
            return (!/\d/.test(email) && (car === "BMW" || car === "Mercedes" || car === "Audi"));
        })
        var result1 = results.filter(function (n, i) {
            re = n.last_name.charAt(0);


            phone = n.phone_price
            email = n.email
            inc = n.income;
            aa = inc?.replace('$', '');
            incomeInt = parseFloat(aa);
            quote = n.quote
            ln = n.last_name
            car = n.car

            // console.log(incomeInt)&&(n.quote.length>15&&email.includes(ln))

            return ((re == 'M') && (n.quote.length > 15 && email.includes(ln.toLowerCase())))
            // (re=='M')&&(n.quote.length>15&&)
            // &&
            // (incomeInt<5 &&(car=="BMW"||car=="Mercedes"))
            // &&
            // phone>10000   &&

            //     && ( /\d/.test(email) && (car==="BMW"||car==="Mercedes"||car==="Audi"));
        });
        var result4 = results.filter(function (n, i) {
            re = n.last_name.charAt(0);


            phone = n.phone_price
            email = n.email
            inc = n.income;
            aa = inc?.replace('$', '');
            incomeInt = parseFloat(aa);
            quote = n.quote
            ln = n.last_name
            car = n.car

            // console.log(incomeInt)&&(n.quote.length>15&&email.includes(ln))

            return parseInt(phone) > 10000
            // (re=='M')&&(n.quote.length>15&&)
            // &&
            // (incomeInt<5 &&(car=="BMW"||car=="Mercedes"))
            // &&
            // phone>10000   &&

            //     && ( /\d/.test(email) && (car==="BMW"||car==="Mercedes"||car==="Audi"));
        });
        city1=city.slice(0, 10)
           final = [result4, result0, result1, result2,city1]

        // console.log(results)
        res.json(final)
        // })
        //    bulk2 =  db.collection('testjob').initializeUnorderedBulkOp();
        // for (let i = 0; i <=999; i++) {       
        //    let  p=new User(data[i])



        // bulk2.insert( p );}

        // db.collection('users').insertOne(data[i], function (err, collection) {
        //     if (err) throw err;
        //     console.log("Record inserted Successfully", collection);
        // d = [collection]
        // res.json(collection);

    });

    // bulk2.execute();
});


// app.post("/postEmplyees", verifyToken, async (req, res) => {
//     jwt.verify(req.token, process.env.JWT_SECRET_KEY, async (err, authData) => {
//         if (err) { res.send({ result: "invalid token" }) }
//         else {
//             console.log(req.body);
//             db.collection('EmployeeAng').insertOne(req.body, function (err, collection) {
//                 if (err) throw err;
//                 console.log("Record inserted Successfully", collection);
//                 d = [collection]
//                 res.json(collection);

//             });
//             //const student = await db.collection('details').findOne({ "StudentName": "aks" });
//             //res.json(student);
//         }
//     })
// })
app.listen(3000);
console.log("Listening on PORT 3000");
