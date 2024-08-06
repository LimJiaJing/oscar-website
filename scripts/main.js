const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/oscar-1.jpeg") {
        myImage.setAttribute("src", "images/oscar-2.jpeg");
    }
    else {
        myImage.setAttribute("src", "images/oscar-1.jpeg");
    }
};

let changeUserButton = document.querySelector("button");


function getUserName() {
    if (!sessionStorage.getItem("name")) {
        setUserName();
    }

    return sessionStorage.getItem("name");
}

function setUserName() {
    let username = prompt("Please enter your name.");
    while (!username) {
        username = prompt("Please enter your name.")
    }
    sessionStorage.setItem("name", username);
}

function setWelcomeMessage() {
    let welcomeMessage = document.querySelector("h2");
    const username = getUserName();
    welcomeMessage.textContent = `Come and know Oscar, ${username}`;
}

changeUserButton.onclick = () => {
    setWelcomeMessage();
}

