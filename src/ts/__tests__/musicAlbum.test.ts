import MusicAlbum from '../domain/MusicAlbum';

test('Creation MusicAlbum', () => {
    const musicAlbum = new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900);
    const testMusicAlbum = {
        id: 1008,
        name: 'Meteora',
        author: 'Linkin Park',
        price: 900,
    };
    expect(musicAlbum).toEqual(testMusicAlbum);
});