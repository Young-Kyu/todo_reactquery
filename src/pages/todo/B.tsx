import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react'
import { useRouter } from '../../hooks/useRouter';
import { useUserQueries } from '../../queries/user/UserQueries';
import { sessionStorageServiceInstance } from '../../service/common/SessionStorageService';

interface IProps {


}


const B = (props: IProps): JSX.Element => {

  const router = useRouter();
  const { FetchUserInfo } = useUserQueries();
  const { data = { name: '' } } = FetchUserInfo(sessionStorageServiceInstance.getUserToken() ?? '');
  const test = () => {
    router.push('/todos')
  }
  return (
    <div>
      {data.name + ''}
      <button onClick={test}>go to Todos</button>
    </div>
  )


}
export default B;