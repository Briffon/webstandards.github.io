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
console.log(data)
}