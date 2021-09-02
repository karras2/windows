window.onload = function() {
// 0: Desktop
let apps = document.getElementById("apps");
let tileData = [
    [{
        data: 0,
        size: 3,
    },{
        data: 1,
        size: 1,
    },{
        data: 2,
        size: 0,
    },{
        data: 2,
        size: 0,
    },{
        data: 2,
        size: 0,
    },{
        data: 2,
        size: 0,
    },{
        data: 2,
        size: 2,
    },{
        data: 2,
        size: 1,
    },{
        data: 2,
        size: 2,
    },{
        data: 2,
        size: 1,
    },],
    [{
        data: 3,
        size: 2,
    }]
];
function createModernMessage(message, buttons) {
  let bg = document.createElement("div");
  bg.classList.add("modernMessage");
  let messageH1 = document.createElement("h1");
  messageH1.innerHTML = message;
  messageH1.style.textAlign = "center";
  bg.appendChild(messageH1);
  let center = document.createElement("center");
  for (let i = 0; i < buttons.length; i++) {
    let button = document.createElement("button");
    button.innerHTML = buttons[i].text;
    button.onclick = buttons[i].function;
    button.classList.add("modernButton");
    center.appendChild(button);
  }
  bg.appendChild(center);
  document.body.appendChild(bg);
};
createModernMessage("Message!!!!!!!!!! wow", [{text:"hi",function:()=>{alert("")}}]);
let tileAmount = 0;
for (let i = 0; i < tileData.length; i++) {
    let part = document.createElement("div");
    for (let i2 = 0; i2 < tileData[i].length; i2++) {
        let tile = document.createElement("div");
        tile.id = "tile" + tileAmount++;
        tile.classList.add("tile");
        part.appendChild(tile);
        let text = document.createElement("h3");
        let color;
        switch (tileData[i][i2].data) {
            case 0:
                text.innerHTML = "Desktop";
                tile.onclick = function() {
                    for (let i3 = 0; i3 < tileAmount; i3++) {
                        document.getElementById("tile"+i3).style.opacity = 0;
                        document.getElementById("tile"+i3).style.scale = 0.75;
                    };
                };
                color = "#F5BA45";
                break;
            case 1: 
                text.innerHTML = "Store";
                color = "#62ddbd";
                break;
            case 2:
                text.innerHTML = "Placeholder Tile";
                color = "#A9B1BC";
                break;
            case 3:
                text.innerHTML = "Do you like this simulator";
                color = "#4B89DA";
                break;
        };
        if (tileData[i][i2].size == 0) text.innerHTML = "";
        switch (tileData[i][i2].size) {
            case 0:
                tile.style.width = "56px";
                tile.style.height = "56px";
                break;
            case 1:
                tile.style.width = "120px";
                break;
            case 2:
                tile.style.width = "248px";
                break;
            case 3:
                tile.style.width = "248px";
                tile.style.height = "248px";
                break;
        };
        tile.style.backgroundColor = color;
        tile.appendChild(text);
    };
    apps.appendChild(part);
    part.classList.add("part");
};
}