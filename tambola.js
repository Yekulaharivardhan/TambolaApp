
"use strict";

 var playerCount = [];
{
for (var i=0; i<1; i++){
document.getElementById("ticket2").addEventListener('click', e=>{
     playerCount.push(i++)
     console.log(playerCount)
    
     if (playerCount[0]){
      document.getElementById("playerPosition").innerText = "Player 1 Joined!"}
      if (playerCount[1]){
        document.getElementById("playerPosition").innerText = "Player 2 Joined!"}   
        if (playerCount[2]){
document.getElementById("playerPosition").innerText = "Player 3 Joined! No More Tickets Available"}
     if(playerCount.length>=3)
    {

    document.getElementById("ticket2").disabled = true};
    
  })}}




  

var arr = [];

function chart() {
  var button = '';
  for (var i = 1; i < 91; i++) {
    button += "<button id='" + i + "'>" + i + "</button>";
  
  }
    return button
  
}

function start() {
  
  var num = Math.floor(Math.random() * 90 + 1);
  for (var i = 0; i < arr.length; i++) {
    if (num == arr[i]) {
      num = Math.floor(Math.random() * 90 + 1);
      i = 0;
            }}
  document.getElementById('number').innerHTML = num;
  document.getElementById(num).style.backgroundColor = 'cornflowerblue';

  if (arr.length == 90) {
    alert('Game Over!!!!!!!');
    location.reload();
  }
  arr.push(num);}
  {
  document.getElementById('Chartbuttons').innerHTML = chart();
}


     if (playerCount[0]){
      document.getElementById("playerPosition").innerText = "Player 1 Joined!"}
      if (playerCount[1]){
        document.getElementById("playerPosition").innerText = "Player 2 Joined!"}   
        if (playerCount[2]){
document.getElementById("playerPosition").innerText = "Player 3 Joined! No More Tickets Available"}
     if(playerCount.length>=3)
    {

    document.getElementById("ticket2").disabled = true};
    
