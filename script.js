let dataImg = [
  {
    id: 1,
    url: "work/work1.webp",
  },
  {
    id: 2,
    url: "work/work3.webp",
  },
  {
    id: 3,
    url: "work/work4.webp",
  },
  {
    id: 4,
    url: "work/work5.webp",
  },
  {
    id: 5,
    url: "work/work6.webp",
  },
];
let i = 0;
let Container = document.querySelector(".container");
let Img = document.querySelector("img");
setInterval(() => {
  Img.src = dataImg[i].url;
  i++;
  if (i == 5) i = 0;
}, 1000);
