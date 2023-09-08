//Header

//Editable Title

//editable title for header code saving in localstorage
const editableTitle = document.getElementById("editableTitle");

// Retrieve the stored title from local storage
const storedTitle = localStorage.getItem("userTitle");
if (storedTitle) {
  editableTitle.textContent = storedTitle;
}

// Listen for input changes and store the updated title in local storage
editableTitle.addEventListener("input", () => {
  const newTitle = editableTitle.textContent;
  localStorage.setItem("userTitle", newTitle);
});

//Customizable elements

//theme color change

//MAIN

//editable title for list title saving in localstorage
const listCards = document.querySelectorAll(".listCard");

// Define an array of default titles for each list
const defaultTitles = [
  "Name your WatchList",
  "Name your PlayList",
  "Name your Reading List",
];

listCards.forEach((listCard, index) => {
  const titlePart = listCard.querySelector(".titlePart");
  const listTitleId = `listTitle${index + 1}`;

  // Retrieve the stored title from local storage based on the listTitleId
  const storedTitlePart = localStorage.getItem(listTitleId);

  if (storedTitlePart) {
    titlePart.textContent = storedTitlePart;
  } else {
    // Set the default title based on the index
    titlePart.textContent = defaultTitles[index];
  }

  // Listen for input changes and store the updated title in local storage
  titlePart.addEventListener("input", () => {
    const newListTitle = titlePart.textContent;
    localStorage.setItem(listTitleId, newListTitle);
  });
});

// Maximum character limit
const maxCharacters = 20;

// Function to enforce character limit on content-editable elements
function enforceCharacterLimit(event) {
  const element = event.target;
  const text = element.textContent;

  if (text.length > maxCharacters) {
    // Truncate the text to the maximum character limit
    element.textContent = text.slice(0, maxCharacters);
  }
}

//Theme Color Change
// Retrieve the theme from local storage
const storedTheme = localStorage.getItem("theme");

// Function to set the theme
function setTheme(themeName) {
  localStorage.setItem("theme", themeName);
  document.documentElement.className = themeName;
  updateBackground(themeName);
}

// Immediately invoked function to set the theme on initial load
(function () {
  if (storedTheme) {
    setTheme(storedTheme);
  } else {
    setTheme("theme-light"); // Default theme
  }
})();

// Function to update the background based on the theme
function updateBackground(themeName) {
  const main = document.querySelector(".main");
  const themeColorChange = document.querySelector(".themeColorChange");

  // Define the background colors for your themes here
  const themes = {
    "theme-dark": {
      mainBackground:
        "linear-gradient(rgba(2, 20, 42, 1), rgba(38, 1, 39, 1), rgba(25, 0, 6, 1))",
      themeColorChangeBackground:
        "linear-gradient(rgba(2, 20, 42, 1), rgba(38, 1, 39, 1), rgba(25, 0, 6, 1))",
    },
    "theme-light": {
      mainBackground:
        "linear-gradient(0deg, rgb(69, 60, 103), rgb(109, 103, 228), rgb(70, 194, 203))",
      themeColorChangeBackground:
        "linear-gradient(0deg,rgb(69, 60, 103), rgb(109, 103, 228), rgb(70, 194, 203))",
    },
  };

  // Set the background colors based on the selected theme
  main.style.background = themes[themeName].mainBackground;
  themeColorChange.style.background =
    themes[themeName].themeColorChangeBackground;
}

// Add event listeners to gradientOption elements
const gradientOption1 = document.getElementById("gradientOption1");
const gradientOption2 = document.getElementById("gradientOption2");

gradientOption1.addEventListener("click", () => {
  setTheme("theme-dark"); // Set the theme when gradientOption1 is clicked
});

gradientOption2.addEventListener("click", () => {
  setTheme("theme-light"); // Set the theme when gradientOption2 is clicked
});

// Add an event listener to each "Add" button
// JavaScript code

// Function to open the search bar
function openSearchBar(listNumber) {
  const searchBar = document.getElementById(`searchBar${listNumber}`);
  searchBar.style.display = "flex";
}

