import React from 'react';
import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import ProductFilter from "@up-components/ProductFilter";
import userEvent from "@testing-library/user-event";

describe('Procut Filter component', () => {
    render(<ProductFilter categoriesData={[]} />)
    it('should render the component onto the screen', () => {
        expect(screen.getByTestId('filter-input')).toBeInTheDocument();
        expect(screen.getByTestId('categories-select')).toBeInTheDocument();
    });
});

test('It should searched with text',async () => {
    render(<ProductFilter categoriesData={[]} />)
    const input = screen.getByLabelText('search-input')
    await userEvent.type(input, "hello")
    await waitFor(() => expect(input).toHaveDisplayValue('hello'));
})

it('should call the onInputChange handler (if exists) with the type text', () => {
    const onInputChange = jest.fn();
    const inputValue = 'matti';

    render(<ProductFilter categoriesData={[]} onInputChange={onInputChange} />);

    const input = screen.getByLabelText('search-input');

    fireEvent.change(input, {target: {value: inputValue}});

    expect(onInputChange).toHaveBeenCalledWith(inputValue);
});

