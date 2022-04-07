const express = require("express");
const fileUpload = require("express-fileupload");
const fs = require("fs");
const path = require("path");

const app = express(); //változóba mentjünk az express függvényt
const port = 9000



const pathFrontend = path.join(`${__dirname}/../frontend`) //frontend mappát elmentjük egy változóba

app.use(express.json()) //EZ mindig kell a post metódushoz!!!!!!!!!!!
app.use('/public', express.static(`${pathFrontend}/../frontend/public`)); //kijelöljük, hogy melyik mappát használjuk



app.get("/images-list", (request, response, next) => {  //http://127.0.0.1:9000/images-list-nél, a data.json adatai fognak látszani
    response.sendFile(`${pathFrontend}/data.json`); 
})

app.get("/", (request, response, next) => {  http://127.0.0.1:9000-nél, az index adatai fognak látszani
    response.sendFile(`${pathFrontend}/index.html`); 
})

app.listen(port, () => {
    console.log(`http://127.0.0.1:${port}`)
})