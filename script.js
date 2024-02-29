//REVEAL CLASS FUNCTION STARTS
function revealToSpan() {
  document.querySelectorAll(".reveal").forEach((elem) => {
    //create two spans
    let spanParent = document.createElement("span");
    let spanchild = document.createElement("span");
    //parent and child bot sets theirs respective classes
    spanParent.classList.add("parent");
    spanchild.classList.add("child");
    //span parents gets child and child gets elem details
    spanchild.innerHTML = elem.innerHTML;
    spanParent.appendChild(spanchild);
    //elem replaces value with its child
    elem.innerHTML = "";
    elem.appendChild(spanParent);
  });
}

//REVEAL CLASS FUNCTION ENDS

function valueSetters() {
  gsap.set("#nav a", { y: "-100%", opacity: 0 });
  gsap.set("#home .parent .child", { y: "100%" });
  gsap.set("#home .row img", { opacity: 0 });

  document.querySelectorAll("#Visual>g").forEach(function (e) {
    var character = e.childNodes[1].childNodes[1];

    character.style.strokeDasharray = character.getTotalLength() + "px";
    character.style.strokeDashoffset = character.getTotalLength() + "px";
  });
}

//GSAP for loaders divs starts
function loader() {
  var tl = gsap.timeline();

  tl.from("#loader .child span", {
    x: 100,
    delay: 0.2,
    stagger: 0.125,
    duration: 1,
    opacity: 0,
    ease: Power3.easeInOut,
  })
    .to("#loader .parent .child", {
      y: "-100",
      duration: 0.4,
      delay: 0.2,
      ease: Circ.easeInOut,
    })
    .to("#loader", {
      height: 0,
      duration: 1.4,
      // delay: 0.4,
      ease: Expo.easeInOut,
    })
    .to("#green", {
      height: "100%",
      duration: 1.2,
      delay: -1.4,
      ease: Expo.easeInOut,
    })
    .to("#green", {
      // height: "0",
      bottom: "100%",
      duration: 1.4,
      delay: -1,
      ease: Expo.easeInOut,
      onComplete: function () {
        animateHomePage();
      },
    });
}

function animateHomePage() {
  var tl = gsap.timeline();

  tl.to("#nav a", {
    y: "0%",
    opacity: 1,
    stagger: 0.1,
    duration: 1,
    ease: Expo.easeInOut,
    delay: -0.5,
    onComplete: function () {
      animateSvg();
    },
  }),
    tl.to("#home .parent .child", {
      y: "0%",
      stagger: 0.05,
      duration: 0.8,
      delay: -1,
      ease: Circ.easeOut,
    }),
    tl.to("#home .row img", {
      opacity: 1,
      duration: 0.5,
      ease: Expo.easeInOut,
    });
}

function animateSvg() {
  gsap.to("#Visual>g>g>polyline, #Visual>g>g>path", {
    strokeDashoffset: 0,
    duration: 2.5,
    // ease: Power1.easeOut,
    ease: Expo.easeInOut,
    stagger: 0.25,
    delay: -1.5,
  });
  {
  }
}
function locoInitiate() {
  const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
}

function cardsHover() {
  document.querySelectorAll(".cont").forEach(function (cnt) {
    var showingimage;
    cnt.addEventListener("mousemove", function (dets) {
      document.querySelector("#cursor").children[dets.target.dataset.index].style.opacity = "1";
      showingimage = dets.target;
      document.querySelector("#cursor").children[dets.target.dataset.index].style.transform = `translate(${dets.clientX}px,${dets.clientY}px)`;
      showingimage.style.filter = "grayscale(1)";
      document.querySelector("#work").style.backgroundColor = "#" + dets.target.dataset.color;
    });
    cnt.addEventListener("mouseleave", function (dets) {
      document.querySelector("#cursor").children[showingimage.dataset.index].style.opacity = "0";
      showingimage.style.filter = "grayscale(0)";
      document.querySelector("#work").style.backgroundColor = "#fff";
    });
  });
}

revealToSpan();
valueSetters();
loader();

locoInitiate();
cardsHover();
