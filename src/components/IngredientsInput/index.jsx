import { useState } from 'react'
import { CloseIcon } from '../../assets/icons/close-icon'
import { AddIcon } from '../../assets/icons/add-icon'
import { Button } from '../Button'
import { Label } from '../Label'
import { Container, Ingredient, IngredientInput } from './styles'

export function IngredientsInput({ ingredients, setIngredients }) {
  const [ingredient, setIngredient] = useState('')

  function handleAddIngredient() {
    if (ingredient) {
      setIngredients((prev) => [...prev, ingredient])
      setIngredient('')
    }
  }

  function handleRemoveIngredient(ingredient) {
    setIngredients((prev) => prev.filter((item) => item !== ingredient))
  }

  return (
    <Container>
      <Label htmlFor="ingredients">Ingredientes</Label>

      <div>
        {ingredients.map((ingredient, i) => (
          <div key={i}>
            <Ingredient>
              {ingredient}

              <Button
                type="button"
                variant="link"
                icon={CloseIcon}
                onClick={() => handleRemoveIngredient(ingredient)}
              />
            </Ingredient>
          </div>
        ))}
        <IngredientInput>
          <input
            id="ingredients"
            placeholder="Adicionar"
            onChange={(e) => setIngredient(e.target.value)}
            value={ingredient}
          />
          <Button
            type="button"
            variant="link"
            icon={AddIcon}
            onClick={handleAddIngredient}
          />
        </IngredientInput>
      </div>
    </Container>
  )
}
