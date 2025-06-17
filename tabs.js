document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".tab-button");
    const contents = document.querySelectorAll(".tab-content");
    const cards = document.querySelectorAll(".card");

    buttons.forEach((button, index) => {
        button.addEventListener("click", () => {
            // Remove active classes
            buttons.forEach(btn => btn.classList.remove("active"));
            contents.forEach(content => content.classList.remove("active"));
            cards.forEach(card => card.classList.remove("active"));

            // Add active to clicked elements
            button.classList.add("active");
            contents[index].classList.add("active");
            cards[index].classList.add("active");
        });
    });

    // Default: first tab active
    buttons[0].classList.add("active");
    contents[0].classList.add("active");
    cards[0].classList.add("active");
});
