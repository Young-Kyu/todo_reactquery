
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import nock from "nock";
import { renderHook, waitFor } from "@testing-library/react";
import { UserListResponseDTO, UserResponseDTO } from "../../queries/user/model/UserModel";
import { QueryKeys } from "../../queries/QueryKeys";

const userListReponseMockData: UserListResponseDTO = {
  data: [
    {
      id: 1,
      userLevel: 1,
      emailAddress: 'testMock@testMock.com',
      userId: 'testMockUserId',
      createDate: new Date(),
      updateDate: new Date(),
      lastLoginDate: new Date(),
      auth: {
        authName: 'SUPER_ADMIN',
        id: 1,
        level: 1
      }
    },
  ],
  paging: {
    lastPage: 1,
    page: 1,
    total: 1
  }
}

const userDetailReponseMockData: UserResponseDTO = {
  id: 1,
  userLevel: 1,
  emailAddress: 'testMock@testMock.com',
  userId: 'testMockUserId',
  createDate: new Date(),
  updateDate: new Date(),
  lastLoginDate: new Date(),
  auth: {
    authName: 'SUPER_ADMIN',
    id: 1,
    level: 1
  }
}

const queryClient = new QueryClient();
const wrapper = ({ children }: any) => (
  <QueryClientProvider client={queryClient}>
    {children}
  </QueryClientProvider>
);

describe('getUser test start', () => {

  it('get UserList', async () => {

    function useGetUserList() {
      return useQuery({
        queryKey: [QueryKeys.USER_LIST],
        queryFn: () => userListReponseMockData,
      });
    }
    const expectation = nock('http://localhost:8080')
      .persist()
      .get('/user/list')
      .reply(200, () => userListReponseMockData
      );

    const { result } = renderHook(() => useGetUserList(), { wrapper });
    await waitFor(() => expect(result.current.data).toStrictEqual(userListReponseMockData));
    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expectation.isDone();
  });

  it('get UserDetail', async () => {
    function useGetUserDetail() {
      return useQuery({
        queryKey: [QueryKeys.USER_DETAIL],
        queryFn: () => userDetailReponseMockData,
      });
    }
    const expectation = nock('http://localhost:8080')
      .get('/user/dsds')
      .reply(200, () => userDetailReponseMockData
      );
    const { result } = renderHook(() => useGetUserDetail(), { wrapper });
    await waitFor(() => expect(result.current.data).toStrictEqual(userDetailReponseMockData));
    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expectation.isDone();
  });
})