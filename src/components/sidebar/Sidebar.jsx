//libraries
import { useContext, useState } from "react";

//styles
import "./Sidebar.css";

//images
import { assets } from "../../assets/assets";

//components
import Modal from "./Modal";
import { Context } from "../../context/Context";

const Sidebar = ({ mobile, controll }) => {
  const [expandSidebar, setExpandSidebar] = useState(false);
  const expandSidebarHanler = () => {
    setExpandSidebar(!expandSidebar);
  };

  const {
    previousPrompt,
    setPreviousPrompt,
    onSent,
    setRecentPrompt,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
    setLoading,
    setShowResult,
  } = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };

  const newChat = () => {
    setShowResult(false);
  };
  return (
    <>
      <div className="sidebar">
        <div className="top">
          <span className="menu_back" onClick={expandSidebarHanler}>
            <img src={assets.menu_icon} alt="" />
          </span>
          <span className="hover__text">Collapse menu</span>

          <div className="new-chat" onClick={newChat}>
            <img src={assets.plus_icon} alt="" />
            {expandSidebar && <p>New Chat</p>}
          </div>
          <span className="newChat">New Chat</span>
          {expandSidebar && (
            <div className="recent">
              <p className="recent-title">Recent</p>
              {previousPrompt.map((item, indexNumber) => {
                return (
                  <div
                    onClick={() => loadPrompt(item)}
                    className="recent-entry"
                  >
                    <img src={assets.message_icon} alt="" />
                    <p>{item}</p>

                    <span>
                      <img src={assets.more} alt="" />
                    </span>
                  </div>
                );
              })}
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
      {mobile && (
        <Modal off={controll}>
          <div className="sidebar2">
            <div className="top">
              <div className="recent">
                <p className="recent-title">Recent</p>
                {previousPrompt.map((item, indexNumber) => {
                  return (
                    <div
                      onClick={() => loadPrompt(item)}
                      className="recent-entry"
                    >
                      <img src={assets.message_icon} alt="" />
                      <p>{item}</p>

                      <span>
                        <img src={assets.more} alt="" />
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="bottom">
              <div className="bottom-item recent-entry">
                <img src={assets.question_icon} alt="" />
                <p>Help</p>
              </div>
              <span className="help">Help</span>
              <div className="bottom-item recent-entry">
                <img src={assets.history_icon} alt="" />
                <p>Activity</p>
              </div>
              <span className="activity">Activity</span>
              <div className="bottom-item recent-entry">
                <img src={assets.setting_icon} alt="" />
                <p>Settings</p>
              </div>
              <span className="settings">Settings</span>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Sidebar;
