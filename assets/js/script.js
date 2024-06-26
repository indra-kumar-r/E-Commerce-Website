"use strict";

// modal variables
const modal = document.querySelector("[data-modal]");
const modalCloseBtn = document.querySelector("[data-modal-close]");
const modalCloseOverlay = document.querySelector("[data-modal-overlay]");

// modal function
const modalCloseFunc = function () {
  modal.classList.add("closed");
};

// modal eventListener
modalCloseOverlay.addEventListener("click", modalCloseFunc);
modalCloseBtn.addEventListener("click", modalCloseFunc);

// notification toast variables
const notificationToast = document.querySelector("[data-toast]");
const toastCloseBtn = document.querySelector("[data-toast-close]");

// notification toast eventListener
toastCloseBtn.addEventListener("click", function () {
  notificationToast.classList.add("closed");
});

// mobile menu variables
const mobileMenuOpenBtn = document.querySelectorAll(
  "[data-mobile-menu-open-btn]"
);
const mobileMenu = document.querySelectorAll("[data-mobile-menu]");
const mobileMenuCloseBtn = document.querySelectorAll(
  "[data-mobile-menu-close-btn]"
);
const overlay = document.querySelector("[data-overlay]");

for (let i = 0; i < mobileMenuOpenBtn.length; i++) {
  // mobile menu function
  const mobileMenuCloseFunc = function () {
    mobileMenu[i].classList.remove("active");
    overlay.classList.remove("active");
  };

  mobileMenuOpenBtn[i].addEventListener("click", function () {
    mobileMenu[i].classList.add("active");
    overlay.classList.add("active");
  });

  mobileMenuCloseBtn[i].addEventListener("click", mobileMenuCloseFunc);
  overlay.addEventListener("click", mobileMenuCloseFunc);
}

// accordion variables
const accordionBtn = document.querySelectorAll("[data-accordion-btn]");
const accordion = document.querySelectorAll("[data-accordion]");

for (let i = 0; i < accordionBtn.length; i++) {
  accordionBtn[i].addEventListener("click", function () {
    const clickedBtn = this.nextElementSibling.classList.contains("active");

    for (let i = 0; i < accordion.length; i++) {
      if (clickedBtn) break;

      if (accordion[i].classList.contains("active")) {
        accordion[i].classList.remove("active");
        accordionBtn[i].classList.remove("active");
      }
    }

    this.nextElementSibling.classList.toggle("active");
    this.classList.toggle("active");
  });
}

// profile

// document.addEventListener("DOMContentLoaded", function () {
//   const actionBtn = document.querySelector(".action-btn");
//   const profileBox = document.createElement("div");
//   profileBox.className = "profile-box";

//   const storedName = sessionStorage.getItem("user_name");
//   const storedEmail = sessionStorage.getItem("user_email");

//   const profileName = storedName || "";
//   const profileEmail = storedEmail || "";

//   profileBox.innerHTML = `<p>${profileName}</p><p>${profileEmail}</p>`;

//   document.body.appendChild(profileBox);

//   actionBtn.addEventListener("mouseover", function () {
//     const btnRect = actionBtn.getBoundingClientRect();
//     const topPosition = btnRect.bottom + window.scrollY + 5;
//     const leftPosition = btnRect.left + window.scrollX;
//     profileBox.style.top = `${topPosition}px`;
//     profileBox.style.left = `${leftPosition}px`;
//     profileBox.style.display = "block";
//   });

//   actionBtn.addEventListener("mouseout", function () {
//     profileBox.style.display = "none";
//   });
// });

// profile

// scrollup

window.addEventListener("scroll", function () {
  var scrollButton = document.getElementById("scrollup");
  if (
    this.document.body.scrollTop > 50 ||
    document.documentElement.scrollTop > 50
  ) {
    scrollButton.style.display = "flex";
  } else {
    scrollButton.style.display = "none";
  }
});

document.getElementById("scrollup").addEventListener("click", function () {
  document.documentElement.scrollTop = 0;
});
// scrollup

// ProfileSection

// document
//   .querySelector(".profileSection")
//   .addEventListener("click", function () {
//     const profileSection = document.querySelector(".profileSection");
//     profileSection.classList.toggle("showBefore");
//   });

// ProfileSection
