const fruit = ["tao","le","xoai"];
Array.prototype.foreach1 = function(callback){
  for(let index in this) {
    if(this.hasOwnProperty(index)){
      callback(this[index],index,this);
    }
  }
};

fruit.foreach1(function(fruit,index,array){
  console.log(fruit,index,array);
});