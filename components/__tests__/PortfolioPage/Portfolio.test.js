import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import * as nextRouter from 'next/router';
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils';

import Portfolio from '../../PortfolioPage/Portfolio';

jest.mock('react-use');
nextRouter.useRouter = jest.fn();

nextRouter.useRouter.mockImplementation(() => ({ route: '/', query: {} }));

const article = {
  image: 'image.jpg',
  title: 'title',
  date: '2019-10-10T00:00:00',
  description: 'desc',
  excerpt: 'excerpt',
  slug: 'slug',
  onTopRow: true,
};

const articles = [
  article,
  {
    ...article,
    title: 'title2',
  },
];

describe('Hero', () => {
  beforeEach(() => {
    mockAllIsIntersecting(true);
  });
  test('renders and matches snapshot', () => {
    const { asFragment } = render(<Portfolio articles={articles} />);
    expect(asFragment()).toMatchSnapshot();
  });
  test('Check that the title, description and date are correctly rendered', () => {
    render(<Portfolio articles={[article]} />);
    expect(screen.getByText('title')).toBeInTheDocument();
    expect(screen.getByText('desc')).toBeInTheDocument();
    expect(screen.getByText('October, 2019')).toBeInTheDocument();
  });
});
