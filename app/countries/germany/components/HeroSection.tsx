import Image from 'next/image'

export default function HeroSection() {
  return (
    <div className="relative h-[70vh] min-h-[560px]">
      <Image
        src="/countries/canada/images/germany.jpg"
        alt="Study in Germany"
        fill
        priority
        className="object-cover object-center"
      />
      {/* Gradient overlay that's mostly transparent but darkens at the bottom for text */}
      <div className="absolute inset-0 bg-blue-600 opacity-50" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex flex-col justify-center text-white text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-shadow-lg">
          Study in Germany
        </h1>
        <p className="text-xl text-white md:text-3xl mb-8 text-shadow">
          Home to World's Top Universities
        </p>
      </div>
    </div>
  )
}