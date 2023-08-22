const todos = [];

function addListener() {
  const form = document.getElementById('create-todo-form');
	const input = form.getElementsByTagName('input')[0];

  form.addEventListener('submit', function(event) {
    alert('Form sumitted!');

    event.preventDefault();

    const newTodo = input.value;

    if (newTodo.length === 0) {
      alert('Zadali jste prázdnou hodnotu!');
      return;
    }
  });
}

function renderTodos() {
  const todosHtml = todos.map((todoItem) => {
    return '<li>' + todoItem + '</li>';
  }).join('');

  document.getElementById('todo-list').getElementsByTagName('ul')[0].innerHTML = todosHtml;
}

window.onload = function() {
  console.log('Stránka načtena');

  renderTodos();
};

// 1. Ve funkci window.onload zavolejte funkci "addListener", abychom připojili posluchač
// 2. Přidejte si do pole "todos" nějakou počáteční hodnotu (string), např. "Koupit mléko"
// 3. Po "submitu" přidejte nový úkol do pole "todos"
// 4. Použijte "renderTodos" funkci, aby se po přidání prvku do "todos" pole na stránce zobrazily všechy úkoly a i ten nově přidaný
// 5. Po "submitu" formuláře vylogujte hodnotu, kterou jste zadaly do HTML elementu input
// 6. Zbavte se funkce alert() a nahraďte jí funcké console.log()
