import { getGifs } from '../../helpers/getGifs';

describe('getGifs', () => {
  test('should return array gifs ', async () => {
    const gifs = await getGifs('valorant');

    expect(gifs.length).toBeGreaterThan(0);
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});
