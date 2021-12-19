import React from 'react';
import renderer, { act } from 'react-test-renderer';
import HomeScreen from '../screens/HomeScreen';
import { Provider } from 'react-redux';
import { Store } from "../redux/store";
import userReducer from '../redux/reducers';


jest.useFakeTimers();

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

const store = { Store };

const tree = renderer.create(
  <Provider store={Store}>
    <HomeScreen/>
   </Provider>)

test('renders correctly', () => {
  tree.toJSON();
  expect(tree).toMatchSnapshot();
});

test("call timeout", () => {
  jest.mock("axios", () => ({
    get: jest.fn(() => {
      return Promise.resolve();
    })
  }));  
  act(() => jest.runAllTimers());
  const text = tree.root.findByProps({testID: "myText"}).props;
  expect(text.children).toEqual("Mobile App Listing");
})

test("checking mock api call with axios", () => {
  jest.mock("axios", () => ({
    get: jest.fn(() => {
      return Promise.resolve();
    })
  }));
})

test("status stored properly", () => {
  expect(userReducer(undefined, {})).toEqual({users: []})
})
