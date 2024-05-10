let today = new Date();
let hour = today.getHours()
let greetings;

if(hour > 17){
  greetings = 'Good Evening';
  document.body.style.backgroundColor="#2D3250"
  document.getElementById("p_info").style.color="white"
}
else if(hour >= 12){
  greetings = 'Good Afternoon'
  document.body.style.backgroundColor="#F8F6E3"
}
else{
  greetings = 'Good Morning'
}

document.getElementById("greeting").append(greetings)
console.log(greetings)