function radianToDegree(radian){
    const oneRadian = 57.2958;
    const convertToDegree = radian * oneRadian;
    const result = parseFloat(convertToDegree.toFixed(2))
    return result
}

const radian = 15; 
const result = radianToDegree(radian)
console.log(result)