import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import CharacterListPage from "../CharacterListPage/CharacterListPage";
import CharacterDetailPage from "../CharacterDetailPage/CharacterDetailPage";

export const Router = () => {
    return(
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<CharacterListPage />} />
          <Route path={'/detalhe/:id'} element={<CharacterDetailPage />} />
        </Routes>
      </BrowserRouter>
    )  
  }