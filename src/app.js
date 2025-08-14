const newHabitInput = document.getElementById('new-habit');
const addButton = document.getElementById('add-button');
const habitsList = document.getElementById('habits-list');

// Cargar hábitos desde localStorage
const storedHabits = JSON.parse(localStorage.getItem('habits') || '[]');
storedHabits.forEach(habit => renderHabit(habit.title, habit.checked));

// Agregar nuevo hábito
addButton.addEventListener('click', () => {
  const title = newHabitInput.value.trim();
  if (title) {
    renderHabit(title, false);
    saveHabits();
    newHabitInput.value = '';
  } else {
    alert('Por favor, ingresa un hábito válido.');
  }
});

// Escuchar eventos desde habit-card
habitsList.addEventListener('toggle-habit', saveHabits);
habitsList.addEventListener('delete-habit', saveHabits);

// Renderizar hábito
function renderHabit(title, checked) {
  const habitCard = document.createElement('habit-card');
  habitCard.title = title;
  habitCard.checked = checked;
  habitsList.appendChild(habitCard);
}

// Guardar hábitos
function saveHabits() {
  const cards = habitsList.querySelectorAll('habit-card');
  const habits = Array.from(cards).map(card => ({
    title: card.title,
    checked: card.checked
  }));
  localStorage.setItem('habits', JSON.stringify(habits));
}