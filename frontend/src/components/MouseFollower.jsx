import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import gokuVideo from '../assets/goku.mp4'

const CURSOR_GAP = 12

export default function MouseFollower() {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const onPointerMove = (event) => {
      const x = event.clientX - video.offsetWidth - CURSOR_GAP
      const y = Math.min(
        Math.max(event.clientY - video.offsetHeight / 2, 8),
        Math.max(8, window.innerHeight - video.offsetHeight - 8),
      )

      gsap.to(video, {
        x,
        y,
        autoAlpha: 1,
        duration: 0.12,
        ease: 'power2.out',
        overwrite: 'auto',
      })
    }

    window.addEventListener('pointermove', onPointerMove)

    return () => {
      window.removeEventListener('pointermove', onPointerMove)
      gsap.killTweensOf(video)
    }
  }, [])

  return (
    <video
      ref={videoRef}
      className="mouse-follower-video"
      src={gokuVideo}
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      aria-hidden="true"
    />
  )
}
