"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const observerMap = new Map<Element, (isVisible: boolean) => void>();
let globalObserver: IntersectionObserver | null = null;

export function useIntersectionObserver() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);
  
  const handleVisibilityChange = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      const callback = observerMap.get(entry.target);
      callback?.(entry.isIntersecting);
    });
  }, []);

  useEffect(() => {
    if (!globalObserver) {
      globalObserver = new IntersectionObserver(handleVisibilityChange, {
        threshold: 0.1,
        rootMargin: '50px'
      });
    }
    
    const element = ref.current;
    if (!element) return;

    observerMap.set(element, (visible) => {
      if (visible) {
        setIsVisible(true);
        globalObserver?.unobserve(element);
        observerMap.delete(element);
      }
    });

    globalObserver.observe(element);

    return () => {
      if (element) {
        globalObserver?.unobserve(element);
        observerMap.delete(element);
      }
    };
  }, [handleVisibilityChange]);

  return { ref, isVisible };
}
