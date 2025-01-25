"use client";

import { useEffect } from "react";

export default function ViewportHandler() {
  useEffect(() => {
    const setInitialHeight = () => {
      const vh = window.innerHeight;
      document.documentElement.style.setProperty("--viewport-height", `${vh}px`);
      document.documentElement.style.setProperty("--app-height", `${vh}px`);
    };

    const handleOrientationChange = () => {
      setTimeout(() => {
        const vh = window.innerHeight;
        document.documentElement.style.setProperty("--viewport-height", `${vh}px`);
        document.documentElement.style.setProperty("--app-height", `${vh}px`);
      }, 100);
    };

    setInitialHeight();
    window.addEventListener("orientationchange", handleOrientationChange);
    return () => window.removeEventListener("orientationchange", handleOrientationChange);
  }, []);

  return null;
} 