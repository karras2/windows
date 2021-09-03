window.goToDesktop = function() {
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
    "windows.store": {
        icon: "MSStore",
        name: "Microsoft Store",
        code: function(){
          goToDesktop();
          createNewWindow({width:300,height:100, title: "Windows Experience Wallpaper Remover",
                script: function(windowElement, title, content, exit) {
                  let h5 = document.createElement("h5");
                  content.appendChild(h5);
                  h5.innerHTML = "Are you sure you want to remove your wallpaper";
                  let button = document.createElement("button");
                  button.innerHTML = "Yes";
                  content.appendChild(button);
                  button.style.top = "20px";
                  button.onclick = function() {
                      createNewWindow({width:300,height:32, title: "Done, your wallpaper is now gone"});
                      document.body.style.backgroundImage = "none";
                  };
                  let button2 = document.createElement("button");
                  button2.innerHTML = "No";
                  content.appendChild(button2);
                  button2.style.top = "20px";
                  button2.onclick = function() {
                      exit();
                  };
                  function end() {
                  };
                  return end;
                }});
        },
    },
    "windows.calculator": {
        icon: "Calculator",
        name: "Calculator",
        code: function(){
createNewWindow({width:350,height:250, title: "Calculator",
  script: function(windowElement, title, content) {
    let input = document.createElement("input");
    input.style.width = "calc(100% - 30px)";
    content.appendChild(input);
    let numbers = [1,2,3,4,5,6,7,8,9,"*",0,"/","+", "-"]
    for (let i = 0; i < numbers.length; i++) {
      let button = document.createElement("button");
      content.appendChild(button);
      button.innerHTML = numbers[i];
      button.onclick = function(){input.value = input.value + button.innerHTML}
    }
    let button = document.createElement("button");
    content.appendChild(button);
    button.innerHTML = "OK";
    button.onclick = function(){input.value = eval(input.value)}
    let button2 = document.createElement("button");
    content.appendChild(button2);
    button2.innerHTML = "reset";
    button2.onclick = function(){input.value = ""}
    function end() {
    };
    return end;
}});
        },
        themeColor: "#646C77",
    },
    "winquacks.codeEditor": {
        icon: "Notepad",
        name: "Code Editor",
        code: function() {
          createNewWindow({width:800,height:700, title: "Text/Code Editor",
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
function end() {
};
return end;
}});
        },
        themeColor: "#46CEAD",
    }
}