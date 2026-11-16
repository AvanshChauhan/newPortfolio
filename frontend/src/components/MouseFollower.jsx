import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import gokuVideo from '../assets/goku.mp4'

const VIDEO_WIDTH = 180
const VIDEO_HEIGHT = 120
const CURSOR_GAP = 20

export default function MouseFollower() {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const moveX = gsap.quickTo(video, 'x', { duration: 0.3, ease: 'power3.out' })
    const moveY = gsap.quickTo(video, 'y', { duration: 0.3, ease: 'power3.out' })

    const onPointerMove = (event) => {
      moveX(event.clientX - VIDEO_WIDTH - CURSOR_GAP)
      moveY(Math.min(
        Math.max(event.clientY - VIDEO_HEIGHT / 2, 8),
        Math.max(8, window.innerHeight - VIDEO_HEIGHT - 8),
      ))
      gsap.to(video, { autoAlpha: 1, duration: 0.15, overwrite: true })
    }

    const onPointerLeave = () => {
      gsap.to(video, { autoAlpha: 0, duration: 0.15, overwrite: true })
    }

    window.addEventListener('pointermove', onPointerMove)
    document.documentElement.addEventListener('pointerleave', onPointerLeave)

    return () => {
      window.removeEventListener('pointermove', onPointerMove)
      document.documentElement.removeEventListener('pointerleave', onPointerLeave)
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
