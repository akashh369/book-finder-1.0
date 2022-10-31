var key='&key=AIzaSyA23CPJC1WBkyQosMz8i5xKoFh2ph8S3EQ';
var url='https://www.googleapis.com/books/v1/volumes?q=';
var query='';
var main=document.querySelector("main");
var search=document.querySelector(".mainsearch");
var searchimg=document.querySelector("#search");


searchimg.addEventListener("click",()=>{
    load(url+search.value+key);
})

{/* */}
function display(ele){
    main.innerHTML=``;    
    ele.forEach(e => {
        console.log(e);
        //const{title,authors,description,imageLinks,publishedDate,pageCount}=e;
        var a=document.createElement('div')
        a.innerHTML=`
        <div class="container">
            <h2>${e['volumeInfo']['title']}</h2>
                <div class="bookview">
                    <img src="${e['volumeInfo']["imageLinks"]["thumbnail"]}" height="400px" width="300px">
                    <div class="rowcontainer2">
                        <h2>BY:${e['volumeInfo']["authors"][0]}</h2>
                        </div>
                        </div>
                        <div class="overview">
                        <div class="desc">
                        ${e['volumeInfo']['description']}
                        </div>
                        <div class="rowcontainer">
                        <div>
                        <h3><a href="${e['accessInfo']['pdf']['acsTokenLink']}">pdf</a></h3>
                        </div>
                        <div class="rating"><h2><a href="${e['volumeInfo']['previewLink']}">preview</a></h2></div>
                        </div>
        </div> 
        `;
        main.appendChild(a);
    });
}
async function load(url){
    const response = await fetch(url);
    const result=await response.json();
    display(result['items']);
     console.log(url);
     console.log(result['items'][0]['volumeInfo']['title']);
}

// window.addEventListener('load',()=>{
//     var url2=url+'sherlock'+key;
//     load(url2);
// });
console.log(url+'sherlock&maxResults=20'+key)
load(url+'sherlock&maxResults=20'+key);
