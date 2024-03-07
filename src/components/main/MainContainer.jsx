//libraries
import { useContext, useState } from "react";
//styles
import "./MainContainer.css";

//images
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

const MainContainer = () => {
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
  } = useContext(Context);

  //   const [onInputed, setOnInputed] = useState(false);
  //   const inputHandler = () => {
  //     setOnInputed(true);
  //   };
  //   const inputDefaultHandler = (event) => {
  //     if (event.target.value === "") {
  //       setOnInputed(false);
  //     }
  //   };
  return (
    <>
      <div className="container">
        <div className="header">
          <p>
            <img src={assets.menu_icon} className="mobile_menu" />
            Gemini clone
          </p>
          <img src={assets.me} alt="" />
        </div>
        <div className="main">
          {!showResult ? (
            <>
              <div className="welcome">
                <p>
                  <span>Hello, Aditya.</span>
                </p>
                <p>How can I help you today?</p>
              </div>
              <div className="suggestPrompts">
                <div>
                  <p>Settle a debate: how should you store bread?</p>
                  <span>
                    <img src={assets.bulb_icon} alt="" />
                  </span>
                </div>
                <div>
                  <p>Help me get organized with a list of 10 tips</p>
                  <span>
                    <img src={assets.compass_icon} alt="" />
                  </span>
                </div>
                <div>
                  <p>List power words for my resume that show teamwork</p>
                  <span>
                    <img src={assets.message_icon} alt="" />
                  </span>
                </div>
                <div>
                  <p>Learn how to create custom hooks in React.js</p>
                  <span>
                    <img src={assets.code_icon} alt="" />
                  </span>
                </div>
              </div>
            </>
          ) : (
            <div className="promptResult">
              <div className="result_Heading">
                <img src={assets.me} alt="" />
                <p>{recentPrompt}</p>
              </div>
              {loading ? (
                <>
                  <div className="promptResponse">
                    <img
                      src={assets.gemini_icon}
                      alt=""
                      className="rotatingImg"
                    />
                    <div className="loader">
                      <hr />
                      <hr />
                      <hr />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="promptResponse">
                    <img src={assets.gemini_icon} alt="" />
                    <div className="outPutt">
                      <p>{resultData}</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          )}
        </div>

        <div className="promptsContainer">
          <div className="prompt">
            <input
              type="text"
              placeholder="Enter a prompt here"
              onChange={(event) => setInput(event.target.value)}
              value={input}
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img src={assets.send_icon} alt="" onClick={() => onSent()} />
            </div>
          </div>
          <p>
            Gemini may display inaccurate info, including about people, so
            double-check its responses.{" "}
            <a href="#">Your privacy & Gemini Apps</a>{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default MainContainer;
