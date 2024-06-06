import styled from 'styled-components'

export const Container = styled.button`
  width: ${({ $variant }) => $variant === 'link' ? 'fit-content' : '100%'};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  background-color: ${({ theme, $variant }) =>
    $variant !== 'link' ? theme.COLORS.TOMATO_100 : 'transparent'};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font-weight: 500;
  font-family: 'Poppins';

  border: none;
  border-radius: 5px;

  padding: ${({ $variant }) => $variant === 'default' && '0.75rem 2rem'};

  &:hover {
    text-decoration: ${({ $variant }) => $variant === 'link' && 'underline'};
  }

  > svg {
    width: 32px;
    height: 32px;
  }
`
