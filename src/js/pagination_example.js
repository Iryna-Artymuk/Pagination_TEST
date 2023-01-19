import FetchAPINews from './api';
import createMarkup from './template';

const ref = {
  searchForm: document.querySelector('.search-form'),
  buttonSearch: document.querySelector('.js-search'),
  buttonShowMore: document.querySelector('.show-more'),
  resultList: document.querySelector('.search-box'),
};
ref.searchForm.addEventListener('submit', serchOnSubmit);
ref.buttonShowMore.addEventListener('click', loadMoreOnClick);
const fetchAPINews = new FetchAPINews();
let articles = [];
let searchQuery = ' ';
function serchOnSubmit(event) {
  event.preventDefault();
  fetchAPINews.searchQuery = event.currentTarget.elements.query.value;
  fetchAPINews.resetPage();
  fetchAPINews.fetchArticls().then(articles => {
    clearSerchBox();
    appendArticles(articles);
  });
}

function loadMoreOnClick() {
  fetchAPINews.updatePage();
  fetchAPINews.fetchArticls().then(articles => {
    appendArticles(articles);
  });
}

function appendArticles(articles) {
  ref.resultList.insertAdjacentHTML('beforeend', createMarkup(articles));
}
function clearSerchBox() {
  ref.resultList.innerHTML = '';
}
