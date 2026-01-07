export default function ColorBlocks() {
  return (
    <section className="bg-black m-0 p-0">
      <div className="">
        
        {/* Main Black Container */}
        <div className="w-full my-0 rounded-2xl bg-black p-6">
          
          {/* Inner Colored Blocks */}
          <div className="flex flex-col sm:flex-row gap-4 w-full">
            
            <div className="flex-1 rounded-xl bg-indigo-500 h-64" />
            <div className="flex-1 rounded-xl bg-emerald-400 h-64" />
            <div className="flex-1 rounded-xl bg-yellow-400 h-64" />
            <div className="flex-1 rounded-xl bg-sky-400 h-64" />
          </div>

        </div>
      </div>
    </section>
  );
}
