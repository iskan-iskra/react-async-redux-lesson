// import { getUserListAction } from "@/reducers";
import { useCallback } from "react";
import { Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

export const AppMainPage = () => {
  const userStore = useSelector((state) => state.users);

  const dispatch = useDispatch();

  const setUserListHandler = useCallback(() => {
    dispatch({ type: "FETCH_USER_LIST" });
  }, [dispatch]);

  return (
    <Container className="pb-2">
      <h1>main page</h1>

      <Button className="mb-4" onClick={setUserListHandler}>
        get user list from back
      </Button>

      {userStore.loading && <div>...loading</div>}

      {!userStore.loading && userStore.error && <div>error 500</div>}

      {!userStore.loading && !userStore.error && (
        <ul>
          {userStore.userList.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
      )}
    </Container>
  );
};
