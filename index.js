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
