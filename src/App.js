import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { login, loginSuccess, changeTheme } from "./redux/module/userSlice";

function App() {
  // const dispatch = useDispatch();
  // // const isLoading = useSelector((state) => state.user.isLoading);
  // // const infoUser = useSelector((state) => state.user.userInfo);

  // // short hand
  // const { isLoading, userInfo, theme } = useSelector(state => state.user);
  // console.log("🚀 ~ App ~ theme:", theme)
  

  // const user = {
  //   name: "Ý",
  //   email: "abcd@gmail.com"
  // };

  // const handleLogin = () => {
  //   dispatch(login());

  //   // Login thành công

  //   setTimeout(() => {
  //     dispatch(
  //       loginSuccess({
  //         userInfo: user
  //       })
  //     );
  //   }, 2000);
  // };

  const data = useSelector(state => state)
  console.log("🚀 ~ App ~ data:", data)

  return (
    // <div className="App" style={{ background: theme }}>
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>

    //     <button
    //       style={{ width: 200, height: 50, marginTop: 100 }}
    //       onClick={handleLogin}
    //     >
    //       {isLoading ? "Dang dang nhap..." : userInfo ? "Logout" : "Login"}
    //     </button>

    //     <select
    //       name=""
    //       id=""
    //       onChange={(e) => dispatch(changeTheme({ theme: e.target.value }))}
    //     >
    //       <option value="black">Dark</option>
    //       <option value="white">light</option>
    //       <option value="red">custom</option>
    //     </select>
    //   </header>
    // </div>
    <></>
  );
}

export default App;
