window.addEventListener('DOMContentLoaded', navigator, false); // Carga el contenido al cargar la pagina
window.addEventListener('hashchange', navigator, false); // Sirve para escuchar la petición

function navigator() { // vamos a llamar cada vez que cargue el navegador
  console.log({ location });
  
  if (location.hash.startsWith('#trends')) {// Pregunta si estamos en #trends
    trendsPage(); //si entra a #trends manda a llamar la funcion trendsPage()
  } else if (location.hash.startsWith('#search=')) {// Pregunta si estamos en #search
    searchPage(); //si entra a search manda a llamar la funcion search()
  } else if (location.hash.startsWith('#movie=')) {
    movieDetailsPage();
  } else if (location.hash.startsWith('#category=')) {
    categoriesPage();
  } else {
    homePage();
  }
}


function homePage() {
  console.log('Home!!');

  getTrendingMoviesPreview();
  getCategoriesPreview();
}

function categoriesPage() {
  console.log('categories!!');
}

function movieDetailsPage() {
  console.log('Movie!!');
}

function searchPage() {
  console.log('Search!!');
}

function trendsPage() {
  console.log('TRENDS!!');
}

