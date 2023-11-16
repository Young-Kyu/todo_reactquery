import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Layout from './components/common/Layout';
import MainLayout from './components/layouts/MainLayout';
import LandingPage from './pages/LandingPage';
import lazyWithPreload, { preloadAllComponents } from './systemConfig/lazyWithPreload';
import PageConfig from './systemConfig/PageConfig';
import A from './pages/todo/A';
import B from './pages/todo/B';

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
          {/* login */}
          <Route index element={
            <PageConfig requireAuth={false}>
              <LandingPage />
            </PageConfig>}
          />
          <Route
            path="todos"
            element={
              <PageConfig>
                <MainLayout />
              </PageConfig>
            }>
            <Route index element={<TodoListPage />} />
            <Route path={'a'} element={<A />} />
            <Route path={'b'} element={<B />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );


}
export default Router;