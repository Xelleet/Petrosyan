const url = "https://official-joke-api.appspot.com/random_joke";


async function simulateWholeLife(){
    try{
        const responce = await fetch(url);
        const data = await responce.json();
        document.getElementById('joke-text').textContent = data.setup + " | " + data.punchline;
    }
    catch (error){
        console.log(error);
    }
}

document.getElementById('btn').addEventListener('click', simulateWholeLife);