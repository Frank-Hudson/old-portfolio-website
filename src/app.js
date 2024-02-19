// Scroll Animation

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

//
// Sticky Navbar + Header
window.onscroll = function () {
  stickyNavbar();
};

const navbar = document.getElementsByClassName("nav")[0];

const sticky = navbar.offsetTop;

function stickyNavbar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

//
// Help Stuff
const reader = new FileReader();
const helpStuffFile = new File(["help_stuff"], "help_stuff.json");
const helpStuffString = reader.readAsText(helpStuffFile);
const helpStuffData = JSON.parse(helpStuffString);

function helpArticleBlockFormat(title, description) {
  return (
    "<br />" +
    "<div class='help-article'>" +
    " <h3> " +
    title +
    " </h3>" +
    " <p>" +
    description +
    "</p>" +
    "</div>" +
    "<br />"
  );
}

function renderHelpArticles() {
  const helpArticles = helpStuffData["articles"];
  const articleBlock = document.getElementById("articles-block");

  helpArticles.forEach((article) => {
    articleBlock.innerHTML += helpArticleBlockFormat(
      article["title"],
      article[""]
    );
  });
}
