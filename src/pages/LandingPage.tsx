import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react'
import { useUserQueries } from '../queries/user/UserQueries';
import { observer } from 'mobx-react-lite';
import { useStore } from '../stores/StoreProvider';
import { useRouter } from '../hooks/useRouter';
import { useLocation, useParams } from 'react-router-dom';
import { S_FlexBox } from '../style/container/S_Container';
import Button from '../components/common/Button';


interface LandingPageProps {


}


const LandingPage = observer((props: LandingPageProps): JSX.Element => {

  const router = useRouter();
  const { userStore } = useStore();
  const params = useLocation();
  const urlParams = new URLSearchParams(params.search);
  const userTokenValue = urlParams.get('userToken');

  const { FetchUserGoogleLogin } = useUserQueries();

  const { data = '', refetch: testFetch } = FetchUserGoogleLogin();


  useEffect(() => {
    if (!data) return;
    window.location.href = data.url;
  }, [data]);

  useEffect(() => {
    if (!userTokenValue) return;
    userStore.loginStatusHandler(userTokenValue);
    router.push('/users');
  }, []);

  return (
    <S_FlexBox
      width='100%'
      height='100%'
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      gap={20}
    >
      <h1>Landing page</h1>
      <Button
        onClickHandler={() => testFetch()}
        style={{
          size: 'l',
          round: 30
        }}
      >
        구글 로그인
      </Button>
    </S_FlexBox>
  );


});
export default LandingPage;