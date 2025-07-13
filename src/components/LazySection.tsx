import React, { lazy, Suspense } from 'react';
import { useLazyLoad } from '../hooks/useLazyLoad';

interface LazySectionProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  className?: string;
  threshold?: number;
  rootMargin?: string;
}

const LazySection: React.FC<LazySectionProps> = ({
  children,
  fallback = (
    <div className="min-h-[400px] flex items-center justify-center">
      <div className="animate-pulse">
        <div className="h-8 bg-gray-700 rounded w-48 mb-4"></div>
        <div className="h-4 bg-gray-700 rounded w-64 mb-2"></div>
        <div className="h-4 bg-gray-700 rounded w-56"></div>
      </div>
    </div>
  ),
  className = "",
  threshold = 0.1,
  rootMargin = "200px"
}) => {
  const { ref, isVisible } = useLazyLoad({ threshold, rootMargin });

  return (
    <div ref={ref} className={className}>
      {isVisible ? (
        <Suspense fallback={fallback}>
          {children}
        </Suspense>
      ) : (
        fallback
      )}
    </div>
  );
};

export default LazySection; 