const chips = document.querySelectorAll(".chip");

function moveChipRandomly(chip) {
  const hero = document.querySelector(".hero");

  
  const heroWidth = hero.clientWidth;
  const heroHeight = hero.clientHeight;

  // Random position inside hero (subtract 50 so they don’t overflow)
  const randomX = Math.random() * (heroWidth - 100);
  const randomY = Math.random() * (heroHeight - 50);

  // Apply new position
  chip.style.left = `${randomX}px`;
  chip.style.top = `${randomY}px`;
}

// Move each chip every 4 seconds
chips.forEach(chip => {
  setInterval(() => moveChipRandomly(chip), 2000);

  // Start them at a random position immediately
  moveChipRandomly(chip);
});
