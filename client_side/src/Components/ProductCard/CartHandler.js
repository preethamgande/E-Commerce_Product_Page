import { actionCreater } from "../redux/action_creators/actionCreater";

export const handleCartClick = (item, dispatch) => {
  const actionObj = actionCreater(item);
  dispatch(actionObj);
};
