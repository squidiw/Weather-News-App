const title = document.querySelectorAll(".title"),
   image = document.querySelectorAll("div.image"),
   
   source = document.querySelectorAll("span.source"),
   url = document.querySelectorAll(".url"),
   newsList = document.querySelector(".band");

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
             x++;
         });

         // data.articles.forEach((article, idx) => {
         //    const content =`

            
         //       <div class="item-1 ${idx}">
         //          <a href=${article.url} class="card url">
         //             <div class="thumb image" style="background-image: url(${article.image});"></div>
         //             <article>
         //                <h1 class="title">${article.title}</h1>
         //                <span class="source">${article.source.name}</span>
         //             </article>
         //          </a>
         
         //    `;

         //    newsList.innerHTML += content;
         // });





         // data.articles.forEach((article) => {
         //    let li = document.createElement('li');
         //    let a = document.createElement('a');
         //    a.setAttribute('href', article.url);
         //    a.setAttribute('target', '_blank');
         //    a.textContent = article.title;
         //    li.appendChild(a);
         //    newsList.appendChild(li);

         // });


         // data.articles.forEach( article => {
         //    let header = document.createElement('header');
         //    let band = document.createElement('div');
         //    band.classList.add('band');
         //    let card = document.createElement('a');
         //    card.setAttribute('href', article.url);
         //    card.classList.add('card');
         //    let bgImg = document.createElement('div');
         //    bgImg.classList.add('thumb');
         //    bgImg.style.backgroundImage = `url(${article.image})`;
         //    let artEl = document.createElement('article');
         //    let h1 = document.createElement('h1');
         //    h1.classList.add('title');
         //    h1.innerHTML= article.title;
         //    let span = document.createElement('span');
         //    span.classList.add('source');
         //    span.innerHTML = article.source.name;

         //    band.append(card,bgImg,artEl,h1,span);
         //    newsList.append(band);

         // })


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
   // .then(function () {
   //    displayNews();
   // });
}

// function displayNews() {
//    title.innerHTML = news.title;
//    image.style.backgroundImage = `url(${news.image})`;
//    source.innerHTML = news.source;
//    url.innerHTML = document.querySelector('.url').href = news.url;
// }

getNews();
