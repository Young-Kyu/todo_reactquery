import React, { useState, useEffect, useRef, useCallback, useMemo, Suspense } from 'react'
import { Outlet } from 'react-router-dom';
import CustomErrorBoundary from '../error/CustomErrorBoundary';
import { S_RootLayout } from '../../style/container/S_Layout';

interface LayoutProps {


}


const Layout = (props: LayoutProps): JSX.Element => {
  return (
    <CustomErrorBoundary>
      <Suspense fallback={<div>화면 로딩 중 입니다.</div>}>
        <S_RootLayout>
          <Outlet />
        </S_RootLayout>
      </Suspense>
    </CustomErrorBoundary>
  );


}
export default Layout;

