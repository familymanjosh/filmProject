const url = "http://www.omdbapi.com/?i=tt3896198&"


const filmBar = document.getElementById("film-bar")

const fetchAll = () => {
    fetch(`${url}${apiKey}`)
    .then(response => response.json())
    .then(filmArr => {
            console.log(filmArr)
            filmArr.forEach(film => {
            renderRandomfilm(film)
        })
    })
}
const renderRandomfilm = (film) => {
    const pTag = document.createElement("p")
    pTag.textContent = film.Title
    filmBar.append(pTag)
}