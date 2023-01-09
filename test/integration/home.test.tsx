import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import HTMLHead, { HTMLHeadProps } from '../../src/components/Common/HTMLHead';
import Home from '../../src/pages';

describe('Home page', () => {
  it('render link to profile the about page', () => {
    const headElement = renderer.create(<Home />);
    expect(headElement.toJSON()).toMatchSnapshot();
  });
});
