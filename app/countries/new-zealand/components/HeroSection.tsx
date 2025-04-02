import Image from 'next/image'

export default function HeroSection() {
  return (
    <div className="relative h-[70vh] min-h-[560px]">
      <Image
        src="/countries/canada/images/nz.jpg"
        alt="Study in Germany"
        fill
        priority
        className="object-cover object-center"
      />
      {/* Gradient overlay that's mostly transparent but darkens at the bottom for text */}
      <div className="absolute inset-0 bg-purple-600/20" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex flex-col justify-center text-white text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-shadow-lg">
          Study in New Zealand
        </h1>
        
      </div>
    </div>
  )
}