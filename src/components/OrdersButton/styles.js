import styled from 'styled-components'
import { deviceBreakpoints } from '../../styles/deviceBreakpoints'

export const Container = styled.button`
  width: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  background: none;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font-weight: 500;
  font-family: 'Poppins';

  border: none;
  border-radius: 5px;

  .receipt-icon {
    width: 32px;
    height: 32px;
  }

  span {
    display: none;
  }
  @media (max-width: ${deviceBreakpoints.md}) {
    position: relative;
    .quantity {
      display: inline;
      background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
      width: 20px;
      height: 20px;
      border-radius: 50%;

      position: absolute;
      top: -5px;
      right: 0;
    }
  }

  @media (min-width: ${deviceBreakpoints.md}) {
    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
    padding: 0.75rem 2rem;
    max-width: 256px;
    width: 100%;

    span {
      display: inline;
    }
  }
`
