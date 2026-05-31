const urlAPI = "https://jsonplaceholder.typicode.com"

async function buscarRota(url){
    const res = await fetch(url);
    if (res.ok){
        const obj = await res.json();        
        return obj;
    }
}

async function buscarPostUsers(){
    const users = await buscarRota(urlAPI + "/users");
    const posts = await buscarRota(urlAPI + "/posts");

    console.log(users);
    for (let i = 0; i < posts.length; i++){
        const post = posts[i];
        const userId = post["userId"];
        const userCarac = users.find(u => u.id === userId);
        const userName = userCarac["username"];

        document.getElementById("elemento").innerHTML += "<div class='card'>" + 
            "<h2>" + post.title  + "</h2>" +
            "<h3>" + userName + "</h3>" +
            "<div>" + post.body + "</div>"
            + "</div>";
    }
}

buscarPostUsers();