/*
 * Use AJAX to load the JSON and manipulate the HTML
 * https://joshbloom.github.io/dws1/data/rockband.json
*/
let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
let xhr = new XMLHttpRequest();
xhr.open('GET','https://joshbloom.github.io/dws1/data/rockband.json',true)
xhr.send(null)
xhr.onload=function(){
let data = JSON.parse(xhr.responseText)
//news 
let newsArticles = document.querySelectorAll('#news article')
console.log(newsArticles)
// if(newsArticles){
//     for(let x=0;x<newsArticles.length;x++){
//       newsArticles[x].querySelector('img').src =data.news[x].imageUrl;
//       newsArticles[x].querySelector('img').alt=data.news[x].title;
//       newsArticles[x].querySelector('h3').innerHTML=data.news[x].title;
//       newsArticles[x].querySelector('time').innerHTML=data.news[x].postDate;
//       newsArticles[x].querySelector('time').datetime=data.news[x].postDate;
//     }
// }

//events

//memebrs

//about
console.log(newsArticles)
}