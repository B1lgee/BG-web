let salbar1, salbar2, salbar3;
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        console.log(data[0].image);
        let salbar1 = `
            <article class="pic1">
                <img src="${data[0].image}" alt="Restaurant" width="300" height="400">
            </article>
            <article class="title-1">
                    <h3>${data[0].name}</h3>
                    <hr>
            </article>
           
            <article class="text-1">
                <p>${data[0].address}</p>
                <a href="More.html">Дэлгэрэнгүй...</a>
            </article>
        `
        let salbar2 = `
        <article class="pic2">
            <img src="${data[1].image}" alt="Restaurant" width="300" height="400">
        </article>
        <article class="title-2">
                <h3>${data[1].name}</h3>
                <hr>
        </article>
       
        <article class="text-2">
            <p>${data[1].address}</p>
            <a href="More.html">Дэлгэрэнгүй...</a>
        </article>
        `
        let salbar3 = `
        <article class="pic3">
            <img src="${data[2].image}" alt="Restaurant" width="300" height="400">
        </article>
        <article class="title-3">
                <h3>${data[2].name}</h3>
                <hr>
        </article>
      
        <article class="text-3">
            <p>${data[2].address}</p>
            <a href="More.html">Дэлгэрэнгүй...</a>
        </article>
    `
        document.getElementById("restaurant-1").innerHTML = salbar1;
        document.getElementById("restaurant-2").innerHTML = salbar2;
        document.getElementById("restaurant-3").innerHTML = salbar3;
    });