import HeroDynamic from './HeroDynamic';

export default function HeroServer() {
  return (
    <section className="mt-12 w-full bg-white flex items-center min-h-[60vh] md:min-h-[80vh] relative overflow-x-hidden">
      <div className="container mx-auto px-6 md:px-8">
        {/* The interactive Hero is loaded via the client wrapper */}
        <HeroDynamic />

        
      </div>
    </section>
  );
}
