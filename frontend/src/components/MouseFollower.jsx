import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import gokuVideo from '../assets/goku.mp4'

const CURSOR_GAP = 20

export default function MouseFollower() {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const moveX = gsap.quickTo(video, 'x', { duration: 0.3, ease: 'power3.out' })
    const moveY = gsap.quickTo(video, 'y', { duration: 0.3, ease: 'power3.out' })
    let hasPositioned = false

    const onPointerMove = (event) => {
      const x = event.clientX - video.offsetWidth - CURSOR_GAP
      const y = Math.min(
        Math.max(event.clientY - video.offsetHeight / 2, 8),
        Math.max(8, window.innerHeight - video.offsetHeight - 8),
      )

      // Put the video beside the pointer immediately, then ease each movement.
      if (!hasPositioned) {
        gsap.set(video, { x, y, autoAlpha: 1 })
        hasPositioned = true
        return
      }

      moveX(x)
      moveY(y)
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
