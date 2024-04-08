export default function LoadingProduct() {
  return (
    <section className="min-h-screen m-4 md:mt-20 md:ml-20 grid grid-cols-1 md:grid-cols-2">
      <picture className="w-full h-[500px] mb-2">
        <div className="animate-pulse bg-gray-200 h-full"></div>
      </picture>
      <article className="flex flex-col gap-8 px-4 relative">
        <header className="flex flex-col xl:flex-row justify-between gap-9 border-b">
          <div className="flex flex-col gap-2">
            <div className="animate-pulse bg-gray-200 h-6 w-[50px]"></div>
            <div className="animate-pulse bg-gray-200 h-8 w-[450px]"></div>
          </div>
          <div className="flex flex-col">
            <div className="animate-pulse bg-gray-200 h-10 w-24"></div>
            <div className="animate-pulse bg-gray-200 h-6 w-20 mt-2"></div>
          </div>
        </header>

        <section className="flex flex-col md:flex-row w-full">
          <div className="w-1/2">
            <div className="animate-pulse bg-gray-200 h-4 w-3/4"></div>
            <div className="animate-pulse bg-gray-200 h-4 w-1/2 mt-2"></div>
            <div className="animate-pulse bg-gray-200 h-4 w-3/4 mt-2"></div>
            <div className="animate-pulse bg-gray-200 h-4 w-1/2 mt-2"></div>
            <div className="animate-pulse bg-gray-200 h-4 w-3/4 mt-2"></div>
          </div>
          <div className="animate-pulse bg-gray-200 h-full w-1/2"></div>
            
        </section>
      </article>
    </section>
  );
}