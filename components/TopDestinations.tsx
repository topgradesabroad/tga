// components/TopDestinations.tsx
"use client";
import React from "react";
import Link from "next/link";
import { Globe, Award, Users, GraduationCap, DollarSign } from "lucide-react";
import { destinations, Destination } from "@/data/destinations";

interface TopDestinationsProps {
  activeDestination: Destination;
}

export default function TopDestinations({ activeDestination }: TopDestinationsProps) {
  const selected = activeDestination;

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-gray-900">Global Education Destinations</h1>
          <p className="mt-3 text-lg text-gray-600">
            Explore top universities and transformative learning experiences around the world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left: List of destinations */}
          <aside className="md:col-span-1">
            <ul className="space-y-4">
              {destinations.map((dest) => (
                <li key={dest.id}>
                  <Link
                    href={`?id=${dest.id}`}
                    scroll={false}
                    className={`flex items-center p-3 rounded-lg transition-colors hover:bg-gray-100 ${
                      selected.id === dest.id
                        ? "border-l-4 border-purple-500 bg-purple-50"
                        : ""
                    }`}
                  >
                    <img
                      src={dest.flagImage}
                      alt={`${dest.name} flag`}
                      className="w-8 h-6 mr-3 object-cover"
                    />
                    <span className="text-lg font-medium text-gray-800">{dest.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </aside>

          {/* Right: Destination Details */}
          <section className="md:col-span-2 bg-white rounded-lg shadow p-8 space-y-6">
            {/* Mobile Selector */}
            <div className="md:hidden">
              <form method="get" className="flex space-x-2 mb-6">
                <select
                  name="id"
                  defaultValue={selected.id}
                  className="flex-1 border border-gray-300 rounded-md p-2"
                >
                  {destinations.map((dest) => (
                    <option key={dest.id} value={dest.id}>
                      {dest.name}
                    </option>
                  ))}
                </select>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md"
                >
                  Go
                </button>
              </form>
            </div>

            {/* Header with Flag and Name */}
            <div className="flex items-center space-x-4">
              <img
                src={selected.flagImage}
                alt={`${selected.name} flag`}
                className="w-12 h-8 object-cover"
              />
              <h2 className="text-3xl font-bold text-gray-900">{selected.name}</h2>
            </div>

            {/* Description */}
            <p className="text-gray-700 text-lg">{selected.description}</p>

            {/* Cost of Living Block */}
            <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
              <h3 className="text-xl font-semibold text-gray-800 mb-1">Cost of Living</h3>
              <p className="text-gray-700">{selected.costOfLiving}</p>
              <p className="text-gray-600 text-sm mt-1">
                * Approximate monthly expenses including housing, food, transportation, and utilities.
              </p>
            </div>

            {/* Single Row for Key Stats, Top Universities and CTA Button */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
              {/* Key Stats */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Key Stats</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-gray-600 text-sm">Universities</p>
                    <p className="text-2xl font-bold text-blue-600">{selected.universities}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Intl. Students</p>
                    <p className="text-2xl font-bold text-purple-600">
                      {selected.internationalStudents.toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>

              {/* Top Universities */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Top Universities</h3>
                <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                  {selected.topUniversities.map((uni, index) => (
                    <li key={index}>{uni}</li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <div className="flex items-center justify-center">
                <Link
                  href={`/countries/${selected.id}`}
                  scroll={false}
                  className="inline-block px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                >
                  Explore {selected.name}
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
