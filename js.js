var typed = new Typed(".text", {
    strings: ["Frontend Developer", "YouTuber", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
 
 
var xValues = ["HTML", "CSS", "JS", "MONGODB", "NODEJS", "BOOTSTRAP", "GITHUB"];
var yValues = [95, 90, 80, 75, 65, 95,90];
var barColors = ["red", "green","blue","orange" , "pink" ,"YELLOW" , "red"];

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
     }
  }
});

// menubar
 
var sidemenu = document.getElementById("sidemenu");
function openmenu(){
  sidemenu.style.right = "0";
}
function  closemenu(){
  sidemenu.style.right = "-200px";
}
 
