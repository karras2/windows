import interact from 'https://cdn.interactjs.io/v1.10.11/interactjs/index.js'

let windowPos = 0;
window.createNewWindow = function(options) {
    function exit() {
        windowElement.style.opacity = 0;
        windowElement.style.transform = 'scale(0.9)';
        windowElement.style.transition = "opacity .2s, transform .2s";
        setTimeout(function() {
            windowElement.remove()
        }, 200);
    }
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
        exit();
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
    content.style.width = "calc(100% - 2px)" //(options.width - 2) + "px";
    content.style.height = "calc(100% - 33px)" //(options.height - 33) + "px";
    content.style.borderBottomRightRadius = "5px";
    content.style.borderBottomLeftRadius = "5px";
    windowElement.appendChild(title);
    windowElement.appendChild(close);
    windowElement.appendChild(titlebarhitbox);
    windowElement.appendChild(content);
    close.appendChild(closeIcon);
    interact(windowElement)
        .resizable({
            edges: {
                top: true,
                left: true,
                bottom: true,
                right: true
            },
            listeners: {
                move: function(event) {
                    let {
                        x,
                        y
                    } = event.target.dataset

                    x = (parseFloat(x) || 0) + event.deltaRect.left
                    y = (parseFloat(y) || 0) + event.deltaRect.top

                    Object.assign(event.target.style, {
                        width: `${event.rect.width}px`,
                        height: `${event.rect.height}px`,
                        transform: `translate(${x}px, ${y}px)`
                    })

                    Object.assign(event.target.dataset, {
                        x,
                        y
                    })
                }
            },
            modifiers: [
                
                // minimum size
                interact.modifiers.restrictSize({
                    min: {
                        width: 200,
                        height: 100
                    }
                })
            ],
            margin: 1,
        })
    window.dragElement(windowElement, titlebarhitbox);
    if (options.script) {
        end = options.script(windowElement, title, content, exit);
    };
}