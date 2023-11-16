


class SessionStorageService {

  public getUserToken = () => {
    return this.getSessionStorageValue('userToken');
  };

  private getSessionStorageValue = (key: string) => {
    return sessionStorage.getItem(key);
  };

  public setUserToken = (userToken: string): void => {
    this.setSessionStorageValue('userToken', userToken);
  };

  public deleteUserToken = (): void => {
    this.removeSessionStorageValue('userToken');
  };


  private setSessionStorageValue = (key: string, value: string): void => {
    if (key) {
      sessionStorage.setItem(key, value);
    }
  };

  private removeSessionStorageValue = (key: string) => {
    sessionStorage.removeItem(key);
  };
}

export const sessionStorageServiceInstance = new SessionStorageService();