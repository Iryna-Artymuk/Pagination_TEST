import FetchAPINews from './api';
import createMarkup from './template';

const ref = {
  searchForm: document.querySelector('.search-form'),
  buttonSearch: document.querySelector('.js-search'),
  buttonShowMore: document.querySelector('.show-more'),
  resultList: document.querySelector('.search-box'),
  spiner: document.querySelector('.js-spiner'),
  lable: document.querySelector('.lable'),
};
ref.searchForm.addEventListener('submit', serchOnSubmit);
ref.buttonShowMore.addEventListener('click', loadMoreOnClick);
const fetchAPINews = new FetchAPINews();
let articles = [];
let searchQuery = ' ';
function serchOnSubmit(event) {
  event.preventDefault();
  ref.buttonShowMore.classList.remove('is-hidden');
  ref.lable.textContent = 'Loading...';
  ref.spiner.classList.remove('is-hidden');
  fetchAPINews.searchQuery = event.currentTarget.elements.query.value;
  fetchAPINews.resetPage();
  fetchAPINews.fetchArticls().then(articles => {
    clearSerchBox();
    appendArticles(articles);
    ref.spiner.classList.add('is-hidden');
    ref.lable.textContent = 'Show more';
  });
}

function loadMoreOnClick() {
  ref.lable.textContent = 'Loading...';
  ref.spiner.classList.remove('is-hidden');
  fetchAPINews.updatePage();
  fetchAPINews.fetchArticls().then(articles => {
    appendArticles(articles);
    ref.spiner.classList.add('is-hidden');
    ref.lable.textContent = 'Show more';
  });
}

function appendArticles(articles) {
  ref.resultList.insertAdjacentHTML('beforeend', createMarkup(articles));
}
function clearSerchBox() {
  ref.resultList.innerHTML = '';
}
