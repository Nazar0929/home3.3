const imageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src; 
      img.onload = () => img.classList.add("loaded"); 
      observer.unobserve(img);
    }
  });
}, { rootMargin: "100px" });

document.querySelectorAll("img[data-src]").forEach(img => imageObserver.observe(img));
