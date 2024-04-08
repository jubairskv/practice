//"use strict"
// document.addEventListener("DOMContentLoaded", function() {
//     document.getElementById("clickMe").addEventListener("click", function() {
//         console.log("btn clicked");
//     });
// });
//------------------------------------------------------------------
// setTimeout Trust issue
// console.log("start");

// function eg(){
//     console.log("demo")
// }
// eg();

// eg=()=>{
//     console.log("demo")
// }
// setTimeout(eg,0);

// setTimeout( function cb(){     //js engine won't wait for setTimeout
//     console.log("callback")
// },5000)

// console.log("End");

// setTimeout( function cb(){     //js engine won't wait for setTimeout
//     console.log("callback")
// },0)

// //blocking main thread for 10s
// let startDate= new Date().getTime();
// let endDate=startDate;
// while(endDate<startDate+10000){
//     endDate=new Date().getTime();
// }
// console.log("while expires")
//------------------------------------------------------------------
//Functional programming and Higher order function

{
  /*function x(){
    console.log("function"); // calback function
}

function y(x){            //argument
    x();              //hiher order function
} */
}
{
  /*
const radius =[3,1,2,4]

const calArea = function (radius){
    const output=[]
    for (let  i=0; i<radius.length; i++){
        output.push(Math.PI *radius[i] *radius[i])
    }
    return output
}
console.log(calArea(radius));

const calCircumference = function (radius){   //DRY  principle  [Dont repeat yourself]
    const output=[]
    for (let  i=0; i<radius.length; i++){
        output.push(2 * Math.PI *radius[i])
    }
    return output
}
console.log(calCircumference(radius));

const calDiameter = function (radius){
    const output=[]
    for (let  i=0; i<radius.length; i++){
        output.push(2 *radius[i])
    }
    return output
}
console.log(calDiameter(radius));

//code optimizing upper code

const radiuss =[3,1,2,4]

const area= function(radiuss){
    return Math.PI * radiuss * radiuss;
}
const circumference= function(radiuss){
    return 2 * Math.PI * radiuss;
}
const diameter= function(radiuss){
    return 2 * radiuss ;
}
const calu =function (radiuss,logic){  // (arr, logic) both same
    const outputs =[];
    for (let i=0; i<radiuss.length;i++){
        outputs.push(logic(radiuss[i]))
    }
    return outputs
}

Array.prototype. calu =function (logic){  
    const outputs =[];
    for (let i=0; i<this.length;i++){
        outputs.push(logic(this[i]))
    }
    return outputs
}
console.log(calu(area))
console.log(radiuss.map(area));     //both 98 and 99 line return same answer both are iterating
console.log(calu(radiuss,area))
console.log(calu(radiuss,circumference))
console.log(calu(radiuss,diameter))
*/
}
//------------------------------------------------------------------
//map,reduce,filter
{
  /* 
const arr=[5,1,3,2,6]   //map iterate over an array and it returns nre array

//double-[10,2,6,2,12]
//triple-[15,3,9,6,18]
//binary-["101","1","11","10","110"]

function double(x){
   return x*2
}

function triple(x){
    return x*3
 }

 function binary(x){
    return x.toString(2)
 }

const output = arr.map(function binary(x){     //higher order function
    return x.toString(2)
 });

 const output2 = arr.map((x)=>{     //arrow  function
    return x.toString(2)
 });

 const output3 = arr.map((x)=> x.toString(2));  //optimizing code
console.log(output)
*/
}

//FILTER--------------------------------------------
{
  /* 
const a=[5,1,3,2,6]        //filter used to filter specific value in the array

function isOdd(x){
    return x%2
}

function isEven(x){
    return x%2===0
}

function gearterThan4(x){
    return x>4;
}

const output4 =a.filter(isOdd)
const output5 =a.filter(function gearterThan4(x){
    return x>4;
})
const output6=arr.filter((x)=>x<3)*/
}

//REDUCE------------------------------------------------------

//const arr=[5,1,3,2,6]

