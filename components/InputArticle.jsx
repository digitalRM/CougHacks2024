import { Link } from "lucide-react";
import CustomizeFormat from "@/components/CustomizeFormat";

function checkURL(url) {
  return (url.match(/\bhttps?:\/\/\S+/gi) || []).length === 1;
}



export default function InputArticle({url, setUrl, fetchAPI, isLoading, error, backgroundColor, setbackgroundColor, textColor, setTextColor, fontSize, setFontSize, handleFontChange, fontOptions, setError}) {
  
  function callApi() {
    const isVaild = checkURL(url);
  
    if (!isVaild) {
      setError('Invalid URL');
    }
  
    if (isVaild) {
      fetchAPI();
    }
  }
  
  return (
    <div className=" max-w-5xl mx-auto mt-5">
      <label style={{color: textColor}} htmlFor="website" className="block text-sm font-medium leading-6 text-gray-900">
        Type in the URL of the article you want to view.
      </label>
      <div className="mt-2 flex rounded-xl shadow-sm">
        <div style={{color: textColor}} className="relative flex flex-grow items-stretch focus-within:z-10">
          <div style={{color: textColor}} className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Link style={{color: textColor + "70"}} className="h-4 w-4 " aria-hidden="true" />
          </div>
          <input type="text" name="website" id="website" value={url} style={{color: textColor, backgroundColor: backgroundColor, borderColor: textColor +"40"}} onChange={(e) => setUrl(e.target.value)}className="block w-full rounded-none rounded-l-xl border py-3  pl-10 text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="www.example.com"/>
        </div>
        <button type="button" onClick={callApi} disabled={isLoading} style={{color: textColor, borderColor: textColor +"40"}} className="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-xl px-3 py-2 text-sm font-semibold text-gray-900 border hover:bg-gray-50 disabled:opacity-50 disabled:cursor-wait">
          View Article
        </button>
      </div>
      {error ? (<div style={{color: textColor}} className="mt-2 text-sm">{error}</div>) : null}
      <div style={{ backgroundColor: textColor + "10" }} className="h-0.5 w-full mt-4 mb-2"/>
      <CustomizeFormat backgroundColor={backgroundColor} setbackgroundColor={setbackgroundColor} textColor={textColor} setTextColor={setTextColor} fontSize={fontSize} setFontSize={setFontSize} handleFontChange={handleFontChange} fontOptions={fontOptions} />
    </div>
  )
}
