import axios from 'axios'
const BASE_URL = 'https://api.themoviedb.org/3/';
const KEY = 'c919f8b8c63efb348cc4277d55a583df'




function takePopularMovies(){
    return axios.get(`${BASE_URL}discover/movie?sort_by=popularity.desc&api_key=${KEY}`)
}

function takeMovieFind(find){
    return axios.get(`${BASE_URL}search/movie?api_key=${KEY}&language=en-US&query=${find}`)
}
function allMoviesInfo(id){
    return axios.get(`${BASE_URL}movie/${id}?api_key=${KEY}`)
}
function takeCastMovie(id){
    return axios.get(`${BASE_URL}movie/${id}/credits?api_key=${KEY}`)

}
function takeMovieReviews(id){
   return axios.get(`${BASE_URL}movie/${id}/reviews?api_key=${KEY}`)
}
export{allMoviesInfo,
    takeCastMovie,
    takePopularMovies, 
    takeMovieFind,
    takeMovieReviews,
}