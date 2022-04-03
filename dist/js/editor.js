// Undo
document.getElementById("undo").addEventListener("click", () => {
    document.execCommand('undo', false, null);
});

// Redo
document.getElementById("redo").addEventListener("click", () => {
    document.execCommand('redo', false, null);
});

// Bold
document.getElementById("bold").addEventListener("click", () => {
    document.execCommand('bold', false, null);
});

// Italic
document.getElementById("italic").addEventListener("click", () => {
    document.execCommand('italic', false, null);
});

// Underline
document.getElementById("underline").addEventListener("click", () => {
    document.execCommand('underline', false, null);
});

// Line Through
document.getElementById("linethrough").addEventListener("click", () => {
    document.execCommand('strikethrough', false, null);
});

// Align Left
document.getElementById("alignleft").addEventListener("click", () => {
    document.execCommand('justifyLeft', false, null);
});

// Align center
document.getElementById("aligncenter").addEventListener("click", () => {
    document.execCommand('justifyCenter', false, null);
});

// Align right
document.getElementById("alignright").addEventListener("click", () => {
    document.execCommand('justifyRight', false, null);
});

// Ordred List
document.getElementById("ol").addEventListener("click", () => {
    document.execCommand('insertOrderedList', false, null);
});

// Ordred List
document.getElementById("ul").addEventListener("click", function() {
    document.execCommand('insertUnorderedList', false, null);
});

// Change color
document.getElementById("color").addEventListener("change", function () {
    document.execCommand('foreColor', false, this.value);
});

// Change Font size
document.getElementById("fontSize").addEventListener("change", function () {
    document.execCommand('fontSize', false, this.value);
});

// Change Font Familly
document.getElementById("fontfamily").addEventListener("change", function () {
    document.execCommand('fontName', false, this.value);
});

// DOM Elements

const mode = document.getElementById('mode');
const container = document.getElementsByClassName('container')[0];


// Apply the cached theme on reload

const theme = localStorage.getItem('theme');

if (theme) {
    container.classList.add(theme);
    if (theme == 'dark') {
        document.getElementById('mode').innerHTML = '<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.9625 3.41249C15.1625 2.98749 14.8125 2.51249 14.3375 2.53749C6.83751 2.91249 1.25001 9.82499 2.73751 17.4875C3.71251 22.525 7.85001 26.5125 12.9125 27.325C18 28.15 22.625 25.9 25.25 22.1375C25.5125 21.75 25.3 21.2 24.8375 21.15C16.4125 20.2 11.25 11.2 14.9625 3.41249Z" fill="#323232"/></svg>'
        document.querySelector("svg path").style.fill = "#F0F0F0";
        document.querySelectorAll(".editor svg path").forEach(element => {
            element.style.fill = "#F0F0F0";
        });
    } else {
        document.getElementById('mode').innerHTML = '<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5625 5.175L7.075 4.6875C6.5875 4.2 5.8 4.2125 5.325 4.6875L5.3125 4.7C4.825 5.1875 4.825 5.975 5.3125 6.45L5.8 6.9375C6.2875 7.425 7.0625 7.425 7.55 6.9375L7.5625 6.925C8.05 6.45 8.05 5.65 7.5625 5.175V5.175ZM3.7625 13.125H2.4875C1.8 13.125 1.25 13.675 1.25 14.3625V14.375C1.25 15.0625 1.8 15.6125 2.4875 15.6125H3.75C4.45 15.625 5 15.075 5 14.3875V14.375C5 13.675 4.45 13.125 3.7625 13.125ZM15.0125 0.6875H15C14.3 0.6875 13.75 1.2375 13.75 1.925V3.125C13.75 3.8125 14.3 4.3625 14.9875 4.3625H15C15.7 4.375 16.25 3.825 16.25 3.1375V1.925C16.25 1.2375 15.7 0.6875 15.0125 0.6875V0.6875ZM24.6875 4.7C24.2 4.2125 23.4125 4.2125 22.925 4.6875L22.4375 5.175C21.95 5.6625 21.95 6.45 22.4375 6.925L22.45 6.9375C22.9375 7.425 23.725 7.425 24.2 6.9375L24.6875 6.45C25.175 5.9625 25.175 5.1875 24.6875 4.7V4.7ZM22.425 23.575L22.9125 24.0625C23.4 24.55 24.1875 24.55 24.675 24.0625C25.1625 23.575 25.1625 22.7875 24.675 22.3L24.1875 21.8125C23.7 21.325 22.9125 21.3375 22.4375 21.8125C21.9375 22.3125 21.9375 23.0875 22.425 23.575ZM25 14.3625V14.375C25 15.0625 25.55 15.6125 26.2375 15.6125H27.5C28.1875 15.6125 28.7375 15.0625 28.7375 14.375V14.3625C28.7375 13.675 28.1875 13.125 27.5 13.125H26.2375C25.55 13.125 25 13.675 25 14.3625ZM15 6.875C10.8625 6.875 7.5 10.2375 7.5 14.375C7.5 18.5125 10.8625 21.875 15 21.875C19.1375 21.875 22.5 18.5125 22.5 14.375C22.5 10.2375 19.1375 6.875 15 6.875ZM14.9875 28.0625H15C15.6875 28.0625 16.2375 27.5125 16.2375 26.825V25.625C16.2375 24.9375 15.6875 24.3875 15 24.3875H14.9875C14.3 24.3875 13.75 24.9375 13.75 25.625V26.825C13.75 27.5125 14.3 28.0625 14.9875 28.0625ZM5.3125 24.05C5.8 24.5375 6.5875 24.5375 7.075 24.05L7.5625 23.5625C8.05 23.075 8.0375 22.2875 7.5625 21.8125L7.55 21.8C7.0625 21.3125 6.275 21.3125 5.7875 21.8L5.3 22.2875C4.825 22.7875 4.825 23.5625 5.3125 24.05Z" fill="#323232"/></svg>'
        document.querySelector("svg path").style.fill = "#558EB4";
        document.querySelectorAll(".editor svg path").forEach(element => {
            element.style.fill = "#1E1E24";
        });
    }
}

