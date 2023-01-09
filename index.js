document.addEventListener('DOMContentLoaded', function () {
  const block = document.querySelector('.block');
  const colorName = document.querySelector('.color__name');
  const button = document.querySelector('.button');
  const symbols = '0123456789abcdef';
  let color = '';

  button.addEventListener('click', () => {
    for (let i = 0; i < 6; ++i) {
      const randomIndex = symbols[Math.abs(Math.round(Math.random() * symbols.length - 1))];
      color = `${color}${randomIndex}`;
    }
    block.style.backgroundColor = `#${color}`;
    colorName.textContent = `#${color}`;
    color = '';
  });
});
