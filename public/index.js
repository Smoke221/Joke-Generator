async function generateJoke() {
    const keywordInput = document.getElementById("keyword");
    const keyword = keywordInput.value;
  
    if (!keyword) {
      alert("Please enter a keyword");
      return;
    }
  
    const jokeContainer = document.getElementById("joke");
    const loader = document.createElement("div");
    loader.className = "loader";
    jokeContainer.innerHTML = "";
    jokeContainer.appendChild(loader);
  
    try {
      const response = await fetch(`https://joke-generator-03tj.onrender.com/generate-joke?keyword=${keyword}`);
      const dataReceived = await response.json();
      jokeContainer.textContent = dataReceived.joke;
    } catch (error) {
      jokeContainer.textContent = "Failed to fetch joke. Please try again later.";
    }
  }
  