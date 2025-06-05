"use client";
import { useState } from "react";
import Hero from "@/components/Hero";
import InputArticle from "@/components/InputArticle";
import Article from "@/components/Article";

const fontOptions = [
  { value: 1, label: "Inter Font" },
  { value: 2, label: "Inclusive Sans" },
  { value: 3, label: "Comic Sans" },
  { value: 4, label: "Roboto Mono" },
  { value: 5, label: "Merriweather" },
];

export default function Home() {
  // I think some things can definitely be refactored, but I was too sleep deprived to think of a better way at the time.

  const [backgroundColor, setbackgroundColor] = useState("#f8f8f8");
  const [textColor, setTextColor] = useState("#111111");
  const [fontFamily, setFontFamily] = useState("Inter");
  const [url, setUrl] = useState("");
  const [data, setData] = useState(null);
  const [enchancedData, setEnhancedData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [isData, setIsData] = useState(false);
  const [error, setError] = useState(null);

  const fetchAPI = async () => {
    setIsData(false);
    setIsLoading(true);
    try {
      const response = await fetch(
        `/api/backend?url=${encodeURIComponent(url)}`
      );
      if (!response.ok) {
        setIsData(false);
        setIsLoading(false);
        throw new Error("Network response was not ok");
      }
      const jsonData = await response.json();
      console.log(jsonData);

      setEnhancedData(jsonData);
      setData(jsonData);
      setIsLoading(false);
      setIsData(true);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  const handleFontChange = (e) => {
    setFontFamily(e.target.value);
  };

  return (
    <main
      style={{ backgroundColor: backgroundColor }}
      className={`font-${fontFamily.toLowerCase()} bg-repeat w-full overflow-hidden p-3 sm:p-12 relative h-full min-h-screen`}
    >
      <Hero textColor={textColor} />
      <InputArticle
        url={url}
        setUrl={setUrl}
        fetchAPI={fetchAPI}
        isLoading={isLoading}
        error={error}
        backgroundColor={backgroundColor}
        setbackgroundColor={setbackgroundColor}
        textColor={textColor}
        setTextColor={setTextColor}
        fontSize={fontSize}
        setFontSize={setFontSize}
        handleFontChange={handleFontChange}
        fontOptions={fontOptions}
        setError={setError}
      />
      <Article
        data={data}
        isData={isData}
        enchancedData={enchancedData}
        isLoading={isLoading}
        textColor={textColor}
        fontSize={fontSize}
      />
    </main>
  );
}
