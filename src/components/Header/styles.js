import styled from 'styled-components'
import { deviceBreakpoints } from '../../styles/deviceBreakpoints'

export const Container = styled.header`
  width: 100%;
  padding: 50px 1.75rem 1.5rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_600};

  @media (min-width: ${deviceBreakpoints.md}) {
    padding: 1.5rem 1.75rem;
  }

  > div {
    max-width: 1122px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    white-space: nowrap;

    svg {
      width: 24px;
      height: 24px;
    }

    .logo-icon {
      width: 24px;
      height: 24px;

      @media (min-width: ${deviceBreakpoints.md}) {
        width: 30px;
        height: 30px;
      }
    }
    .logo-text {
      font-size: 1.5rem;
    }

    > .search {
      max-width: 580px;
      width: 100%;
    }

    .search,
    .sign-out {
      display: none;

      @media (min-width: ${deviceBreakpoints.md}) {
        display: flex;
      }
    }

    .menu-button {
      display: flex;

      @media (min-width: ${deviceBreakpoints.md}) {
        display: none;
      }
    }

    button {
      max-width: 216px;
      display: none;

      @media (min-width: ${deviceBreakpoints.md}) {
        display: flex;
      }
    }
  }
`

export const Menu = styled.aside`
  position: absolute;
  height: 100vh;
  width: 100%;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.COLORS.DARK_400};

  z-index: 2;

  transform: translateX(-100%);

  transition: all 0.3s ease-in-out;

  &[data-menu-is-open='true'] {
    transform: translateX(0);

    @media (min-width: ${deviceBreakpoints.md}) {
      transform: translateX(-100%);
    }
  }

  .menu-header {
    padding: 56px 28px 24px;
    display: flex;
    flex-direction: row;
    gap: 16px;
    align-items: center;
    font-size: 1.5rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_700};

    svg {
      width: 18px;
      height: 18px;
    }
  }

  > div > div {
    padding: 36px 28px;
    display: flex;
    gap: 36px;
    flex-direction: column;
  }

  nav button {
    font-size: 24px;
    font-weight: 300;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    padding: 0.714rem;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};
    border-radius: 0;
    width: 100%;
    justify-content: left;
  }
`
