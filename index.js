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

const phases = document.querySelectorAll(".question");

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

const quoteParagraph = document.querySelector(".quote-paragraph");
var quoteParagraphStringArray =
  "At Antiqua, we are revolutionizing the world of digital artwork. With the help of blockchain technology, we have created thefirst marketplace where users can buy, sell and exchange their NFTs.";
quoteParagraphStringArray = quoteParagraphStringArray.split(" ");
quoteParagraphStringArray.forEach((word) => {
  if (word === "exchange") {
    quoteParagraph.innerHTML += `<span class="quote-span text-yellow-500">${word} </span>`;
  } else {
    quoteParagraph.innerHTML += `<span class="quote-span">${word} </span>`;
  }
});

// Animations

var controller = new ScrollMagic.Controller();

var landing = new TimelineMax();
var features = new TimelineMax();
var navbar = new TimelineMax();
var text = new TimelineMax();
var vision = new TimelineMax();
var roadmap = new TimelineMax();
var tokenomics = new TimelineMax();
var taxDistribution = new TimelineMax();
var quoteTl = new TimelineMax();
var marketplace = new TimelineMax();
var fqa = new TimelineMax();
var telegram = new TimelineMax();

landing
  .from(".landing-header", 1, { opacity: 0, y: 20 }, 0.6)
  .from(".landing-button", 1, { opacity: 0, y: 20 }, 0.9);

navbar
  .staggerFrom(".link", 1.5, { opacity: 0, y: 20 }, 0.15)
  .staggerFrom(".socialLink", 1.5, { opacity: 0, y: 20 }, 0.2, 0)
  .from(".marketplaceButton", 1.5, { opacity: 0, y: 20 }, 0)
  .from(".mobile-nav-trigger", 1.5, { opacity: 0, y: 20 }, 0)
  .from(".logo", 1.5, { opacity: 0, y: 20 }, 0);

text.staggerFrom(".text-y", 0.7, { opacity: 0, y: 20, scale: 0.5 }, 0.1);
quoteTl.staggerFrom(".quote-span", 0.5, { opacity: 0, y: 20, scale: 0.5 }, 0.1);

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

roadmap
  .from(".roadmap-bar", 1, { opacity: 0, y: 20 })
  .from(".roadmap-heading", 1, { opacity: 0, y: 20 }, 0)
  .from(".roadmap-subheading", 1, { opacity: 0, y: 20 }, 0)
  .staggerFrom(".phase", 1, { opacity: 0, y: 20 }, 0.4);

fqa
  .from(".fqa-bar", 1, { opacity: 0, y: 20 })
  .from(".fqa-heading", 1, { opacity: 0, y: 20 }, 0)
  .from(".fqa-subheading", 1, { opacity: 0, y: 20 }, 0)
  .staggerFrom(".question", 1, { opacity: 0, y: 20 }, 0.4, 0.2);

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

marketplace
  .from(".marketplace-nfts", 1, { opacity: 0, y: 20 })
  .from(".marketplace-bar", 1, { opacity: 0, y: 20 }, 0)
  .from(".marketplace-heading", { opacity: 0, y: 20 }, 0.5)
  .from(".marketplace-subheading", { opacity: 0, y: 20 })
  .from(".marketplace-button", { opacity: 0, y: 20 });

telegram
  .from(".telegram-logo", 1, { opacity: 0, y: 20 })
  .from(".telegram-heading", 1, { opacity: 0, y: 20 }, 0)
  .from(".telegram-button", { opacity: 0, y: 20 }, 0.5);

var featuresScene = new ScrollMagic.Scene({
  triggerElement: ".third",
  triggerHook: 0.5,
})
  // .addIndicators({
  //   colorTrigger: "blue",
  //   colorStart: "blue",
  //   colorEnd: "white",
  //   indent: 12,
  // })
  .setTween(features)
  .addTo(controller);

var textScene = new ScrollMagic.Scene({
  triggerElement: ".textSection",
  triggerHook: 0.5,
})
  // .addIndicators({
  //   colorTrigger: "white",
  //   colorStart: "white",
  //   colorEnd: "white",
  //   indent: 100,
  // })
  .setTween(text)
  .addTo(controller);

var visionScene = new ScrollMagic.Scene({
  triggerElement: ".vision",
  triggerHook: 0.5,
})
  // .addIndicators({
  //   colorTrigger: "white",
  //   colorStart: "white",
  //   colorEnd: "white",
  //   indent: 100,
  // })
  .setTween(vision)
  .addTo(controller);

var tokenomicsScene = new ScrollMagic.Scene({
  triggerElement: ".tokenomics",
  triggerHook: 0.5,
})
  // .addIndicators({
  //   colorTrigger: "white",
  //   colorStart: "white",
  //   colorEnd: "white",
  //   indent: 100,
  // })
  .setTween(tokenomics)
  .addTo(controller);

var taxDistributionScene = new ScrollMagic.Scene({
  triggerElement: ".tax",
  triggerHook: 0.5,
})
  // .addIndicators({
  //   colorTrigger: "white",
  //   colorStart: "white",
  //   colorEnd: "white",
  //   indent: 100,
  // })
  .setTween(taxDistribution)
  .addTo(controller);

var quoteScene = new ScrollMagic.Scene({
  triggerElement: ".quote",
  triggerHook: 0.5,
})
  // .addIndicators({
  //   colorTrigger: "white",
  //   colorStart: "white",
  //   colorEnd: "white",
  //   indent: 100,
  // })
  .setTween(quoteTl)
  .addTo(controller);

var roadmapScene = new ScrollMagic.Scene({
  triggerElement: ".roadmap",
  triggerHook: 0.5,
})
  // .addIndicators({
  //   colorTrigger: "white",
  //   colorStart: "white",
  //   colorEnd: "white",
  //   indent: 100,
  // })
  .setTween(roadmap)
  .addTo(controller);

var marketplaceScene = new ScrollMagic.Scene({
  triggerElement: ".marketplace",
  triggerHook: 0.5,
})
  // .addIndicators({
  //   colorTrigger: "white",
  //   colorStart: "white",
  //   colorEnd: "white",
  //   indent: 100,
  // })
  .setTween(marketplace)
  .addTo(controller);

var fqaScene = new ScrollMagic.Scene({
  triggerElement: ".fqa",
  triggerHook: 0.5,
})
  // .addIndicators({
  //   colorTrigger: "white",
  //   colorStart: "white",
  //   colorEnd: "white",
  //   indent: 100,
  // })
  .setTween(fqa)
  .addTo(controller);

var telegramScene = new ScrollMagic.Scene({
  triggerElement: ".telegram",
  triggerHook: 0.5,
})
  // .addIndicators({
  //   colorTrigger: "white",
  //   colorStart: "white",
  //   colorEnd: "white",
  //   indent: 100,
  // })
  .setTween(telegram)
  .addTo(controller);
