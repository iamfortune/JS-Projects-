// Book constructor
function Book(title, author, isbn) {
    this.titl = title;
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
        if(title === '' || author === '' || isbn === '') {
            alert('please add details');
        } else {
              // Add book to List 
        ui.addBookToList(book);

        // Clear books field or lists 
        ui.clearFields();
    }

        e.preventDefault();
})