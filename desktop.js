document.getElementById("startButton").onclick = function() {
  document.getElementById('start').style.opacity = 1;
  document.getElementById('start').style.display = 'block';
  document.getElementById('desktop').style.display = 'none';
  window.activateStart(true);
  window.state = 0;
}
let taskbarIcons = document.getElementById('icons');
let taskbarData = ["windows.store", "winquacks.codeEditor", "andrew.notepad", "windows.calculator"];
for (let i = 0; i < taskbarData.length; i++) {
  let icon = document.createElement("div");
  icon.classList.add("taskbarIcon");
  let iconImage = document.createElement("img");
  iconImage.src = "./icons/"+window.programs[taskbarData[i]].icon+"32x32.png";
  icon.onclick = window.programs[taskbarData[i]].code;
  /*            let color = window.programs[tileData[i][i2].data].themeColor;
            text.innerHTML = window.programs[tileData[i][i2].data].name;
            tile.onclick = window.programs[tileData[i][i2].data].code;*/
  icon.appendChild(iconImage);
  iconImage.classList.add("taskbarIconImage");
  taskbarIcons.appendChild(icon);
};