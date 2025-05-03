"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import QuestionCard from "../../components/ui/QuestionCard";
import ProgressBar from "../../components/ui/ProgressBar";
import algoMappings from "../../lib/algorithmMappings";
import AlgoCard from "../../components/features/AlgoCard"; 

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
  const router = useRouter();
  const searchParams = useSearchParams();
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    console.log("responses:", responses);
  }, [responses]);

  useEffect(() => {
    const matched = responses
      .map((r, i) => r === "yes" ? algoMappings[i] : null)
      .filter(Boolean);
    console.log("matched algo cards:", matched);
  }, [responses]);

  // Save answers to URL
  const updateURLWithResponses = (responsesArray) => {
    const compact = responsesArray.map((r) => r === "yes" ? 1 : r === "no" ? 0 : "x").join("-");
    const newUrl = `${window.location.pathname}?ans=${compact}`;
    window.history.replaceState(null, "", newUrl);
  };

  // Hydrate state from URL
  useEffect(() => {
    const ans = new URLSearchParams(window.location.search).get("ans");
    if (ans) {
      const restored = ans.split("-").map(val => val === "1" ? "yes" : val === "0" ? "no" : null);
      setResponses(restored);
      setCurrentIndex(restored.filter(Boolean).length);
    }
  }, []);

  const handleAnswer = (index, answer) => {
    const updatedResponses = [...responses];
    updatedResponses[index] = answer;
    setResponses(updatedResponses);
    updateURLWithResponses(updatedResponses);

    if (index === currentIndex && currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  useEffect(() => {
    if (responses.length === questions.length && responses.every(r => r)) {
      setCollapsed(true);
    }
  }, [responses]);
  
  const answeredCount = responses.filter((r) => r === "yes" || r === "no").length;
  console.log("algoMappings length:", algoMappings.length);
  console.log("algoMappings sample:", algoMappings[0]);
  
  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold mb-2" style={{ fontFamily: "var(--header-font)", color: "var(--main-text-color)" }}>
          Tell us about your NYC experiences
        </h2>
        <p className="text-lg" style={{ fontFamily: "var(--text-font)", color: "var(--main-text-color)" }}>
          Answer 17 <em>yes</em> or <em>no</em> questions to access your personalized NYC AlgoMatcher report
        </p>
      </div>

      <div className="flex justify-between items-center mb-2">
        <p className="text-md font-medium" style={{ fontFamily: "var(--text-font)", color: "var(--main-text-color)" }}>
          Progress:
        </p>
        <p className="text-md font-medium" style={{ fontFamily: "var(--text-font)", color: "var(--main-text-color)" }}>
          {Math.round((answeredCount / questions.length) * 100)}%
        </p>
      </div>
      <ProgressBar value={(responses.length / questions.length) * 100} />

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
        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-4 text-center">
            Algorithms Potentially Using Your Data
          </h2>
          <div className="grid gap-4">
            {responses.map((resp, i) =>
              resp === "yes" && algoMappings[i] ? (
                <AlgoCard
                  key={i}
                  name={algoMappings[i].name}
                  src={algoMappings[i].src}
                  summary={algoMappings[i].summary}
                  use={algoMappings[i].use}
                  application={algoMappings[i].application}
                  datacard_title1={algoMappings[i].datacard_title1}
                  datacard_text1={algoMappings[i].datacard_text1}
                  datacard_title2={algoMappings[i].datacard_title2}
                  datacard_text2={algoMappings[i].datacard_text2}
                  datacard_title3={algoMappings[i].datacard_title3}
                  datacard_text3={algoMappings[i].datacard_text3}
                  datacard_title4={algoMappings[i].datacard_title4}
                  datacard_text4={algoMappings[i].datacard_text4}
                  datacard_title5={algoMappings[i].datacard_title5}
                  datacard_text5={algoMappings[i].datacard_text5}
                />
              ) : null
            )}
          </div>
        </div>
      )}
    </div>
  );
}