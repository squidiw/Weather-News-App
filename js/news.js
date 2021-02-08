const title = document.querySelectorAll(".title"),
   image = document.querySelectorAll("div.thumb"),
   source = document.querySelectorAll("span.source"),
   url = document.querySelectorAll("a.url"),
   description = document.querySelectorAll('.description')

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
         // console.log(data);
         let x = 0;
         data.articles.forEach(article => {
            title[x].innerHTML = article.title;
            image[x].style.backgroundImage = article.image;
            source[x].innerHTML = article.source.name;
            url[x].setAttribute('href', article.url);
            url[x].setAttribute('target', '_blank');
            description[x].innerHTML = article.description;
             x++;
         });

         // data.articles.forEach((article) => {
         //    title.innerHTML = article.title;
         //    image.style.backgroundImage = article.image;
         //    source.innerHTML = article.source.name;
         //    url.setAttribute("href", article.url);
         //    url.setAttribute("target", "_blank");
         // });

         // const allNews = api.map(item => {
         //    news.title = data.articles[0].title;
         //    news.image = data.articles[0].urlToImage;
         //    news.source = data.articles[0].source.name;
         //    news.url = data.articles[0].url;
         //    news.description = data.articles[0].description;

         //    return news;

         // })
      });
}

getNews();
