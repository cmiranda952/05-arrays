// Set up event listener for when the user selects a genre
document.getElementById("genre").addEventListener("change", function() {
  // Get the selected genre
  const selectedGenre = document.getElementById("genre").value;
  let movieList = [];

  // Add movies to the movieList based on the selected genre
  if (selectedGenre === "Comedy") {
    movieList.push("Superbad", "The Mask", "Mean Girls", "Step Brothers");
  } else if (selectedGenre === "Action") {
    movieList.push("Mad Max: Fury Road", "John Wick", "Die Hard", "The Dark Knight");
  } else if (selectedGenre === "Drama") {
    movieList.push("Forrest Gump", "The Pursuit of Happyness", "The Shawshank Redemption", "A Beautiful Mind");
  } else if (selectedGenre === "Sci-Fi") {
    movieList.push("Inception", "Interstellar", "The Matrix", "Blade Runner 2049");
  }

  // Display the list of movies on the page
  document.getElementById("movieRecommendations").innerText = `Enjoy: ${movieList.join(", ")}!`;
});
