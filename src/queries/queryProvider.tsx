import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useStore } from "../stores/StoreProvider";
import CustomServerError from "../systemConfig/CustomError";
import { useRouter } from "../hooks/useRouter";
import { sessionStorageServiceInstance } from "../service/common/SessionStorageService";
import { DefaultOptions, QueryClient, QueryClientProvider } from '@tanstack/react-query';
interface QueryProviderProps {
  children: React.ReactNode;
}

export interface CustomError {
  reponse: {
    status: number;
  }
}

const QueryProvider = ({ children }: QueryProviderProps) => {

  const { toastStore } = useStore();

  const commonErrorNotificationHandler = (serverError: CustomServerError | CustomError | any): void => {

    let errorStatus = serverError instanceof CustomServerError ? serverError.getError().status : serverError.status;
    toastStore.showToastHandler();
  };

  const queryErrorHandler = (error: CustomError | CustomServerError): void => {
    commonErrorNotificationHandler(error);
  };
  /** 주의 : 컴포넌트 핸들링이 Query에 onError를 부여하는 경우 오버라이딩 되어 Default Option 핸들러가 동작하지 않습니다. */
  const QueryDefaultOptions = () => {
    return {
      defaultOptions: {
        queries: {
          onError: queryErrorHandler,
          suspense: true,
          useErrorBoundary: true,
        },
        mutations: {
          onError: queryErrorHandler,
          suspense: false,
          useErrorBoundary: true,
        },
      } as DefaultOptions,
    };
  };

  const queryClient = new QueryClient(QueryDefaultOptions());

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )

};

export default QueryProvider;