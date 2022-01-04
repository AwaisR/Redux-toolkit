import "./App.css";
import { useEffect } from "react";
import { updateName, updateAge, updateStatus } from "./reducer/userReducer";
import { fetchUserName, fetchUserdata } from "./reducer/userActions";
import { useSelector, useDispatch } from "react-redux";
import Tabe from "./Tabe";
function App() {
  const dispatch = useDispatch();
  const { name, age, status } = useSelector((state) => {
    return state.user;
  });
  useEffect(() => {
    dispatch(fetchUserdata());
  }, []);
  const handleAge = () => {
    dispatch(updateAge(34));
  };
  const updateNames = () => {
    dispatch(fetchUserName());
  };
  const statusUpdate = () => {
    dispatch(updateStatus("i am a web developer"));
  };

  return (
    <div className="App">
      <h1>My Profile</h1>
      <h1>i am {name}</h1>
      <h1>my age is {age}</h1>
      <h1>my {status}</h1>
      <button onClick={handleAge}>Update Age</button>
      <button onClick={updateNames}>Update Name</button>
      <button onClick={statusUpdate}>Update status</button>
      <Tabe />
    </div>
  );
}

export default App;
