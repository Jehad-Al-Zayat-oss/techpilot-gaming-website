export function setupOurStatsSection() {
  const ourStatsSection = document.querySelector(".our-stats");
  const counters = document.querySelectorAll(".our-stats .counter");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          observer.unobserve(ourStatsSection);
          const startTime = performance.now();
          requestAnimationFrame(animation);
          function animation(currentTime) {
            const duration = 2000;
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            counters.forEach((counter) => {
              const target = Number(counter.dataset.counter);
              const current = Math.floor(target * progress);
              counter.textContent = `${current}+`;
            });
            if (progress < 1) {
              requestAnimationFrame(animation);
            }
          }
        }
      });
    },
    {
      threshold: .5,
    },
  );
  observer.observe(ourStatsSection);
}
