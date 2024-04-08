export default function Hero({textColor}){
  return (
    <div>
      <h1 style={{color: textColor}} className="px-1 mt-24 mb-4 text-4xl text-left sm:text-center font-bold tracking-tight sm:tracking-tighter sm:leading-none md:text-5xl lg:text-6xl">
        Accessible Articles
      </h1>
      <p style={{color: textColor}} className="px-1 font-sem text-2xl text-left sm:text-center max-w-[590px] mx-auto">
        A tool developed to help you make articles that you find across the web more accessible.
      </p>
    </div>
  )
}
