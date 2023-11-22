import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CustomErrorBoundary from "./CustomErrorBoundary";
import { render, screen } from "@testing-library/react";

describe("에러 바운더리 테스트", () => {


  test('ErrorBoundary 컴포넌트에 "Something went wrong" on error 문구 표시되었는지 확인', () => {
    const queryClient = new QueryClient();
    const FetchDataComponent = () => {
      // 테스트를 위해 항상 에러를 발생시킵니다.
      throw new Error('Simulation Error');
    };

    render(
      <QueryClientProvider client={queryClient}>
        <CustomErrorBoundary>
          <FetchDataComponent />
        </CustomErrorBoundary>
      </QueryClientProvider>
    );

    // 여기서 에러를 발생시키기 때문에 ErrorBoundary가 동작해야 합니다.
    // UI에 "Something went wrong"이라는 텍스트가 렌더링되었는지 확인합니다.
    expect(screen.getByText(/Something went wrong/i)).toBeInTheDocument();
  });
})