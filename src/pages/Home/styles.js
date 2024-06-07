import styled from 'styled-components'
import { deviceBreakpoints } from '../../styles/deviceBreakpoints'

export const Container = styled.div`
  height: calc(100vh - 104px);
  overflow-y: auto;
`

export const Main = styled.main`
  padding: 60px 28px 28px;

  > .banner {
    max-width: 1122px;
    margin: 0 auto;
    display: grid;
    grid-template-areas: 'img details';
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 0.5rem;
    border-radius: 0.5rem;
    background: ${({ theme }) => theme.COLORS.GRADIENT_200};
    font-size: 0.85rem;
    font-family: 'Poppins';
    padding: 0 20px 0 0;
    position: relative;
    min-height: 120px;

    img {
      width: 100%;
      max-width: 270px;
      min-height: 140px;
      max-height: 170px;
      object-fit: cover;
      position: absolute;
      bottom: 0;
      left: -16px;
      grid-area: img;

      @media (min-width: ${deviceBreakpoints.md}) {
        max-height: 270px;
        max-width: 430px;
      }
    }

    > div {
      grid-area: details;
      padding: 24px 0;
    }

    h2 {
      font-size: 1.28rem;
      font-weight: 600;
      @media (min-width: ${deviceBreakpoints.md}) {
        font-size: 2.5rem;
      }
    }
    @media (min-width: ${deviceBreakpoints.md}) {
      min-height: 250px;
      font-size: 1rem;
    }
  }
`
