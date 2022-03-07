import { Navbar } from "./components/navbar.js";

var header = document.getElementById("header");

header.innerHTML = Navbar();

// let URL ="https://api.unsplash.com/photos/?client_id=a98YSt6vr53lSvKuHEXy9RxvszEoWyoPThFIMh4qp_I";

var selected = document.getElementById("selected");
var selected1 = document.getElementById("selected1");

var options_list = document.querySelectorAll(".options_list");
var options_list1 = document.querySelectorAll(".options_list1");

var drop = document.querySelector(".drop_down");
var drop1 = document.querySelector(".drop_down1");

selected.addEventListener("click", () => {
  drop.classList.toggle("active");
});

selected1.addEventListener("click", () => {
  drop1.classList.toggle("active1");
});

options_list1.forEach((o) => {
  o.addEventListener("click", () => {
    console.log(o.innerText);
    selected1.innerText = o.innerText;

    drop1.classList.remove("active1");
  });
});

options_list.forEach((o) => {
  o.addEventListener("click", () => {
    console.log(o.innerText);
    selected.innerText = o.innerText;

    drop.classList.remove("active");
  });
});

let URL = `https://pixabay.com/api/?key=26002290-02b0588422051baad6331f9de&per_page=10&page=${getRandomNr()}&safesearch=true`;

showData();

window.addEventListener("scroll", () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

  // console.log(scrollTop, scrollHeight, clientHeight);

  if (clientHeight + scrollTop >= scrollHeight - 5) {
    // console.log("to bottom")
    showData();
  }
});

async function showData() {
  let rawData = await fetch(URL);

  let data = await rawData.json();

  let main_data = data.hits;

  getData(main_data);
}

function getRandomNr() {
  return Math.floor(Math.random() * 50) + 1;
}

function getData(data) {
  data.map((e) => {
    let list = document.createElement("div");
    list.setAttribute("class", "list");

    let img = document.createElement("img");
    img.setAttribute("src", e.largeImageURL);

    let img_tag = document.createElement("p");
    img_tag.innerText = e.tags;
    img_tag.setAttribute("class", "img_tag");

    let like = document.createElement("p");
    like.innerText = e.likes;

    let heart = document.createElement("span");
    heart.innerHTML = `<ion-icon name="heart"></ion-icon>`;

    let view = document.createElement("span");
    view.innerHTML = `<ion-icon name="eye"></ion-icon>`;

    let comment = document.createElement("span");
    comment.innerHTML = `<ion-icon name="podium"></ion-icon>`;

    let comments = document.createElement("p");
    comments.innerText = `${e.comments}`;

    let views = document.createElement("p");
    views.innerText = `${e.views} `;

    let details = document.createElement("div");
    details.setAttribute("class", "details");

    let like_div = document.createElement("span");
    like_div.append(heart, like);

    let view_div = document.createElement("span");
    view_div.append(view, views);

    let com_div = document.createElement("span");
    com_div.append(comment, comments);

    details.append(like_div, com_div, view_div);

    list.append(img, img_tag, details);

    document.querySelector(".img_box_results").append(list);
  });
}

window.addEventListener("scroll", () => {
  var searchBar = document.querySelector(".bottom-results");

  searchBar.classList.toggle("sticky", window.scrollY > 260);
});

// document.getElementById("sigin").addEventListener("click", () => {
//   window.location.href = "signin.html";
// });
