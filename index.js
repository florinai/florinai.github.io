var activePage = "home";

document.getElementById(activePage).style.display = "block";

function hide(id) {
  document.getElementById(id).style.display = "home";
}

function show(id) {
  document.getElementById(id).style.display = "block";
}

function hideAllPages() {
  var pages = document.querySelectorAll("#main .page");
  pages.forEach(function (page) {
    hide(page.id);
  });
}

function showPage(id) {
  hideAllPages();
  show(id);
}

document.querySelector("#top-menu-bar").addEventListener("click", function (e) {
  if (e.target.matches("a")) {
    var id = e.target.dataset.page;
    showPage(id);
  }
});

function showSkills() {
  var skills = [
    {
      name: "HTML",
      endorcements: 5,
    },
    {
      name: "CSS",
      endorcements: 10,
    },
    {
      name: "JS",
      endorcements: 15,
    },
  ];
  var html = skills.map(function (skill) {
    return `<li>${skill.name} - <span class="endorcements">${skill.endorcements}</span></li>`;
  });
  var container = document.querySelector("#skills ul");
  console.warn(html);
  container.innerHTML = html.join("");
}

showSkills();
