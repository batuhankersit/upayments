import React from 'react';
import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import ProductList from "@up-components/ProductList";

const mockProductData = [{
    name:'test name',
    avatar:'test avatar',
    developerEmail:'test email',
    price:'100',
    id:'2',
    category:'test category',
    description:'test desc'
}]

describe('Product List component', () => {
    render(<ProductList productsData={[]} />)
    it('should render the component onto the screen', () => {
        expect(screen.getByTestId('product-list-container')).toBeInTheDocument();
    });
});

it('should remove item from list when clicked Remove Button', async() => {
    render(<ProductList productsData={mockProductData}  />);
    const removeButton = await screen.getByTestId('remove-button');
    const item = await screen.getByText('test name')
    expect(item).toBeInTheDocument();
    await waitFor(() => {
        fireEvent.click(removeButton);
    })
    expect(item).toBeVisible()

});


it('should show No Data Text', async() => {
    render(<ProductList productsData={[]}  />);
    expect(screen.getByText('No Data')).toBeInTheDocument()
});
