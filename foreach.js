const fruit = ["tao","le","xoai"];
Array.prototype.foreach1 = function(callback){
  for(let index in this) {
    if(this.hasOwnProperty(index)){
      callback(this[index],index);
    }
  }
};

fruit.foreach1(
    function(fruit,index)
  {
  console.log(fruit,index);
  }
);
