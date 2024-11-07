import React, { useState } from "react";
import "../styles/survey.css";

const Survey = ({ onComplete }) => {
  const questions = [
    {
      questionText: "Hangi bölümde eğitim görüyorsunuz?",
      options: ["Bilgisayar Mühendisliği", "Yazılım Mühendisliği"],
    },
    {
      questionText: "Bitirme projenizin konusu nedir?",
      options: [
        "Yapay Zeka",
        "Veri Bilimi",
        "Makine Öğrenimi",
        "Web Geliştirme",
      ],
    },
    {
      questionText: "Projenizi hangi yazılım dili ile geliştirdiniz?",
      options: ["Python", "JavaScript", "Java", "C++"],
    },
    {
      questionText: "Projenizi tamamlama süreniz ne kadar sürdü?",
      options: ["1-3 ay", "4-6 ay", "7-9 ay", "10-12 ay"],
    },
    {
      questionText:
        "Projenizi tamamlarken en çok hangi kaynaklardan faydalandınız?",
      options: [
        "Akademik Makaleler",
        "Online Kurslar",
        "Kitaplar",
        "Danışman Hocalar",
      ],
    },
    {
      questionText: "Gerçekten bütün sorulara cevap vererek mi geldiniz?",
      options: ["Evet", "Hayır"],
    },
    {
      questionText: "Sence de biraz sıkıcı olmaya başlamadı mı?",
      options: ["Evet"],
    },
    {
      questionText: "O zamannnn seni şöyle alalım askimmm",
      options: [],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [responses, setResponses] = useState({});

  const handleOptionChange = (option) => {
    setResponses({
      ...responses,
      [currentQuestion]: option,
    });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      onComplete(); // Anket tamamlandığında ilişki kronolojisi sayfasına geçiş
    }
  };

  return (
    <div className="survey-container">
      <div className="survey">
        <h2>
          Üsküdar Üniversitesi
          <br />
          Bitirme Projesi Sunum Anketi
        </h2>
        <div className="question">
          <h3>{questions[currentQuestion].questionText}</h3>
          <div className="options">
            {questions[currentQuestion].options.map((option, idx) => (
              <label key={idx} className="radio-label">
                <input
                  type="radio"
                  name={`question-${currentQuestion}`}
                  value={option}
                  checked={responses[currentQuestion] === option}
                  onChange={() => handleOptionChange(option)}
                />
                {option}
              </label>
            ))}
          </div>
          <button
            className="next-button"
            onClick={handleNext}
            disabled={
              !responses[currentQuestion] &&
              currentQuestion !== questions.length - 1
            }
          >
            {currentQuestion === questions.length - 1 ? "Tamamla" : "Sonraki"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Survey;
