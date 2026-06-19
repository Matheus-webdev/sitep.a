const container = document.getElementById('particles');
for (let i = 0; i < 30; i++) {
  const p = document.createElement('div');
  p.className = 'particle';
  p.style.cssText = `left:${Math.random()*100}%;width:${Math.random()*3+1}px;height:${Math.random()*3+1}px;animation-duration:${Math.random()*15+10}s;animation-delay:${Math.random()*10}s;opacity:0;`;
  container.appendChild(p);
}
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-up').forEach(el => obs.observe(el));

// Touch device support for player cards
if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
  document.querySelectorAll('.player-card').forEach(card => {
    card.addEventListener('click', function(e) {
      const wasActive = this.classList.contains('active');
      document.querySelectorAll('.player-card.active').forEach(c => c.classList.remove('active'));
      if (!wasActive) this.classList.add('active');
    });
  });
}
