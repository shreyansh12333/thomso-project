import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieComp from "./components/moviecomp";
import Form from "./components/form";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import MoviePage from "./components/moviePage";
import FirstPage from "./components/firstpage";
import ItemsFromContext from "./components/store/moviestore";

function App() {
  const [id, setId] = useState();
  return (
    <ItemsFromContext.Provider value={{ id: id, setId: setId }}>
      <Routes>
        <Route path="/" element={<FirstPage />}></Route>
        <Route path="/form" element={<Form />}></Route>
        <Route path="/moviepage" element={<MoviePage />}></Route>
      </Routes>
    </ItemsFromContext.Provider>
    // {/* <MoviePage /> */}
  );
}

export default App;
