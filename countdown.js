const targetDate = new Date(2026, 5, 27, 0, 0, 0);

function updateCountdown() {
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) {
    setAll("00", "00", "00", "00");
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((diff / (1000 * 60)) % 60);
  const secs = Math.floor((diff / 1000) % 60);

  // 🔥 só atualiza se todos valores forem válidos
  if (days >= 0 && hours >= 0 && mins >= 0 && secs >= 0) {
    setAll(days, hours, mins, secs);
  }

  requestAnimationFrame(updateCountdown);
}

function setAll(d, h, m, s) {
  document.getElementById("cd-days").textContent = String(d).padStart(2, "0");
  document.getElementById("cd-hours").textContent = String(h).padStart(2, "0");
  document.getElementById("cd-mins").textContent = String(m).padStart(2, "0");
  document.getElementById("cd-secs").textContent = String(s).padStart(2, "0");
}

updateCountdown();