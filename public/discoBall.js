/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// Taken and adjusted from https://codepen.io/msaetre/pen/eYwqrb

function letsDisco() {
  const radius = window.innerWidth * 0.075;
  const squareSize = radius * 0.135;
  const prec = 19.55;
  const fuzzy = 0.001;
  const inc = (Math.PI - fuzzy) / prec;
  const discoBall = document.getElementById("discoBall");

  for (let t = fuzzy; t < Math.PI; t += inc) {
    const z = radius * Math.cos(t);
    const currentRadius =
      Math.abs(
        radius * Math.cos(0) * Math.sin(t) -
          radius * Math.cos(Math.PI) * Math.sin(t),
      ) / 2.5;
    const circumference = Math.abs(2 * Math.PI * currentRadius);
    const squaresThatFit = Math.floor(circumference / squareSize);
    const angleInc = (Math.PI * 2 - fuzzy) / squaresThatFit;
    for (let i = angleInc / 2 + fuzzy; i < Math.PI * 2; i += angleInc) {
      const square = document.createElement("div");
      const squareTile = document.createElement("div");
      squareTile.style.width = `${squareSize}px`;
      squareTile.style.height = `${squareSize}px`;
      squareTile.style.transformOrigin = "0 0 0";
      squareTile.style.transform = `rotate(${i}rad) rotateY(${t}rad)`;
      if ((t > 1.3 && t < 1.9) || (t < -1.3 && t > -1.9)) {
        squareTile.style.backgroundColor = randomColor("bright");
      } else {
        squareTile.style.backgroundColor = randomColor("any");
      }
      square.appendChild(squareTile);
      square.className = "squareTile";
      squareTile.style.animation = "reflect 2s linear infinite";
      squareTile.style.animationDelay = `${String(randomNumber(0, 20) / 10)}s`;
      squareTile.style.backfaceVisibility = "hidden";
      const x = radius * Math.cos(i) * Math.sin(t);
      const y = radius * Math.sin(i) * Math.sin(t);
      square.style.transform = `translateX(${x}px) translateY(${y}px) translateZ(${z}px)`;
      discoBall.appendChild(square);
    }
  }
}

function randomColor(type) {
  let c;
  if (type === "bright") {
    c = randomNumber(130, 255);
  } else {
    c = randomNumber(110, 190);
  }
  return "rgb(" + c + "," + c + "," + c + ")";
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

letsDisco();
