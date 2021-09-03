window.createNewWindow = function(options) {
    let end;
    let windowElement = document.createElement("div");
    windowElement.classList.add("window");
    windowElement.style.width = options.width + "px";
    windowElement.style.height = options.height + "px";
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
    let closeIcon = document.createElement("div");
    closeIcon.classList.add("close");
    close.onclick = function() {
      windowElement.style.opacity=0;
      windowElement.style.transform='scale(0.9)';
      setTimeout(function(){windowElement.remove()},200);
      if (title == )
    };
    close.onmouseover = function() {
      closeIcon.style.backgroundColor = "#ffffff";
    };
    close.onmouseout = function() {
      closeIcon.style.backgroundColor = "#000000";
    };
    windowElement.appendChild(title);
    windowElement.appendChild(close);
    windowElement.appendChild(titlebarhitbox);
    close.appendChild(closeIcon);
    /*       <div class="windowClose" onclick="templatewindow.style.opacity=0;templatewindow.style.transform='scale(0.9)';setTimeout(function(){templatewindow.remove()},200);">
          <div class="close">
          </div>
      </div>*/
    window.dragElement(windowElement, titlebarhitbox);
    if (options.script) {
      options.script(windowElement, title);
    };
}
createNewWindow({width:400,height:200, title: "Windows",
                script: function(windowElement, title) {
                  let interval = setInterval(function(){title.innerHTML = Math.random()}, 1000);
                  function end() {
                    clearInterval(interval);
                  };
                  return end;
                }});