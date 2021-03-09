const title = document.querySelectorAll(".title"),
   image = document.querySelectorAll(".thumb"),
   source = document.querySelectorAll(".source"),
   url = document.querySelectorAll(".url"),
   description = document.querySelectorAll(".description");

const news_key = "a7ca8e7a595974206e04ca91c5459b76";

function getNews() {
   let api = `https://gnews.io/api/v4/top-headlines?token=${news_key}&lang=en`;

   fetch(api)
      .then(function (response) {
         let data = response.json();
         return data;
      })
      .then(function (data) {
         console.log(data);
         data.articles.forEach((article, index) => {
            title[index].innerHTML = article.title;
            image[index].style.backgroundImage = `url(${article.image})`;
            source[index].innerHTML = article.source.name;
            url[index].setAttribute("href", article.url);
            url[index].setAttribute("target", "_blank");
            description[index].innerHTML = article.description;
            
         });
      });
}

getNews();
