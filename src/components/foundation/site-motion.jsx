import { useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const revealStates = {
  up: { autoAlpha: 0, y: 30 },
  left: { autoAlpha: 0, x: -42, y: 12 },
  right: { autoAlpha: 0, x: 42, y: 12 },
  scale: { autoAlpha: 0, scale: 0.94, y: 22 },
  fade: { autoAlpha: 0 },
}

function getRevealState(element) {
  return revealStates[element.dataset.reveal] ?? revealStates.up
}

export function SiteMotion() {
  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    gsap.registerPlugin(ScrollTrigger)

    const cleanups = []
    let active = true

    const motion = gsap.context(() => {
      const heroSection = document.querySelector('#home')
      const heroLines = gsap.utils.toArray('[data-hero-line]')
      const heroCopy = gsap.utils.toArray('[data-hero-copy]')
      const heroStats = gsap.utils.toArray('[data-hero-stat]')
      const revealElements = gsap.utils.toArray('[data-reveal]')
      const heroMedia = document.querySelector('[data-hero-media]')
      const heroGlow = document.querySelector('.hero-glow')
      const donationWords = gsap.utils.toArray('[data-donation-word]')
      const hasSectionHash = window.location.hash.length > 1

      if (heroLines.length) {
        gsap.fromTo(
          heroLines,
          { yPercent: 118, rotate: 2.5, autoAlpha: 0 },
          {
            yPercent: 0,
            rotate: 0,
            autoAlpha: 1,
            duration: 1.1,
            stagger: 0.11,
            delay: 0.15,
            ease: 'power4.out',
            clearProps: 'transform,opacity,visibility',
          },
        )
      }

      if (heroCopy.length) {
        gsap.fromTo(
          heroCopy,
          { autoAlpha: 0, y: 22 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.12,
            delay: 0.45,
            ease: 'power3.out',
            clearProps: 'transform,opacity,visibility',
          },
        )
      }

      if (heroStats.length) {
        gsap.fromTo(
          heroStats,
          { autoAlpha: 0, y: 26 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            delay: 0.85,
            ease: 'power3.out',
            clearProps: 'transform,opacity,visibility',
          },
        )
      }

      if (heroMedia) {
        gsap.fromTo(heroMedia, { scale: 1.14 }, { scale: 1, duration: 2.2, ease: 'power2.out' })
      }

      if (heroSection) {
        gsap.to('.hero-copy', {
          yPercent: -12,
          autoAlpha: 0.22,
          ease: 'none',
          scrollTrigger: {
            trigger: heroSection,
            start: 'top top',
            end: 'bottom top',
            scrub: 0.5,
          },
        })
      }

      if (donationWords.length) {
        gsap.fromTo(
          donationWords,
          { autoAlpha: 0, y: 18, rotateX: -45 },
          {
            autoAlpha: 1,
            y: 0,
            rotateX: 0,
            duration: 0.65,
            stagger: 0.08,
            ease: 'back.out(1.4)',
            scrollTrigger: {
              trigger: donationWords[0],
              start: 'top 82%',
              once: true,
            },
          },
        )
      }

      if (heroGlow) {
        gsap.to(heroGlow, {
          scale: 1.16,
          opacity: 0.55,
          duration: 3.2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        })
      }

      if (hasSectionHash) {
        gsap.set(revealElements, { autoAlpha: 1, x: 0, y: 0, scale: 1 })
      } else {
        revealElements.forEach((element) => {
          gsap.set(element, getRevealState(element))
        })

        ScrollTrigger.batch(revealElements, {
          start: 'top 88%',
          once: true,
          onEnter: (elements) => {
            elements.forEach((element, index) => {
              gsap.to(element, {
                autoAlpha: 1,
                x: 0,
                y: 0,
                scale: 1,
                duration: 0.9,
                delay: index * 0.07,
                ease: 'power3.out',
                overwrite: true,
                clearProps: 'transform,opacity,visibility',
              })
            })
          },
        })
      }

      gsap.utils.toArray('[data-image-reveal]').forEach((frame) => {
        const image = frame.querySelector('img')

        // Reveal the image only — clipping the whole frame used to cut off
        // the captions that sit at the bottom of the card.
        if (image) {
          gsap.fromTo(
            image,
            { clipPath: 'inset(9% 6% 9% 6%)' },
            {
              clipPath: 'inset(0% 0% 0% 0%)',
              duration: 1.25,
              ease: 'power3.out',
              clearProps: 'clipPath',
              scrollTrigger: {
                trigger: frame,
                start: 'top 88%',
                once: true,
              },
            },
          )
        }

        if (image) {
          gsap.fromTo(
            image,
            { scale: 1.12 },
            {
              scale: 1,
              duration: 1.7,
              ease: 'power3.out',
              clearProps: 'transform',
              scrollTrigger: {
                trigger: frame,
                start: 'top 88%',
                once: true,
              },
            },
          )
        }
      })

      gsap.utils.toArray('[data-parallax]').forEach((image) => {
        gsap.to(image, {
          yPercent: -7,
          ease: 'none',
          scrollTrigger: {
            trigger: image,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.6,
          },
        })
      })

      gsap.utils.toArray('[data-count]').forEach((element) => {
        const target = Number.parseFloat(element.dataset.count)
        if (!Number.isFinite(target)) return

        const decimals = Number.parseInt(element.dataset.countDecimals ?? '0', 10)
        const counter = { value: 0 }

        ScrollTrigger.create({
          trigger: element,
          start: 'top 92%',
          once: true,
          onEnter: () => {
            gsap.to(counter, {
              value: target,
              duration: 1.5,
              ease: 'power2.out',
              onUpdate: () => {
                element.textContent = counter.value.toFixed(decimals)
              },
            })
          },
        })
      })

      if (window.matchMedia('(pointer: fine)').matches) {
        gsap.utils.toArray('[data-magnetic]').forEach((element) => {
          const strength = Number.parseFloat(element.dataset.magneticStrength ?? '0.22')
          const moveX = gsap.quickTo(element, 'x', { duration: 0.45, ease: 'power3.out' })
          const moveY = gsap.quickTo(element, 'y', { duration: 0.45, ease: 'power3.out' })

          const handleMove = (event) => {
            const rect = element.getBoundingClientRect()
            moveX((event.clientX - rect.left - rect.width / 2) * strength)
            moveY((event.clientY - rect.top - rect.height / 2) * strength)
          }

          const handleLeave = () => {
            moveX(0)
            moveY(0)
          }

          element.addEventListener('pointermove', handleMove)
          element.addEventListener('pointerleave', handleLeave)
          cleanups.push(() => {
            element.removeEventListener('pointermove', handleMove)
            element.removeEventListener('pointerleave', handleLeave)
          })
        })
      }

      ScrollTrigger.refresh()

      if (document.fonts?.ready) {
        document.fonts.ready.then(() => {
          if (active) ScrollTrigger.refresh()
        })
      }
    })

    return () => {
      active = false
      cleanups.forEach((cleanup) => cleanup())
      motion.revert()
    }
  }, [])

  return null
}
