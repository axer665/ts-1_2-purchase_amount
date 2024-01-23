import Movie from '../domain/Movie';

test('Creation Movie', () => {
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
    const testMovie = {
        id: 2001,
        name: 'Мстители',
        price: 400,
        nameOriginal: 'The avegers',
        formats: ['imax'],
        timing: 137,
        imageUrl: "https:domain.site/products/movies/posters/avengers.jpg",
        age: 12,
        slogan: 'Avengers Assemble!',
        genre: ['фантастика', 'боевик', 'фэнтези', 'приключения'],
    };
    expect(movie).toEqual(testMovie);
});