// Function to close the search bar
function closeSearchBar(listNumber) {
  const searchBar = document.getElementById(`searchBar${listNumber}`);
  searchBar.style.display = "none";
}

// Add event listeners to open the search bars when clicking the "Add" buttons
document.getElementById("addButton1").addEventListener("click", function () {
  openSearchBar(1);
});

document.getElementById("addButton2").addEventListener("click", function () {
  openSearchBar(2);
});

document.getElementById("addButton3").addEventListener("click", function () {
  openSearchBar(3);
});

// Add event listeners to close the search bars when clicking the "Close" buttons
document
  .getElementById("closeButton1")
  .addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent the click event from propagating to the main container
    closeSearchBar(1);
  });

document
  .getElementById("closeButton2")
  .addEventListener("click", function (event) {
    event.stopPropagation();
    closeSearchBar(2);
  });

document
  .getElementById("closeButton3")
  .addEventListener("click", function (event) {
    event.stopPropagation();
    closeSearchBar(3);
  });

//API

//Movies Api
// Function to create and update the popup menu content
// Function to create and update the popup menu content
function updatePopupMenu(results) {
  const popupMenu = document.getElementById("popupMenu1");

  popupMenu.innerHTML = "";

  const movieObjects = results[1]; // Access the array of movie objects

  if (movieObjects.length === 0) {
    popupMenu.innerHTML = "<p>No results found.</p>";
  } else {
    movieObjects.forEach((movie) => {
      // Check if the title is available and not an empty string
      if (movie["#TITLE"] && movie["#TITLE"].trim() !== "") {
        // Create a div element for each movie
        const movieDiv = document.createElement("div");

        // Create an image element for the movie poster
        const moviePosterImg = document.createElement("img");
        moviePosterImg.src = movie["#IMG_POSTER"];
        moviePosterImg.alt = movie["#TITLE"];
        moviePosterImg.style.width = "40px";
        moviePosterImg.style.height = "40px";

        // Create a paragraph element for the movie title
        const movieTitlePara = document.createElement("p");
        movieTitlePara.textContent = movie["#TITLE"];

        // event listener to the movie div to handle click events
        movieDiv.addEventListener("click", () => {
          addSelectedMovie(movie);
          console.log("div clicked");
        });

        // Append the image and title elements to the movie div
        movieDiv.appendChild(moviePosterImg);
        movieDiv.appendChild(movieTitlePara);

        // Append the movie div to the popup menu
        popupMenu.appendChild(movieDiv);
      }
    });
  }

  // Show the popup menu
  popupMenu.style.display = "block";
}

