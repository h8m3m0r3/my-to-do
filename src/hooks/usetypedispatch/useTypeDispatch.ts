import { useDispatch } from "react-redux";
import { AppDispatch } from "store";
const useTypeDispatch = () => {
  const dispatch = useDispatch<AppDispatch>();
  return dispatch;
};

export { useTypeDispatch };
