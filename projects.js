function openProjectsWindow() {
    openWindow("Projects", 600, 150, 700, 400);

    fetch("projects.html")
      .then(res => res.text())
      .then(html => {
        const lastWindow = document.querySelector(".window:last-child");
        lastWindow.querySelector(".content").innerHTML = html;

        if(!document.querySelector('link[href="projects.css"]')) {
          const styleLink = document.createElement("link");
          styleLink.rel = "stylesheet";
          styleLink.href = "projects.css";
          document.head.appendChild(styleLink);
        }
      });
}

function openProjectWindow(projectName) {
    // placeholder window for projects
    openWindow(projectName, 500, 350);

    fetch(`projects/${projectName}.html`)
      .then(res => res.text())
      .then(html => {
        const lastWindow = document.querySelector(".window:last-child");
        lastWindow.querySelector(".content").innerHTML = html;
      });
}