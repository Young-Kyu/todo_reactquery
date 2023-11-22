import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react'
import { useParams } from 'react-router-dom';
import { useUserQueries } from '../../queries/user/UserQueries';
import { S_FlexBox } from '../../style/container/S_Container';


interface UserDetailProps {


}


const UserDetailPage = (props: UserDetailProps): JSX.Element => {

  const params = useParams<{ userId: string }>();

  const { FetchUserDetail } = useUserQueries();
  const { data: userData = { emailAddress: '' } } = FetchUserDetail(params.userId || '');

  return (
    <S_FlexBox
      width='100%'
      height='100%'
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      gap={20}
    >
      <h1>User Detail Page</h1>
      <div>userEmail : {userData.emailAddress}</div>
    </S_FlexBox>
  );


}
export default UserDetailPage;