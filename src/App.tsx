import { Route, Routes } from "@solidjs/router";
import type { Component } from "solid-js";
import styles from "./App.module.css";

const App: Component = () => {
  return (
    <Routes>
      <Route path="/" element={<div>First Page of ARGPile</div>} />
    </Routes>
  );
};

export default App;
