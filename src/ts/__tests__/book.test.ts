import Book from '../domain/Book';

test('Creation Book', () => {
    const book = new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225);
    const testBook = {
        id: 1001,
        name: 'War and Piece',
        author: 'Leo Tolstoy',
        price: 2000,
        pages: 1225,
    };
    expect(book).toEqual(testBook);
});