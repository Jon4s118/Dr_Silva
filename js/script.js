// Rolagem suave para as âncoras (navegação mais elegante)
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const alvo = document.querySelector(link.getAttribute("href"));
    if (alvo) alvo.scrollIntoView({ behavior: "smooth" });
  });
});
