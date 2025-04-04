import "./App.css";
import UpdateUser from "./Component/UpdateUser";
import UserProfile from "./Component/UserProfile";
import Counter from "./ReducerHook/Counter";
import Reducer from "./ReducerHook/Reducer";
import { UserProvider } from "./UserContext";

function App() {
  return (
    <>
      {/* <UserProvider>
        <UserProfile />
        <UpdateUser />
      </UserProvider> */}
      {/* <Reducer /> */}
      <Counter />
    </>
  );
}

export default App;
