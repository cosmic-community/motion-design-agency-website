'use client'

import { Project } from '@/types'
import { useState } from 'react'

interface ProjectGalleryProps {
  project: Project
}

export default function ProjectGallery({ project }: ProjectGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  // Combine featured image with gallery images
  const allImages = []
  
  if (project.metadata.featured_image) {
    allImages.push(project.metadata.featured_image)
  }
  
  if (project.metadata.gallery && project.metadata.gallery.length > 0) {
    allImages.push(...project.metadata.gallery)
  }

  if (allImages.length === 0) {
    return null
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Project Gallery</h2>
          <p className="text-lg text-gray-600">
            Visual highlights from the {project.metadata.title} project
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allImages.map((image, index) => (
            <div
              key={index}
              className="group cursor-pointer relative"
              onClick={() => setSelectedImage(index)}
            >
              <div className="aspect-w-16 aspect-h-12 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-105">
                <img
                  src={`${image.imgix_url}?w=600&h=450&fit=crop&auto=format,compress`}
                  alt={`${project.metadata.title} - Image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Image Number Overlay */}
              <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                {index + 1} / {allImages.length}
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-full">
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Main Image */}
              <img
                src={`${allImages[selectedImage]?.imgix_url}?w=1200&h=900&fit=max&auto=format,compress`}
                alt={`${project.metadata.title} - Image ${selectedImage + 1}`}
                className="max-w-full max-h-full object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />

              {/* Navigation */}
              {allImages.length > 1 && (
                <>
                  {/* Previous Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      setSelectedImage(selectedImage > 0 ? selectedImage - 1 : allImages.length - 1)
                    }}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300"
                  >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  {/* Next Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      setSelectedImage(selectedImage < allImages.length - 1 ? selectedImage + 1 : 0)
                    }}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300"
                  >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>

                  {/* Image Counter */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm bg-black bg-opacity-50 px-3 py-1 rounded">
                    {selectedImage + 1} / {allImages.length}
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}