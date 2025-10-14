"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ServiceGalleryModalProps {
  isOpen: boolean
  onClose: () => void
  serviceName: string
  images: string[]
}

export function ServiceGalleryModal({ isOpen, onClose, serviceName, images }: ServiceGalleryModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{serviceName}</DialogTitle>
          <Button variant="ghost" size="icon" className="absolute right-4 top-4" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          {images.map((image, index) => (
            <div key={index} className="relative aspect-[4/3] overflow-hidden rounded-lg bg-muted">
              <img
                src={image || "/placeholder.svg"}
                alt={`${serviceName} ejemplo ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}
