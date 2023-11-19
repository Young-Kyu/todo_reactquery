import React, { useState, useEffect, useRef, useCallback, useMemo, Suspense } from 'react'
import { Outlet } from 'react-router-dom';
import { useTodoQueries } from '../../queries/todo/TodoQueries';
import CustomErrorBoundary from '../error/CustomErrorBoundary';
import { sessionStorageServiceInstance } from '../../service/common/SessionStorageService';
import { useUserQueries } from '../../queries/user/UserQueries';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../stores/StoreProvider';
import { S_Appbar } from '../../style/appbar/S_Appbar';


interface MainLayoutProps {


}


const MainLayout = (props: MainLayoutProps): JSX.Element => {

  return (
    <CustomErrorBoundary>
      <Suspense fallback={<div>로딩중~~</div>}>
        <AppBar />
        <Outlet />
      </Suspense>
    </CustomErrorBoundary>
  );

};
export default MainLayout;

const AppBar = observer(() => {

  const { userStore } = useStore();
  const userToken = sessionStorageServiceInstance.getUserToken();
  const { FetchUserInfo } = useUserQueries();
  const { data } = FetchUserInfo(userToken || '', !userStore.isLoggedIn);
  console.log(data);
  return (
    <S_Appbar>
      dfawioehf
    </S_Appbar>
  );
});


