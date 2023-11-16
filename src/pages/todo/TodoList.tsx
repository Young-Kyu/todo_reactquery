import { useQueryClient } from '@tanstack/react-query';
import { observer } from 'mobx-react-lite';
import React, { useState, useEffect, useRef, useCallback, Suspense } from 'react'
import CustomErrorBoundary from '../../components/error/CustomErrorBoundary';
import ErrorBoundary from '../../components/error/CustomErrorBoundary';
import { useTodoQueries } from '../../queries/todo/TodoQueries';
import { useStore } from '../../stores/StoreProvider';
import { useRouter } from '../../hooks/useRouter';
import { useUserQueries } from '../../queries/user/UserQueries';
import { sessionStorageServiceInstance } from '../../service/common/SessionStorageService';


interface TodoListPageProps {


}


const TodoListPage = (props: TodoListPageProps): JSX.Element => {

  return (
    <>
      <CustomErrorBoundary>
        <Suspense fallback={<div>로딩중~~</div>}>
          <TodoList />
        </Suspense>
      </CustomErrorBoundary>
    </>
  );


}
export default TodoListPage;

const TodoList = observer(() => {

  // const { FetchTodoList } = useTodoQueries();
  // const { data = { name: '' }, isFetching } = FetchTodoList();
  const { FetchUserInfo } = useUserQueries();
  const { data = { name: '' } } = FetchUserInfo(sessionStorageServiceInstance.getUserToken() ?? '');
  const router = useRouter();

  const test = () => {
    console.log('???');
    router.push('/todos/a')
  }

  const logout = () => {
    sessionStorageServiceInstance.deleteUserToken();
    router.push('/');
  }

  return (
    <>
      <div>child {data.name + ''}</div>
      <button onClick={test}>go to A</button>
      <button onClick={logout}>logout</button>
    </>
  )
});