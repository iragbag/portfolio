import React, { useEffect, useRef, useState, Suspense } from 'react'

const PreviousExperience = React.lazy(() => import('./PreviousExperience'))

const LazyExperience = ({ data }) => {
  const containerRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = containerRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '120px 0px' }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={containerRef} className="lazy-experience-slot">
      {isVisible ? (
        <Suspense
          fallback={
            <div className="experience-placeholder">
              Loading {data.companyName}...
            </div>
          }
        >
          <PreviousExperience data={data} />
        </Suspense>
      ) : (
        <div className="experience-placeholder">
          Loading {data.companyName}...
        </div>
      )}
    </div>
  )
}

export default LazyExperience
