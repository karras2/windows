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
    titlebarhitbox.style.width = (options.width - 40) + "px";
    titlebarhitbox.style.height = "32px";
    document.getElementById("desktop").appendChild(windowElement);
    windowElement.appendChild(title);
    window.dragElement(windowElement, titlebarhitbox);
}
createNewWindow({width:400,height:200, title: "Windows"});