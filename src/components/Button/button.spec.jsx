import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '.';
import React from 'react';

 
describe('<Button />', () => {
  it('should render the button with the test "Load more"', () => {
    render(<Button text="Load more"/>);
    
    expect.assertions(1)

    const button = screen.getByRole('button', { name: /load more/i});
    expect(button).toBeInTheDocument('class', 'button');
  });
  
  
  it('should call function on button click', () => {
    const fn =  jest.fn();
    render(<Button text="Load more" onClick={fn}/>);

    
    const button = screen.getByRole('button', { name: /load more/i});
   
    userEvent.click(button);
    
    expect(fn).toHaveBeenCalledTimes(1);
  
  });
  
  
  it('should be disabled when disabled is true', () => {
    render(<Button text="Load more" disabled={false} />);
    const button = screen.getByRole('button', { name: /load more/i});
    expect(button).toBeEnabled();
  });
});