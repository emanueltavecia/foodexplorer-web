import styled from 'styled-components'
import { deviceBreakpoints } from '../../styles/deviceBreakpoints'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 158px 48px;
  display: grid;
  justify-items: center;

  > div {
    margin: 0 auto;
  }

  svg {
    width: 44px;
    height: 44px;
  }

  .logo-text {
    font-size: 2rem;
  }

  @media (min-width: ${deviceBreakpoints.lg}) {
    align-items: center;
    padding: 1rem 112px;
    grid-template-columns: 1fr 1fr;

    .logo-text {
      font-size: 2.625rem;
    }
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  max-width: 476px;
  width: 100%;

  margin-top: 4rem;

  > div {
    width: 100%;
  }

  > h1 {
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 2rem;
    line-height: 140%;
    text-align: center;
    display: none;
  }

  @media (min-width: ${deviceBreakpoints.lg}) {
    border-radius: 1rem;
    padding: 4rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_700};
    margin: 0;

    > h1 {
      display: block;
    }
  }
`
