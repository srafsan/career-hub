import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";

function App() {
    return (
        <div className="md:max-w-screen-lg">
            <Header />
            <Outlet />
        </div>
    );
}

export default App;
