import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs');
describe('test in GifGrid', () => {
  const category = 'One punch';
  test('should show loading initial', () => {

    useFetchGifs.mockReturnValue({
        images: [],
        isLoading: true
    })

    render(<GifGrid category='One punch'/>);
    expect(screen.getByText('Cargando...'));
    expect(screen.getByText(category));
  });

  test('should show items when load img', () => {

    const gifs = [{
        id: 'abc',
        title: 'saitama',
        url: 'https://saitama'
    },
    {
        id: '1234',
        title: 'goku',
        url: 'https://goku'
    }];
    useFetchGifs.mockReturnValue({
        images: gifs,
        isLoading: false
    })

    render(<GifGrid category={ category }/>);
    expect(screen.getAllByRole('img').length).toBe(2);

  });
});
