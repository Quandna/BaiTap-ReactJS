//Bai3
const arr1 = ['John', 'Pete', 'Harry']
const arr2 = ['Mary', 'Henry', 'Harry']
const arrkq = arr1
for(let i = 0;i<arr2.length;i++){
    if (arrkq.includes(arr2[i]) !== true){
      arrkq.push(arr2[i]);
    }
  }

console.log(arrkq)