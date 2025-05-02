"use client";

import { useState } from "react";
import QuestionCard from "../../components/ui/QuestionCard";
import ProgressBar from "../../components/ui/ProgressBar";

const questions = [
    "Have you ever applied for housing assistance through Homebase?",
    "Have you or a family member applied for admission to a public high school in New York City?",
    "Have you driven or parked a car in New York City that could be captured in a video or photo on a public street?",
    "Have you or a family member applied for admission to a NYC public medical school program?",
    "Have you ever received a vaccine in New York City?",
    "Have you been involved in a government investigation in NYC that may have included submitted images or surveillance footage?",
    "Have you entered an NYC building where you walked through a metal detector?",
    "Have you ever had your name or incident connected to a police report filed in NYC?",
    "Have you or a family member used an online learning platform for NYC public school algebra classes?",
    "Have you asked a question about starting or managing a small business in NYC using the MyCity website or chatbot?",
    "Have you ever called 311 and interacted with an automated system rather than a live representative?",
    "Have you recently posted about food poisoning or a food-related illness in NYC on social media?",
    "Have you accessed a NYC.gov website and used the “Translate” feature to view content in another language?",
    "Have you interacted with an AI tool or transcription service through NYC’s domestic and gender-based violence resources?",
    "Are you a public school teacher in NYC?",
    "Have you appeared in a media production (e.g., photo or video) created by the City of New York?",
    "Have you ever needed emergency medical care from an FDNY ambulance in NYC?"
];

export default function SurveyPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [responses, setResponses] = useState([]);

  const handleAnswer = (index, answer) => {
    const updatedResponses = [...responses];
    updatedResponses[index] = answer;
    setResponses(updatedResponses);
  
    //only advance if this is the current question
    if (index === currentIndex && currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };
  
  const answeredCount = responses.filter((r) => r === "yes" || r === "no").length;

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      {/* title */}
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold mb-2" style={{ fontFamily: "var(--header-font)", color: "var(--main-text-color)" }}>
          Tell us about your NYC experiences
        </h2>
        <p className="text-lg" style={{ fontFamily: "var(--text-font)", color: "var(--main-text-color)" }}>
          Answer 17 <em>yes</em> or <em>no</em> questions to access your personalized NYC AlgoMatcher report
        </p>
      </div>

      {/* progress label + percentage */}
      <div className="flex justify-between items-center mb-2">
      <p className="text-md font-medium" style={{ fontFamily: "var(--text-font)", color: "var(--main-text-color)" }}>
          Progress:
      </p>
      <p className="text-md font-medium" style={{ fontFamily: "var(--text-font)", color: "var(--main-text-color)" }}>
        {Math.round((answeredCount / questions.length) * 100)}%
      </p>
      </div>
      <ProgressBar value={(responses.length / questions.length) * 100} />


      {/* question cards */}
      <div className="mt-6">
        {questions.slice(0, currentIndex + 1).map((q, idx) => (
          <QuestionCard
          key={idx}
          question={q}
          selectedAnswer={responses[idx]} 
          onAnswer={(ans) => handleAnswer(idx, ans)} 
          />
        ))}
      </div>

      {answeredCount === questions.length && (
      <div className="text-center mt-8">
          <button
          className="custom-btn"
          onClick={() => {
            alert("View your results!");
        }}
        >
        See My Results
        </button>
    </div>
    )}

    </div>
  );
}