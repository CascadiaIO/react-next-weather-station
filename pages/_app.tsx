/** @format */

import { createTheme, NextUIProvider } from "@nextui-org/react";
import { Provider, useSelector } from "react-redux";
import store from "../store/index";

import { AppProps } from "next/app";
import "../styles/globals.css";
import Navigation from "../components/Navbar/Navbar";
// import Notification from "../components/UI/Notification";

const darkTheme = createTheme({ type: "dark" });

export default function App({ Component, pageProps }: AppProps) {
  // const notification = useSelector((state: any) => state.ui.notification);

  return (
    <NextUIProvider theme={darkTheme}>
      <Navigation />
      <Provider store={store}>
        {/* {notification && <Notification />} */}
        <Component {...pageProps} />
      </Provider>
    </NextUIProvider>
  );
}
