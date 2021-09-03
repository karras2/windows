window.onload = function() {
    // 0: Desktop
    // 1: Store
    // 2: Placeholder
    // 3: Do you like this
    let apps = document.getElementById("apps");
    let config = {
        systemColor: "#4B89DA"
    };
    let tileData = [
        [{
            data: 0,
            size: 3,
        }, {
            data: 1,
            size: 1,
        }, {
            data: 2,
            size: 0,
        }, {
            data: 2,
            size: 0,
        }, {
            data: 2,
            size: 0,
        }, {
            data: 2,
            size: 0,
        }, {
            data: 2,
            size: 2,
        }, {
            data: 2,
            size: 1,
        }, {
            data: 2,
            size: 2,
        }, {
            data: 2,
            size: 1,
        }, ],
        [{
            data: 3,
            size: 2,
        }]
    ];

    function createModernMessage(message, buttons) {
        let bg = document.createElement("div");
        bg.classList.add("modernMessage");
        bg.style.backgroundColor = config.systemColor;
        let messageH1 = document.createElement("h1");
        messageH1.innerHTML = message;
        messageH1.style.textAlign = "center";
        bg.appendChild(messageH1);
        let center = document.createElement("center");
        for (let i = 0; i < buttons.length; i++) {
            let button = document.createElement("button");
            button.innerHTML = buttons[i].text;
            button.onclick = function() {
                if (buttons[i].function != undefined) setTimeout(buttons[i].function, 200);
                bg.style.opacity = 0;
                setTimeout(function() {
                    bg.remove()
                }, 400);
            };
            button.classList.add("modernButton");
            center.appendChild(button);
        }
        bg.appendChild(center);
        document.body.appendChild(bg);
    };
    window.activateStart = function(a = false){
        for (let i3 = 0; i3 < tileAmount; i3++) {
            document.getElementById("tile" + i3).style.opacity = a ? 1 : 0;
            document.getElementById("tile" + i3).style.scale = a ? 1 : 0.75;
        };
        if (a == false) {
          setTimeout(function(){
            for (let i3 = 0; i3 < tileAmount; i3++) {
              document.getElementById("tile" + i3).classList.remove("tile");
              document.getElementById("tile" + i3).classList.add("tile");
            };
          }, 200)
        }
    }
    let tileAmount = 0;
    for (let i = 0; i < tileData.length; i++) {
        let part = document.createElement("div");
        for (let i2 = 0; i2 < tileData[i].length; i2++) {
            let tile = document.createElement("div");
            tile.id = "tile" + tileAmount++;
            tile.classList.add("tile");
            part.appendChild(tile);
            let text = document.createElement("h3");
            let icon = document.createElement("img");
            let iconFileName = "Questionmark";
            icon.classList.add("tileIcon");
            let color;
            switch (tileData[i][i2].data) {
                case 0:
                    text.innerHTML = "Desktop";
                    tile.onclick = function() {
                        window.activateStart(false);
                        document.getElementById("start").style.opacity = 0;
                        setTimeout(function(){
                            document.getElementById("start").style.display = "none";
                            document.getElementById("desktop").style.display = "block";
                        }, 300)
                    };
                    color = "#F5BA45";
                    break;
                case 1:
                    iconFileName = "MSStore";
                    text.innerHTML = "Microsoft Store";
                    color = "#62ddbd";
                    break;
                case 2:
                    text.innerHTML = "Placeholder Tile";
                    tile.onclick = function(){
                      createModernMessage("This is a useless tile to make the start menu look better", [{text: "OK"}])
                    }
                    color = "#A9B1BC";
                    break;
                case 3:
                    iconFileName = "Windows";
                    text.innerHTML = "Do you like this simulator";
                    tile.onclick = function() {
                        createModernMessage("Do you like this simulator",
                            [{
                                    text: "Yes",
                                    function: () => {
                                        createModernMessage("Thanks!", [{
                                            text: "OK"
                                        }])
                                    }
                                },
                                {
                                    text: "No",
                                    function: () => {
                                        createModernMessage("Thanks for trying it anyway!", [{
                                            text: "OK"
                                        }])
                                    },
                                }
                            ]);
                    };
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
            icon.src = "./icons/"+iconFileName+"32x32.png";
            tile.appendChild(icon);
        };
        apps.appendChild(part);
        part.classList.add("part");
    };
}