// Splash Screen Logic
window.onload = function() {
  setTimeout(() => {
    document.getElementById("splash").style.display = "none";
    document.getElementById("main").style.display = "block";
  }, 3000); // 3 seconds
};

// Section Display
function showSection(section) {
  let sections = document.querySelectorAll(".content");
  sections.forEach(s => s.style.display = "none");
  document.getElementById(section).style.display = "block";
}

// Remedy Finder
function findRemedy() {
  let input = document.getElementById("remedyInput").value.toLowerCase();
  let result = document.getElementById("remedyResult");

  if (input.includes("stress")) {
    result.innerHTML = `
      <h3>Ashwagandha</h3>
      <p>Helps reduce stress and improves vitality.</p>
    `;
  } else {
    result.innerHTML = "<p>No remedies found for this problem.</p>";
  }
}

// Trace Herb
function traceHerb() {
  let herb = document.getElementById("traceInput").value.toLowerCase();
  let result = document.getElementById("traceResult");

  if (herb === "ashwagandha") {
    result.innerHTML = `
      <div class="flow-step">🌱 Grown in XYZ Organic Farm</div><br>
      <div class="flow-step">🚜 Harvested & Processed</div><br>
      <div class="flow-step">🏭 Quality Checked & Packed</div><br>
      <div class="flow-step">📦 Ready for Delivery</div><br>
      <a href="dummy.pdf" target="_blank">📑 View Lab Reports</a>
    `;
  } else {
    result.innerHTML = "<p>No tracking information available.</p>";
  }
}

// Herb Info
function getHerbInfo() {
  let herb = document.getElementById("infoInput").value.toLowerCase();
  let result = document.getElementById("infoResult");

  if (herb === "ashwagandha") {
    result.innerHTML = `
      <h3>Ashwagandha</h3>
      <p><strong>Scientific Name:</strong> Withania somnifera</p>
      <p><strong>Uses:</strong> Stress relief, immunity booster</p>
      <p><strong>Benefits:</strong> Better sleep, energy, mental clarity</p>
    `;
  } else {
    result.innerHTML = "<p>No information available for this herb.</p>";
  }
}
