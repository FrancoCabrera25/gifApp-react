import { render, screen } from '@testing-library/react';
import { GifGridItem } from '../../components/GifGridItem';

describe('test gifItem', () => {
  const title = 'Valorant';
  const url = 'https://valorant/valorant.jpg';
  test('should match snapshot', () => {
    const { container } = render(<GifGridItem title={title} url={url} />);

    expect(container).toMatchSnapshot();
  });

  test('should show url y alt ', () => {
    render(<GifGridItem title={title} url={url} />);

    const { src, alt } = screen.getByRole('img');

    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test('should show title ', () => {
    render(<GifGridItem title={title} url={url} />);
    expect(screen.getByAltText(title)).toBeTruthy();

  });
  
});
