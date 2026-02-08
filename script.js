// Year
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Glow toggle
const themeBtn = document.getElementById("themeBtn");
if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("glow");
  });
}

// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

if (menuBtn && mobileMenu) {
  // Initialize a11y state
  mobileMenu.setAttribute("aria-hidden", "true");

  menuBtn.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("show");
    mobileMenu.setAttribute("aria-hidden", String(!isOpen));
    menuBtn.setAttribute("aria-expanded", String(isOpen));
  });

  mobileMenu.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      mobileMenu.classList.remove("show");
      mobileMenu.setAttribute("aria-hidden", "true");
      menuBtn.setAttribute("aria-expanded", "false");
    });
  });

  // Close menu on Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileMenu.classList.contains("show")) {
      mobileMenu.classList.remove("show");
      mobileMenu.setAttribute("aria-hidden", "true");
      menuBtn.setAttribute("aria-expanded", "false");
    }
  });
}

// Copy template (optional feature)
const copyBtn = document.getElementById("copyBtn");
const copyNote = document.getElementById("copyNote");

if (copyBtn && copyNote) {
  copyBtn.addEventListener("click", async () => {
    const template = `Subject: Zuldeira inquiry

Hello Zuldeira Team,

Name:
Company:
Use case:
Timeline:
Contact email:

Message:
`;

    try {
      await navigator.clipboard.writeText(template);
      copyNote.textContent = "Template copied to clipboard.";
      setTimeout(() => (copyNote.textContent = ""), 2500);
    } catch {
      copyNote.textContent = "Copy failed. Please copy the template manually.";
    }
  });
}
