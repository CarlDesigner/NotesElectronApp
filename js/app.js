
async function getMovies() {
    const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=30090ff91f8ba8de8d7bc59a7ac96867');
    const data = await response.json();
    const randomMovie = data.results[Math.floor(Math.random() * data.results.length)];
    document.getElementById("movie-poster").src = `https://image.tmdb.org/t/p/w500/${randomMovie.poster_path}`;
    document.getElementById("movie-title").innerHTML = randomMovie.title;
    document.getElementById("movie-overview").innerHTML = randomMovie.overview;
    document.getElementById("movie-duration").innerHTML = `Duración: ${randomMovie.runtime} minutos`;
}



window.onload = function(){
    getMovies();
}
