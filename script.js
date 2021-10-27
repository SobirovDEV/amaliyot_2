"use stict";

const newsGenre = document.querySelector(".promo__genre"),
  btnNews = document.querySelector(".btn-news"),
  bg = document.querySelector(".promo__bg"),
  listNews = document.querySelector(".promo__interactive-list");

const news = {
  in: "FOOTBALL",
  ib: "BESKEDBALL",
  is: "UFS",
  io: "BOX",
  ip: "AMERICAN FOOTBAL N EU...",
};

newsGenre.innerHTML = "UzNews";
newsGenre.style.color = "blue";
btnNews.remove();
bg.style.backgroundImage = "url(./img/2.jpg)";
