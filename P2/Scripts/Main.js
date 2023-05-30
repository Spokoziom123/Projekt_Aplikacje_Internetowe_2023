const toggleButton = document.querySelectorAll(".toggle-button")[0];
const navbarLinks = document.querySelectorAll(".navbar-links")[0];

toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle("active");
})

const accessibility_button = document.querySelector(".accessibility-tool-bar-button");
const accessibility = document.querySelector(".accessibility-tool-bar-options");
accessibility_button.addEventListener("click", () => {
    accessibility.classList.toggle("active");
});

function validateForm() {
    let imie = document.querySelector(".imie").value;
    let nazwisko = document.querySelector(".nazwisko").value;
    let email = document.querySelector(".email").value;
    let wiadomosc = document.querySelector(".wiadomosc").value;

    let errorContainer = document.querySelector(".error-container");
    errorContainer.innerHTML = "";

    let errorFlag = false;

    if (imie == "") {
        displayError("Proszę podać imię");
        errorFlag = true;
    }

    if (nazwisko == "") {
        displayError("Proszę podać nazwisko");
        errorFlag = true;
    }

    if (email == "") {
        displayError("Proszę podać adres e-mail");
        errorFlag = true;
    } else {
        let emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!email.match(emailPattern)) {
            displayError("Proszę podać poprawny adres e-mail");
            errorFlag = true;
        }
    }

    if (wiadomosc == "") {
        displayError("Proszę wpisać wiadomość");
        errorFlag = true;
    }

    return !errorFlag;
}

function displayError(message) {
    let errorContainer = document.querySelector(".error-container");
    let errorMessage = document.createElement("p");
    errorMessage.innerText = message;
    errorContainer.appendChild(errorMessage);
}

function increaseFontSize() {
    let elements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, li');
    for (var i = 0; i < elements.length; i++) {
        let currentSize = parseInt(window.getComputedStyle(elements[i]).fontSize) || 16;
        if (currentSize < 20) {
            let newSize = currentSize + 2;
            elements[i].style.fontSize = newSize + 'px';
        }
    }
}

document.querySelector(".inc").addEventListener("click", () => {
    increaseFontSize();
});



function decreaseFontSize() {
    let elements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, li');
    for (var i = 0; i < elements.length; i++) {
        let currentSize = parseInt(window.getComputedStyle(elements[i]).fontSize) || 16;
        if (14 < currentSize) {
            let newSize = currentSize - 2;
            elements[i].style.fontSize = newSize + 'px';
        }
    }
}

document.querySelector(".dsc").addEventListener("click", () => {
    decreaseFontSize();
});

function changeBackgroundToWhite() {
    let elements = document.querySelectorAll("main *");

    for (let i = 0; i < elements.length; i++) {
        let element = elements[i];
        element.style.backgroundImage = "none";
        element.style.backgroundColor = "white";
        element.style.color = "black";
    }
}

document.querySelector(".lb").addEventListener("click", () => {
    changeBackgroundToWhite();
});

function underlineLinks() {
    let links = document.getElementsByTagName("a");

    for (let i = 0; i < links.length; i++) {
        let link = links[i];
        link.style.textDecoration = "underline";
    }
}

document.querySelector(".al").addEventListener("click", () => {
    underlineLinks();
});

function changeFont() {
    let elements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6');
    for (let i = 0; i < elements.length; i++) {
        let element = elements[i];
        element.style.fontFamily = "Arial, sans-serif";
    }
}

document.querySelector(".fo").addEventListener("click", () => {
    changeFont();
});

function resetPage() {
    window.location.reload();
}

document.querySelector(".r").addEventListener("click", () => {
    resetPage();
});

const sliderContainer = document.querySelector('.slider-container');
const slider = document.querySelector('.slider');
const thumbnails = document.querySelectorAll('.thumbnail-item');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

let slideIndex = 0;
const images = ["Images/1.jpg", "Images/2.jpg", "Images/3.jpg", "Images/4.jpg"];
const alts = ["kawa", "ziarna kawy", "stolik", "kawa"];

prevButton.addEventListener('click', () => {
    moveToPrevSlide();
});

nextButton.addEventListener('click', () => {
    moveToNextSlide();
});

thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        goToSlide(index);
    });
});

function updateSlide() {
    const imageSrc = images[slideIndex];
    const imageAlt = alts[slideIndex];
    document.querySelector(".slider-item").setAttribute("alt", imageAlt);
    document.querySelector(".slider-item").setAttribute("src", imageSrc);
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.classList.toggle('active', index === slideIndex);
    });
}

function goToSlide(index) {
    slideIndex = index;
    updateSlide();
}

function moveToPrevSlide() {
    slideIndex = (slideIndex - 1 + images.length) % images.length;
    updateSlide();
}

function moveToNextSlide() {
    slideIndex = (slideIndex + 1) % images.length;
    updateSlide();
}