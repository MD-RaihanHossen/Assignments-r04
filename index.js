//1st problame 
// function radianToDegree(radian){
//     const oneRadian = 57.2958;
//     const convertToDegree = radian * oneRadian;
//     const result = parseFloat(convertToDegree.toFixed(2))
//     return result
// }

// const radian = 15; 
// const result = radianToDegree(radian)
// console.log(result)

//2nd problame
function  isJavaScriptFile(fileName){
    // const trueFileName = fileName.includes('.js');
    if(fileName.includes('.js') !== false){
        return true;
    }
    else{
        return false;
    }
}

const fileName = 'index.js';
const result = isJavaScriptFile(fileName);
console.log(result)

