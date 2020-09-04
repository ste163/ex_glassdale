const accordion = document.querySelectorAll(".ui-accordion__btn");

export const createUiAccordion = () => {
    for (const btn of accordion) {
        btn.addEventListener("click", function() {
            this.classList.toggle("ui-accordion__active");
            const panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                // The 999 is to increase the scroll height. Otherwise, the nested menus wont work
                // This breaks the animations though. I should probably not allow for Criminals to be 
                // collapsable. There isn't any reason for it, really.
                panel.style.maxHeight = (panel.scrollHeight * 999) + "px";
            }
        })
    }
}