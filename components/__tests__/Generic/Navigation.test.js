import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import * as nextRouter from 'next/router';

import Navigation from '../../Generic/Navigation';

jest.mock('react-use');
nextRouter.useRouter = jest.fn();

nextRouter.useRouter.mockImplementation(() => ({ route: '/', query: {} }));

describe('Navigation', () => {
  test('matches snapshot', () => {
    const { asFragment } = render(<Navigation />);
    expect(asFragment()).toMatchSnapshot();
  });
  test('Home, About, Portfolio and CV links can be found on the page', () => {
    render(<Navigation />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Portfolio')).toBeInTheDocument();
  });
});
