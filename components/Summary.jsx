export default function Summary({data, textColor, fontSize}){
  return (
    <div>
      <div style={{backgroundColor: textColor + "20"}} className="h-0.5 w-full my-4" />

        <h3 style={{color: textColor, fontSize: fontSize*1.25}} className=" font-semibold tracking-tight">A Generated Summary of the Article.</h3>
        <div className="flex flex-col gap-4 mt-4">
          <p style={{color: textColor, fontSize: fontSize*1}} className="">{data.Summary}</p>
        </div>
      
    </div>
  )
}
