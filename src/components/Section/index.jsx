import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { LeftIcon } from '../../assets/icons/left-icon'
import { RightIcon } from '../../assets/icons/right-icon'
import { deviceBreakpoints } from '../../styles/deviceBreakpoints'
import { Card } from '../Card'
import { Container } from './styles'

export function Section({ dishes, title, ...props }) {
  const isMobile = useMediaQuery({
    query: `(max-width: ${deviceBreakpoints.sm})`,
  })
  const isTablet = useMediaQuery({
    query: `(max-width: ${deviceBreakpoints.md})`,
  })

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
      slides: {
        perView: isMobile ? 1.5 : isTablet ? 2.5 : 3.5,
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
