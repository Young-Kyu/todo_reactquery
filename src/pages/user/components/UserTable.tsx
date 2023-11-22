import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react'
import { UserResponseDTO } from '../../../queries/user/model/UserModel';
import { S_Table, S_TableRow, S_TableTd, S_TableTh } from '../../../style/container/S_Layout';
import { useRouter } from '../../../hooks/useRouter';


interface UserTableProps {

  users: UserResponseDTO[];
}


const UserTable = (props: UserTableProps): JSX.Element => {

  const router = useRouter();

  const { users } = props;
  const onClickRowHandler = (userId: string) => {
    router.push(`/users/${userId}`)
  }
  return (
    <S_Table width={'100%'}>
      <S_TableRow
        height={'100px'}
        borderBottom={true}
        onHover={false}
      >
        <S_TableTh width={'30%'}>USER-ID</S_TableTh>
        <S_TableTh width={'30%'}>EMAIL</S_TableTh>
        <S_TableTh width={'20%'}>LEVEL</S_TableTh>
        <S_TableTh width={'20%'}>LAST-LOGIN-DATE</S_TableTh>
      </S_TableRow>
      {users.map((e, idx, arr) => {
        return (
          <S_TableRow key={e.userId} borderBottom={idx + 1 !== arr.length}
            onClick={() => onClickRowHandler(e.userId)}
          >
            <S_TableTd>{e.userId}</S_TableTd>
            <S_TableTd>{e.emailAddress}</S_TableTd>
            <S_TableTd>{e.auth.authName}</S_TableTd>
            <S_TableTd>{e.lastLoginDate ? e.lastLoginDate.toString() : ''}</S_TableTd>
          </S_TableRow>
        )
      })}
    </S_Table>
  );


}
export default UserTable;