import Image from 'next/image'

export default function HeroSection() {
  return (
    <div className="relative h-[70vh] min-h-[560px]">
      <Image
        src="/countries/canada/images/aus.jpg"
        alt="Study in Canada"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex flex-col justify-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Study in Canada
        </h1>
        <p className="text-xl text-white md:text-3xl mb-8">
          Home to World's Top Universities
        </p>
      </div>
    </div>
  )
}