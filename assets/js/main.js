let currentState = 5;

const image = {
    a: document.getElementById("a"),
    b: document.getElementById("b"),
    c: document.getElementById("c"),
    d: document.getElementById("d"),
    e: document.getElementById("e")
}

console.log(image.a);

setInterval(function() {

    switch (currentState) {
        case 5:
            image.e.classList.add("hidden");
            currentState--;
            break;
        case 4:
            image.d.classList.add("hidden");
            currentState--;
            break;
        case 3:
            image.c.classList.add("hidden");
            currentState--;
            break;
        case 2:
            image.b.classList.add("hidden");
            currentState--;
            break;
        case 1:
            currentState = 5;
            image.a.classList.remove("hidden");
            image.b.classList.remove("hidden");
            image.c.classList.remove("hidden");
            image.d.classList.remove("hidden");
    }

}, 4000)