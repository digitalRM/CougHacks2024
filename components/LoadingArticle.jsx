import { Skeleton } from "@/components/ui/skeleton";

export default function LoadingArticle({textColor}) {
  return (
    <div className="flex flex-wrap gap-2">
      <Skeleton style={{backgroundColor: textColor + "10"}} className=" bg-neutral-200 w-full h-6" />
      <Skeleton style={{backgroundColor: textColor + "10"}} className=" bg-neutral-200 w-5/6 h-6" />
      <Skeleton style={{backgroundColor: textColor + "10"}} className=" bg-neutral-200 w-[15.8%] h-6" />

      <div style={{backgroundColor: textColor + "20"}} className="h-0.5 w-full my-4" />

      <Skeleton style={{backgroundColor: textColor + "10"}} className=" bg-neutral-200 w-3/6 h-6" />
      <Skeleton style={{backgroundColor: textColor + "10"}} className=" bg-neutral-200 w-[48.8%] h-6" />
      <Skeleton style={{backgroundColor: textColor + "10"}} className=" bg-neutral-200 w-[65.8%] h-6" />
      <Skeleton style={{backgroundColor: textColor + "10"}} className=" bg-neutral-200 w-1/3 h-6" />
      <Skeleton style={{backgroundColor: textColor + "10"}} className=" bg-neutral-200 w-5/6 h-6" />
      <Skeleton style={{backgroundColor: textColor + "10"}} className=" bg-neutral-200 w-1/3 h-6" />
      <Skeleton style={{backgroundColor: textColor + "10"}} className=" bg-neutral-200 w-[18.8%] h-6" />
      <Skeleton style={{backgroundColor: textColor + "10"}} className=" bg-neutral-200 w-[25.8%] h-6" />
      <Skeleton style={{backgroundColor: textColor + "10"}} className=" bg-neutral-200 w-4/6 h-6" />
      <Skeleton style={{backgroundColor: textColor + "10"}} className=" bg-neutral-200 w-[15.8%] h-6" />
      <Skeleton style={{backgroundColor: textColor + "10"}} className=" bg-neutral-200 w-[25.8%] h-6" />

      <Skeleton style={{backgroundColor: textColor + "10"}} className=" mt-8 bg-neutral-200 w-full h-6" />
      <Skeleton style={{backgroundColor: textColor + "10"}} className=" bg-neutral-200 w-[48.8%] h-6" />
      <Skeleton style={{backgroundColor: textColor + "10"}} className=" bg-neutral-200 w-[50.2%] h-6" />
      <Skeleton style={{backgroundColor: textColor + "10"}} className=" bg-neutral-200 w-[65.8%] h-6" />
      <Skeleton style={{backgroundColor: textColor + "10"}}  className=" bg-neutral-200 w-1/3 h-6" />
      <Skeleton style={{backgroundColor: textColor + "10"}} className=" bg-neutral-200 w-5/6 h-6" />
      <Skeleton style={{backgroundColor: textColor + "10"}} className=" bg-neutral-200 w-1/3 h-6" />
      <Skeleton style={{backgroundColor: textColor + "10"}} className=" bg-neutral-200 w-[18.8%] h-6" />
      <Skeleton style={{backgroundColor: textColor + "10"}} className=" bg-neutral-200 w-[25.8%] h-6" />
      <Skeleton style={{backgroundColor: textColor + "10"}} className=" bg-neutral-200 w-4/6 h-6" />
      <Skeleton style={{backgroundColor: textColor + "10"}} className=" bg-neutral-200 w-[15.8%] h-6" />
      <Skeleton style={{backgroundColor: textColor + "10"}} className=" bg-neutral-200 w-[25.8%] h-6" />
      <Skeleton style={{backgroundColor: textColor + "10"}} className=" bg-neutral-200 w-1/3 h-6" />
    </div>
  )
}
