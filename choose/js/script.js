var ITEMS = ["Cerebro", "Nature", "Comida", "Relax"];

var getRandom = function(start, finish){
    return Math.floor((Math.random() * finish) + start);
}

var chooseARandomItem = function(){
  var index = getRandom(0, ITEMS.length);
  alert("Result: " + ITEMS[index]);
}
