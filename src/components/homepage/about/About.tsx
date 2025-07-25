'use client'
import React, { useEffect, useState } from 'react'
import Container from '@/components/common/Container'

const phrases = [' I am a Frontend Developer', ' I build interfaces...', ' ...and turn designs into code']

const About = () => {
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex % phrases.length]

    const typingSpeed = isDeleting ? 50 : 100

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setText(currentPhrase.substring(0, charIndex - 1))
        setCharIndex(charIndex - 1)
      } else {
        setText(currentPhrase.substring(0, charIndex + 1))
        setCharIndex(charIndex + 1)
      }

      if (!isDeleting && charIndex === currentPhrase.length) {
        setTimeout(() => setIsDeleting(true), 1000)
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false)
        setPhraseIndex((prev) => (prev + 1) % phrases.length)
      }
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, phraseIndex])

  return (
    <main>
      <Container>
        <div className="mt-25 flex  flex-col items-center">
          <div className="h-[40px]">
          <h3 className="text-[40px] text-[#7700ff] border-r-2 pr-2 whitespace-nowrap overflow-hidden w-fit ">
            {text} 
          </h3>
          </div>
          <div className="mt-5 text-[30px] max-w-[700px]">
            <p>
                A frontend dev who blends logic with aesthetics.
                I design and build digital experiences
                that hit that one spot between user delight and business goals.
            </p>
          </div>

        </div>
      </Container>
    </main>
  )
}

export default About
