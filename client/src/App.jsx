import "./App.css";
import Home from "@/pages/home/Home";
import Profile from "@/pages/profile/Profile";
import Auth from "@/pages/auth/Auth";

function App() {
  return (
    <div className="app">
      <div className="blur" style={{ top: "-18%", right: "0" }}></div>
      <div className="blur" style={{ top: "36%", left: "-8rem" }}></div>
      {/* <Home /> */}
      <Profile />
      {/* <Auth /> */}
    </div>
  );
}

export default App;
