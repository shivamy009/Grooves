document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll(".faq-question");

    faqItems.forEach((item) => {
        item.addEventListener("click", function () {
            const answer = this.nextElementSibling;
            const icon = this.querySelector(".faq-icon");

            // Toggle answer visibility
            if (answer.style.display === "block") {
                answer.style.display = "none";
                icon.classList.remove("open");
            } else {
                answer.style.display = "block";
                icon.classList.add("open");
            }
        });
    });
});
