// Function capitalized because it returns HTML
export const OfficerHTML = (officerObj) => {
    return `
        <section id="officer-${officerObj.id}" class="officer-card">
            <h4>${officerObj.name}</h4>
        </section>
    `
};