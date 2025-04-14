"use client";
import React, { useState } from "react";
import Link from "next/link";
import { destinations, Destination } from "@/data/destinations";

interface TopDestinationsProps {
  activeDestination: Destination;
}

export default function TopDestinations({ activeDestination }: TopDestinationsProps) {
  const [selected, setSelected] = useState<Destination>(activeDestination);
  const [isHovering, setIsHovering] = useState<string | null>(null);

  // Update selected destination on hover
  const handleHover = (dest: Destination) => {
    setIsHovering(dest.id);
    setSelected(dest);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-rose-50 py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Elegant Header with Decorative Elements */}
        <div className="mb-20 text-center relative">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Global Education Destinations
          </h1>
          
          <div className="flex items-center justify-center space-x-2 mb-5">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-purple-400"></div>
            <div className="h-1 w-16 bg-gradient-to-r from-purple-500 to-rose-500 rounded-full"></div>
            <div className="h-px w-12 bg-gradient-to-r from-rose-400 to-transparent"></div>
          </div>
          
          <p className="mt-4 text-lg text-purple-600 max-w-2xl mx-auto font-light">
            Embark on a journey to discover prestigious universities and transformative 
            learning experiences across the globe.
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left: Destinations Sidebar */}
          <aside className="md:w-1/3 lg:w-1/4">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-purple-100">
              <div className="bg-gradient-to-r from-purple-600 to-rose-500 p-5 text-white">
                <h3 className="text-xl font-medium">Explore Destinations</h3>
                <p className="text-sm opacity-80">Hover over a country to view details</p>
              </div>
              
              <div className="divide-y divide-gray-100">
                {destinations.map((dest) => (
                  <div
                    key={dest.id}
                    className={`flex items-center p-4 transition-all duration-300 cursor-pointer ${
                      selected.id === dest.id
                        ? "bg-gradient-to-r from-purple-50 to-rose-50"
                        : "hover:bg-gray-50"
                    }`}
                    onMouseEnter={() => handleHover(dest)}
                    onMouseLeave={() => setIsHovering(null)}
                  >
                    <div className="relative mr-4">
                      <div className={`w-10 h-7 overflow-hidden rounded-md shadow transition-transform duration-300 ${
                        selected.id === dest.id || isHovering === dest.id ? "transform scale-110" : ""
                      }`}>
                        <img
                          src={dest.flagImage}
                          alt={`${dest.name} flag`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {selected.id === dest.id && (
                        <div className="absolute -right-1 -top-1 w-4 h-4 bg-rose-500 rounded-full border-2 border-white"></div>
                      )}
                    </div>
                    
                    <div className="flex-1">
                      <span className={`${
                        selected.id === dest.id 
                          ? "font-medium text-purple-800" 
                          : "text-gray-700"
                      }`}>
                        {dest.name}
                      </span>
                    </div>
                    
                    {selected.id === dest.id && (
                      <div className="text-rose-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </aside>

          {/* Right: Destination Details */}
          <section className="md:w-2/3 lg:w-3/4">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-purple-100 flex flex-col h-full">
              {/* Header Banner - Aligned height with sidebar header */}
              <div className="bg-gradient-to-r from-purple-600 to-rose-500 p-5 text-white">
                <h2 className="text-xl font-medium">{selected.name}</h2>
                <div className="flex items-center space-x-2 text-white text-opacity-80 text-sm mt-1">
                  <span>{selected.universities} Universities</span>
                  <span>•</span>
                  <span>{selected.internationalStudents.toLocaleString()} Int'l Students</span>
                </div>
              </div>

              {/* Mobile Selector */}
              <div className="md:hidden p-6 border-b border-gray-200">
                <form method="get" className="flex space-x-2">
                  <select
                    name="id"
                    defaultValue={selected.id}
                    className="flex-1 border border-gray-300 rounded-lg p-3 bg-gray-50 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  >
                    {destinations.map((dest) => (
                      <option key={dest.id} value={dest.id}>
                        {dest.name}
                      </option>
                    ))}
                  </select>
                  <button
                    type="submit"
                    className="px-5 py-3 bg-gradient-to-r from-purple-600 to-rose-500 text-white rounded-lg font-medium hover:from-purple-700 hover:to-rose-600 transition-colors"
                  >
                    Go
                  </button>
                </form>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                {/* Overview */}
                <div className="mb-4">
                  <h3 className="text-base font-medium text-gray-800 mb-2 flex items-center">
                    <span className="inline-block w-6 h-6 mr-2 flex items-center justify-center rounded-full bg-purple-100 text-purple-600">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                      </svg>
                    </span>
                    Destination Overview
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{selected.description}</p>
                </div>

                {/* Statistics and Cost of Living - More compact layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  {/* Cost of Living - More compact version */}
                  <div className="p-4 rounded-xl bg-gradient-to-br from-purple-50 to-rose-50 border border-purple-100 relative overflow-hidden">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="inline-block w-6 h-6 mr-2 flex items-center justify-center rounded-full bg-rose-100 text-rose-600">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                          </svg>
                        </span>
                        <h3 className="text-sm font-medium text-gray-800">Cost of Living</h3>
                      </div>
                      <p className="text-base font-bold text-purple-700">{selected.costOfLiving}</p>
                    </div>
                    <p className="text-xs text-gray-500 mt-1 italic ml-8">Monthly expenses (housing, food, transport, utilities)</p>
                  </div>

                  {/* Key Statistics - More compact */}
                  <div className="bg-white rounded-xl border border-purple-100 p-4 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-2">
                      <span className="inline-block w-6 h-6 mr-2 flex items-center justify-center rounded-full bg-purple-100 text-purple-600">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
                        </svg>
                      </span>
                      <h3 className="text-sm font-medium text-gray-800">Education Statistics</h3>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-2 rounded-lg bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="w-5 h-5 rounded-full bg-purple-200 flex items-center justify-center mr-2">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 text-purple-700">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                              </svg>
                            </div>
                            <p className="text-xs text-purple-700 font-medium">Universities</p>
                          </div>
                          <p className="text-base font-bold text-purple-900">{selected.universities}</p>
                        </div>
                      </div>
                      
                      <div className="p-2 rounded-lg bg-gradient-to-br from-rose-50 to-rose-100 border border-rose-200">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="w-5 h-5 rounded-full bg-rose-200 flex items-center justify-center mr-2">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 text-rose-700">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                              </svg>
                            </div>
                            <p className="text-xs text-rose-700 font-medium">Int'l Students</p>
                          </div>
                          <p className="text-base font-bold text-rose-900">{selected.internationalStudents.toLocaleString()}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Universities and Button in a single row */}
                <div className="flex flex-col md:flex-row gap-4">
                  {/* Top Universities - More compact */}
                  <div className="bg-white rounded-xl border border-purple-100 p-4 shadow-sm hover:shadow-md transition-shadow flex-1">
                    <h3 className="text-sm font-medium text-gray-800 mb-2 flex items-center">
                      <span className="inline-block w-6 h-6 mr-2 flex items-center justify-center rounded-full bg-rose-100 text-rose-600">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                        </svg>
                      </span>
                      Leading Universities
                    </h3>
                    
                    <ul className="space-y-1">
                      {selected.topUniversities.map((uni, index) => (
                        <li key={index} className="flex items-center py-1 px-1 hover:bg-gray-50 rounded-lg transition-colors">
                          <div className={`w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold mr-2 ${
                            index === 0 ? "bg-gradient-to-br from-yellow-400 to-yellow-600" :
                            index === 1 ? "bg-gradient-to-br from-gray-300 to-gray-500" :
                            index === 2 ? "bg-gradient-to-br from-amber-600 to-amber-800" :
                            "bg-gradient-to-br from-purple-500 to-rose-500"
                          }`}>
                            {index + 1}
                          </div>
                          <span className="text-xs text-gray-700">{uni}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button Container */}
                  <div className="flex items-center justify-center p-4 bg-white rounded-xl border border-purple-100 shadow-sm hover:shadow-md transition-shadow">
                    <Link
                      href={`/countries/${selected.id}`}
                      className="group relative inline-flex items-center justify-center px-5 py-2 overflow-hidden rounded-full bg-gradient-to-r from-purple-600 to-rose-500 text-white font-medium text-sm shadow-lg hover:shadow-xl transition-all duration-300 w-full"
                    >
                      <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
                      <span className="relative flex items-center justify-center">
                        Explore {selected.name}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}