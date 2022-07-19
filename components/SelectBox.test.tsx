import React from 'react';
import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import SelectBox from "../components/SelectBox";

const selectBoxData = [
    {name:"Electronic",id:'1'},
    {name:"Clothing",id:'1'}
]

describe('SelectBox component', () => {
    render(<SelectBox data={[]} />)
    it('should render the component onto the screen', () => {
        expect(screen.getByTestId('list-box')).toBeInTheDocument();
    });
});


test('renders a message', () => {
    const { container, getByText } = render(<SelectBox data={[]} />);
    expect(getByText('Categories')).toBeInTheDocument();
});

it('should visible options when click list open button', async() => {

    render(<SelectBox data={selectBoxData} />);
    const listOption = screen.getByTestId('list-open-button')
    await waitFor(() => {
        fireEvent.click(listOption);
    })
    const option = screen.getByTestId('listbox-option');
    expect(option).toBeInTheDocument()

});