//sum  of array
{
  /* 
function findSum(arr){
    let sum=0
    for(let i=0;i<arr.length;i++){
        sum=sum+arr[i]
    }
    return sum
}
console.log(findSum(arr))

const output8=arr.reduce(function(acc,curr){
    acc=acc+curr
    return acc
},0)
console.log(output8)
*/
}

//max of array
{
  /* 
function findMax(arr){
    let max=0
    for(let i=0;i<arr.length;i++){
        max=arr[i]
    }
    return max
}
console.log(findMax(arr))

const output8=arr.reduce(function(max,curr){
    if(curr>max){
    max=curr
   }
    return max
},0)
console.log(output8)*/
}

//Real time example
{
  /*
const users=[
    {firstName:"Jubair", lastName:"Kasim",age:"25"},
    {firstName:"Gugan", lastName:"Gurunathan",age:"75"},
    {firstName:"Salman", lastName:"Kasim",age:"50"},
    {firstName:"Salman", lastName:"Kasim",age:"26"}
]
const output1=users.map((x)=> x.firstName +" "+ x.lastName
)
const output=users.map(function(x){
    return x.firstName +" "+ x.lastName
})
console.log(output)
console.log(output1)

const output2=users.reduce(function(acc,curr){
    if(acc[curr.age]){
        acc[curr.age]=++acc[curr.age]
    }else{
        acc[curr.age]=1
}
    return acc
},{})
console.log(output2)

const output3=users.filter((x)=>x.age<30).map((x)=>x.firstName)
console.log(output3)

 */
}

//Callback Hell
{
  /* 
 const cart = ["shoes", "pants","kuta"]

 api.createOrder(cart, function (){
    api.proceedToPayment(function(){         //calback Hell
        api.shoeOrderSummary(function(){    //prymid of doom
            api.updateWallet()              //risk operation bcz of inversion of control
        })                                   //if api .apiname function not work properly means entainer code will collabse
    })
 })

//promises
const carts = ["shoes", "pants","kuta"]

createOrder(carts,function(orderId){    //callback  
        preoceedToPayment(orderId)
    })
 const promise =createOrder(cart)      //initally:{data:undefine}  after undating  {data:oderId}

 promise.then(orderId){
    proceedToPayment(orderId)
 }
*/
}

//promise Example

//  const api="https://api.github.com/users/akshaymarch7"

//  const users=fetch(api)

//  users.then(function(data){
// console.log(data)
//  })

//promise chaining:
{
  /* 
const carts = ["shoes", "pants","kuta"]

createOrder(carts,function(orderId){    //callback  
        preoceedToPayment(orderId,function(paymentInfo){
            showorderSummary(paymentInfo,function(){
                updateWalletBalance()
            });
        });
    });
   
createOrder(cart)             
.then(function(orderId){
    return preoceedToPayment(orderId)            //orderId=>proceedTopayment(orderId)
})
.then(function(paymentInfo){
    return showorderSummary(paymentInfo)
})
.then(function(paymentInfo){
    return updateWalletBalance(paymentInfo)
})
*/
}

//cresting promises:
{/*
const cart = ["shoes", "pants", "kuta"];

const promise = createOrder(cart); //orderId

promise
  .then(function (orderId) {
    console.log(orderId);
    return orderId;
    //proceedTopayment(orderiD)
  })
  .catch(function (err) {
    console.log(err.message);
  })
  .then(function(orderId){
    return proceedToPayment(orderId);   //promise chaining
  })
  .then(function(PaymentInfo){
    console.log(PaymentInfo);
  })
  .catch(function (err) {
    console.log(err.message);
  })
  .then(function(orderId){
    console.log("no matters wht happens i will definetely be called")
  });
 

//producer

function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    //createorder
    //validCart
    //orderId
    if (!validateCart(cart)) {
      const err = new Error("carts is no valid");
      reject(err);
    }
    //logic for craeteOrder
    const orderId = "12345";
    if (orderId) {
      setTimeout(function () {
        resolve(orderId);
      }, 5000);
    }
  });
  return pr
}

function validateCart(cart){
    return true         //false
}
function proceedToPayment(orderId){
   return new Promise( function(resolve,reject){
    resolve("paymenty successul")
   })
} */}

