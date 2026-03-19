'use client'
import { v4 as uuid } from 'uuid'
import { fakeRecipe } from '../fake/fakeRecipe'

export type Recipe = {
  id: string
  image: string
  title: string
  category: string
  description: string
  instructions: string
}

const KEY = 'recipes'

export const getRecipes = (): Recipe[] => {
  if (typeof window === 'undefined') return []

  const stored = localStorage.getItem(KEY)
  const parsed: Recipe[] = stored ? JSON.parse(stored) : []

  const data: Recipe[] = [...parsed, ...fakeRecipe]

  return data
}


export const saveRecipe = (recipe: Omit<Recipe, 'id'>) => {
  const recipes = getRecipes()
  const newRecipe = { ...recipe, id: uuid() }
  localStorage.setItem(KEY, JSON.stringify([newRecipe, ...recipes]))
}