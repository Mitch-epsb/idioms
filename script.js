document.getElementById("animal-btn").addEventListener("click", animal);
function animal() {
  var num1 = prompt("Give a number");
  var num2 = prompt("Give another number");
  var ani1 = prompt("Give an animal");
  var ani2 = prompt("Give another animal");
  var output = `I own ${num1} ${ani1}s and ${num2} ${ani2}s!`;
  alert(output);
}
document.getElementById("phr1").addEventListener("click", ans1);
function ans1() {
  alert("disguise.");
}
document.getElementById("phr2").addEventListener("click", ans2);
function ans2() {
  alert("dozen.");
}
document.getElementById("phr3").addEventListener("click", ans3);
function ans3() {
  alert("never.");
}
document.getElementById("phr4").addEventListener("click", ans4);
function ans4() {
  alert("no gain.");
}
document.getElementById("phr5").addEventListener("click", ans5);
function ans5() {
  alert("when you're having fun.");
}
