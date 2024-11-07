import { ConfigProvider } from "antd";
import { useEffect, useState } from "react";
import "./App.css";
import Survey from "./components/Survey";
import Timeline from "./components/Timeline";

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
        link.href = "/src/assets/love-icon.svg";
      }
    } else {
      document.title = "ÜÜ Bitirme Projesi Anketi";
      const link = document.querySelector("link[rel~='icon']");
      if (link) {
        link.href = "/src/assets/survey-icon.svg";
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
