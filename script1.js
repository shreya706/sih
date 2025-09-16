function showSearch() {
  document.getElementById("remedy-finder").classList.remove("hidden");
}

function searchRemedy() {
  let query = document.getElementById("searchBox").value.toLowerCase();
  let resultsDiv = document.getElementById("results");

  let remedies = {
    "cough": "Tulsi Tea 🌿 - Known to relieve cough and boost immunity.",
    "fever": "Giloy Juice 🍃 - Helps in reducing fever naturally.",
    "stress": "Ashwagandha 🌱 - Reduces stress and improves energy."
  };

  if(remedies[query]) {
    resultsDiv.innerHTML = `<p><b>Remedy:</b> ${remedies[query]}</p>`;
  } else {
    resultsDiv.innerHTML = `<p>No herbal remedy found. Try 'cough', 'fever', or 'stress'.</p>`;
  }
}
