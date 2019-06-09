const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//Header Img
let headerImg = document.getElementById("cta-img");
headerImg.setAttribute('src', siteContent["cta"]["img-src"]);

//Middle Img
let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

//Nav Links
const navLinks = document.querySelectorAll('a');
let counter = 1;
navLinks.forEach((element) => {
  element.textContent = siteContent['nav'][`nav-item-${counter}`]
  counter++;
  element.style.color = 'green';
});

//Append Nav Element
const navBar = document.querySelector('nav');
const more = document.createElement('a');
more.href ='#';
more.textContent = 'More';
navBar.appendChild(more);

//Prepend Nav Element
const home = document.createElement('a');
home.href = '#';
home.textContent = 'Home';
navBar.prepend(home);

//Button Text
const bttnText = document.querySelector(".cta-text button");
bttnText.textContent = siteContent['cta']['button'];

//H1
const header = document.querySelector('.cta-text h1');
header.textContent = siteContent["cta"]["h1"];

//Paragraph Headers
const pgHeaders = document.querySelectorAll("h4");
pgHeaders[0].textContent = siteContent["main-content"]["features-h4"];
pgHeaders[1].textContent = siteContent["main-content"]["about-h4"];
pgHeaders[2].textContent = siteContent["main-content"]["services-h4"];
pgHeaders[3].textContent = siteContent["main-content"]["product-h4"];
pgHeaders[4].textContent = siteContent["main-content"]["vision-h4"];

//Paragraphs
const paragraphs = document.querySelectorAll("p");
paragraphs[0].textContent = siteContent["main-content"]["features-content"];
paragraphs[1].textContent = siteContent["main-content"]["about-content"];
paragraphs[2].textContent = siteContent["main-content"]["services-content"];
paragraphs[3].textContent = siteContent["main-content"]["product-content"];
paragraphs[4].textContent = siteContent["main-content"]["vision-content"];

//Contact Header
const contactHeader = document.querySelector('.contact h4');
contactHeader.textContent = siteContent["contact"]["contact-h4"];

//Contact Paragraphs
const contactPg = document.querySelectorAll(".contact p");
contactPg[0].textContent = siteContent["contact"]["address"];
contactPg[1].textContent = siteContent["contact"]["phone"];
contactPg[2].textContent = siteContent["contact"]["email"];

//Copyright
const copyright = document.querySelector('footer p');
copyright.textContent = siteContent["footer"]["copyright"];

