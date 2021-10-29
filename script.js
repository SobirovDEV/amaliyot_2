"use stict";

document.addEventListener("DOMContentLoaded", () => {
  const newsGenre = document.querySelector(".promo__genre"),
    btnNews = document.querySelector(".btn-news"),
    bg = document.querySelector(".promo__bg"),
    listNews = document.querySelector(".promo__interactive-list"),
    addForm = document.querySelector(".add"),
    addinput = document.querySelector(".adding__input"),
    checkbox = addForm.querySelector('[type="checkbox"]');

  const news = [
    "FOOTBALL",
    "BASKETBALL",
    "UFC",
    "BOX",
    "AMERICAN FOOTBAL IN EU...",
  ];

  const sortArr = (arr) => {
    arr.sort();
  };

  addForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let newFlim = addinput.value;
    const favourite = checkbox.checked;
    console.log(favourite);

    if (newFlim) {
      if (newFlim.length > 21) {
        newFlim = `${newFlim.substring(0, 21)}...`;
      }

      if (favourite) {
        console.log("Sevimli yangilikingiz qo'shilmoqda ");
      }
      news.push(newFlim);
      sortArr(news);
      createNewsList(news, listNews);
    }

    addinput.value = "";
  });

  newsGenre.innerHTML = "UzNews";
  newsGenre.style.color = "blue";
  btnNews.remove();
  bg.style.backgroundImage = "url(./img/2.jpg)";

  function createNewsList(newsList, parent) {
    parent.innerHTML = "";
    sortArr(news);

    newsList.forEach((iteNews, index) => {
      parent.innerHTML += `
    <li class="promo__interactive-item">
    ${index + 1}${iteNews}
    <div class="delete"></div>
    </li>
    `;
    });

    document.querySelectorAll(".delete").forEach((btn, i) => {
      btn.addEventListener("click", () => {
        btn.parentElement.remove();
        news.splice(i, 1);
        createNewsList(newsList, parent);
      });
    });
  }

  createNewsList(news, listNews);
});
