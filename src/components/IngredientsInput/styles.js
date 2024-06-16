import styled from 'styled-components'
import { deviceBreakpoints } from '../../styles/deviceBreakpoints'

export const Container = styled.div`
  width: 100%;
  margin-bottom: 0.5rem;

  label {
    margin-bottom: 1.143rem;
  }

  > div {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    padding: 7px;
    border-radius: 8px;
  }
`

export const IngredientInput = styled.div`
  border: ${({ theme }) => `1px dashed ${theme.COLORS.LIGHT_500}`};
  width: fit-content;
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding-right: 16px;
  
  input {
    border-radius: 8px;
    font-size: 1.143rem;
    background-color: transparent;
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
    border: none;
    width: 110px;
    padding: 10px 16px;
    height: 32px;

    @media (min-width: ${deviceBreakpoints.md}) {
      font-size: 1rem;
    }
  }
  
  button svg {
    width: 12px;
    height: 12px;
  }
`
export const Ingredient = styled.span`
  font-size: 1.143rem;
  background-color: ${({ theme }) => theme.COLORS.LIGHT_600};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  border: none;
  border-radius: 8px;
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 10px 16px;
  line-height: 100%;

  button svg {
    width: 8px;
    height: 8px;
  }

  @media (min-width: ${deviceBreakpoints.md}) {
    font-size: 1rem;
  }
`