// Button Event Handlers

mode.onclick = function () {
    if (container.classList.contains("dark")) {
        container.classList.replace("dark", "light");
        localStorage.setItem('theme', 'light');
        this.innerHTML = '<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5625 5.175L7.075 4.6875C6.5875 4.2 5.8 4.2125 5.325 4.6875L5.3125 4.7C4.825 5.1875 4.825 5.975 5.3125 6.45L5.8 6.9375C6.2875 7.425 7.0625 7.425 7.55 6.9375L7.5625 6.925C8.05 6.45 8.05 5.65 7.5625 5.175V5.175ZM3.7625 13.125H2.4875C1.8 13.125 1.25 13.675 1.25 14.3625V14.375C1.25 15.0625 1.8 15.6125 2.4875 15.6125H3.75C4.45 15.625 5 15.075 5 14.3875V14.375C5 13.675 4.45 13.125 3.7625 13.125ZM15.0125 0.6875H15C14.3 0.6875 13.75 1.2375 13.75 1.925V3.125C13.75 3.8125 14.3 4.3625 14.9875 4.3625H15C15.7 4.375 16.25 3.825 16.25 3.1375V1.925C16.25 1.2375 15.7 0.6875 15.0125 0.6875V0.6875ZM24.6875 4.7C24.2 4.2125 23.4125 4.2125 22.925 4.6875L22.4375 5.175C21.95 5.6625 21.95 6.45 22.4375 6.925L22.45 6.9375C22.9375 7.425 23.725 7.425 24.2 6.9375L24.6875 6.45C25.175 5.9625 25.175 5.1875 24.6875 4.7V4.7ZM22.425 23.575L22.9125 24.0625C23.4 24.55 24.1875 24.55 24.675 24.0625C25.1625 23.575 25.1625 22.7875 24.675 22.3L24.1875 21.8125C23.7 21.325 22.9125 21.3375 22.4375 21.8125C21.9375 22.3125 21.9375 23.0875 22.425 23.575ZM25 14.3625V14.375C25 15.0625 25.55 15.6125 26.2375 15.6125H27.5C28.1875 15.6125 28.7375 15.0625 28.7375 14.375V14.3625C28.7375 13.675 28.1875 13.125 27.5 13.125H26.2375C25.55 13.125 25 13.675 25 14.3625ZM15 6.875C10.8625 6.875 7.5 10.2375 7.5 14.375C7.5 18.5125 10.8625 21.875 15 21.875C19.1375 21.875 22.5 18.5125 22.5 14.375C22.5 10.2375 19.1375 6.875 15 6.875ZM14.9875 28.0625H15C15.6875 28.0625 16.2375 27.5125 16.2375 26.825V25.625C16.2375 24.9375 15.6875 24.3875 15 24.3875H14.9875C14.3 24.3875 13.75 24.9375 13.75 25.625V26.825C13.75 27.5125 14.3 28.0625 14.9875 28.0625ZM5.3125 24.05C5.8 24.5375 6.5875 24.5375 7.075 24.05L7.5625 23.5625C8.05 23.075 8.0375 22.2875 7.5625 21.8125L7.55 21.8C7.0625 21.3125 6.275 21.3125 5.7875 21.8L5.3 22.2875C4.825 22.7875 4.825 23.5625 5.3125 24.05Z" fill="#323232"/></svg>'
        document.querySelector("svg path").style.fill = "#558EB4";
        document.querySelectorAll(".editor svg path").forEach(element => {
            element.style.fill = "#1E1E24";
        });
    } else {
        container.classList.replace("light", "dark");
        localStorage.setItem('theme', 'dark');
        this.innerHTML = '<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.9625 3.41249C15.1625 2.98749 14.8125 2.51249 14.3375 2.53749C6.83751 2.91249 1.25001 9.82499 2.73751 17.4875C3.71251 22.525 7.85001 26.5125 12.9125 27.325C18 28.15 22.625 25.9 25.25 22.1375C25.5125 21.75 25.3 21.2 24.8375 21.15C16.4125 20.2 11.25 11.2 14.9625 3.41249Z" fill="#323232"/></svg>'
        document.querySelector("svg path").style.fill = "#F0F0F0";
        document.querySelectorAll(".editor svg path").forEach(element => {
            element.style.fill = "#F0F0F0";
        });
    }
};

// Handle the paste event to prevent user to paste a text with style
document.getElementsByClassName("editor")[0].addEventListener("paste", function(e) {
    // cancel paste
    e.preventDefault();

    // get text representation of clipboard
    var text = (e.originalEvent || e).clipboardData.getData('text/plain');

    // insert text manually
    document.execCommand("insertHTML", false, text);
});