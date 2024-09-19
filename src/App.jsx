import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import { useRoutes } from "react-router-dom";
import Routes from "./Routes";
import { UserProvider } from "./context/Context";
import ScrollToTopButton from "./Components/ScrollToTopButton";

const App = () => {
  const router = useRoutes(Routes); 
  return (
    <UserProvider> 
      <div className="w-[100%] bg-[#f1f5f9] font-semibold">
        <ScrollToTopButton/>
        <Navbar />
        <Header />
        {router}
      </div>
    </UserProvider>
  );
}

export default App;
