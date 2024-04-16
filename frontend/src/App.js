import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppLayout from "./components/AppLayout";
export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}
