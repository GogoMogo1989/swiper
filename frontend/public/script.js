const parseJSON = async (url) => {  
    const response = await fetch(url);
    return response.json();
}

const swiperComponent = (data, comp) => {
    return `
    <div class="swiper">
        <div class="swiper-wrapper">
            ${data.map(img => comp(img)).join("")}
        </div>
    </div>
    `
}

const swiperSlideComponent = ({filename, title}) => {  //itt valószínüleg a resultot küldjük be, de hogyan, azt nem tom
    return `
    <div class="swiper-slide">
        <h2>${title}</h2>
        <img src="/public/img/${filename}"> 
    </div>
    `
}

const loadEvent = async () => {
    const rootElement = document.getElementById("root")
    const result = await parseJSON("/images-list")  //images list-et, ami a server oldalon van, és a data.json-ra mutat, elmentjük egy változóban

    rootElement.insertAdjacentHTML("beforeend", swiperComponent(result, swiperSlideComponent)) //swiperComponentben meghívjuk a result, és a swiperComponent-tel.

    const swiper = new Swiper(".swiper", {
        loop: true
    })

}

window.addEventListener("load", loadEvent);