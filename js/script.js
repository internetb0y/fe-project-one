// Slider
const initSlider = () => {
    const images = document.querySelector(".slider .character");
    const slideButtons = document.querySelectorAll(".slider .slide-button");

    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = images.clientWidth * direction;
            
            images.scrollBy({left: scrollAmount, behavior: "smooth"});
        })
    })
}

// Create Post
const text = document.querySelector(".textarea #box");
const buttonPost = document.querySelector(".textarea #post");

const addPost = () => {
    if (text.value.length > 0) {
        let button = document.createElement("button");
        button.classList.add("delete");
        button.innerHTML = "Delete";

        let p = document.createElement("p");
        p.classList.add("text-post");
        p.appendChild(document.createTextNode(text.value));

        let li = document.createElement("li");
        li.classList.add("list-post");
        li.appendChild(button);
        li.appendChild(p);

        let ul = document.querySelector(".contain-post");
        ul.appendChild(li);

        text.value = "";
    }
}

// Delete Post
const buttonDel = document.querySelector(".contain-post");

const delPost = (event) => {
    if (event.target.tagName === "BUTTON") {
        let li = event.target.parentNode;
        let ul = li.parentNode;
        ul.removeChild(li);
    }
}

// Dropdown Menu
let dropMenu = document.querySelector("#social");

function show() {
    if(dropMenu == 1) {
        document.getElementById("drop-menu").style.display = "block";
        document.getElementById("drop-menu").style.background = "rgba(255, 255, 254, 0.9)";
        document.getElementById("drop-menu").style.margin = "30px 0";
        document.getElementById("drop-menu").style.border = "1px solid #fffffe";
        document.getElementById("drop-menu").style.borderRadius = "10px";
        return dropMenu = 0;
    } else {
        document.getElementById("drop-menu").style.display="none";
        return dropMenu = 1;
    }
}

// Function Call
window.addEventListener("load", initSlider);
buttonPost.addEventListener("click", addPost);
buttonDel.addEventListener("click", delPost);
dropMenu.addEventListener("click", show);
