document.getElementById("hamburger-button").addEventListener("click", function () {
    document.getElementById("dashboard").classList.toggle("active");
});

document.addEventListener("click", function (event) {
    const dashboard = document.getElementById("dashboard");
    const hamburgerButton = document.getElementById("hamburger-button");

    if (!dashboard.contains(event.target) && !hamburgerButton.contains(event.target)) {
        dashboard.classList.remove("active");
    }
});

let highlights = [];

document.querySelector(".form").addEventListener("submit", function (event) {
    event.preventDefault();

    const heading = document.getElementById("heading").value;
    const content = document.getElementById("textarea").value;

    // Capture settings (these could be colors, fonts, etc.)
    const color = document.getElementById("color").value;
    const fontSize = document.getElementById("fontSize").value;

    highlights.push({ heading, content, settings: { color, fontSize } });
    updateHighlightsList();

    document.querySelector(".form").reset();
});

function updateHighlightsList() {
    const highlightsList = document.getElementById("highlights-list");
    highlightsList.innerHTML = '';

    highlights.forEach((highlight, index) => {
        const li = document.createElement("li");
        li.textContent = `${highlight.heading}: ${highlight.content}`;
        li.style.color = highlight.settings.color;
        li.style.fontSize = highlight.settings.fontSize;
        li.addEventListener("click", () => editHighlight(index));
        highlightsList.appendChild(li);
    });
}

function editHighlight(index) {
    const highlight = highlights[index];
    document.getElementById("heading").value = highlight.heading;
    document.getElementById("textarea").value = highlight.content;

    // Populate the settings back into the form
    document.getElementById("color").value = highlight.settings.color;
    document.getElementById("fontSize").value = highlight.settings.fontSize;

    document.getElementById("dashboard").classList.remove("active");
}
