'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import resourcesData from '@/data/resources-meta.json';

// Resource type definition
type Resource = {
  id: string;
  title: string;
  description: string;
  category: string;
  thumbnail: string;
  fileName: string;
};

// Categories extracted from resources data
const categories = [...new Set(resourcesData.map(resource => resource.category))];

export default function ResourcesPage() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [showForm, setShowForm] = useState(false);
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    targetUniversity: '',
    targetProgram: ''
  });

  // Filter resources based on selected category
  const filteredResources = selectedCategory === 'all' 
    ? resourcesData 
    : resourcesData.filter(resource => resource.category === selectedCategory);

  // Handle resource selection
  const handleResourceSelect = (resource: Resource) => {
    setSelectedResource(resource);
    setShowForm(true);
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedResource) return;
    
    try {
      setLoading(true);
      
      // Call API to generate PDF
      const response = await fetch('/api/generate-pdf', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          resourceId: selectedResource.id,
          userData: formData,
        }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to generate PDF');
      }
      
      // Get PDF blob from response
      const blob = await response.blob();
      
      // Create download link
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.download = `${selectedResource.title}.pdf`;
      
      // Trigger download
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      
      // Optional: Track the download
      await fetch('/api/track-download', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          resourceId: selectedResource.id,
          userData: formData,
        }),
      }).catch(err => console.error('Failed to track download:', err));
      
      // Close form and reset
      setShowForm(false);
      setSelectedResource(null);
      setFormData({
        name: '',
        email: '',
        phone: '',
        targetUniversity: '',
        targetProgram: ''
      });
      
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error processing your request. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Study Abroad Resources</h1>
        <p className="text-lg">
          Access our premium collection of resources designed to help you succeed in your study abroad journey.
          From application documents to university-specific guides, we've got you covered.
        </p>
      </div>

      {/* Category filter */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Browse by Category</h2>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-full text-sm ${
              selectedCategory === 'all' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            All Resources
          </button>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm ${
                selectedCategory === category 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Resources grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResources.map(resource => (
          <div 
            key={resource.id} 
            className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="h-48 bg-gray-200 relative">
              {/* Replace with actual images once available */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                <span>{resource.category} Image</span>
              </div>
            </div>
            <div className="p-4">
              <span className="inline-block px-3 py-1 text-xs bg-blue-100 text-blue-800 rounded-full mb-2">
                {resource.category}
              </span>
              <h3 className="text-lg font-bold mb-2">{resource.title}</h3>
              <p className="text-gray-600 mb-4">{resource.description}</p>
              <button
                onClick={() => handleResourceSelect(resource)}
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
              >
                Download Resource
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Download form modal */}
      {showForm && selectedResource && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h2 className="text-xl font-bold mb-4">Download {selectedResource.title}</h2>
            <p className="mb-4">Please fill in your details to receive this resource:</p>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="name">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-3 py-2 border rounded"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="email">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-3 py-2 border rounded"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-3 py-2 border rounded"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="targetUniversity">
                  Target University/Universities
                </label>
                <input
                  type="text"
                  id="targetUniversity"
                  value={formData.targetUniversity}
                  onChange={(e) => setFormData({...formData, targetUniversity: e.target.value})}
                  className="w-full px-3 py-2 border rounded"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium mb-1" htmlFor="targetProgram">
                  Target Program/Course
                </label>
                <input
                  type="text"
                  id="targetProgram"
                  value={formData.targetProgram}
                  onChange={(e) => setFormData({...formData, targetProgram: e.target.value})}
                  className="w-full px-3 py-2 border rounded"
                  required
                />
              </div>
              
              <div className="flex gap-3">
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 flex items-center justify-center"
                  disabled={loading}
                >
                  {loading ? (
                    <span>Processing...</span>
                  ) : (
                    <span>Get Resource</span>
                  )}
                </button>
                <button
                  type="button"
                  className="flex-1 bg-gray-200 py-2 rounded hover:bg-gray-300"
                  onClick={() => {
                    setShowForm(false);
                    setSelectedResource(null);
                  }}
                  disabled={loading}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Empty state if no resources match filter */}
      {filteredResources.length === 0 && (
        <div className="text-center py-12">
          <p className="text-lg text-gray-600">No resources found in this category yet.</p>
          <button
            onClick={() => setSelectedCategory('all')}
            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            View All Resources
          </button>
        </div>
      )}
    </div>
  );
}