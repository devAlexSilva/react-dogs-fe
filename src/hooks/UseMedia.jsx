import { useEffect, useState } from "react";

export function UseMedia(media = '') {
  const [matchSize, setMatchSize] = useState(false)

  useEffect(() => {
    function matchWindowSize() {
      const { matches } = window.matchMedia(`(${media})`)
      setMatchSize(matches)
    }

    window.addEventListener('resize', matchWindowSize)

    return () => {
      window.removeEventListener('resize', matchWindowSize)
    }
  }, [media])

  return matchSize
}