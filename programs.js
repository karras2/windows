window.goToDesktop = function() {
    window.state = 1;
    window.activateStart(false);
    document.getElementById("start").style.opacity = 0;
    setTimeout(function() {
        document.getElementById("start").style.display = "none";
        document.getElementById("desktop").style.display = "block";
        for (let i3 = 0; i3 < partCount; i3++) {
            document.getElementById("part" + i3).remove();
        };
    }, 300);
};
window.programs = {
    "windows.desktop": {
        icon: "Windows",
        name: "Desktop",
        code: function() {
            goToDesktop();
        },
        themeColor: "#F5BA45",
    },
    "andrew.notepad": {
        icon: "Andrewnotepad",
        name: "Andrew Notepad",
        code: function() {
            if (window.state == 0) goToDesktop();
            createNewWindow({width:600,height:400, title: "Tiny notepad",
                script: function(windowElement, title, content) {
                  let write = document.createElement("textarea");
                       content.appendChild(write);
                       write.style.width = "569px";
                       write.style.height = "314px";
                       write.spellcheck = true
                  write.placeholder = "Write...";
                  let h5 = document.createElement("h5");
                  content.appendChild(h5);
                  h5.innerHTML = "Click save to save";
                  let button = document.createElement("button");
                  button.innerHTML = "Save";
                  content.appendChild(button);
                  button.onclick = function() { title.innerHTML = "Text Document - saved"; createNewWindow({width:400,height:256, title: "Your text document has been saved!", script: function(windowElement, title, content, exit) { let writeImpression = document.createElement("textarea"); content.appendChild(writeImpression); writeImpression.style.width = "360px"; writeImpression.style.height = "96px"; writeImpression.spellcheck = true; writeImpression.placeholder = "Write your impression here if you want!";  let button = document.createElement("button"); button.innerHTML = "Close"; content.appendChild(button); button.onclick = function() { exit() };}})};
                  function end() {
                  };
                  return end;
                }});
        },
        themeColor: "#2289c9",
    },
    "windows.store": {
        icon: "MSStore",
        name: "Microsoft Store",
        code: function() {
            if (window.state == 0) goToDesktop();
            createNewWindow({
                width: 300,
                height: 100,
                title: "Microsoft Store",
                script: function(windowElement, title, content, exit) {
                    let h5 = document.createElement("h5");
                    content.appendChild(h5);
                    h5.innerHTML = "Microsoft Store is still in development!";
                    let button = document.createElement("button");
                    button.innerHTML = "OK";
                    content.appendChild(button);
                    button.style.top = "20px";
                    button.onclick = function() {
                        exit()
                    };

                    function end() {};
                    return end;
                }
            });
        },
    },
    "exesloader": {
        icon: "Questionmark",
        name: "Exes File Loader",
        code: function() {
            if (window.state == 0) goToDesktop();
            createNewWindow({
                width: 300,
                height: 100,
                title: "Load .exes file",
                script: function(windowElement, title, content, exit) {
                    let h5 = document.createElement("h5");
                    content.appendChild(h5);
                    h5.innerHTML = "Load .exes file";
                    let button = document.createElement("button");
                    button.innerHTML = "OK";
                    content.appendChild(button);
                    button.style.top = "20px";
                    button.onclick = function() {
                        exit()
                    };

                    function end() {};
                    return end;
                }
            });
        },
    },
    "windows.calculator": {
        icon: "Calculator",
        name: "Calculator",
        code: function() {
            if (window.state == 0) goToDesktop();
            createNewWindow({
                width: 350,
                height: 250,
                title: "Calculator",
                script: function(windowElement, title, content) {
                    let input = document.createElement("input");
                    input.style.width = "calc(100% - 30px)";
                    content.appendChild(input);
                    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, "*", 0, "/", "+", "-"]
                    for (let i = 0; i < numbers.length; i++) {
                        let button = document.createElement("button");
                        content.appendChild(button);
                        button.innerHTML = numbers[i];
                        button.onclick = function() {
                            input.value = input.value + button.innerHTML
                        }
                    }
                    let button = document.createElement("button");
                    content.appendChild(button);
                    button.innerHTML = "OK";
                    button.onclick = function() {
                        input.value = eval(input.value)
                    }
                    let button2 = document.createElement("button");
                    content.appendChild(button2);
                    button2.innerHTML = "reset";
                    button2.onclick = function() {
                        input.value = ""
                    }

                    function end() {};
                    return end;
                }
            });
        },
        themeColor: "#646C77",
    },
    "winquacks.codeEditor": {
        icon: "Notepad",
        name: "Code Editor",
        code: function() {
            if (window.state == 0) goToDesktop();
            createNewWindow({
                width: 800,
                height: 700,
                title: "Text/Code Editor",
                script: function(windowElement, title, content) {
                    let textarea = document.createElement("textarea");
                    content.appendChild(textarea);
                    textarea.style.width = "760px";
                    textarea.style.height = "650px";
                    textarea.spellcheck = false
                    let button = document.createElement("button");
                    button.innerHTML = "Run"
                    button.onclick = function() {
                        eval(textarea.value);
                    }
                    content.appendChild(button)

                    function end() {};
                    return end;
                }
            });
        },
        themeColor: "#46CEAD",
    }
}