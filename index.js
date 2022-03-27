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

// var t1 = new TimelineMax();
// var t2 = new TimelineMax();
// var t3 = new TimelineMax();
// var t4 = new TimelineMax();

// t1.staggerFrom(".link", 1.5, { opacity: 0, y: 20 }, 0.1);
// t2.staggerFrom(".socialLink", 1.5, { opacity: 0, y: 20 }, 0.1);
// t4.from(".marketplaceButton", 1.5, { opacity: 0, y: 20 });
// t3.from(".landing-header", 1.7, { opacity: 0, y: 40 });
// t3.from(".landing-button", 1, { opacity: 0, y: 60 }, "-=1");

var controller = new ScrollMagic.Controller();

var landing = new TimelineMax();
var features = new TimelineMax();
var navbar = new TimelineMax();
var text = new TimelineMax();
var vision = new TimelineMax();
var tokenomics = new TimelineMax();
var taxDistribution = new TimelineMax();

landing
  .from(".landing-header", 1, { opacity: 0, y: 20 }, 0.6)
  .from(".landing-button", 1, { opacity: 0, y: 20 }, 0.9);

navbar
  .staggerFrom(".link", 1.5, { opacity: 0, y: 20 }, 0.15)
  .staggerFrom(".socialLink", 1.5, { opacity: 0, y: 20 }, 0.2, 0)
  .from(".marketplaceButton", 1.5, { opacity: 0, y: 20 }, 0)
  .from(".logo", 1.5, { opacity: 0, y: 20 }, 0);

text.staggerFrom(".text-y", 0.7, { opacity: 0, y: 20, scale: 0.5 }, 0.1);

features.from(".features-heading", 1, { opacity: 0, y: 40 }, 0.25).staggerFrom(
  ".features",
  1,
  {
    opacity: 0,
    y: 40,
  },
  0
);

vision
  .from(".vision-bar", 1, { opacity: 0, y: 20 })
  .from(".vision-heading", 1, { opacity: 0, y: 20 }, 0)
  .from(".vision-subheading", 1, { opacity: 0, y: 20 }, 0)
  .staggerFrom(".vision-paragraph", 1, { opacity: 0, y: 20 }, 0);

tokenomics
  .from(".tokenomics-header", 1, { opacity: 0, y: 20 })
  .from(".tokenomics-subheader", 1, { opacity: 0, y: 20 }, 0.2)
  .from(".tokenomics-image", 1, { opacity: 0, y: 20 }, 0.3)
  .from(".tokenDistribution", 1, { opacity: 0, y: 20 }, 0.3);

taxDistribution.staggerFrom(
  ".taxDistribution-box",
  1,
  { opacity: 0, y: 20 },
  0.2
);

var featuresScene = new ScrollMagic.Scene({
  triggerElement: ".third",
  triggerHook: 0.5,
})
  .addIndicators({
    colorTrigger: "blue",
    colorStart: "blue",
    colorEnd: "white",
    indent: 12,
  })
  .setTween(features)
  .addTo(controller);

var textScene = new ScrollMagic.Scene({
  triggerElement: ".textSection",
  triggerHook: 0.5,
})
  .addIndicators({
    colorTrigger: "white",
    colorStart: "white",
    colorEnd: "white",
    indent: 100,
  })
  .setTween(text)
  .addTo(controller);

var visionScene = new ScrollMagic.Scene({
  triggerElement: ".vision",
  triggerHook: 0.5,
})
  .addIndicators({
    colorTrigger: "white",
    colorStart: "white",
    colorEnd: "white",
    indent: 100,
  })
  .setTween(vision)
  .addTo(controller);

var tokenomicsScene = new ScrollMagic.Scene({
  triggerElement: ".tokenomics",
  triggerHook: 0.5,
})
  .addIndicators({
    colorTrigger: "white",
    colorStart: "white",
    colorEnd: "white",
    indent: 100,
  })
  .setTween(tokenomics)
  .addTo(controller);

var taxDistributionScene = new ScrollMagic.Scene({
  triggerElement: ".tax",
  triggerHook: 0.5,
})
  .addIndicators({
    colorTrigger: "white",
    colorStart: "white",
    colorEnd: "white",
    indent: 100,
  })
  .setTween(taxDistribution)
  .addTo(controller);
