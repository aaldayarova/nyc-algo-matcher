"use client";

import FadeInSection from "../../components/ui/FadeInSection";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import QuestionCard from "../../components/ui/QuestionCard";
import ProgressBar from "../../components/ui/ProgressBar";
import algoMappings from "../../lib/algorithmMappings";
import AlgoCard from "../../components/features/AlgoCard"; 
import { useRef } from "react";


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
  const [copied, setCopied] = useState(false);
  const [showSurvey, setShowSurvey] = useState(true);
  const surveyRef = useRef(null);
  const resultsRef = useRef(null);
  const matchedToolCount = responses.filter((resp, i) => resp === "yes" && algoMappings[i]).length;

  const router = useRouter();
  const searchParams = useSearchParams();

  const updateURLWithResponses = (responsesArray) => {
    const compact = responsesArray.map((r) => r === "yes" ? 1 : r === "no" ? 0 : "x").join("-");
    const newUrl = `${window.location.pathname}?ans=${compact}`;
    window.history.replaceState(null, "", newUrl);
  };

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
    const allAnswered = responses.length === questions.length && responses.every(r => r);
    if (allAnswered) {
      setShowSurvey(false);
      setTimeout(() => {
        resultsRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 400);
    }
  }, [responses]);

  const answeredCount = responses.filter((r) => r === "yes" || r === "no").length;

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold mb-2">Tell us about your NYC experiences</h2>
        <p className="text-lg">
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
    
      {showSurvey && (
        <div ref={surveyRef} className="mt-6 space-y-4">
          {questions.slice(0, currentIndex + 1).map((q, idx) => (
            <QuestionCard
              key={idx}
              question={q}
              selectedAnswer={responses[idx]}
              onAnswer={(ans) => handleAnswer(idx, ans)}
            />
          ))}
        </div>
      )}

      {!showSurvey && (
        <div className="flex justify-end mt-2">
          <button
            onClick={() => {
              setShowSurvey(true);
              setTimeout(() => {
                surveyRef.current?.scrollIntoView({ behavior: "smooth" });
              }, 150);
            }}
            className="text-sm underline text-teal-800 hover:text-teal-600"
          >
            Edit Responses
          </button>
        </div>
      )}

      {answeredCount === questions.length && (
        <div ref={resultsRef} className="h-4">
        <div className="mt-16 text-left border-t pt-10">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold mb-2">Your NYC AlgoMatcher Report</h2>
            <p className="text-lg">These are the <span className="font-semibold">{matchedToolCount}</span> algorithmic tools potentially using your data:
            </p>
          </div>
          <div className="grid gap-4">
            {responses.map((resp, i) =>
              resp === "yes" && algoMappings[i] ? (
                  <AlgoCard key={i} {...algoMappings[i]} />
              ) : null
            )}
          </div>
          </div>
                <FadeInSection>
                <div className="mt-16 text-center border-t pt-10">
                  <h3 className="text-1xl font-semibold mb-2 text-teal-900">
                    Share your results
                  </h3>
                  <p className="mb-4 text-gray-700">
                    Let others know how NYC algorithms might affect you.
                  </p>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(window.location.href);
                      setCopied(true);
                      setTimeout(() => setCopied(false), 2000);
                    }}
                    className="bg-teal-700 hover:bg-teal-800 text-white px-6 py-2 rounded transition"
                  >
                    {copied ? "Copied!" : "Copy Link"}
                  </button>
                  <div className="mt-16 mb-20 text-center pt-10"></div>
                </div>
                </FadeInSection>
                
        </div>
        
      )}
    </div>
    
  );
}