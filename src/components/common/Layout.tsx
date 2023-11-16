import React, { useState, useEffect, useRef, useCallback, useMemo, Suspense } from 'react'
import { Outlet } from 'react-router-dom';
import { useTodoQueries } from '../../queries/todo/TodoQueries';
import CustomErrorBoundary from '../error/CustomErrorBoundary';

interface LayoutProps {


}


const Layout = (props: LayoutProps): JSX.Element => {
  return (
    <CustomErrorBoundary>
      <Suspense fallback={<div>로딩중~~</div>}>
        <Outlet />
      </Suspense>
    </CustomErrorBoundary>
  );


}
export default Layout;

