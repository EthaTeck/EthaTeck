// Header (stage_link))
const stageLink = document.getElementById('stage_link');
const stageBox = document.getElementById('stage_box');
const arrow = document.getElementById('stage_link_arrow');
const header = document.querySelector('header');
const header_links = document.getElementsByClassName('header_link');

let hoverTimeout;

function matchBoxWidth() {
  const linkRect = stageLink.getBoundingClientRect();
  stageBox.style.width = `${linkRect.width}px`;
}
matchBoxWidth();

let resizeTimeout;
window.addEventListener('resize', () => {
  if (resizeTimeout) cancelAnimationFrame(resizeTimeout);
  resizeTimeout = requestAnimationFrame(matchBoxWidth);
});

function applyHoverStyles() {
  // Cancel any pending hover-out removal
  if (hoverTimeout) clearTimeout(hoverTimeout);

  header.style.backgroundColor = '#fcefe3';
  for (let i = 0; i < header_links.length; i++) {
    header_links[i].style.color = '#222';
    header_links[i].style.setProperty('--underline-color', '#222'); // Set underline color to dark
  }

  stageLink.style.color = '#222';
  stageLink.style.backgroundColor = '#fcefe3';
  stageLink.style.borderTop = '0.3vh solid #222';
  stageLink.style.borderLeft = '0.3vh solid #222';
  stageLink.style.borderRight = '0.3vh solid #222';

  arrow.style.transform = 'rotate(180deg)';
  arrow.style.transition = 'transform 0.5s ease-in';

  stageBox.style.display = 'flex';
  stageBox.style.flexDirection = 'column';

  matchBoxWidth();
}

function removeHoverStyles() {
  header.style.backgroundColor = '';
  for (let i = 0; i < header_links.length; i++) {
    header_links[i].style.color = '';
    header_links[i].style.setProperty('--underline-color', '#fcefe3'); // Reset underline color to the original
  }

  stageLink.style.color = '#fcefe3';
  stageLink.style.backgroundColor = '';
  stageLink.style.borderTop = '';
  stageLink.style.borderLeft = '';
  stageLink.style.borderRight = '';

  arrow.style.transform = '';
  stageBox.style.display = 'none';
}

function delayedHoverOut() {
  hoverTimeout = setTimeout(() => {
    if (!stageLink.matches(':hover') && !stageBox.matches(':hover')) {
      removeHoverStyles();
    }
  }, 500); // delay in ms before removing styles
}

// Hover bindings
stageLink.addEventListener('mouseenter', applyHoverStyles);
stageBox.addEventListener('mouseenter', applyHoverStyles);
stageLink.addEventListener('mouseleave', delayedHoverOut);
stageBox.addEventListener('mouseleave', delayedHoverOut);

// Code Display

fetch('../../template/index.html')
  .then(response => response.text())
  .then(code => {
    // Escape HTML so it doesn't render
    const escaped = code
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

    document.getElementById('index_html').innerHTML = escaped;
  })
  .catch(err => {
    document.getElementById('index_html').textContent = 'Error loading file: ' + err;
  });

fetch('../../template/style.css')
  .then(response => response.text())
  .then(code => {
    // Escape HTML so it doesn't render
    const escaped = code
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

    document.getElementById('style_css').innerHTML = escaped;
  })
  .catch(err => {
    document.getElementById('style_css').textContent = 'Error loading file: ' + err;
  });

  fetch('../../template/main.js')
  .then(response => response.text())
  .then(code => {
    // Escape HTML so it doesn't render
    const escaped = code
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

    document.getElementById('main.js').innerHTML = escaped;
  })
  .catch(err => {
    document.getElementById('main.js').textContent = 'Error loading file: ' + err;
  });

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

