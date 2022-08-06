import { AddCategory } from '../../components/AddCategory';
import { fireEvent, render, screen } from '@testing-library/react';
describe('AddCategory', () => {
  test('should  change value input', () => {
    render(<AddCategory onNewCategory={() => {}} />);

    const input = screen.getByRole('textbox');
    fireEvent.input(input, { target: { value: 'valorant' } });

    expect(input.value).toBe('valorant');
  });

  test('should call onNewCategory when input contains value', () => {
    const inputValue = 'Saitama';

    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={onNewCategory} />);

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);

    expect(input.value).toBe('');

    expect(onNewCategory).toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    expect(onNewCategory).toHaveBeenCalledWith(inputValue);

  });

  test('should not call onNewCategory this is  input empty ', () => {
    const inputValue = '';

    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={onNewCategory} />);

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);

    expect(input.value).toBe('');

    expect(onNewCategory).not.toHaveBeenCalled();
    // expect(onNewCategory).toHaveBeenCalledTimes(1);
    // expect(onNewCategory).toHaveBeenCalledWith(inputValue);

  });


});
