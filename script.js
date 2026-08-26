const form = document.querySelector('#form');
const itemInput = document.querySelector('#item-input');
const list = document.querySelector('#list');

// Add the text from the input as a new item when the form is submitted.
form.addEventListener('submit', function (event) {
	event.preventDefault();

	const newItem = document.createElement('li');

	const itemText = document.createElement('span');
	itemText.textContent = itemInput.value;

	const deleteButton = document.createElement('button');
	deleteButton.type = 'button';
	deleteButton.className = 'delete-btn';
	deleteButton.setAttribute('aria-label', 'Delete item');
	deleteButton.innerHTML = '<i class="fa-solid fa-trash" aria-hidden="true"></i>';

	deleteButton.addEventListener('click', function () {
		newItem.remove();
	});

	newItem.appendChild(itemText);
	newItem.appendChild(deleteButton);
	list.appendChild(newItem);

	itemInput.value = '';
});
