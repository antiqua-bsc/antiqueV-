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
quoteTl.staggerFrom(
  ".quote-span",
  0.1,
  { opacity: 0, y: 20, scale: 0.5 },
  0.05
);

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

// Tokenomics

const tokenomicsData = [
  {
    name: "3% Burn",
    discription:
      "3% of all $ANTQ traded are burnt. The more that is traded, the more it get into the burn wallet to grow in size reducing the circulating supply and keeping the $ANTQ token growing.",
    iconName: "fire",
  },
  {
    name: "3% Marketing",
    discription:
      "3% of each transaction will be sent to the marketing wallet which will help the team with sustaining organic growth and hype for the project.",
    iconName: "storefront",
  },
  {
    name: "3% Rewards",
    discription:
      "3% of each transaction is redistributed automatically to $ANTQ token holders with $XRP.",
    iconName: "gift",
  },
  {
    name: "2% Buyback",
    discription:
      "2% of each transaction will be automatically made a Buyback to make sure the token has stable growth in order to create a rising price floor and stability",
    iconName: "shopping-cart",
  },
  {
    name: "2% Development",
    discription:
      "2% of each transaction will be used for the whole development of the project exclusevily the Marketplace",
    iconName: "code",
  },
  {
    name: "1% Charity",
    discription:
      "1% of each transaction will be sent to the church as donations.",
    iconName: "coins",
  },
];

const tokenomicsElement = document.querySelector("#tokenomics");

for (var token of tokenomicsData) {
  tokenomicsElement.innerHTML += `<div class="taxDistribution-box h-auto">
  <div class="box h-full md:p-10 px-5 py-8">
      <div class="relative flex z-10">
          <div class="box flex p-3 md:mb-10 mb-8">
              <i class="ph-${token.iconName}-fill lg:text-6xl md:text-5xl text-4xl text-yellow-500"></i>
          </div>
      </div>
      <h6 class="md:text-4xl text-2xl font-primary font-bold text-white md:mb-8 mb-6">${token.name}</h6>
      <p class="md:text-xl text-sm font-primary font-semibold text-gray-400">${token.discription}</p>
  </div>
</div>`;
}

const fqaData = [
  {
    title: "What is an NFT?",
    content:
      "An NFT, or a non-fungible token,is data that represents something specific that is stored or accounted for in a digital ledger. An NFT can, for example, represent a piece of art, a music album, or other types of digital files.",
  },
  {
    title: "How is Antiqua created?",
    content:
      "Antiqua is a collection of digital art that is made to bring smiles to collectors. Combined with the ancient civilization legacy, each ANTIQUA is uniquely created and carefully designed by highly experienced artists by overlaying various pre-designed attributes on the base ANTIQUA character from different eras. The process of assigning attributes is achieved through the process called “minting” on the BEP20 blockchain, which randomizes the overlaying process using the pre-ascribed probabilities of each attribute. Once minted, each Antiqua becomes a unique NFT and will be transferred to your designated crypto-wallet.",
  },
  {
    title: "How many ANTIQUA are there?",
    content:
      "There is a strictly limited supply of ANTIQUA. There will only ever be 3000 origins Antiqua made available and each of them will be unique from the next.",
  },
  {
    title: "How do I own an ANTIQUA nft?",
    content:
      "Antiqua nft ranks are calculated by the product of all the probabilities of their features. The Antiqua with the lowest probability has the 1st rank.",
  },
  {
    title: "How are the ranks of each Antiqua calculated?",
    content:
      "ANTIQUA can be minted on the “Mint” tab on our webpage that will be available after we fill the presale Simply connect a compatible crypto-wallet with the requisite mint fees.",
  },
];

const fqaElement = document.querySelector("#fqaQuestions");

for (var fqaDataElement of fqaData) {
  fqaElement.innerHTML += `<div class="z-10 border-black mb-5 question">
  <div class="box md:py-10 md:px-10 py-6 px-6">
      <div class="flex items-center justify-between w-full pointer-events-none ">
          <p class="md:text-xl text-lg font-primary text-white font-medium">${fqaDataElement.title}</p>
          <i class="ph-plus-bold text-xl text-white"></i>
      </div>
      <div class="hidden mt-3 content md:mt-12 mt-8">
          <p class="md:text-lg text-base font-primary font-semibold text-gray-400">${fqaDataElement.content}</p>
      </div>
  </div>
</div>`;
}

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

const mobileNavLink = document.querySelectorAll(".mobileNavLink");
Array.from(mobileNavLink).forEach((navLink) => {
  navLink.addEventListener("click", () => {
    mobile_header.classList.add("hidden");
  });
});
