'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { getRecipes, Recipe } from './shared/libs/data'
import { Utensils } from 'lucide-react'
import SearchBar from './shared/components/SearchBar'
import RecipeCard from './features/recipe/RecipeCard'

export default function Home() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');

  useEffect(() => {
    setRecipes(getRecipes())
  }, [])

  const filtered = recipes.filter(r =>
    (category === 'all' || r.category === category) &&
    r.title.toLowerCase().includes(search.toLowerCase())
  )

  const categories = ['all', 'breakfast', 'lunch', 'dinner', 'snack']

  return (
    <main className="min-h-screen bg-primary-default">
      
      {/* Header */}
      <div className="shadow-sm backdrop-blur  sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          
          <div className="flex items-center gap-2">
            <div className="px-2 py-1 rounded-xl bg-indigo-500 text-white font-semibold">
              RB
            </div>
            <h1 className="text-lg md:text-xl font-semibold">
              Recipe Book
            </h1>
          </div>

          <Link
            href="/recipe/add"
            className="flex items-center gap-2 px-4 py-2 rounded-full  text-sm shadow
                       border-indigo-500 border text-indigo-500
                       hover:bg-indigo-400 hover:text-white transition"
          >
            <Utensils size={16} />
            New Recipe
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-6 min-h-screen">

        {/* Hero */}
        <div className="mb-6 p-5 rounded-2xl bg-gradient-to-r 
                        from-[rgb(var(--color-primary))]/10 
                        to-transparent">
          <h2 className="text-2xl md:text-3xl font-semibold mb-1">
            Discover Delicious Recipes 🍽️
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            Browse, search, and save your favorite meals.
          </p>
        </div>

        {/* Search */}
        <div className="mb-5">
          <SearchBar search={search} setSearch={setSearch} />
        </div>

        {/* Categories */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-6">
          {categories.map(c => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition border border-gray-400 
                ${
                  category === c
                    ? 'bg-[rgb(var(--color-primary))] text-white border-transparent shadow'
                    : 'bg-white hover:bg-gray-100'
                }`}
            >
              {c.charAt(0).toUpperCase() + c.slice(1)}
            </button>
          ))}
        </div>

        {/* Empty State */}
        {filtered.length === 0 && (
          <div className="flex flex-col justify-center items-center py-16">
            <div className="mb-3 text-gray-400">
              <Utensils />
            </div>
            <p className="mb-2 text-gray-600">No recipes found.</p>
            <Link
              href="/recipe/add"
              className="text-[rgb(var(--color-primary))] font-medium hover:underline"
            >
              Add your first recipe
            </Link>
          </div>
        )}

        {/* Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map(r => (
            <RecipeCard key={r.id} recipe={r} />
          ))}
        </div>
      </div>

      <div className='text-center text-sm py-5 mt-5 text-slate-400'>
        &copy; Made as a hobby by Samuel Amador
      </div>
    </main>
  )
}