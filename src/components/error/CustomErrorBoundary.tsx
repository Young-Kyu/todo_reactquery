import React, { Component } from "react";
import { CustomError } from "../../queries/queryProvider";
import CustomServerError from "../../systemConfig/CustomError";
import { sessionStorageServiceInstance } from "../../service/common/SessionStorageService";

interface Props {
  children?: React.ReactNode;
}

interface State {
  hasError: boolean;
}

class CustomErrorBoundary extends Component<Props, State> {

  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  };

  static getDerivedStateFromError(error: CustomError): State {
    return { hasError: true };
  }

  public componentDidCatch(error: CustomServerError | Error) {
    if (error instanceof CustomServerError) {
      const { status } = error.getError();
      if (status === 401) {
        sessionStorageServiceInstance.deleteUserToken();
        window.location.href = '/';
      }
    } else {
      console.log('');
    }
  }

  private retry() {
    this.setState({ hasError: false });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Something went wrong.</h1>
          <button onClick={() => this.retry()}>다시 시도하기</button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default CustomErrorBoundary;