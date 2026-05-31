const urlAPI = "https://jsonplaceholder.typicode.com"

buscarRota(urlAPI + "/posts");

async function buscarRota(url){
    const res = await fetch(url);
    if (res.status){
        const obj = await res.json();
        console.log(obj)
    }
}