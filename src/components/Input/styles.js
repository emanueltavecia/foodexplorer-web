import styled from 'styled-components'

export const Container = styled.input`
  width: 100%;
  padding: 1rem 0.875rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_500};
  border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};
  border-radius: 5px;
  background: none;
`
