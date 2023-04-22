export default function DataRenderer(data) {
    const container = document.getElementById('res-container');

    data.forEach(element => {
        let section = document.createElement('section');
        section.innerHTML = `
            <article>
                <img src="${element.image}" alt="Restaurant" width="300" height="400">
            </article>
            <article>
                    <h3>${element.name}</h3>
                    <hr>
            </article>
        
            <article>
                <p>${element.address}</p>
                <a href="More.html">Дэлгэрэнгүй...</a>
            </article>
        `

        container.appendChild(section);
    });
}