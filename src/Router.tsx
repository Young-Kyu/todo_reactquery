import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Layout from './components/common/Layout';
import MainLayout from './components/layouts/MainLayout';
import LandingPage from './pages/LandingPage';
import lazyWithPreload, { preloadAllComponents } from './systemConfig/lazyWithPreload';

const TodoListPage = lazyWithPreload(() => import('./pages/todo/TodoList'));

interface RouterProps {


}


const Router = (props: RouterProps): JSX.Element => {

  useEffect(() => {
    preloadChunk();
  }, []);

  const preloadChunk = () => {
    setTimeout(() => {
      preloadAllComponents();
    }, 300)
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<LandingPage />} />
          <Route path="todos" element={<MainLayout />} >
            <Route index element={<TodoListPage />} />
            <Route path={'a'} element={<TodoListPage />} />
            <Route path={'b'} element={<TodoListPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );


}
export default Router;