// Function to fetch all movie data matching the search query
async function fetchMovieData(movieTitle) {
  const url = `https://imdb-search2.p.rapidapi.com/${encodeURIComponent(
    movieTitle
  )}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "ead3065a0bmsh12a7eb51578ed5cp1c6b79jsn4d95677ca257",
      "X-RapidAPI-Host": "imdb-search2.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);

    if (response.ok) {
      const result = await response.json(); // Assuming the response is in JSON format

      console.log("All Results:", result);

      // Convert the object values to an array of movies
      const movieResults = Object.values(result);

      console.log("Converted Results:", movieResults);

      updatePopupMenu(movieResults);
    } else {
      console.error("API request failed with status:", response.status);
      updatePopupMenu([]);
    }
  } catch (error) {
    console.error(error);
    updatePopupMenu([]);
  }
}

// Add an event listener to the search button
document.getElementById("searchButton1").addEventListener("click", function () {
  const movieTitle = document.getElementById("movieInput").value;
  fetchMovieData(movieTitle);
  document.getElementById("popupMenu1").style.display = "block";
  console.log("clicked");
});

//Create array to add the selected movies to the movie list
const movieList = document.getElementById("movieList");
let selectedMovies = []; // Initialize an empty array to store selected movies

//function for ui of the movie elements to be added to movie list
function updateSelectedMoviesUI() {
  const selectedMoviesList = document.getElementById("selectedMoviesList");
  selectedMoviesList.innerHTML = ""; // Clear the previous content

  selectedMovies.forEach((movie, index) => {
    // Create a div element for each selected movie
    const movieDiv = document.createElement("div");
    movieDiv.classList.add("selectedMovie");

    // Create an image element for the movie poster
    const moviePosterImg = document.createElement("img");
    moviePosterImg.src = movie["#IMG_POSTER"];
    moviePosterImg.alt = movie["#TITLE"];
    moviePosterImg.style.width = "40px";
    moviePosterImg.style.height = "40px";

    // Create a paragraph element for the movie title
    const movieTitlePara = document.createElement("p");
    movieTitlePara.textContent = movie["#TITLE"];

    // Create a button to remove the movie from the list
    const removeButton = document.createElement("button");
    removeButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
    removeButton.addEventListener("click", () => {
      removeSelectedMovie(index);
    });

    // Append the image and title elements to the movie div
    movieDiv.appendChild(moviePosterImg);
    movieDiv.appendChild(movieTitlePara);
    movieDiv.appendChild(removeButton);

    // Append the movie div to the selected movies list
    selectedMoviesList.appendChild(movieDiv);

    // Save the selectedMovies array to local storage
    localStorage.setItem("selectedMovies", JSON.stringify(selectedMovies));
  });
}

// Function to add a selected movie to the array
function addSelectedMovie(movie) {
  selectedMovies.push(movie);
  updateSelectedMoviesUI();
  console.log("movie added");
}

function removeSelectedMovie(index) {
  if (index >= 0 && index < selectedMovies.length) {
    selectedMovies.splice(index, 1); // Remove the movie at the specified index
    updateSelectedMoviesUI();
    console.log;
  }

  localStorage.setItem("selectedMovies", JSON.stringify(selectedMovies));
}

//function to load selectedMovies from local storage
function loadSelectedMoviesFromLocalStorage() {
  const selectedMoviesData = localStorage.getItem("selectedMovies");
  if (selectedMoviesData) {
    selectedMovies = JSON.parse(selectedMoviesData);
    updateSelectedMoviesUI();
  }
}

// Function to close the movie details popup
function closeMovieDetailsPopup() {
  const popup = document.getElementById("movieDetailsPopup");
  popup.style.display = "none";
}

//Songs API

// Function to update the Spotify popup menu with cover art images and song titles
function updateSpotifyPopupMenu(results) {
  const popupMenu = document.getElementById("popupMenu2");

  popupMenu.innerHTML = "";

  const songItems = results.tracks.items; // Access the array of song items

  if (songItems.length === 0) {
    popupMenu.innerHTML = "<p>No results found.</p>";
  } else {
    songItems.forEach((song) => {
      // Check if the song title is available and not an empty string
      if (song.data.name && song.data.name.trim() !== "") {
        // Create a div element for each song
        const songDiv = document.createElement("div");

        // Create an image element for the cover art
        const coverArtImg = document.createElement("img");

        // Assuming cover art sources are available
        if (song.data.albumOfTrack.coverArt.sources) {
          // Choose the cover art source with a suitable size
          const coverArtSource = song.data.albumOfTrack.coverArt.sources[0]; // You can choose a different source if needed
          coverArtImg.src = coverArtSource.url; // Set the src attribute to the cover art URL
          coverArtImg.alt = "Cover Art"; // Set alt text for accessibility (you can customize this)
          coverArtImg.width = 40; // Set the width of the image
          coverArtImg.height = 40; // Set the height of the image
        }

        // Create a paragraph element for the song title
        const songTitlePara = document.createElement("p");
        songTitlePara.textContent = song.data.name;

        // Event listener on the song div to handle click events
        songDiv.addEventListener("click", () => {
          // Handle the click event, e.g.
          addSelectedSong(song);
          console.log("Song div clicked");
        });

        // Append the cover art image and title elements to the song div
        songDiv.appendChild(coverArtImg);
        songDiv.appendChild(songTitlePara);

        // Append the song div to the popup menu
        popupMenu.appendChild(songDiv);
      }
    });
  }

  // Show the popup menu
  popupMenu.style.display = "block";
}

// Function to fetch data from the Spotify API
async function fetchSpotifyData(query) {
  const url = `https://spotify23.p.rapidapi.com/search/?q=${encodeURIComponent(
    query
  )}&type=tracks&offset=0&limit=10&numberOfTopResults=5`;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "ead3065a0bmsh12a7eb51578ed5cp1c6b79jsn4d95677ca257",
      "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json(); // Assuming the response is in JSON format

    console.log("Spotify Results:", result);

    // Update the UI with the Spotify data
    updateSpotifyPopupMenu(result); // Pass the actual Spotify API response
  } catch (error) {
    console.error(error);
  }
}

// Event listener for the Spotify search button
document.getElementById("searchButton2").addEventListener("click", () => {
  const query = document.getElementById("songInput").value;
  fetchSpotifyData(query);
  console.log("clicked");
});

//Create array to add the selected songs to the song list
const songList = document.getElementById("songList");
let selectedSongs = []; // Initialize an empty array to store selected movies

// Function to update the selected songs UI
function updateSelectedSongsUI() {
  const selectedSongsList = document.getElementById("selectedSongsList");
  selectedSongsList.innerHTML = ""; // Clear the previous content

  selectedSongs.forEach((song, index) => {
    // Create a div element for each selected song
    const songDiv = document.createElement("div");
    songDiv.classList.add("selectedSong");

    // Create an image element for the cover art
    const coverArtImg = document.createElement("img");

    // Assuming cover art sources are available in the song data
    if (song.data.albumOfTrack.coverArt.sources) {
      // Choose the cover art source with a suitable size
      const coverArtSource = song.data.albumOfTrack.coverArt.sources[0]; // You can choose a different source if needed
      coverArtImg.src = coverArtSource.url; // Set the src attribute to the cover art URL
      coverArtImg.alt = "Cover Art"; // Set alt text for accessibility (you can customize this)
      coverArtImg.width = 40; // Set the width of the image
      coverArtImg.height = 40; // Set the height of the image
    }

    // Create a paragraph element for the song title
    const songTitlePara = document.createElement("p");
    songTitlePara.textContent = song.data.name;

    // Create a button to remove the song from the list
    const removeButton = document.createElement("button");
    removeButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
    removeButton.addEventListener("click", () => {
      removeSelectedSong(index);
    });

    // Append the cover art image and title elements to the song div
    songDiv.appendChild(coverArtImg);
    songDiv.appendChild(songTitlePara);
    songDiv.appendChild(removeButton);

    // Append the song div to the selected songs list
    selectedSongsList.appendChild(songDiv);

    // Save the selectedSongs array to local storage
    localStorage.setItem("selectedSongs", JSON.stringify(selectedSongs));
  });
}

// Function to add a selected song to the array
function addSelectedSong(song) {
  selectedSongs.push(song);
  updateSelectedSongsUI();
  console.log("song added");
}

function removeSelectedSong(index) {
  if (index >= 0 && index < selectedSongs.length) {
    selectedSongs.splice(index, 1); // Remove the movie at the specified index
    updateSelectedSongsUI();
  }

  localStorage.setItem("selectedSongs", JSON.stringify(selectedSongs));
}

//function to load selectedMovies from local storage
function loadSelectedSongsFromLocalStorage() {
  const selectedSongsData = localStorage.getItem("selectedSongs");
  if (selectedSongsData) {
    selectedSongs = JSON.parse(selectedSongsData);
    updateSelectedSongsUI();
  }
}

//Books API
// Function to create and update the book popup menu content
function updateBookPopupMenu(bookResults) {
  const popupMenu = document.getElementById("popupMenu3");

  popupMenu.innerHTML = "";

  // Assuming the bookResults is an array of book objects
  bookResults.forEach((book) => {
    // Check if the book title is available and not an empty string
    if (book.name && book.name.trim() !== "") {
      // Create a div element for each book
      const bookDiv = document.createElement("div");

      // Create an image element for the book cover
      const bookCoverImg = document.createElement("img");
      bookCoverImg.src = book.cover;
      bookCoverImg.alt = book.name;
      bookCoverImg.style.width = "40px";
      bookCoverImg.style.height = "40px";

      // Create a paragraph element for the book title
      const bookTitlePara = document.createElement("p");
      bookTitlePara.textContent = book.name;

      // Event listener on the book div to handle click events
      bookDiv.addEventListener("click", () => {
        addSelectedBook(book);
        console.log("Book div clicked");
      });

      // Append the cover image and title elements to the book div
      bookDiv.appendChild(bookCoverImg);
      bookDiv.appendChild(bookTitlePara);

      // Append the book div to the popup menu
      popupMenu.appendChild(bookDiv);
    }
  });

  // Show the popup menu
  popupMenu.style.display = "block";
}

// Function to fetch book data matching the search query
async function fetchBookData(bookName) {
  const apiUrl = `https://hapi-books.p.rapidapi.com/search/${encodeURIComponent(
    bookName
  )}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "ead3065a0bmsh12a7eb51578ed5cp1c6b79jsn4d95677ca257",
      "X-RapidAPI-Host": "hapi-books.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(apiUrl, options);

    if (response.ok) {
      const result = await response.json(); // Assuming the response is in JSON format
      console.log("Book Results:", result);

      // Update the UI with the book data
      updateBookPopupMenu(result);
    } else {
      console.error("API request failed with status:", response.status);
      updateBookPopupMenu([]);
    }
  } catch (error) {
    console.error(error);
    updateBookPopupMenu([]);
  }
}

