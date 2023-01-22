import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import reactLogo from "./assets/react.svg";
import { router } from "./Router";
import { useState } from "react";

function App() {
    return <RouterProvider router={router} />;
}

export default App;
