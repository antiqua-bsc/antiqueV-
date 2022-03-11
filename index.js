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
