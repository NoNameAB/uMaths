import React from 'react';
import Divisors from "./Pages/Divisors"
import Navigation from "./navigation/MainNavigation"
import {Provider as PaperProvider} from "react-native-paper"

export default function App() {
  return (
    <PaperProvider>
      <Navigation />
    </PaperProvider>
  );
}

