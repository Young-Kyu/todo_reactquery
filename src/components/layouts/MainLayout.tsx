import React, { useState, useEffect, useRef, useCallback, useMemo, Suspense } from 'react'
import { Outlet } from 'react-router-dom';
import CustomErrorBoundary from '../error/CustomErrorBoundary';
import { sessionStorageServiceInstance } from '../../service/common/SessionStorageService';
import { useUserQueries } from '../../queries/user/UserQueries';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../stores/StoreProvider';
import { S_Appbar } from '../../style/appbar/S_Appbar';
import Button from '../common/Button';
import { useRouter } from '../../hooks/useRouter';
import { S_SideMenu } from '../../style/container/S_Layout';
import { S_FlexBox } from '../../style/container/S_Container';


interface MainLayoutProps {


}


const MainLayout = (props: MainLayoutProps): JSX.Element => {

  return (
    <CustomErrorBoundary>
      <Suspense fallback={<div>API 통신 진행중 입니다.</div>}>
        <AppBar />
        <S_FlexBox>
          <S_SideMenu />
          <Outlet />
        </S_FlexBox>
      </Suspense>
    </CustomErrorBoundary>
  );

};
export default MainLayout;

const AppBar = observer(() => {

  const { userStore } = useStore();
  const router = useRouter();
  const userToken = sessionStorageServiceInstance.getUserToken();
  const { FetchUserInfo } = useUserQueries();
  const { data = { emailAddress: '' } } = FetchUserInfo(userToken || '', !userStore.getIsLoggedIn);

  const logout = () => {
    userStore.setIsLoggedIn(false);
    sessionStorageServiceInstance.deleteUserToken();
    router.push('/');
  }
  return (
    <S_Appbar>
      <div>사용자 : {data.emailAddress}</div>
      <div>회원 관리</div>
      <Button
        onClickHandler={logout}
        children={'로그아웃'}
        style={{
          size: 'm',
          round: 12
        }}
      />
    </S_Appbar>
  );
});


