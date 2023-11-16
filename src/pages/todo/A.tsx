import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react'
import { useRouter } from '../../hooks/useRouter';
import { useUserQueries } from '../../queries/user/UserQueries';
import { sessionStorageServiceInstance } from '../../service/common/SessionStorageService';

interface IProps {


}


const A = (props: IProps): JSX.Element => {

  const router = useRouter();
  const { FetchUserInfo } = useUserQueries();
  const { data = { name: '' } } = FetchUserInfo(sessionStorageServiceInstance.getUserToken() ?? '');
  const test = () => {
    router.push('/todos/b')
  }
  return (
    <div>
      {data.name + ''}
      <button onClick={test}>go to B</button>
    </div>
  );


}
export default A;