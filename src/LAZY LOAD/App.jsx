import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
// import NavBar from "./components/NavBar";

const Home = React.lazy(() => import("./Home"));
const About = React.lazy(() => import("./About"));
const Contact = React.lazy(() => import("./Contact"));
const Menu = React.lazy(() => import("./Menu"));

function App() {
  return (
    <input></input>
    // <BrowserRouter>
    //   {/* <NavBar /> */}
    //   <Routes>
    //     <Route
    //       path="/"
    //       element={
    //         <React.Suspense fallback={<>...</>}>
    //           <Home />
    //         </React.Suspense>
    //       }
    //     />
    //     <Route
    //       path="about"
    //       element={
    //         <React.Suspense fallback={<>...</>}>
    //           <About />
    //         </React.Suspense>
    //       }
    //     />
    //     <Route
    //       path="contact"
    //       element={
    //         <React.Suspense fallback={<>...</>}>
    //           <Contact />
    //         </React.Suspense>
    //       }
    //     />
    //     <Route
    //       path="menu"
    //       element={
    //         <React.Suspense fallback={<>...</>}>
    //           <Menu />
    //         </React.Suspense>
    //       }
    //     />
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
