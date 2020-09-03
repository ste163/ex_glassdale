// Function capitalized because it returns HTML
export const OfficerHTML = (officerObj) => {
    return `
        <section id="officer-${officerObj.id}" class="card card__officer">
            <h4>${officerObj.name}</h4>
        </section>
    `
};