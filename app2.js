let output = document.querySelector("#output");

async function hello() {
    try {
        let result = await fetch(
            "https://v2.jokeapi.dev/joke/Programming?type=single"
        );
        let data = await result.json();
        // console.log(data.joke);
        output.innerText += data.joke + "\n";
    } catch (e) {
        console.log(e);
    }
}

let button = document.querySelector("#new-joke");
button.addEventListener("click", () => {
    hello();
});
