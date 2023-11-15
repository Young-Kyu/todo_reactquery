import { createContext, useContext } from "react";
import RootStore from "./Store";

let store: RootStore;

export const StoreContext = createContext({} as RootStore);

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  store = store ?? new RootStore();
  return (
    <StoreContext.Provider value={store}>
      {children}
    </StoreContext.Provider>
  )
};

export const useStore = () => {
  const ctx = useContext(StoreContext);
  if(ctx === undefined){
    throw new Error('useStore can not initialized');
  }
  return ctx;
}