//Promise API
//promise .all ():
{/* 
const p1=new Promise((resolve,reject)=>{
 // setTimeout(()=>resolve("p1 success"),5000)
  setTimeout(()=>reject("p1 fails"),2000)

});

const p2=new Promise((resolve,reject)=>{
  //setTimeout(()=>resolve("p2 success"),2000)
  setTimeout(()=>reject("p2 fails"),2000)

});

const p3=new Promise((resolve,reject)=>{
  //setTimeout(()=>resolve("p3 suscces"),1000)
  setTimeout(()=>reject("p3 reject"),4000)

});
Promise.all([p1,p2,p3]).then(res=>{
  console.log(res)
})
.catch((err)=>{
  console.error(err)
})*/}

{/* 
//promise .allsetteled ():
const p1=new Promise((resolve,reject)=>{
   //setTimeout(()=>resolve("p1 success"),5000)
   setTimeout(()=>reject("p1 fails"),2000)
 
 });
 
 const p2=new Promise((resolve,reject)=>{
   setTimeout(()=>resolve("p2 success"),2000)
   //setTimeout(()=>reject("p2 fails"),2000)
 
 });
 
 const p3=new Promise((resolve,reject)=>{
   setTimeout(()=>resolve("p3 suscces"),1000)
   //setTimeout(()=>reject("p3 reject"),4000)
 
 });
 Promise.allsetteled([p1,p2,p3]).then(res=>{
   console.log(res)
 })
 .catch((err)=>{
   console.error(err)
 })*/}

{/*
 //promise .race():
const p1=new Promise((resolve,reject)=>{
  //setTimeout(()=>resolve("p1 success"),5000)
  setTimeout(()=>reject("p1 fails"),2000)

});

const p2=new Promise((resolve,reject)=>{
  setTimeout(()=>resolve("p2 success"),1000)
  //setTimeout(()=>reject("p2 fails"),2000)

});

const p3=new Promise((resolve,reject)=>{
  setTimeout(()=>resolve("p3 suscces"),4000)
  //setTimeout(()=>reject("p3 reject"),4000)

});
Promise.race([p1,p2,p3]).then(res=>{
  console.log(res)
})
.catch((err)=>{
  console.error(err)
}) */}

{/* 
//promise .any():
const p1=new Promise((resolve,reject)=>{
  //setTimeout(()=>resolve("p1 success"),5000)
  setTimeout(()=>reject("p1 fails"),2000)

});

const p2=new Promise((resolve,reject)=>{
  setTimeout(()=>resolve("p2 success"),1000)
  //setTimeout(()=>reject("p2 fails"),2000)

});

const p3=new Promise((resolve,reject)=>{
  setTimeout(()=>resolve("p3 suscces"),4000)
  //setTimeout(()=>reject("p3 reject"),4000)

});
Promise.any([p1,p2,p3]).then(res=>{
  console.log(res)
})
.catch((err)=>{
  console.error(err)
})*/}

//promisepaasing in asyn await function:
{/* 
const p=new Promise((resolve,reject)=>
resolve("hi this promise data")
)

async function getdata(){
  return p
}
const dataPromise =getdata();
console.log(dataPromise)
dataPromise.then((res) =>console.log(res)

)

//aync and await
async function getdata1(){
  return "jubair"
}
const dataPromise1 =getdata1();
console.log(dataPromise1)
dataPromise1.then((res) =>console.log(res)

)*/}

