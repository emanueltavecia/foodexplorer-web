import styled from 'styled-components'

export const Container = styled.footer`
  background-color: ${({ theme }) => theme.COLORS.DARK_600};
  padding: 24px 28px;

  > div {
    max-width: 1122px;
    margin: 0 auto;
    color: ${({ theme }) => theme.COLORS.LIGHT_200};
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  > div > p {
    font-size: 0.75rem;
  }

  > div > div {
    color: ${({ theme }) => theme.COLORS.LIGHT_700};
    gap: 0.5rem;
    svg {
      width: 22px;
      height: 22px;

      path {
        fill: ${({ theme }) => theme.COLORS.LIGHT_700};
      }
    }
  }
`
