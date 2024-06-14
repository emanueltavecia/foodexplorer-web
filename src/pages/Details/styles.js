import styled from 'styled-components'
import { deviceBreakpoints } from '../../styles/deviceBreakpoints'

export const Container = styled.div`
  height: calc(100vh - 104px);
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > div {
    padding: 24px 28px 28px;
    max-width: 1122px;
    width: 100%;
    margin: 0 auto;
  }
`

export const Main = styled.main`
  svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  .backButton {
    gap: 0;
    font-size: 1.5rem;
    line-height: 140%;
    font-weight: 500;

    margin-bottom: 1rem;

    @media (min-width: ${deviceBreakpoints.md}) {
      font-weight: 700;
      margin-bottom: 42px;
    }
  }

  div {
    display: flex;
    align-items: center;
    gap: 24px;
    width: 100%;
    justify-content: center;

    > div {
      @media (min-width: ${deviceBreakpoints.md}) {
        justify-content: flex-start;
      }
    }

    .controls {
      width: fit-content;
      gap: 0.875rem;
      flex-direction: row;
    }

    .addButton {
      white-space: nowrap;
      padding-inline: 1rem;
      font-size: 0.625rem;
      max-width: 188px;

      @media (min-width: ${deviceBreakpoints.md}) {
        width: fit-content;
        padding-inline: 2rem;
        font-size: 0.875rem;
      }

      svg {
        display: inline;
        @media (min-width: ${deviceBreakpoints.md}) {
          display: none;
        }
      }
    }

    .desktop {
      display: none;
      @media (min-width: ${deviceBreakpoints.md}) {
        display: inline;
      }
    }

    .mobile {
      display: inline;
      @media (min-width: ${deviceBreakpoints.md}) {
        display: none;
      }
    }
  }

  .content {
    flex-direction: column;
    font-family: 'Poppins';
    gap: 16px;

    @media (min-width: ${deviceBreakpoints.md}) {
      gap: 48px;
      flex-direction: row;
      justify-content: flex-start;
    }

    img {
      width: 100%;
      max-width: 264px;
      max-height: 264px;

      @media (min-width: ${deviceBreakpoints.md}) {
        max-width: 390px;
        max-height: 390px;
      }
    }

    .infos {
      flex-direction: column;

      @media (min-width: ${deviceBreakpoints.md}) {
        align-items: flex-start;
      }

      h2 {
        font-size: 2rem;
        font-weight: 500;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        line-height: 140%;
        text-align: center;

        @media (min-width: ${deviceBreakpoints.md}) {
          font-size: 2.5rem;
          text-align: left;
        }
      }

      p {
        font-size: 1.16rem;
        text-align: center;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        line-height: 140%;

        @media (min-width: ${deviceBreakpoints.md}) {
          font-size: 1.5rem;
          text-align: left;
        }
      }

      .ingredients {
        gap: 24px;
        flex-wrap: wrap;
        margin-bottom: 24px;

        @media (min-width: ${deviceBreakpoints.md}) {
          gap: 12px;
          justify-content: flex-start;
        }
      }
    }
  }
`

export const Ingredient = styled.span`
  padding: 4px 8px;
  background-color: ${({ theme }) => theme.COLORS.DARK_1000};
  border-radius: 5px;
  font-weight: 500;
`
