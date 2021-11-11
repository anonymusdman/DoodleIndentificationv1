array_1=['pen','paper','book','bottle'];
random_number = Math.floor((Math.random()*array_1.length)+1);
console.log("random number: " + random_number);
document.getElementById("sketch").innerHTML = "Sketch to be drawn" + sketch;
timer_counter = 0;
timer_check = "";
drawn_sketch = "";
answer_holder = "";
sc0re = 0;