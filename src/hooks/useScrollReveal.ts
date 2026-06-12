import { useEffect } from "react";

export function useScrollReveal(selector = ".scroll-reveal", threshold = 0.15) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
            entry.target.classList.remove("opacity-0");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -50px 0px" }
    );

    const elements = document.querySelectorAll(selector);
    elements.forEach((el) => {
      el.classList.add("opacity-0");
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [selector, threshold]);
}

export function useScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
}
