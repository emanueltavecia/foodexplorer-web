import styled from 'styled-components'
import { deviceBreakpoints } from '../../styles/deviceBreakpoints'

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;

  font-weight: 700;

  @media (max-width: ${deviceBreakpoints.md}) {
    gap: 0.5rem;
  }
`
