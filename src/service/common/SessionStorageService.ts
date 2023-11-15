


class SessionStorageService {

  public getUserId = () => {
    return this.getSessionStorageValue('userId');
  };

  private getSessionStorageValue = (key: string) => {
    return sessionStorage.getItem(key);
  };

  public setUserId = (userId: string): void => {
    this.setSessionStorageValue('userId', userId);
  };

  public deleteUserId = (): void => {
    this.removeSessionStorageValue('userId');
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