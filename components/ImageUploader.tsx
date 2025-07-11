"use client"

import React, { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Upload } from "lucide-react"

interface ImageUploaderProps {
  onImageUpload: (image: string) => void
}

export default function ImageUploader({ onImageUpload }: ImageUploaderProps) {
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const imageUrl = e.target?.result as string
        onImageUpload(imageUrl)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    
    const files = e.dataTransfer.files
    if (files.length > 0) {
      const file = files[0]
      if (file.type.startsWith('image/')) {
        const reader = new FileReader()
        reader.onload = (e) => {
          const imageUrl = e.target?.result as string
          onImageUpload(imageUrl)
        }
        reader.readAsDataURL(file)
      }
    }
  }

  const triggerFileInput = () => {
    fileInputRef.current?.click()
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div
        className="border-2 border-dashed border-slate-300 rounded-2xl p-12 text-center cursor-pointer hover:border-red-400 hover:bg-red-50/50 transition-all duration-300 group"
        onClick={triggerFileInput}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <div className="space-y-4">
          <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto group-hover:bg-red-200 transition-colors">
            <Upload className="w-8 h-8 text-red-600" />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-2">Upload Your Thumbnail</h3>
            <p className="text-slate-600 mb-4">Drag and drop your image here, or click to browse</p>
            <p className="text-sm text-slate-500">Supports JPG, PNG • Recommended: 1280x720px</p>
          </div>
          <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg">Choose File</Button>
        </div>
      </div>

      <input 
        ref={fileInputRef} 
        type="file" 
        accept="image/*" 
        onChange={handleImageUpload} 
        className="hidden" 
      />
    </div>
  )
} 