'use client';
import React, { useState, Suspense } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup
} from 'react-simple-maps';

interface DestinationStats {
  universities: string;
  students: string;
  avgCost: string;
}

interface Destination {
  name: string;
  coordinates: [number, number];
  stats: DestinationStats;
}

const destinations: Destination[] = [
  {
    name: "United States",
    coordinates: [-95.7129, 37.0902],
    stats: {
      universities: "4,500+",
      students: "1M+",
      avgCost: "$20-45K/year"
    }
  },
  {
    name: "United Kingdom",
    coordinates: [-0.1278, 51.5074],
    stats: {
      universities: "130+",
      students: "450K+",
      avgCost: "£10-38K/year"
    }
  },
  {
    name: "Canada",
    coordinates: [-106.3468, 56.1304],
    stats: {
      universities: "100+",
      students: "400K+",
      avgCost: "C$20-35K/year"
    }
  },
  {
    name: "Australia",
    coordinates: [133.7751, -25.2744],
    stats: {
      universities: "43+",
      students: "350K+",
      avgCost: "A$20-45K/year"
    }
  },
  {
    name: "New Zealand",
    coordinates: [174.8860, -40.9006],
    stats: {
      universities: "8+",
      students: "100K+",
      avgCost: "NZ$20-35K/year"
    }
  },
  {
    name: "Germany",
    coordinates: [10.4515, 51.1657],
    stats: {
      universities: "400+",
      students: "320K+",
      avgCost: "€200-500/semester"
    }
  },
  {
    name: "France",
    coordinates: [2.2137, 46.2276],
    stats: {
      universities: "250+",
      students: "290K+",
      avgCost: "€170-650/year"
    }
  }
];

const LoadingFallback = () => (
  <div className="w-full h-[600px] flex items-center justify-center bg-gray-50">
    <div className="text-gray-600">Loading Map...</div>
  </div>
);

const WorldMap: React.FC = () => {
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState<{ 
    x: number; 
    y: number; 
    isOceania?: boolean 
  } | null>(null);

  const handleMarkerClick = (destination: Destination, event: React.MouseEvent) => {
    const marker = event.currentTarget as SVGElement;
    const rect = marker.getBoundingClientRect();
    const isOceania = destination.name === "Australia" || destination.name === "New Zealand";
    
    setTooltipPosition({
      x: rect.left,
      y: rect.top,
      isOceania // Add flag for Oceania countries
    });
    setSelectedDestination(prev => prev?.name === destination.name ? null : destination);
  };

  return (
    <div className="relative w-full h-[500px] map-container"> {/* Increased height for better visibility */}
      <Suspense fallback={<LoadingFallback />}>
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{
            scale: 230, // Increased scale to zoom in
            center: [-20, 45], // Adjusted for stable positioning
            rotate: [0, 0, 0],
          }}
          className="w-full h-full"
          style={{ pointerEvents: 'none' }}
        >
          <ZoomableGroup
            zoom={1}
            center={[0, 20]}
            maxZoom={1}
            minZoom={1}
            // Correct event handlers for react-simple-maps
            onMoveStart={() => false}
            onMoveEnd={() => false}
            // Remove onMove as it's not a supported prop
          >
            <Geographies geography="/world-110m.json">
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="#E2E8F0" // Light blue-gray base color
                    stroke="#94A3B8" // Darker border color
                    style={{
                      default: {
                        fill: "#E2E8F0",
                        outline: "none",
                        strokeWidth: 0.75,
                      },
                      hover: {
                        fill: "#CBD5E1", // Slightly darker on hover
                        outline: "none",
                        strokeWidth: 0.75,
                      },
                    }}
                  />
                ))
              }
            </Geographies>

            {destinations.map((destination) => (
              <Marker
                key={destination.name}
                coordinates={destination.coordinates}
                onClick={(e: React.MouseEvent) => handleMarkerClick(destination, e)}
              >
                <circle
                  style={{ pointerEvents: 'auto' }}
                  r={8}
                  fill={selectedDestination?.name === destination.name 
                    ? "#8B5CF6" // Bright purple for selected
                    : "#A855F7" // Light purple for unselected
                  }
                  stroke="#FFFFFF"
                  strokeWidth={2.5}
                  className="cursor-pointer transition-all duration-300 hover:scale-125"
                />
              </Marker>
            ))}
          </ZoomableGroup>
        </ComposableMap>
      </Suspense>

      {selectedDestination && tooltipPosition && (
        <div
          className="absolute z-10 bg-orange-400 p-4 rounded-lg shadow-lg w-72 text-white"
          style={{
            left: tooltipPosition.isOceania 
              ? `${tooltipPosition.x - 200}px` // Move Oceania tooltips left by 100px
              : `${tooltipPosition.x}px`,
            top: tooltipPosition.isOceania 
              ? `${tooltipPosition.y - 330}px`
              : `${tooltipPosition.y - 120}px`,
            pointerEvents: 'none',
            transform: tooltipPosition.isOceania 
              ? 'translateX(-25%)' // Adjust transform for Oceania
              : 'translateX(-50%)', // Keep default centering for other countries
          }}
        >
          <h3 className="text-xl font-bold mb-2">{selectedDestination.name}</h3>
          <div className="space-y-1 text-sm">
            <p className="flex items-center gap-2">
              <span>🎓</span>
              <span>Universities: {selectedDestination.stats.universities}</span>
            </p>
            <p className="flex items-center gap-2">
              <span>👥</span>
              <span>Students: {selectedDestination.stats.students}</span>
            </p>
            <p className="flex items-center gap-2">
              <span>💰</span>
              <span>Avg. Cost: {selectedDestination.stats.avgCost}</span>
            </p>
            <div className="mt-4 text-center">
              <a
                href={`/countries/${selectedDestination.name.toLowerCase() === 'united states' ? 'usa' : 
                  selectedDestination.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="inline-block bg-white rounded-sm px-6 py-2 text-purple-600 hover:text-purple-800 font-medium cursor-pointer"
                style={{ pointerEvents: 'auto' }}
              >
                Explore More →
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorldMap;