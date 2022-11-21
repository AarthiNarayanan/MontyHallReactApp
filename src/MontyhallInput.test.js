import { getAllByLabelText, getByTestId, render, screen } from '@testing-library/react';
import Layout from './components/Layout.js';
import MontyhallInput from './components/MontyhallInput.js';


test('renders learn react link', () => {
  render(<Layout />);
  const Element = screen.getByText('The Monty Hall Problem');
  expect(Element).toBeInTheDocument();
});


test('test submit button', () => {
  const { getByLabelText, getByTestId,getAllByRole } = render(<MontyhallInput />);
    const title = getByTestId("btn-submit");
    expect(title).toBeInTheDocument();
    const button = getAllByRole("button");
    expect(button).toHaveLength(1);
  });

  test('test checkbox', () => {
    const { getByLabelText, getByTestId,getAllByRole } = render(<MontyhallInput />);
      const checkbox = getAllByRole("checkbox");
      expect(checkbox).toHaveLength(1);
      
    });
