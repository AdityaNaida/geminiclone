//libraries
import { useState } from "react";

//styles
import "./Sidebar.css";

//images
import { assets } from "../../assets/assets";

const Sidebar = () => {
  const [expandSidebar, setExpandSidebar] = useState(false);
  const expandSidebarHanler = () => {
    setExpandSidebar(!expandSidebar);
  };
  return (
    <div className="sidebar">
      <div className="top">
        <span className="menu_back" onClick={expandSidebarHanler}>
          <img src={assets.menu_icon} alt="" />
        </span>
        <span className="hover__text">Collapse menu</span>

        <div className="new-chat">
          <img src={assets.plus_icon} alt="" />
          {expandSidebar && <p>New Chat</p>}
        </div>
        <span className="newChat">New Chat</span>
        {expandSidebar && (
          <div className="recent">
            <p className="recent-title">Recent</p>
            <div className="recent-entry">
              <img src={assets.message_icon} alt="" />
              <p>What is react...</p>

              <span>
                <img src={assets.more} alt="" />
              </span>
              {/* <div className="dialouige"></div> */}
            </div>
          </div>
        )}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="" />
          {expandSidebar && <p>Help</p>}
        </div>
        <span className="help">Help</span>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="" />
          {expandSidebar && <p>Activity</p>}
        </div>
        <span className="activity">Activity</span>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="" />
          {expandSidebar && <p>Settings</p>}
        </div>
        <span className="settings">Settings</span>
      </div>
    </div>
  );
};

export default Sidebar;
