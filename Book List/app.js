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
    row.innerHTML = '';
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

        

        // Add book to List 
        ui.addBookToList(book);

        e.preventDefault();
})