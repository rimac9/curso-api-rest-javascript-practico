searchFormBtn.addEventListener('click', () => {
  location.hash = '#search='
});
trendingBtn.addEventListener('click', () => {
  location.hash = '#trends'
});
arrowBtn.addEventListener('click', () => {
  location.hash = '#home'
});


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


  // quitar scroll
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0; // zafary
  /*  Operadores ternarios
  
  location.hash.startsWith('#trends')    ? trendsPage()       :
  location.hash.startsWith('#search=')   ? searchPage()       :
  location.hash.startsWith('#movie=')    ? movieDetailsPage() :
  location.hash.startsWith('#category=') ? categoriesPage()   :
  homePage() */
}


function homePage() {
  console.log('Home!!');

  headerSection.classList.remove('header-container--long');
  headerSection.style.background = '';
  arrowBtn.classList.add('inactive');
  arrowBtn.classList.remove('header-arrow--white');
  headerTitle.classList.remove('inactive')
  headerCategoryTitle.classList.add('inactive');
  searchForm.classList.remove('inactive');

  trendingPreviewSection.classList.remove('inactive')
  categoriesPreviewSection.classList.remove('inactive');
  genericSection.classList.add('inactive');
  movieDetailSection.classList.add('inactive');

  getTrendingMoviesPreview();
  getCategoriesPreview();
}

function categoriesPage() {
  console.log('categories!!');

  headerSection.classList.remove('header-container--long');
  headerSection.style.background = '';
  arrowBtn.classList.remove('inactive');
  arrowBtn.classList.remove('header-arrow--white');
  headerTitle.classList.add('inactive')
  headerCategoryTitle.classList.remove('inactive');
  searchForm.classList.add('inactive');

  trendingPreviewSection.classList.add('inactive')
  categoriesPreviewSection.classList.add('inactive');
  genericSection.classList.remove('inactive');
  movieDetailSection.classList.add('inactive');

  // (main-catPrev) location.hash = `#category= ${category.id}-${category.name}`
  const [_, categoryData] = location.hash.split('='); // ['#category', 'id-name'] .
  const [categoryId, categoryName] = categoryData.split('-');

  headerCategoryTitle.innerHTML = categoryName;
  getMoviesByCategory(categoryId)
}

function movieDetailsPage() {
  console.log('Movie!!');

  headerSection.classList.add('header-container--long');
  // headerSection.style.background = '';
  arrowBtn.classList.remove('inactive');
  arrowBtn.classList.add('header-arrow--white');
  headerTitle.classList.add('inactive')
  headerCategoryTitle.classList.add('inactive');
  searchForm.classList.add('inactive');

  trendingPreviewSection.classList.add('inactive')
  categoriesPreviewSection.classList.add('inactive');
  genericSection.classList.add('inactive');
  movieDetailSection.classList.remove('inactive');
}

function searchPage() {
  console.log('Search!!');

  headerSection.classList.remove('header-container--long');
  // headerSection.style.background = '';
  arrowBtn.classList.remove('inactive');
  arrowBtn.classList.remove('header-arrow--white');
  headerTitle.classList.add('inactive')
  headerCategoryTitle.classList.remove('inactive');
  searchForm.classList.remove('inactive');

  trendingPreviewSection.classList.add('inactive')
  categoriesPreviewSection.classList.add('inactive');
  genericSection.classList.remove('inactive');
  movieDetailSection.classList.add('inactive');
}

function trendsPage() {
  console.log('TRENDS!!');

  headerSection.classList.remove('header-container--long');
  // headerSection.style.background = '';
  arrowBtn.classList.remove('inactive');
  arrowBtn.classList.remove('header-arrow--white');
  headerTitle.classList.add('inactive')
  headerCategoryTitle.classList.remove('inactive');
  searchForm.classList.add('inactive');

  trendingPreviewSection.classList.add('inactive')
  categoriesPreviewSection.classList.add('inactive');
  genericSection.classList.remove('inactive');
  movieDetailSection.classList.add('inactive');
  
}

