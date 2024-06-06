import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  border-radius: 5px;
  background: ${({ theme }) => theme.COLORS.DARK_900};

  > input {
    padding: 1rem 0.875rem;
    font-size: 1rem;
    border: none;
    background: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
    width: 100%;
  }

  > svg {
    margin-left: 1rem;
  }
`
