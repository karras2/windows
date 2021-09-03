window.createNewWindow = function(options) {
    let windowElement = document.createElement("div");
    windowElement.classList.add("window");
    windowElement.width = options.width + "px";
    windowElement.height = options.height + "px";
    let title = document.createElement("h2");
    title.style.color = "#000000";
    title.style.width = (options.width - 40) + "px";
    title.style.height = "32px";
    title.style.float = "left";
    title.innerHTML = options.title;
    let titlebarhitbox = document.createElement("div");
    // position:absolute;top:0;left:0;width:calc(100% - 40px);height:32px;
    /*       <div id="templatewindowheader" style="position:absolute;top:0;left:0;width:calc(100% - 40px);height:32px;">
        
      </div>*/
    titlebarhitbox.style.width = (options.width - 40) + "px";
    console.log(titlebarhitbox.style.width, (options.width - 40));
    titlebarhitbox.style.height = "32px";
    titlebarhitbox.style.position = "absolute";
    titlebarhitbox.style.top = "0";
    titlebarhitbox.style.left = "0";
    document.getElementById("desktop").appendChild(windowElement);
    let close = document.createElement("div");
    close.classList.add("windowClose");
    windowElement.appendChild(title);
    windowElement.appendChild(close);
    windowElement.appendChild(titlebarhitbox);
    /*       <div class="windowClose" onclick="templatewindow.style.opacity=0;templatewindow.style.transform='scale(0.9)';setTimeout(function(){templatewindow.remove()},200);">
          <div class="close">
          </div>
      </div>*/
    window.dragElement(windowElement, titlebarhitbox);
}
createNewWindow({width:400,height:200, title: "Windows"});