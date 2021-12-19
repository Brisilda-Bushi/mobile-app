import * as React from "react";
import { Provider } from 'react-redux';
import { Store } from "./redux/store";
import HomeScreen from "./screens/HomeScreen";

export default function App() {
  return (
    <Provider store={Store}>
    <HomeScreen />
   </Provider>
  );
}

