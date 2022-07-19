import React from 'react';
import { render, screen } from '@testing-library/react';
import Index from "./index";

it("should show filter", () => {
    render(<Index categories={[]} products={[]} />);
    const main = screen.getByLabelText("search-input");
    expect(main).toBeInTheDocument();
});

