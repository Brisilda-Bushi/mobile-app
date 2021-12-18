import React from 'react';
import renderer from 'react-test-renderer';
import HomeScreen from '../screens/HomeScreen';
import { Provider } from 'react-redux';

test('renders correctly', () => {
  const tree = renderer.create(<HomeScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});


// describe("<HomeScreen />", () => {
//   it('has 1 child', () => {
//       const tree = renderer.create(<HomeScreen />).toJSON();
//       expect(tree.children.length).toBe(1);
//   });
// });