// Scroll top btn

const scrollBtn = document.getElementById("scrollTopBtn");
const footer = document.querySelector("footer");

window.onscroll = () => {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight;
  const clientHeight = document.documentElement.clientHeight;
  const footerHeight = footer.offsetHeight;

  // Show button if scrolled down 200px
  if (scrollTop > 200) {
    scrollBtn.style.display = "block";

    // Check if near bottom (approaching footer)
    if (scrollTop + clientHeight > scrollHeight - footerHeight) {
      scrollBtn.style.bottom = `${footerHeight + 20}px`; // Move above footer
    } else {
      scrollBtn.style.bottom = "7.5vh"; // Default position
    }

  } else {
    scrollBtn.style.display = "none";
  }
};

// Smooth scroll to top on click
scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

