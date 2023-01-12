import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";


//STYLED COMPONENT
import StyledComponent1 from "./STYLED COMPONENTS/StyledComponent1";

//USETRANSITION
// import Transition from "./TRANSITION USEID/Transition";

//USEID
// import UseIdExample from "./TRANSITION USEID/Useid";

//GOOGLE SIGN IN
// import App from "./SIGNIN GOOGLE/App";

//DARL LIGHT THEME
// import App from "./DARK LIGHT THEME/App";

//CONTEXT API
// import Acomp from "./CONTEXT API/Acomp";

//SEARCH QUERY PARAMS
// import SearchQueryParams from "./CASE SENSITIVE/SearchQueryParams";

//MULTI RENDER
// import MultiRender from "./CASE SENSITIVE/MultiRender";

//CASE SENSITIVE
// import Home from "./CASE SENSITIVE/Home";
// import About from "./CASE SENSITIVE/About";


//GITHUB
// import Home from "./FINAL GITHUB PROFILER/Home";
// import Dashboard from "./FINAL GITHUB PROFILER/Dashboard";
// import Followers from "./FINAL GITHUB PROFILER/Followers";
// import RepoDescription from "./FINAL GITHUB PROFILER/RepoDescription";

// const router = createBrowserRouter([

  //CONTEXT 
  // {
  //   path:"/",
  //   element:<Acomp/>
  // }

  //SEARCH QUERY PARAMS
  // {
  //   path: "/",
  //   element: <SearchQueryParams />,
  // },


  //MULTI RENDER
  // {
  //   path: "/",
  //   element: <MultiRender />,
  //   loader: () => {
  //     const profile = fetch(
  //       "https://jsonplaceholder.typicode.com/users/2"
  //     );
  //     return profile;
  //   },
  // },

  //CASE SENSITIVE
  // {
  //   path:"/",
  //   element:<Home/>
  // },
  // {
  //   path:"/about",
  //   caseSensitive: true,
  //   element:<About/>
  // },

  //GITHUB
  // {
  //   path:"/",
  //   element:<Home/>
  // },
  // {
  //   path:"dashboard/:username",
  //   caseSensitive: true,
  //   element:<Dashboard/>
  // },
  // {
  //   path:"followers/:username",
  //   caseSensitive: true,
  //   element:<Followers/>
  // },
  // {
  //   path:"repos/:username/:reponame",
  //   caseSensitive: true,
  //   element:<RepoDescription/>
  // },
  
// ]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <RouterProvider router={router} />
// );


// DARK LIGHT THEME //SIGN IN WITH GOOGLE //TRANSITION
ReactDOM.createRoot(document.getElementById("root")).render(
  // <BrowserRouter>
    // <App />
    // <UseIdExample/>
    <StyledComponent1/>
  // </BrowserRouter>
)
