import styled from 'styled-components'
import { deviceBreakpoints } from '../../styles/deviceBreakpoints'

export const Container = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  font-weight: 700;
  
  @media (min-width: ${deviceBreakpoints.md}) {
    margin: 0;
    gap: 1.25rem;
    position: relative;
  }

  span {
    font-size: 0.86rem;
    font-weight: 400;
    line-height: 160%;
    color: ${({ theme }) => theme.COLORS.CAKE_100};

    @media (min-width: ${deviceBreakpoints.md}) {
      position: absolute;
      right: 0;
      bottom: -0.875rem;
    }
  }
`
