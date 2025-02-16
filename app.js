let gameseq = [];
      let userseq = [];

      let btns = ["yellow", "red", "purple", "green"];

      let started = false;
      let level = 0;
      let h1 = document.querySelector("h1");

      let h2 = document.querySelector("h2");

      document.addEventListener("click", function () {
        if (started == false) {
          started = true;

          levelup();
        }
      });

      function gameflash(btn) {
        btn.classList.add("flash");
        setTimeout(function () {
          btn.classList.remove("flash");
        }, 250);
      }

      function userflash(btn) {
        btn.classList.add("userflash");
        setTimeout(function () {
          btn.classList.remove("userflash");
        }, 250);
      }

      function levelup() {
        userseq = [];
        level++;
        h2.innerText = `Level ${level}`;

        let randi = Math.floor(Math.random() * 3);
        let randcolor = btns[randi];
        let randbtn = document.querySelector(`.${randcolor}`);
        gameseq.push(randcolor);
        gameflash(randbtn);
      }

      function check(index) {
        if (userseq[index] == gameseq[index]) {
          if (userseq.length == gameseq.length) {
            setTimeout(levelup(), 1000);
          }
        } else {
          h2.innerHTML = `Game over! Your score is <b>${level}</b>. </br>  Touch anywhere to start.`;
          document.querySelector("body").style.backgroundColor = "red";
          setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "#d0bdf4";
          }, 150);
          reset();
        }
      }

      function btnpress() {
        let btn = this;
        userflash(btn);

        let usercolor = btn.getAttribute("id");
        userseq.push(usercolor);

        check(userseq.length - 1);
      }

      let allbtns = document.querySelectorAll(".btn");
      for (btn of allbtns) {
        btn.addEventListener("click", btnpress);
      }

      function reset() {
        h1.innerHTML = `Simon Says Game <b>(High Score: ${level})</b>`;
        started = false;
        gameseq = [];
        userseq = [];
        level = 0;
      }