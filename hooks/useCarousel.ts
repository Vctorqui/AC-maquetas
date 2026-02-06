import { useState, useEffect, useCallback, useRef } from 'react'

interface UseCarouselProps {
  length: number
  interval?: number
  autoSlide?: boolean
}

export const useCarousel = ({
  length,
  interval = 5000,
  autoSlide = true,
}: UseCarouselProps) => {
  const [index, setIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const handleNext = useCallback(() => {
    setIndex((prevIndex) => (prevIndex + 1) % length)
  }, [length])

  const handlePrev = useCallback(() => {
    setIndex((prevIndex) => (prevIndex - 1 + length) % length)
  }, [length])

  const goToIndex = useCallback((newIndex: number) => {
    setIndex(newIndex)
  }, [])

  const pause = () => setIsPaused(true)
  const resume = () => setIsPaused(false)

  useEffect(() => {
    if (autoSlide && !isPaused) {
      timerRef.current = setInterval(handleNext, interval)
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [autoSlide, isPaused, interval, handleNext])

  return {
    index,
    handleNext,
    handlePrev,
    goToIndex,
    pause,
    resume,
    isPaused,
  }
}
