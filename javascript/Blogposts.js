const url = "https://henrikturoy.no/wp-json/wp/v2/posts?_embed=true&per_page=3&offset=9"
const content = document.querySelector(".home-content--posts")


listPosts = (posts) => {
    
    for (let i of posts) { 
        console.log(i)
        let newContent = `
        <div class="blog-Container--Post">
            <h4>${i.title.rendered}</h4>
            <img class="postImg" src="${i._embedded["wp:featuredmedia"][0].source_url}" "alt = "${i._embedded["wp:featuredmedia"][0].alt_text}"></img>
            <a href="#${i.id}" class="post-button" >Read More</a>
            <hr>
            
        </div>
        `
       content.innerHTML += newContent;
    }
}


fetch(url, {
	"method": "GET",
})
.then(response => response.json())
.then(data => listPosts(data))
.catch(error => {
  console.error(error.message);
  content.innerHTML = `<div class="error">Does not work</div>`;    
})