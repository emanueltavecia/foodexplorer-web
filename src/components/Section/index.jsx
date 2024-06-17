import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { useState } from 'react'
import { LeftIcon } from '../../assets/icons/left-icon'
import { RightIcon } from '../../assets/icons/right-icon'
import { Card } from '../Card'
import { Container } from './styles'

export function Section({ dishes, title, ...props }) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      initial: 0,
      slideChanged(s) {
        setCurrentSlide(s.track.details.rel)
      },
      created() {
        setLoaded(true)
      },
      breakpoints: {
        '(min-width: 625px)': {
          slides: { perView: 2.5, spacing: 20 },
        },
        '(min-width: 1024px)': {
          slides: { perView: 3.5, spacing: 27 },
        },
      },
      slides: {
        perView: 1.5,
        spacing: 16,
      },
    },
    []
  )

  return (
    <Container {...props}>
      <h2>{title}</h2>

      {loaded && instanceRef.current && (
        <LeftIcon
          onClick={(e) => e.stopPropagation() || instanceRef.current?.prev()}
          disabled={currentSlide === 0}
        />
      )}

      <div ref={sliderRef} className="keen-slider">
        {dishes.map((dish, i) => (
          <Card
            key={dish.id}
            product={dish}
            className={'keen-slider__slide number-slide' + i}
          />
        ))}
      </div>
      {loaded && instanceRef.current && (
        <RightIcon
          onClick={(e) => e.stopPropagation() || instanceRef.current?.next()}
          disabled={
            currentSlide === instanceRef.current.track.details.slides.length - 1
          }
        />
      )}
    </Container>
  )
}
