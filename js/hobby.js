const music = document.querySelector("#bookmark :nth-child(1)");
const bk = document.querySelector("#bookmark :nth-child(2)");
const coding = document.querySelector("#bookmark :nth-child(3)");

function handleListenMusic(event) {
  window.open("https://www.youtube.com/watch?v=fKHZtDuwB2U&t=17213s");
}

function handleMoveToPage(event) {
  window.open("https://wooriwon.wooribank.com/basketball/main/main.php");
}
function handleGoToGithub(event) {
  window.open("https://github.com/aubepluieh3");
}

music.addEventListener("click", handleListenMusic);
bk.addEventListener("click", handleMoveToPage);
coding.addEventListener("click", handleGoToGithub);
