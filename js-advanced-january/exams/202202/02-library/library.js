class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
    }

    addBook(bookName, bookAuthor) {
        let booksInCollection = this.books.length;
        if (this.capacity <= booksInCollection) {
            throw Error('Not enough space in the collection.')
        } else {
            this.books.push({
                bookName,
                bookAuthor,
                payed: false,
            });
            return `The ${bookName}, with an author ${bookAuthor}, collect.`
        }
    }

    payBook(bookName) {
        let arrayNames = [];
        for (let book of this.books) {
            arrayNames.push(book.bookName);
        };
        let bookIndex = arrayNames.indexOf(bookName);

        if (bookIndex === -1) {
            throw Error(`${bookName} is not in the collection.`)
        } else {
            // return this.books[bookIndex].payed;
            if (this.books[bookIndex].payed === false) {
                this.books[bookIndex].payed = true;
                return `${bookName} has been successfully paid.`
            } else {
                throw Error(`{bookName} has already been paid.`)
            }
        }
    }

    removeBook(bookName) {
        let arrayNames = [];
        for (let book of this.books) {
            arrayNames.push(book.bookName);
        };
        let bookIndex = arrayNames.indexOf(bookName);
        if (bookIndex === -1) {
            throw Error("The book, you're looking for, is not found.")
        } else {
            // return this.books[bookIndex].payed;
            if (this.books[bookIndex].payed === false) {
                throw Error(`${bookName} need to be paid before removing from the collection.`)
            } else {
                this.books.splice(bookIndex, 1);
                return `${bookName} remove from the collection.`
            }
        }
    }

    getStatistics(bookAuthor) {
        if (bookAuthor !== undefined) {
            let arrayAuthors = [];
            for (let book of this.books) {
                arrayAuthors.push(book.bookAuthor);
            };
            let bookIndex = arrayAuthors.indexOf(bookAuthor);
            if (bookIndex === -1) {
                throw Error(`${bookAuthor} is not in the collection.`)
            } else {
                let status = '';
                if (this.books[bookIndex].payed === true) {
                    status = 'Has Paid';
                } else {
                    status = 'Not Paid';
                }
                return `${this.books[bookIndex].bookName} == ${bookAuthor} - ${status}.`
            }
        } else {
            let result = Number(this.capacity) - Number(this.books.length);
            let msg = `The book collection has ${ result } empty spots left.`
            
            let sorted = this.books.sort((a, b) => {
                return a.bookName.localeCompare(b.bookName);
            })

            for (let el of sorted) {
                let status = '';
                if (el.payed === true) {
                    status = 'Has Paid';
                } else {
                    status = 'Not Paid';
                }
                // msg += `\n${el.bookName} == ${el.bookAuthor} - ${el.status}`
                msg += `\n${el.bookName} == ${el.bookAuthor} - ${el.status}.`
            }
            return msg;
        }
    }
}

const library = new LibraryCollection(5)
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Don Quixote', 'Miguel de Cervantes');
// library.payBook('Don Quixote');
library.addBook('Ulysses', 'James Joyce');
console.log(library.getStatistics());





