import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react'
import { useUserQueries } from '../queries/user/UserQueries';
import { observer } from 'mobx-react-lite';
import { useStore } from '../stores/StoreProvider';
import { useRouter } from '../hooks/useRouter';


interface LandingPageProps {


}


const LandingPage = observer((props: LandingPageProps): JSX.Element => {

  const router = useRouter();
  const { userStore } = useStore();
  const { FetchUserLogin, FetchUserInfo, FetchUsertest } = useUserQueries();

  const [userId, setUserId] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const { data: loginData, isError, isFetched, refetch } = FetchUserLogin(userId, password);
  const { data, refetch: testFetch } = FetchUsertest();
  console.log(data);
  useEffect(() => {
    if (!loginData) return;
    successLoginHandler(loginData.userToken);
  }, [loginData]);

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
    console.log('???');
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
      <button onClick={() => testFetch()}>test</button>
    </div>
  );


});
export default LandingPage;