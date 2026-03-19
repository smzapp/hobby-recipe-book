'use client'
import ReactMarkdown from 'react-markdown'
import { Recipe } from '../../shared/libs/data'
import Image from 'next/image'

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <div className="bg-white rounded-2xl shadow p-4">
      <h2 className="text-xl font-bold">{recipe.title}</h2>
      <Image
        alt={recipe.title}
        src={'https://images.101cookbooks.com/CAESAR-SALAD-RECIPE-h.jpg?w=1200&auto=compress&auto=format'}
        height={200}
        width={300}
      />
      <span className="text-sm text-gray-500 capitalize">{recipe.category}</span>
      <p className="mt-2 text-gray-600">{recipe.description}</p>
      <div className="prose mt-3">
        <ReactMarkdown>{recipe.instructions}</ReactMarkdown>
      </div>
    </div>
  )
}