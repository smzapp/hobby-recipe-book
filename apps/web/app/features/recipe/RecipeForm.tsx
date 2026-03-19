'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { PlusCircle } from 'lucide-react'
import { saveRecipe } from '../../shared/libs/data'

export default function RecipeForm() {
  const router = useRouter()
  const [form, setForm] = useState({
    title: '',
		image: '',
    category: 'lunch',
    description: '',
    instructions: ''
  })

  const handleSubmit = (e: any) => {
    e.preventDefault()
    saveRecipe(form)
    router.push('/')
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl bg-white shadow-lg rounded-2xl p-6 md:p-8 space-y-5"
      >
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold">Add New Recipe</h1>
          <p className="text-gray-500 text-sm">
            Fill in the details to create a delicious recipe.
          </p>
        </div>

        {/* Title */}
        <div>
          <label className="block text-sm font-medium mb-1">Title</label>
          <input
            required
            className="w-full border border-gray-400 rounded-xl p-3 focus:border-indigo-500 outline-none"
            placeholder="e.g. Chicken Adobo"
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium mb-1">Category</label>
          <select
            className="w-full border border-gray-400 rounded-xl p-3 focus:border-indigo-500 outline-none"
            onChange={(e) => setForm({ ...form, category: e.target.value as any })}
          >
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
          </select>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            rows={3}
            className="w-full border border-gray-400 rounded-xl p-3 focus:border-indigo-500 outline-none"
            placeholder="Short description of the recipe"
            onChange={(e) => setForm({ ...form, description: e.target.value })}
          />
        </div>

        {/* Instructions */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Instructions (Markdown Supported)
          </label>
          <textarea
            rows={6}
            className="w-full border border-gray-400 rounded-xl p-3 focus:border-indigo-500 outline-none font-mono text-sm"
            placeholder="## Steps\n- Prepare ingredients\n- Cook..."
            onChange={(e) => setForm({ ...form, instructions: e.target.value })}
          />
        </div>

        {/* Actions */}
        <div className="flex justify-between items-center pt-2">
          <button
            type="button"
            onClick={() => router.push('/')}
            className="text-gray-500 hover:text-black text-sm"
          >
						&laquo; Go Back
          </button>

          <button
            type="submit"
            className="flex items-center gap-2 bg-[rgb(var(--color-primary))] text-white px-5 py-2.5 rounded-xl hover:opacity-90 transition"
          >
            <PlusCircle size={18} /> Save Recipe
          </button>
        </div>
      </form>
    </div>
  )
}