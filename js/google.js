const googleForm = document.getElementById("google-form");
const searchInput = googleForm.querySelector("input");

function onGoogleSubmit(event) {
  event.preventDefault();
  const search = searchInput.value;
  window.open(`https://www.google.co.kr/search?q=${search}`);
  search = "";
}

googleForm.addEventListener("submit", onGoogleSubmit);
