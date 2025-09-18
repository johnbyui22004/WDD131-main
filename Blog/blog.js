const bookCollection = [
    {
        bookId: 1,
        bookTitle: 'Septimus Heap Book One: Magyk',
        releaseDate: 'July 5, 2022',
        bookDescription: 'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
        imageAlt: 'Book cover for Septimus Heap 1',
        recommendedAges: '10-14',
        bookGenre: 'Fantasy',
        bookRating: '****'
    },
    {
        bookId: 2,
        bookTitle: 'Magnus Chase Book One: Sword of Summer',
        releaseDate: 'December 12, 2021',
        bookDescription: 'The anticipated new novel by Rick Riordan... Norse Mythology, and the end result is good.',
        imageUrl: 'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
        imageAlt: 'Book cover for Magnus Chase 1',
        recommendedAges: '12-16',
        bookGenre: 'Fantasy',
        bookRating: '⭐⭐⭐⭐'
    }
];

const bookDisplayArea = document.querySelector(".book-display");

for (let index = 0; index < bookCollection.length; index++) {
    const currentBook = bookCollection[index];

    const bookElement = document.createElement("div");
    bookElement.classList.add("book-card");

    bookElement.innerHTML = `
        <div class="book-card">
            <div class="book-info">
                <p class="release-date">${currentBook.releaseDate}</p>
                <p class="age-range">${currentBook.recommendedAges}</p>
                <p class="genre">${currentBook.bookGenre}</p>
                <p class="rating">${currentBook.bookRating}</p>
            </div>
            <div class="book-details">
                <h3 class="title">${currentBook.bookTitle}</h3>
                <figure>
                    <img src="${currentBook.imageUrl}" alt="${currentBook.imageAlt}">
                </figure>
                <p class="description">${currentBook.bookDescription}</p>
            </div>
        </div>
    `;

    bookDisplayArea.appendChild(bookElement);
}
