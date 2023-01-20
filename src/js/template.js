export default function createMarkup(articles) {
  return articles
    .map(
      ({ url, urlToImage, author, description }) =>
        `<li>
    <article>
     <a href="${url}" target="_blank">
        <img src="${urlToImage}" alt="" />
        <h2 class="title"></h2>
        <p>Posted by: ${author}</p>
       <p>${description}</p>     </a>
</article>
  </li>`
    )
    .join('');
  ref.spiner.classList.toggle('is-hidden');
}
