const api = axios.create({ // instancia de axios
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    },
    params: { // un objeto con parametros
        'api_key': API_KEY,
    },

});
// utilizamos la instancia de axios ára cada uno de nuestras soli

async function getTrendingMoviesPreview() {
  const {data} = await api("trending/movie/day");
  const movies = data.results;
  // console.log({data, movies})
  movies.forEach((movie) => {
    //                                         seleccionamos d section '#' dentro del secction la clase
    const trendingPreviewMoviesContainer = document.querySelector(
      "#trendingPreview .trendingPreview-movieList"
    );

    const movieCotainer = document.createElement("div");
    movieCotainer.classList.add("movie-container");
    const movieImg = document.createElement("img");
    movieImg.classList.add("movie-img");
    movieImg.setAttribute("alt", movie.title);
    movieImg.setAttribute(
      "src",
      "https://image.tmdb.org/t/p/w300" + movie.poster_path
    );

    movieCotainer.appendChild(movieImg);
    trendingPreviewMoviesContainer.appendChild(movieCotainer);
  });
}

/* Categories */
async function getCategoriesPreview() {
  const {data} = await api("genre/movie/list"); //ya esta parseado

  const categories = data.genres;
  categories.forEach((category) => {
    //                                         seleccionamos d section '#' dentro del secction la clase
    const PreviewCategoriesContainer = document.querySelector(
      "#categoriesPreview .categoriesPreview-list"
    );
    const categoryContainer = document.createElement("div");
    categoryContainer.classList.add("category-container");
    const categoryTitle = document.createElement("h3");
    categoryTitle.classList.add("category-title");
    categoryTitle.setAttribute("id", "id" + category.id);

    const categoryTitleText = document.createTextNode(category.name);
    //   categoryTitle.setAttribute("src", "https://image.tmdb.org/t/p/w300" + movie.poster_path);

    categoryTitle.appendChild(categoryTitleText);
    categoryContainer.appendChild(categoryTitle);
    PreviewCategoriesContainer.appendChild(categoryContainer);
  });
}

// getTrendingMoviesPreview();
// getCategoriesPreview();


