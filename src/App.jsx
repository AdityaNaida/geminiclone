//libraries
import { useState } from "react";

//components
import Sidebar from "./components/sidebar/Sidebar";
import MainContainer from "./components/main/MainContainer";

const App = () => {
  const [mobileSidebar, setMobileSidebar] = useState(false);
  const mobileSidebarHandler = () => {
    setMobileSidebar(!mobileSidebar);
  };
  return (
    <>
      <Sidebar mobile={mobileSidebar} controll={mobileSidebarHandler} />
      <MainContainer controller={mobileSidebarHandler} />
    </>
  );
};

export default App;