// Event listener for the book search button
document.getElementById("searchButton3").addEventListener("click", () => {
  const bookName = document.getElementById("bookInput").value;
  fetchBookData(bookName);
  console.log("clicked");
});

// Create array to add the selected books to the book list
const bookList = document.getElementById("bookList");
let selectedBooks = []; // Initialize an empty array to store selected books

// Function to update the selected books UI
function updateSelectedBooksUI() {
  const selectedBooksList = document.getElementById("selectedBooksList");
  selectedBooksList.innerHTML = ""; // Clear the previous content

  selectedBooks.forEach((book, index) => {
    // Create a div element for each selected book
    const bookDiv = document.createElement("div");
    bookDiv.classList.add("selectedBook");

    // Create an image element for the book cover
    const bookCoverImg = document.createElement("img");
    bookCoverImg.src = book.cover;
    bookCoverImg.alt = book.name;
    bookCoverImg.style.width = "40px";
    bookCoverImg.style.height = "40px";

    // Create a paragraph element for the book title
    const bookTitlePara = document.createElement("p");
    bookTitlePara.textContent = book.name;

    // Create a button to remove the book from the list
    const removeButton = document.createElement("button");
    removeButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
    removeButton.addEventListener("click", () => {
      removeSelectedBook(index);
    });

    // Append the cover image, title element, and remove button to the book div
    bookDiv.appendChild(bookCoverImg);
    bookDiv.appendChild(bookTitlePara);
    bookDiv.appendChild(removeButton);

    // Append the book div to the selected books list
    selectedBooksList.appendChild(bookDiv);

    // Save the selectedBooks array to local storage
    localStorage.setItem("selectedBooks", JSON.stringify(selectedBooks));
  });
}

// Function to add a selected book to the array
function addSelectedBook(book) {
  selectedBooks.push(book);
  updateSelectedBooksUI();
  console.log("Book added");
}

function removeSelectedBook(index) {
  if (index >= 0 && index < selectedBooks.length) {
    selectedBooks.splice(index, 1); // Remove the book at the specified index
    updateSelectedBooksUI();
  }

  localStorage.setItem("selectedBooks", JSON.stringify(selectedBooks));
}

// Function to load selected books from local storage
function loadSelectedBooksFromLocalStorage() {
  const selectedBooksData = localStorage.getItem("selectedBooks");
  if (selectedBooksData) {
    selectedBooks = JSON.parse(selectedBooksData);
    updateSelectedBooksUI();
  }
}

//load things from local storage on load
function initializePage() {
  // Load selected movies from local storage
  loadSelectedMoviesFromLocalStorage();
  // Load selected songs from local storage
  loadSelectedSongsFromLocalStorage();
  // Load selected books from local storage
  loadSelectedBooksFromLocalStorage();
}

// Call the initializePage function when the page loads
window.addEventListener("load", initializePage);
