document.addEventListener("DOMContentLoaded", function () {
    const categoryDropdown = document.getElementById("category");
    const generateButton = document.getElementById("generate-button");
    const quoteContainer = document.getElementById("quote");

    generateButton.addEventListener("click", async function () {
        const selectedCategory = categoryDropdown.value.toLowerCase();
        const resultQuote = await getQuote(selectedCategory);
        quoteContainer.textContent = resultQuote;
    });
});

const getQuote = async (category) => {
    const apiKey = "xx6ge8ZFPxj3jAX3cbzfkg==GEO4FYqZAZKMKL7D";
    const api_url = `https://api.api-ninjas.com/v1/quotes?category=${category}`;
    const response = await fetch(api_url, {
        headers: { "X-Api-Key": apiKey },
    });
    const data = await response.json();
    return data[0].quote;
};
