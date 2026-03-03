(() => {
  const btn = document.querySelector("[data-navbtn]");
  const mobile = document.querySelector("[data-mobile]");
  if (!btn || !mobile) return;

  const setOpen = (open) => {
    mobile.classList.toggle("is-open", open);
    btn.setAttribute("aria-expanded", String(open));
  };

  btn.addEventListener("click", () => {
    const open = btn.getAttribute("aria-expanded") !== "true";
    setOpen(open);
  });

  // Close on navigation click
  mobile.addEventListener("click", (e) => {
    const a = e.target.closest("a");
    if (a) setOpen(false);
  });

  // Elevate header on scroll
  const header = document.querySelector("[data-elevate]");
  const onScroll = () => {
    if (!header) return;
    header.style.boxShadow = window.scrollY > 6 ? "0 10px 30px rgba(0,0,0,.28)" : "none";
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();
