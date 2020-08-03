// Book constructor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// UI constructor 
function UI() {}

UI.prototype.addBookToList = function (book){
    const list = document.getElementById('book-list');

    // Create Table Element
    const row = document.createElement('tr');
   // Inserting columns into the table row
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>
    `;

    list.appendChild(row)
}

// Show Error Alert
UI.prototype.showAlert = function (message, className) {
    const div = document.createElement('div');
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');
    container.insertBefore(div, form);
    setTimeout(function () {
        document.querySelector('.alert').remove();
    }, 2500);
}


// Clear fields and lists 
UI.prototype.clearFields = function () {
    document.getElementById('title').value = '';
    document.getElementById("author").value = "";
    document.getElementById("isbn").value = "";
}

// Event Listeners
document.getElementById('book-form').addEventListener('submit',
    function (e) {
        // Get form values 
        const title = document.getElementById('title').value,
            author = document.getElementById('author').value,
            isbn = document.getElementById('isbn').value
     
        // Instantiate book
        const book = new Book(title, author, isbn);
        
        const ui = new UI();

        // validation 
        if (title === '' || author === '' || isbn === '') {
            ui.showAlert('Please fill in all fields', 'error');
        } else {
            // Add book to List 
            ui.addBookToList(book);

            // Show success and add book to list
            ui.showAlert('Book Added!', 'success'); 

            // Clear books field or lists 
            ui.clearFields();
        }

        e.preventDefault();
    });