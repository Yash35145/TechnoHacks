const display = document.getElementById('display');
const darkModeToggle = document.getElementById('darkModeToggle');

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}

darkModeToggle.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode');
});
