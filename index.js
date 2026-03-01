let tabs = document.querySelectorAll(".tab");
let panels = document.querySelectorAll(".panel");

tabs.forEach((tab, index) => {
    tab.addEventListener("click", function() {

        tabs.forEach(tab => {
            tab.classList.remove("active");
        })

        panels.forEach(panel=> {
            panel.classList.remove("active");
        })

        tab.classList.add("active");
        panels[index].classList.add("active");
    });
});