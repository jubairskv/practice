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

 {/*function x(){
    console.log("function"); // calback function
}

function y(x){            //argument
    x();              //hiher order function
} */}
{/*
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
*/}
//------------------------------------------------------------------
//map,reduce,filter
{/* 
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
*/}

//FILTER--------------------------------------------
{/* 
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
const output6=arr.filter((x)=>x<3)*/}

//REDUCE------------------------------------------------------

const b=[5,1,3,2,6]  