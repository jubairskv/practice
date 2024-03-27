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
}