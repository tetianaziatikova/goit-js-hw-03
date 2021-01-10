const findBestEmployee = function(employees) {
  const keys = Object.keys(employees);
  const values = Object.values(employees);
  return keys[values.indexOf(Math.max(...values))]; 
    
};
  
  
console.log(
    findBestEmployee({
      ann: 29,
      david: 35,
      helen: 1,
      lorence: 99,
    }),
); // lorence
  
console.log(
    findBestEmployee({
      poly: 12,
      mango: 17,
      ajax: 4,
    }),
); // mango
  
console.log(
    findBestEmployee({
      lux: 147,
      david: 21,
      kiwi: 19,
      chelsy: 38,
    }),
); // lux



// let bestEmployee = 0;
//     let responseKey;

//     for(const key in employees) {
//         if(employees[key] > bestEmployee) {
//             bestEmployee = employees[key];
//             responseKey = key;
//         }
//     }
//     return responseKey;