let windowPos = 0;
window.createNewWindow = function(options) {
    windowPos++;
    if (windowPos == 8) windowPos = 0;
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
    windowElement.style.left = (100 + 32 * windowPos) + "px";
    windowElement.style.top = (200 + 32 * windowPos) + "px";
    title.innerHTML = options.title;
    let titlebarhitbox = document.createElement("div");
    titlebarhitbox.style.width = (options.width - 40) + "px";
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
      if (end) end();
    };
    close.onmouseover = function() {
      closeIcon.style.backgroundColor = "#ffffff";
    };
    close.onmouseout = function() {
      closeIcon.style.backgroundColor = "#000000";
    };
    let content = document.createElement("div");
    content.style.position = "absolute";
    content.style.top = "32px";
    content.style.left = "1px";
    content.style.backgroundColor = "#f4f6f9";
    content.style.width = (options.width - 2) + "px";
    content.style.height = (options.height - 33) + "px";
    content.style.borderBottomRightRadius = "5px";
    content.style.borderBottomLeftRadius = "5px";
    windowElement.appendChild(title);
    windowElement.appendChild(close);
    windowElement.appendChild(titlebarhitbox);
    windowElement.appendChild(content);
    close.appendChild(closeIcon);
    window.dragElement(windowElement, titlebarhitbox);
    if (options.script) {
      end = options.script(windowElement, title, content);
    };
}
createNewWindow({width:400,height:200, title: "Windows Experience Sample Program",
                script: function(windowElement, title, content) {
                  // form
                  let input = document.createElement("input");
                  content.appendChild(input);
                  input.placeholder = "a input that.. does nothing";
                  let h5 = document.createElement("h5");
                  content.appendChild(h5);
                  h5.innerHTML = "Click this button, and it will change the title";
                  let button = document.createElement("button");
                  button.innerHTML = "OK";
                  content.appendChild(button);
                  button.onclick = function() { title.innerHTML = "Boom"; createNewWindow({width:300,height:32, title: "Oh wow look it changed"}) };
                  function end() {
                  };
                  return end;
                }});