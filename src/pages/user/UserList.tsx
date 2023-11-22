import { useQueryClient } from '@tanstack/react-query';
import { observer } from 'mobx-react-lite';
import React, { useState, useEffect, useRef, useCallback, Suspense } from 'react'
import CustomErrorBoundary from '../../components/error/CustomErrorBoundary';
import { useRouter } from '../../hooks/useRouter';
import { useUserQueries } from '../../queries/user/UserQueries';
import UserTable from './components/UserTable';
import { S_ContainerWrap, S_FlexBox, S_Spacer } from '../../style/container/S_Container';
import { Paging, UserListRequestDTO } from '../../queries/user/model/UserModel';
import PagingComponent from '../../components/common/Pagination';
import Search from '../../components/common/Search';


interface UserListPageProps {


}


const UserListPage = (props: UserListPageProps): JSX.Element => {

  return (
    <>
      <CustomErrorBoundary>
        <Suspense fallback={<div>API 데이터 로딩중입니다.</div>}>
          <UserList />
        </Suspense>
      </CustomErrorBoundary>
    </>
  );


}
export default UserListPage;

const UserList = observer(() => {
  const queryClient = useQueryClient();
  const { FetchUserList } = useUserQueries();
  const [currentPage, setCurrentPage] = useState<UserListRequestDTO>({ page: 1, size: 10, search: '' });

  const { data: userData = { data: [], paging: {} as Paging } } = FetchUserList({ page: currentPage.page, size: currentPage.size, search: currentPage.search });

  useEffect(() => {

  }, [queryClient, currentPage]);

  const onChange = (newPage: number) => {
    setCurrentPage({ ...currentPage, page: newPage });
  }

  const buttonHandler = (value: string) => {
    setCurrentPage({ ...currentPage, search: value });
  }

  return (
    <S_ContainerWrap padding='24px 34px'>
      <S_FlexBox width='100%'>
        <h1>회원 관리 화면</h1>
      </S_FlexBox>
      <Search submitHandler={buttonHandler} title='Email 검색' />
      <S_Spacer y={12} />
      <UserTable
        users={userData.data}
      />
      <PagingComponent pagingData={userData.paging} onPageChange={onChange} />
    </S_ContainerWrap>
  )
});

