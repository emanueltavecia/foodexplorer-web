import styled from 'styled-components'
import { deviceBreakpoints } from '../../styles/deviceBreakpoints'

export const Container = styled.div`
  width: 100%;
  max-width: 210px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  background: ${({ theme }) => theme.COLORS.DARK_200};
  border-radius: 0.5rem;

  padding: 24px;
  text-align: center;

  position: relative;

  @media (min-width: ${deviceBreakpoints.md}) {
    max-width: 304px;
    gap: 1rem;
  }

  > img {
    width: 88px;
    height: 88px;
    border-radius: 1rem;

    @media (min-width: ${deviceBreakpoints.md}) {
      width: 176px;
      height: 176px;
    }
  }

  > svg {
    position: absolute;
    top: 16px;
    right: 18px;
  }

  > h3 {
    font-family: 'Poppins';
    font-size: 1rem;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    line-height: 140%;
    cursor: pointer;

    @media (min-width: ${deviceBreakpoints.md}) {
      font-size: 1.5rem;
      font-weight: 700;
    }
  }

  > p {
    display: none;
    @media (min-width: ${deviceBreakpoints.md}) {
      display: block;
      font-size: 0.875rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
      line-height: 160%;
    }
  }

  > span {
    font-size: 1.15rem;
    line-height: 160%;
    color: ${({ theme }) => theme.COLORS.CAKE_100};

    @media (min-width: ${deviceBreakpoints.md}) {
      font-size: 2rem;
    }
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
    cursor: pointer;
  }

  div {
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-direction: column;
    width: 100%;
    justify-content: center;

    @media (min-width: ${deviceBreakpoints.md}) {
      flex-direction: row;
    }

    > div {
      gap: 0.875rem;
      flex-direction: row;
    }
  }
`
