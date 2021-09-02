window.onload = function() {
// 0: Desktop
let apps = document.getElementById("apps");
let tileData = [
    [{
        data: 0,
        size: 3,
    }],
];
for (let i = 0; i < tileData.length; i++) {
    let part = document.createElement("div");
    for (let i2 = 0; i2 < tileData[i].length; i2++) {
        let tile = document.createElement("div");
        tile.classList.add("tile");
        part.appendChild(tile);
        let text = document.createElement("h3");
        tile.style.scale = 1;
        tile.style.opacity = 1;
        switch (tileData[i][i2].data) {
            case 0:
                text.innerHTML = "Desktop";
                tile.onclick = function() {
                    alert("desktop")
                };
                break;
        };
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
        tile.appendChild(text);
    };
    apps.appendChild(part);
    part.classList.add("part");
};
}