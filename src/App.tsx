import { Route, Routes } from "@solidjs/router";
import type { Component } from "solid-js";
import styles from "./App.module.scss";

const App: Component = () => {
  return (
    <>
    <h1 class={styles.title}>ARGPile</h1>
    <Routes>
      <Route path="/" element={<div>First Page of ARGPile</div>} />
    </Routes>
    </>
  );
};

export default App;
