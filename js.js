// IN THE DATA FUNCTION 
$(document).ready(function()){

}
let output = ' ';
let latestNews = data.articles;


for ( let i in latestNews){
    output += `
        <div class='item-1'>
            <a href=${latestNews[i].url} class='card url'>
            <div class="thumb image" style="background-image: url(${latestNews[i].image});"></div>
            <article>
              <h1 class="title">${latestNews[i].title}</h1>
              <span class="source">${latestNews[i].source.name}</span>
            </article>
          </a>
        </div>
    `;
}