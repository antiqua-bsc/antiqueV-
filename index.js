const mobile_header = document.querySelector("#mobile_header");
const mobile_header_trigger = document.querySelector("#mobile_header_trigger");
const mobile_header_close = document.querySelector("#mobile_header_close");
const nfts = document.querySelectorAll(".nft");
const nft_container = document.querySelector("#nft_container");

var nft_interval;
var currentNft = 0;

nft_container.addEventListener("mouseenter", () => {
  clearInterval(nft_interval);
});

nft_container.addEventListener("mouseleave", () => {
  suffleNfts();
});

const suffleNfts = () => {
  nft_interval = setInterval(() => {
    if (currentNft > nfts.length - 1) {
      currentNft = 0;
    }
    hideAllNfts();
    nfts[currentNft].classList.remove("hidden");
    currentNft++;
  }, 200);
};

suffleNfts();

const hideAllNfts = () => {
  for (var nft of nfts) {
    nft.classList.add("hidden");
  }
};

mobile_header_trigger.addEventListener("click", () => {
  mobile_header.classList.remove("hidden");
});

mobile_header_close.addEventListener("click", () => {
  mobile_header.classList.add("hidden");
});

// FQA

const phases = document.querySelectorAll(".phases");

var openedPhase = null;

Array.from(phases).forEach((phase) => {
  phase.addEventListener("click", (e) => {
    const phaseContent = e.target.querySelector(".content");
    phaseContent.classList.toggle("hidden");
    if (openedPhase !== null && openedPhase !== e.target) {
      const openedPhaseContent = openedPhase.querySelector(".content");
      openedPhaseContent.classList.add("hidden");
    }
    openedPhase = e.target;
  });
});

// Animations

const c = document.querySelectorAll(".link");
console.log(c);

var t1 = new TimelineMax();
var t2 = new TimelineMax();
var t3 = new TimelineMax();
var t4 = new TimelineMax();

t1.from(".link", 1.5, { opacity: 0, y: 20 });
t2.from(".socialLink", 1.5, { opacity: 0, y: 20 });
t3.from(".landing-header", 1.7, { opacity: 0, y: 40 });
t3.from(".landing-button", 0.5, { opacity: 0, scale: 0 });
