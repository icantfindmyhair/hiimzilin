function openAboutWindow() {

    openWindow('About', 300, 50, 950, 611)
      .then(win => {

        fetch("about.html")
          .then(res => res.text())
          .then(html => {
              win.querySelector(".content").innerHTML = html;
          });

        // load CSS once only
        if (!document.querySelector('link[href="about.css"]')) {
            const styleLink = document.createElement("link");
            styleLink.rel = "stylesheet";
            styleLink.href = "about.css";
            document.head.appendChild(styleLink);
        }

        const resizeHandle = win.querySelector(".resize-handle")
        if(resizeHandle) resizeHandle.remove()

        const maxBtn = win.querySelector(".maximize-btn")
        if(maxBtn) maxBtn.remove()

      });
}