export const CriminalHTML = (criminalObj) => {
    const startDate = new Date(criminalObj.incarceration.start).toLocaleDateString('en-US');
    const endDate = new Date(criminalObj.incarceration.end).toLocaleDateString('en-US')
    return `
    <section id="criminal-${criminalObj.id}" class="card card__criminal">
        <h5>${criminalObj.name}</h5>
        <p>Age: ${criminalObj.age}</p>
        <p>Crime: ${criminalObj.conviction} </p>
        <p>Term start: ${startDate}</p>
        <p>Term end: ${endDate}</p>
    </section>
    `
}