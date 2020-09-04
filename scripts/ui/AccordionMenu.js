const accordion = document.querySelectorAll(".ui-accordion__btn");

export const createUiAccordion = () => {
    for (const btn of accordion) {
        btn.addEventListener("click", function() {
            this.classList.toggle("ui-accordion__active");
            const panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = (panel.scrollHeight + 100) + "px";
            }
        })
    }
}