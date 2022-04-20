function whatever (event) {
    console.log(event.target.value);
}

document.querySelector("input").addEventListener("input", whatever);