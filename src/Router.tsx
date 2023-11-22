import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Layout from './components/common/Layout';
import MainLayout from './components/layouts/MainLayout';
import LandingPage from './pages/LandingPage';
import lazyWithPreload, { preloadAllComponents } from './systemConfig/lazyWithPreload';
import PageConfig from './systemConfig/PageConfig';
import UserDetailPage from './pages/user/UserDetail';

const UserListPage = lazyWithPreload(() => import('./pages/user/UserList'));

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
            path="users"
            element={
              <PageConfig>
                <MainLayout />
              </PageConfig>
            }>
            <Route index element={<UserListPage />} />
            <Route path={":userId"} element={<UserDetailPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );


}
export default Router;