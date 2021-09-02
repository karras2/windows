document.getElementById("startButton").onclick = function() {
  document.getElementById('start').style.opacity = 1;
  document.getElementById('start').style.display = 'block';
  document.getElementById('desktop').style.display = 'none';
  window.activateStart(true);
}
let taskbarIcons = document.getElementById('icons');
for (let i = 0; i < 10; i++) {
  let icon = document.createElement("div");
  icon.classList.add("taskbarIcon");
  let iconImage = document.createElement("img");
  iconImage.src = "./icons/Questionmark32x32.png";
  
};