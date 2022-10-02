

function radianToDegree(radian) {
    if(typeof radian !== "number"){
        const error = "please valid input"
        return error;
    }
   else{
    const oneRadian = 57.2958;
    const convertToDegree = radian * oneRadian;
    const result = parseFloat(convertToDegree.toFixed(2))
    return result
   }
}






function  isJavaScriptFile(fileName) {

    if(typeof fileName !== 'string'){
        const error = "please valid input"
        return error;
    }
                
        else if (fileName.includes('.js') !== false) {
            return true;
        }
        else {
            return false;
        }
   
}






function oilPrice(diesel, petrol, octane) {
   if(typeof diesel=== "number" && typeof petrol === "number" && typeof octane === "number"){
    const dieselPrice = 114;
    const petrolPrice = 130;
    const octanePrice = 135;
    const totalDieselPrice = dieselPrice * diesel;
    const totalPetrolPrice = petrolPrice * petrol;
    const totalOctanePrice = octanePrice * octane;
    const totalPrice = totalDieselPrice + totalPetrolPrice + totalOctanePrice;
    return totalPrice;
   }
   else{
        const error = "please valid input"
        return error;
       }
}



function publicBusFare(students){
    const publicCost = 250;
   if(typeof students === 'number'){
    const busRemaining = students % 50;
    const microBusRemaining = busRemaining % 11;
    const publicBustCountity = microBusRemaining * publicCost;
    return publicBustCountity;
   }
   else{
    const error = "please valid input"
    return error;
   }

    
}




function isBestFriend(friends1, friends2){
    const raihan = friends1.name;
    const riya = friends2.friend;
    
    const raihan1 = friends1.friend;
    const riya1 = friends2.name;

    if(typeof raihan !== 'string' || typeof raihan1 !== 'string' || typeof riya !== 'string' || typeof riya1 !== 'string'){
        const error = "please valid input"
        return error;
    }
    
    else if(raihan === riya && raihan1 === riya1){
      return true; 
    }
    
    else{
      return false;
    }
  }
  
   
    