{/* 

// comparisation of promise and after async await:
const promisedata= new Promise ((resolve,reject)=>{
  setTimeout(()=>{
    resolve("promise data")  //older way of handling promises
  }, 10000)//5000
  })

  const promisedata2= new Promise ((resolve,reject)=>{
    setTimeout(()=>{
      resolve("promise data2")  //older way of handling promises
    }, 5000)//1000
    })
 

// function get(){
//   //JS engine will not wait for promise to be resolved
//   promisedata.then((res)=>console.log(res))
//   console.log("jubair data")
// }
// get()


//after async function:
//await is a keyword used in async function
async function getPromise(){
  //js engine getPromise function suspended once it return 1 data then again it will call return data
  console.log("data")
  const val=await promisedata; 
  console.log("jubair data")  
  console.log(val);

  const val2=await promisedata2; 
  console.log("jubair data")  
  console.log(val2);
}
getPromise()*/}


//realtime API example with promise:
{/*
const Api_url4 = "https://api.github.com/users/jubairskv";

function handleApi1() {
  fetch(Api_url4)
    .then(function(data) {
      return data.json();
    })
    .then(function(jsonvalue) {
      console.log(jsonvalue);
    })
    .catch(function(error) {
      console.log(error);
    });
}

handleApi1();


//realtime API example with async await:
{/* 

const Api_url = "https://api.github.com/users/jubairskv"

async function handleApi() {
  const data = await fetch(Api_url)   //implicity promise
  const jsonvalue = await data.json()     //implicity promise
  console.log(jsonvalue)
  console.log(data)
  //fetc()=>response.json()=>jsonvalue
  //fetch().then(res=>res.json()).then(res=>console.log())
}

handleApi()*/}

//with error hadling:

// const Api_url2 = "https://api.github.com/user/jubairskv"
// async function handleApi() {
//   try {
//     const data = await fetch(Api_url2)   //implicity promise
//     const jsonvalue = await data.json()     //implicity promise}
//   } catch (err) {
//     console.log(err);
//   }

// }

// handleApi()

// //old version of handling errors

// const Api_url3 = "https://api.github.com/user/jubairskv"
// async function handleApi() {
//   const data = await fetch(Api_url3)   //implicity promise
//   const jsonvalue = await data.json()     //implicity promise
//   //console.log(jsonvalue)
  
// }
// handleApi().catch((err)=>console.log(err))

//this keyword

{/* if the value of this keyword is undefine or null 
this keywword will be replacedwith global object only
 in non strict mode */}

 //this kwyowrd value depnds on how this is called

console.log(this)

function x(){
  //the value depends on strict and non strict mode
  //the value this this is how the function is called
  console.log(this)
}

x(); //undefine in strict mode
window.x();  //window in strict mode

const data = ()=>{
  console.log(this)
}
console.log(data)

const object ={    //if u will make a function as a part of an  object that is know as method
   a:10,
   name:"jubair",
   x:function(){
    console.log(this.name); //this ref to object
   }
}
object.x(); //this inside a object's method

const student={
  name:"vagitha"
}
object.x.call(student)

//this in arrow function
{/* arrow function dont have there own this they take value of the lexical environment where they enclosed  */}
 const obj={
  a:10,
  x:function(){
    //enclosing lexical context 
    console.log(this)
    const z =()=>{
      console.log(this)
    }
    z();
  },
  y:()=>{
    console.log(this)
  }
 }
obj.x()
obj.y() // now y method refers to global space [lexical context] so this return window  

//call(),apply(),bind() in this keyword
//call apply  and bind method used fr browwing data fron different function
{/* 
const name={
  firstName:"jubair",
  lastName:"Kasim vagitha",
  printfullName:function(hometown,village){
    console.log(this.firstName + " " + this.lastName +" "+ "from" +" "+ hometown+" "+ village);
  } 
}
name.printfullName("salem","idappadi")

const name2={
  firstName:"salman",
  lastName:"kasim vagitha"
}
name.printfullName.call(name2, "salem") //in call method we pass indival argument
name.printfullName.apply(name2, ["salem","idappadi"])//in apply method we passing argument ass like array
let printfullMyname=name.printfullName.bind(name2, ["salem","idappadi"])
console.log(printfullMyname)
printfullMyname()*/}

//this keyword in dom element=>ref to html elemt     ref html code