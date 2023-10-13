// Blog Search By Keyword 
document.getElementById("search-input").addEventListener("input", function () {
        const searchTerm = this.value.toLowerCase();
        const blogCards = document.querySelectorAll(".blog-card");
        console.log(blogCards)

        blogCards.forEach(function (card) {
            const keywords = card.querySelector(".keywords").textContent.toLowerCase();
            console.log(keywords)
            const isMatch = keywords.includes(searchTerm);
            console.log(`Cards that match ${keywords.includes(searchTerm)}`)

            if (isMatch) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
