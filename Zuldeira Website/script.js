const yearEl = document.getElementById("year");
yearEl.textContent = new Date().getFullYear();

const themeBtn = document.getElementById("themeBtn");
themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("glow");
});

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("show");
    mobileMenu.setAttribute("aria-hidden", String(!isOpen));
});

mobileMenu.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
        mobileMenu.classList.remove("show");
        mobileMenu.setAttribute("aria-hidden", "true");
    });
});

const copyBtn = document.getElementById("copyBtn");
const copyNote = document.getElementById("copyNote");

copyBtn.addEventListener("click", async () => {
    const template =
        `Subject: Zuldeira inquiry

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
        copyNote.textContent = "Copy failed. You can manually select the template in script.js.";
    }
});
