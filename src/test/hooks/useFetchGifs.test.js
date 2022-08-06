import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../hooks/useFetchGifs';

describe('test  hook useFetch', () => {
  test('should initial state', () => {
    const { result } = renderHook(() => useFetchGifs('One Punch'));
    const { images, isLoading } = result.current;

    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test('should return array images and isloading in false', async () => {
    const { result } = renderHook(() => useFetchGifs('One Punch'));
   
     await waitFor(
        ()=> expect(result.current.images.length).toBeGreaterThan(0),
     );

    const { images, isLoading } = result.current;

    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});
