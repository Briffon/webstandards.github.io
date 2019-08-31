
function more(event){
    let eventsSection= document.querySelector('section')
    console.log(eventsSection)
    let events='';
    events+='<article>'
    events+='<time datetime="2019-08-29"><span>Aug</span>29</time>';
    events+='<h3>New Title</h3>';
    events+='<p>JS events information </p>';
    events+='<a class="location" href="location">Location</a>';
    events+='<a class="tickets" href="Tickets">See Tickets</a>';
    events+='</article>'
    eventsSection.insertAdjacentHTML('beforeend',events);
}

let viewMore= document.querySelector('.button');
viewMore.addEventListener('click',more);