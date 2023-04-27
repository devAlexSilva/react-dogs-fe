import { useEffect, useState } from "react";

export function UseMedia(media = '') {
  const { matches: initialMatch } = window.matchMedia(`(${media})`)
  const [matchSize, setMatchSize] = useState(initialMatch)

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