
export default function AboutSection({name}) {
  return (
    <section className="relative min-h-[50vh] flex flex-col overflow-hidden bg-zinc-900 font-sans px-0 sm:px-4 py-24 sm:py-32 rounded-none sm:rounded-4xl">
      {/* Background photo */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-[url('https://images.pexels.com/photos/29115809/pexels-photo-29115809.jpeg')] md:bg-[url('https://images.pexels.com/photos/29115809/pexels-photo-29115809.jpeg')]"
      >
        {/* Gradient overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/60" />
      </div>

      {/* About content */}
      <main className="relative z-10 flex-grow flex flex-col items-center justify-center px-4 sm:px-6 text-center">
        <div
          className="max-w-4xl mx-auto w-full"
        >
          {/* Subheading / Badge */}
       
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-5xl font-medium text-white leading-[1.1] tracking-tight">
            {name}
          </h1>

        
        </div>
      </main>
    </section>
  );
}