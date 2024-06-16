import styled from 'styled-components'
import { deviceBreakpoints } from '../../styles/deviceBreakpoints'

export const Container = styled.div`
  height: calc(100vh - 100px);
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > div {
    padding: 1.5rem 28px 28px;

    @media (min-width: ${deviceBreakpoints.md}) {
      padding: 40px 28px 28px;
    }
  }
`

export const Main = styled.main`
  max-width: 1122px;
  margin: 0 auto;

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  .backButton {
    display: flex;
    align-items: center;
    gap: 0;
    font-size: 1.18rem;
    line-height: 140%;
    font-weight: 500;

    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    margin-bottom: 1.15rem;

    @media (min-width: ${deviceBreakpoints.md}) {
      font-weight: 700;
      font-size: 1.5rem;
    }
  }

  h1 {
    font-size: 2.29rem;
    font-family: 'Poppins';
    font-weight: 500;
    margin-bottom: 2.64rem;

    @media (min-width: ${deviceBreakpoints.md}) {
      font-size: 2rem;
      margin-bottom: 2rem;
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
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (min-width: ${deviceBreakpoints.md}) {
    gap: 2rem;
  }

  > div {
    display: flex;
    gap: 1.5rem;
    flex-direction: column;

    @media (min-width: ${deviceBreakpoints.md}) {
      gap: 2rem;
      flex-direction: row;
    }

    label {
      display: flex;
      flex-direction: column;
      gap: 1.143rem;
      width: 100%;

      @media (min-width: ${deviceBreakpoints.md}) {
        max-width: 230px;
      }

      > span {
        font-size: 1rem;
      }

      > .upload {
        display: flex;
        align-items: center;
        gap: 1rem;
        background-color: ${({ theme }) => theme.COLORS.DARK_900};
        padding: 0 0.875rem;
        border-radius: 0.5rem;

        height: 48px;

        svg {
          width: 24px;
          height: 24px;
        }

        span {
          flex: 1;
          font-size: 1rem;
          color: ${({ theme }) => theme.COLORS.LIGHT_300};
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
      input {
        height: 48px;
      }
    }

    input[type='file'] {
      display: none;
    }

    label[for='name'] {
      max-width: 100%;
    }

    select {
      height: 48px;
      background-color: ${({ theme }) => theme.COLORS.DARK_900};
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
      border: 0;
      border-radius: 0.5rem;
      padding: 0 0.875rem;
      font-size: 1rem;

      @media (min-width: ${deviceBreakpoints.md}) {
        font-size: 0.875rem;
      }
    }
  }

  > label {
    display: flex;
    flex-direction: column;
    gap: 1.143rem;
    width: 100%;

    textarea {
      resize: vertical;
      height: 172px;
      background-color: ${({ theme }) => theme.COLORS.DARK_900};
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
      border: 0;
      border-radius: 0.5rem;
      padding: 14px;
    }
  }

  > button {
    background-color: #894047;
  }
`
