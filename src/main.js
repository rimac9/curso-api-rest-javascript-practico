const api = axios.create({
  // instancia de axios
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
  params: {
    // un objeto con parametros
    api_key: API_KEY,
  }
});
// utilizamos la instancia de axios pára cada uno de nuestras soli

async function getTrendingMoviesPreview() {
    const { data } = await api("trending/movie/day");
    const movies = data.results;
    // console.log({data, movies})


    trendingMoviesPreviewList.innerHTML= "";

    movies.forEach((movie) => {
    const movieCotainer = document.createElement("div");
    movieCotainer.classList.add("movie-container");
    const movieImg = document.createElement("img");
    movieImg.classList.add("movie-img");
    movieImg.setAttribute("alt", movie.title);
    movieImg.setAttribute("src", "https://image.tmdb.org/t/p/w300" + movie.poster_path);

    movieCotainer.appendChild(movieImg);
    trendingMoviesPreviewList.appendChild(movieCotainer);
  });
}

/* Categories */ 
   
async function getCategoriesPreview() {
/* const res = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_keu=' + API_KEY);
  const data = await res.json()      .. con fetch
 */
// axios
  const { data } = await api("genre/movie/list"); //ya esta parseado

  const categories = data.genres;

  categoriesPreviewList.innerHTML = "";

  categories.forEach((category) => {
    const categoryContainer = document.createElement("div");
    categoryContainer.classList.add("category-container");

    const categoryTitle = document.createElement("h3");
    categoryTitle.classList.add("category-title");
    categoryTitle.setAttribute("id", "id" + category.id);
    categoryTitle.addEventListener('click', () => {
      location.hash = `#category=${category.id}-${category.name}`;
    })

    const categoryTitleText = document.createTextNode(category.name);
    //   categoryTitle.setAttribute("src", "https://image.tmdb.org/t/p/w300" + movie.poster_path);

    categoryTitle.appendChild(categoryTitleText);
    categoryContainer.appendChild(categoryTitle);
    categoriesPreviewList.appendChild(categoryContainer);
  });
}


async function getMoviesByCategory(id) {
  const { data } = await api("discover/movie", {
    params: {
      with_genres: id,
    }
  });
  const movies = data.results;
  genericSection.innerHTML= "";

  movies.forEach((movie) => {
  const movieCotainer = document.createElement("div");
  movieCotainer.classList.add("movie-container");
  const movieImg = document.createElement("img");
  movieImg.classList.add("movie-img");
  movieImg.setAttribute("alt", movie.title);
  movieImg.setAttribute("src", "https://image.tmdb.org/t/p/w300" + movie.poster_path);

  movieCotainer.appendChild(movieImg);
  genericSection.appendChild(movieCotainer);
});
}


// getTrendingMoviesPreview();
// getCategoriesPreview();
