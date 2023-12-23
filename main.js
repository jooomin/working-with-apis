
const img = document.getElementById("giphy-image");
const refreshButton = document.getElementById("refresh-button");
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

// Initial fetch when the page loads
fetchGiphyImage();

// Function to fetch and set a new Giphy image
function fetchGiphyImage() {
  const searchTerm = searchInput.value || "cats";

  fetchGiphyData(searchTerm)
    .then((response) => response.json())
    .then((response) => {
      img.src = response.data.images.original.url;
    })
    .catch((error) =>
      console.error("Error fetching Giphy image:", error)
    );
}

// Function to fetch Giphy data
function fetchGiphyData(searchTerm) {
  return fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=g97TWREKrgVP2huYIiTLBEOfwDqhEQ3F&s=${searchTerm}`,
    { mode: "cors" }
  );
}

// Event listener for the search input
searchButton.addEventListener("click", fetchGiphyImage);

// Event listener for the refresh button
refreshButton.addEventListener("click", fetchGiphyImage);