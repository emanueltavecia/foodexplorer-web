import styled from 'styled-components'
import { deviceBreakpoints } from '../../styles/deviceBreakpoints'

export const Container = styled.div`
  margin-top: 2.875rem;
  max-width: 1122px;
  margin-inline: auto;

  h2 {
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 1.28rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    margin-bottom: 1.375rem;

    @media (min-width: ${deviceBreakpoints.md}) {
      font-size: 2rem;
    }
  }
`
