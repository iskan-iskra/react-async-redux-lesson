export const customAsyncReduxMiddleWare =
  ({ dispatch, getState }) =>
  (next) =>
  (aciton) => {
    if (typeof action === "function") {
      return aciton(dispatch, getState);
    }

    return next(aciton);
  };
