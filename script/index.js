// Level 19 blinking

const nineteen = document.querySelector(".nineteen");

let secretKey = 0;
let blink = 0;

let spanAnimation = setInterval(() => {
  if (nineteen.classList.contains("active")) {
    nineteen.classList.remove("active");
    blink++;
    if (blink == 19) {
      // what happened when blinking is reached 19
      clearInterval(spanAnimation);
    }
  } else {
    nineteen.classList.add("active");
  }
}, 1000);

// secret pages redirecting
nineteen.addEventListener("click", () => {
  secretKey++;
  nineteen.textContent = secretKey;

  if (secretKey == 19) {
    secretKey = 0;
    location.assign("/pijar-istimewa/secret.html");
  }
});

// next level update
(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  let today = new Date(),
    dd = String(today.getDate()).padStart(2, "0"),
    mm = String(today.getMonth() + 1).padStart(2, "0"),
    yyyy = today.getFullYear(),
    nextYear = yyyy + 1,
    dayMonth = "09/15/",
    birthday = dayMonth + yyyy;

  today = mm + "/" + dd + "/" + yyyy;
  if (today > birthday || today == birthday) {
    birthday = dayMonth + nextYear;
  }
  //end

  const countDown = new Date(birthday).getTime(),
    myCountDown = setInterval(function () {
      const now = new Date().getTime(),
        distance = countDown - now;

      (document.querySelector(".days").innerText = Math.floor(distance / day)),
        (document.querySelector(".hours").innerText = Math.floor((distance % day) / hour)),
        (document.querySelector(".minutes").innerText = Math.floor((distance % hour) / minute)),
        (document.querySelector(".seconds").innerText = Math.floor((distance % minute) / second));
    }, 0);
})();
