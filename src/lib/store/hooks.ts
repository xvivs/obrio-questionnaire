import { useSelector, useDispatch, useStore } from "react-redux";
import { AppDispatch, AppState, AppStore } from "./index";

export const useAppSelector = useSelector.withTypes<AppState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppStore = useStore.withTypes<AppStore>();