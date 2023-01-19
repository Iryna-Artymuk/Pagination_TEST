export default class FetchAPINews {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.articles = [];
  }
  fetchArticls() {
    const KEY = '062bf34c983c4314afff4d4a61abca42';
    const URL = `https://newsapi.org/v2/everything?q=${this.searchQuery}&pageSize=5&page=${this.page}&sortBy=relevancy&language=en`;

    const option = {
      headers: {
        Authorization: KEY,
      },
    };
    return fetch(URL, option)
      .then(res => res.json())
      .then(data => {
        return data.articles;
      });
  }
  updatePage() {
    this.page += 1;
  }
  resetPage() {
    this.page = 1;
  }
}
