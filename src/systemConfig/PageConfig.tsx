import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { useRouter } from '../hooks/useRouter';
import { sessionStorageServiceInstance } from '../service/common/SessionStorageService';


interface PageConfigProps {

  children: React.ReactNode;
  requireAuth?: boolean;
}

/**
 * 
 * @param requireAuth : 반드시 로그인이 필요한 화면
 * @returns JSX.Element
 */
const PageConfig = (props: PageConfigProps): JSX.Element => {

  const { children, requireAuth = true } = props;
  const { pathname, search, state } = useLocation();

  if (
    requireAuth &&
    !sessionStorageServiceInstance.getUserToken()
  ) {
    return <Navigate replace to={'/'} />;
  }

  if (
    !requireAuth &&
    sessionStorageServiceInstance.getUserToken() &&
    unAuthRoutes.findIndex((target) => target.toLowerCase() === pathname.toLowerCase()) >= 0
  ) {
    return <Navigate replace to={'/users'} />;
  }

  return (
    <>
      {children}
    </>
  );


}
export default PageConfig;

/**
 * @description 비 로그인 상태에서만 접근할 수 있는 화면 목록
 */
const unAuthRoutes = [
  '/',
  '/login'
]