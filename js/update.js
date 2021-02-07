const title = document.querySelectorAll("h1.title"),
   image = document.querySelectorAll(".image"),
   source = document.querySelectorAll("span.source"),
   url = document.querySelectorAll(".url"),
   newsList = document.querySelectorAll(".newslist");

const news = {};
const key = "a7ca8e7a595974206e04ca91c5459b76";

function getNews() {
   let api = `https://gnews.io/api/v4/top-headlines?token=${key}&lang=en`;

   fetch(api)
      .then(function (response) {
         let data = response.json();
         return data;
      })
      .then(function (data) {
         data.articles.forEach((article) => {
            title = article.title;
            url = article.url;
            image = article.image;
            newsList.append(
               `<div class="item-1" <a href=${url} class='card url' <div class='thumb image' style='background-image:url(${image})> </div> <article> <h1 class='title>${title}</h1>`
            );
         });
      });
   // .then(function () {
   //    displayNews();
   // });

   data.articles.forEach((article) => {
    //    let li = document.createElement('li');
    //    let a = document.createElement('a');
    //    a.setAttribute('href', article.url);
    //    a.setAttribute('target', '_blank');
    //    a.textContent = article.title;
    //    li.appendChild(a);
    //    newsList.appendChild(li);

    // });
}

// function displayNews() {
//    title.innerHTML = news.title;
//    image.style.backgroundImage = `url(${news.image})`;
//    source.innerHTML = news.source;
//    url.innerHTML = document.querySelector('.url').href = news.url;
// }

getNews();
