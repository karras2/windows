window.programs = {
    "windows.desktop": {
        icon: "Windows",
        name: "Desktop",
        code: function() {
            window.activateStart(false);
            document.getElementById("start").style.opacity = 0;
            setTimeout(function() {
                document.getElementById("start").style.display = "none";
                document.getElementById("desktop").style.display = "block";
                for (let i3 = 0; i3 < partCount; i3++) {
                    document.getElementById("part" + i3).remove();
                };
            }, 300);
        },
        themeColor: "#F5BA45",
    },
    "windows.store": {
      
    }
}