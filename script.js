const urlAPI = "https://jsonplaceholder.typicode.com"

async function buscarRota(url){
    const res = await fetch(url);
    if (res.ok){
        const obj = await res.json();        
        return obj;
    }
}

async function main(){
    const users = await buscarRota(urlAPI + "/users");
    const posts = await buscarRota(urlAPI + "/posts");

    console.log(posts.length);
    for (let i = 0; i < posts.length; i++){
        const post = posts[i];
        document.getElementById("elemento").innerHTML += "<div class='card'>" + 
            "<h2>" + post.title  + "</h2>" +
            "<div>" + post.body + "</div>"
            + "</div>";
    }
}

main();