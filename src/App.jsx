import { ConfigProvider } from "antd";
import { useEffect, useState } from "react";
import "./App.css";
import Survey from "./components/Survey";
import Timeline from "./components/Timeline";
import loveIconSvg from "/images/love-icon.svg";
import surveyIconSvg from "/images/survey-icon.svg";

function App() {
  const [showTimeline, setShowTimeline] = useState(false);

  const handleSurveyComplete = () => {
    setShowTimeline(true);
  };

  useEffect(() => {
    if (showTimeline) {
      document.title = "Kübik ❤️ Emiritto";
      const link = document.querySelector("link[rel~='icon']");
      if (link) {
        link.href = loveIconSvg;
      }
    } else {
      document.title = "ÜÜ Bitirme Projesi Anketi";
      const link = document.querySelector("link[rel~='icon']");
      if (link) {
        link.href = surveyIconSvg;
      }
    }
  }, [showTimeline]);

  return (
    <ConfigProvider
      theme={{
        components: {
          Carousel: {
            arrowSize: 24,
            arrowOffset: 8,
          },
        },
      }}
    >
      <div className="App">
        {!showTimeline ? (
          <Survey onComplete={handleSurveyComplete} />
        ) : (
          <Timeline />
        )}
      </div>
    </ConfigProvider>
  );
}

export default App;
