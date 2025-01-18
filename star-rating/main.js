const iconList = document.querySelector(".icon-list");

function createStar() {
  for (i = 0; i < 5; i++) {
    const starIcon = document.createElement("i");
    starIcon.classList.add("fa");
    starIcon.classList.add("fa-star-o");
    iconList.appendChild(starIcon);
  }
}

createStar();

const stars = document.querySelectorAll(".icon-list i");

// stars.forEach((star, i) => {
//   star.addEventListener("click", () => {
//     console.log(i + 1);
//     Reset all stars to default
//     stars.forEach((star) => (star.style.backgroundColor = ""));

//     Highlight stars up to the rating
//     for (i = 0; i < idx+1; i++) {
//         stars[i].style.backgroundColor="yellow"
//     }
//   });
// });

stars.forEach((star, i) => {
  star.addEventListener("click", () => {
    stars.forEach((star, j) => {
      if (j <= i) {
        star.style.backgroundColor = "yellow";
      } else {
        star.style.backgroundColor = "";
      }
    });
  });
});
