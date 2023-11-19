import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react'
import { useUserQueries } from '../queries/user/UserQueries';
import { observer } from 'mobx-react-lite';
import { useStore } from '../stores/StoreProvider';
import { useRouter } from '../hooks/useRouter';
import { useLocation, useParams } from 'react-router-dom';


interface LandingPageProps {


}


const LandingPage = observer((props: LandingPageProps): JSX.Element => {

  const router = useRouter();
  const { userStore } = useStore();
  const params = useLocation();
  const urlParams = new URLSearchParams(params.search);
  const userTokenValue = urlParams.get('userToken');

  const { FetchUserLogin, FetchUserInfo, FetchUserGoogleLogin } = useUserQueries();
  const [userId, setUserId] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const { data: loginData, isError, isFetched, refetch } = FetchUserLogin(userId, password);
  const { data = '', refetch: testFetch } = FetchUserGoogleLogin();

  useEffect(() => {
    if (!loginData) return;
    successLoginHandler(loginData.userToken);
  }, [loginData]);

  useEffect(() => {
    if (!data) return;
    window.location.href = data.url;
  }, [data]);

  useEffect(() => {
    if (!userTokenValue) return;
    console.log(userTokenValue);
    userStore.loginStatusHandler(userTokenValue);
    router.push('/todos');
  }, []);

  const successLoginHandler = (userToken: string) => {
    userStore.loginStatusHandler(userToken);
    router.push('/todos')

  }

  const userIdHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUserId(value);
  }

  const passwordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
  }
  const loginBtnHandler = () => {
    refetch();
  }


  return (
    <div>
      <div>landing page</div>
      <label>id</label>
      <input onChange={userIdHandler} />
      <label>password</label>
      <input type="password" onChange={passwordHandler} />
      <button onClick={loginBtnHandler}>login</button>
      <button onClick={() => testFetch()}>구글 로그인</button>
    </div>
  );


});
export default LandingPage;