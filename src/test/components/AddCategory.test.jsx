import { AddCategory } from '../../components/AddCategory';
import { fireEvent, render, screen } from '@testing-library/react';
describe('AddCategory', () => {
  test('should  change value input', () => {
    render(<AddCategory onNewCategory={() => {}} />);

    const input = screen.getByRole('textbox');
    fireEvent.input(input, { target: { value: 'valorant'}});

    expect(input.value).toBe('valorant');
  });
});
