// app/countries/new-zealand/components/Costs.server.tsx
import Cost from './Cost';

export default function Costs() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-2 lg:px-2 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        New Zealand University Cost Calculator
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Accurate 2024 tuition and living cost estimates for international students at NZ's top universities.
      </p>
      
      <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8">
        <Cost />
      </div>
    </section>
  );
}