export default function CustomizeFormat({ fontOptions, backgroundColor, setbackgroundColor, textColor, setTextColor, fontSize, setFontSize, handleFontChange }) {
  return (
    <div className="flex flex-col sm:flex-row gap-3 w-full">
      <div className="w-full">  
        <label htmlFor="font" style={{color: textColor}} className="block text-sm font-medium leading-6 text-gray-900">Font</label>
        <select id="font" style={{color: textColor, backgroundColor: backgroundColor}} className="mt-2 block rounded-xl border-0 p-3 pl-4 text-gray-900 ring-1 ring-inset w-full ring-gray-300 sm:text-sm sm:leading-6" onChange={handleFontChange}>
          {fontOptions.map((option) => (
            <option style={{color: textColor}} key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      
      <div className="flex flex-col justify-between w-full">  
        <label htmlFor="fontSize" style={{color: textColor}} className="block text-sm font-medium leading-6 text-gray-900">Font Size</label>
        <input type="range" id="fontSize" style={{color: textColor, backgroundColor: textColor }} color={textColor} value={fontSize} min={8} max={36} className="w-full mb-4 slider" onChange={(e) => setFontSize(e.target.value)} />
      </div>

      <div className="flex flex-col justify-between w-full">
        <label htmlFor="color" style={{color: textColor}} className="block text-sm font-medium leading-6 text-gray-900">Background Color</label>
        <input type="color" id="color" value={backgroundColor} style={{color: textColor, backgroundColor: backgroundColor}} className="w-full mt-1 rounded-full h-full" onChange={(e) => setbackgroundColor(e.target.value)}/>
      </div>

      <div className="flex flex-col justify-between w-full">
        <label htmlFor="color" style={{color: textColor}} className="block text-sm font-medium leading-6 text-gray-900">Text Color</label>
        <input type="color" id="color" value={textColor} style={{color: textColor, backgroundColor: backgroundColor}} className="w-full mt-1 rounded-full h-full" onChange={(e) => setTextColor(e.target.value)}/>
      </div>
    </div>
  )
}
