import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import * as reactUse from 'react-use';

import Hero from '../../HomePage/Hero';

reactUse.useMedia = jest.fn();

describe('Hero', () => {
  test('renders and matches snapshot', () => {
    const { asFragment } = render(<Hero />);
    expect(asFragment()).toMatchSnapshot();
  });
  test('Ameira Yanni is rendered', () => {
    render(<Hero />);
    expect(screen.getByText('Ameira Yanni')).toBeInTheDocument();
  });
});
