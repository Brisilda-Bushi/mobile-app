import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

test('renders correctly', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});