import Cart from '../service/Cart';
import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';
import Movie from '../domain/Movie';

let cart = new Cart();

const book = new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225);
const musicAlbum = new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900);
const movie = new Movie(
    2001,
    'Мстители',
    400,
    'The avegers',
    ['imax'],
    137,
    "https:domain.site/products/movies/posters/avengers.jpg",
    12,
    'Avengers Assemble!',
    ['фантастика', 'боевик', 'фэнтези', 'приключения'],
);

beforeEach(() => {
    cart = new Cart();
});

test('new card should be empty', () => {
    expect(cart.items.length).toBe(0);
});

test('Adding and storing in cart', () => {
    cart.add(movie);
    expect(cart.items.length).toBe(1);
});


test('Amount excluding discount', () => {
    const cart = new Cart();
    cart.add(movie);
    cart.add(book);

    expect(cart.getSum()).toBe(2400);
});

test('Amount including discount', () => {
    cart.add(book);
    cart.add(musicAlbum);
    cart.add(movie);
    expect(cart.getSumWithDiscount()).toBe(3267);
    expect(cart.getSumWithDiscount(10)).toBe(2970);
});

test('Two identical products', () => {
    cart.add(movie);
    cart.add(movie);

    expect(cart.items.length).toBe(1);
    expect(cart.getSum()).toBe(400);
});


test('Removing an item from the cart by id', () => {
    cart.add(book);
    cart.add(musicAlbum);
    cart.add(movie);
    cart.deleteItem(1008);
    expect(cart.items.length).toBe(2);
});

test('Removing an item from the cart that is not there, by id', () => {
    cart.add(book);
    cart.add(musicAlbum);
    expect(() => cart.deleteItem(1005)).toThrow(new Error(''));
});