import { useQueryClient } from '@tanstack/react-query';
import { observer } from 'mobx-react-lite';
import React, { useState, useEffect, useRef, useCallback, Suspense } from 'react'
import CustomErrorBoundary from '../../components/error/CustomErrorBoundary';
import ErrorBoundary from '../../components/error/CustomErrorBoundary';
import { useTodoQueries } from '../../queries/todo/TodoQueries';
import { useStore } from '../../stores/StoreProvider';


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

const TodoList = () => {

  const { FetchTodoList } = useTodoQueries();
  const { data = { name: '' }, isFetching } = FetchTodoList();

  const [state, setState] = useState('');

  return (
    <>
      <div>child,{data.name}</div>
    </>
  )
};