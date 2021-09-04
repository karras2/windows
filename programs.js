const experienceVersion = 5;
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
window.findProgram = function(pn) {
    for (let key in window.programs) {
        if (key == pn) return window.programs[key];
    };
    return undefined;
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
            createNewWindow({
                width: 600,
                height: 400,
                title: "Tiny notepad",
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
                    button.onclick = function() {
                        title.innerHTML = "Text Document - saved";
                        createNewWindow({
                            width: 400,
                            height: 256,
                            title: "Your text document has been saved!",
                            script: function(windowElement, title, content, exit) {
                                let writeImpression = document.createElement("textarea");
                                content.appendChild(writeImpression);
                                writeImpression.style.width = "360px";
                                writeImpression.style.height = "96px";
                                writeImpression.spellcheck = true;
                                writeImpression.placeholder = "Write your impression here if you want!";
                                let button = document.createElement("button");
                                button.innerHTML = "Close";
                                content.appendChild(button);
                                button.onclick = function() {
                                    exit()
                                };
                            }
                        })
                    };

                    function end() {};
                    return end;
                }
            });
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
                    let input = document.createElement("input");
                    input.type = "file";
                    input.style.border = "none";
                    input.style.backgroundColor = "transparent";
                    input.style.color = "black";
                    input.addEventListener('change', function() {

                        var fr = new FileReader();
                        fr.onload = function() {
                            createNewWindow({
                                width: 300,
                                height: 120,
                                title: "Warning",
                                script: function(windowElement, title, content, exit2) {
                                    let h5 = document.createElement("h5");
                                    content.appendChild(h5);
                                    h5.innerHTML = "Please run files you trust, .exes files have access to do everything";
                                    let button = document.createElement("button");
                                    button.innerHTML = "OK";
                                    content.appendChild(button);
                                    button.style.top = "20px";
                                    button.onclick = function() {
                                        let data;
                                        eval(fr.result);
                                        data.code();
                                        exit();
                                        exit2();
                                    };

                                    function end() {};
                                    return end;
                                }
                            });

                        };

                        fr.readAsText(this.files[0]);
                    })
                    content.appendChild(input);

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
        name: "Program Creator",
        code: function() {
            if (window.state == 0) goToDesktop();
            createNewWindow({
                width: 800,
                height: 700,
                resize: true,
                title: "Program Editor",
                script: function(windowElement, title, content) {
                    
                    let textarea = document.createElement("textarea");
                    content.appendChild(textarea);
                    textarea.style.width = "calc(100% - 20px)";
                    textarea.style.height = "calc(100% - 80px)";
                    textarea.style.position = "relative";
                    textarea.style.left = "10px";
                    textarea.style.top = "10px";
                    textarea.spellcheck = false
                    let button = document.createElement("button");
                    button.innerHTML = "Run directly"
                    button.onclick = function() {
                        try {
                          let error = eval(textarea.value);
                        } catch (e) {
                                      createNewWindow({
                width: 300,
                height: 300,
                resize: true,
                title: "Error at code",
                script: function(windowElement, title, content, exit) {
                    let textarea2 = document.createElement("textarea");
                    content.appendChild(textarea2);
                    textarea2.value = e;
                    textarea2.style.width = "calc(100% - 20px)";
                    textarea2.style.height = "calc(100% - 80px)";
                    textarea2.style.position = "relative";
                    textarea2.style.left = "10px";
                    textarea2.style.top = "10px";
                    textarea2.spellcheck = false
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
                        }
                    }
                    content.appendChild(button)
                    button = document.createElement("button");
                    button.innerHTML = "Run .exes file"
                    button.onclick = function() {
                        findProgram("exesloader").code();
                    }
                    content.appendChild(button)
                    button = document.createElement("button");
                    button.innerHTML = "Save as .exes"
                    button.onclick = function() {
                        console.log(JavaScriptObfuscator.obfuscate(`
data = {
icon: "Questionmark",
name: "Unknown",
code: function() {
${textarea.value}
},
themeColor: "#000000",
}
                        `).obfuscatedCode)
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