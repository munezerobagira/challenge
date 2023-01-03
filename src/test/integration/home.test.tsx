import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import HTMLHead, { HTMLHeadProps } from '../../components/HTMLHead';

describe('Home page', () => {
  it('render link to profile the about page', () => {
    const headObject: HTMLHeadProps = { description: 'Welcome', title: 'Testing' };

    const headElement = renderer.create(<HTMLHead description={headObject.description} title={headObject.title} />);
    console.log(headElement.toJSON());
    expect(headElement.toJSON()).toMatchSnapshot();
  });
});
