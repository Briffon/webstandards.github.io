/*
 * Use AJAX to load the JSON and manipulate the HTML
 * https://joshbloom.github.io/dws1/data/rockband.json
*/
//let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
let xhr = new XMLHttpRequest();
xhr.open('GET','https://joshbloom.github.io/dws1/data/rockband.json',true)
xhr.send(null)
xhr.onload=function(){
let data = JSON.parse(xhr.responseText)
//news 
//console.log(window)
let newsArticles = document.querySelectorAll('#news article')
if(newsArticles){
    for(let x=0;x<newsArticles.length;x++){
      newsArticles[x].querySelector('img').src =data.news[x].imageURL;
      newsArticles[x].querySelector('img').alt=data.news[x].title;
      newsArticles[x].querySelector('h3').innerHTML=data.news[x].title;
      newsArticles[x].querySelector('time').innerHTML=data.news[x].postDate;
      newsArticles[x].querySelector('time').datetime=data.news[x].postDate;
    }
}

//events
let eventsSection = document.querySelector('#events div');
	if(eventsSection){
		
        let events = '';
        let months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
        events += '<ul>';
		for(x= 0; x < data.events.length; x++){
            events+='<li>'
            events += '<p><time datetime="' + data.events[x].date + '">' + '<span id="num">'+new Date(data.events[x].date).getDate()+'</span>'+" "+'<span id="months">'+ months[new Date(data.events[x].date).getMonth()]+'</span>' + '</time></p>';
            events += '<h4>' + data.events[x].city + ', ' + data.events[x].state + '</h4>';
            events += '<p id="venue">'+data.events[x].venue+'</p>';
            events+='<img class = "location" src="" alt="location">';
            events+='<img class="ticket" src="" alt="ticket">';
            event+='</li>'
		}
        events += '</ul>';
        eventsSection.insertAdjacentHTML('afterend',events);
    }
//about 
let aboutSection = document.querySelector("#about h2")
if(aboutSection){
    let about=''
        about+='<div id="info">'
        about+='<p>'+data.about.copy+'</p>';
        about+='<blockquote>'+data.about.quote+'</blockquote>';
        aboutSection.insertAdjacentHTML('afterend',about);
        about+='</div>'
}
//members
let memberSection=document.querySelector("#about div")
if(memberSection){
let members='';
        members+='<ul>'
        for(let x=0;x<data.members.length;x++){
            members+='<img src="'+data.members[x].imageURL+'" alt ="'+data.members[x].firstname+' '+data.members[x].lastname+'">'
            //members+='<h4>'+data.members[x].firstname+" "+data.members[x].lastname+'</h4>';
            
        }
        members+='</ul>'
        memberSection.insertAdjacentHTML('afterend',members);
        // memberSection.insertAdjacentHTML('afterend',members);
}

}