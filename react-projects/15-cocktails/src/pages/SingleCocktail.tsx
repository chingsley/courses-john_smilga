import React, { useEffect, useState } from 'react';
import { Loading } from '../components';
import { useParams, Link } from 'react-router-dom';
import { ICocktail } from '../context';

export default function SingleCocktail() {
  const { id } = useParams()
  const [loading, setLoading] = useState(false)
  const [cocktail, setCocktail] = useState<ICocktail | null>(null)

  useEffect(() => {
    setLoading(true)
    async function getCocktail() {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
        )
        const data = await response.json()
        if (data.drinks) {
          const newCocktail: ICocktail = {
            id: id!,
            name: data.drinks[0].name,
            image: data.drinks[0].strDrinkThumb,
            info: data.drinks[0].strAlcoholic,
            category: data.drinks[0].strCategory,
            glass: data.drinks[0].strGlass,
            instructions: data.drinks[0].strInstructions,
            ingredients: [
              data.drinks[0].strIngredient1,
              data.drinks[0].strIngredient2,
              data.drinks[0].strIngredient3,
              data.drinks[0].strIngredient4,
              data.drinks[0].strIngredient5,
            ]
          }
          setCocktail(newCocktail)
        } else {
          setCocktail(null)
        }
      } catch (error) {
        console.log(error)
      }
      setLoading(false)
    }
    getCocktail()
  }, [id])
  if (loading) {
    return <Loading/>
  }
  if (!cocktail) {
    return <h2 className='section-title'>no cocktail to display</h2>
  } else {
    const {
      name,
      image,
      category,
      info,
      glass,
      instructions,
      ingredients,
    } = cocktail
    return (
      <section className='section cocktail-section'>
        <Link to='/' className='btn btn-primary'>
          back home
        </Link>
        <h2 className='section-title'>{name}</h2>
        <div className='drink'>
          <img src={image} alt={name}></img>
          <div className='drink-info'>
            <p>
              <span className='drink-data'>name :</span> {name}
            </p>
            <p>
              <span className='drink-data'>category :</span> {category}
            </p>
            <p>
              <span className='drink-data'>info :</span> {info}
            </p>
            <p>
              <span className='drink-data'>glass :</span> {glass}
            </p>
            <p>
              <span className='drink-data'>instructons :</span> {instructions}
            </p>
            <p>
              <span className='drink-data'>ingredients :</span>
              {ingredients.map((item, index) => {
                return item ? <span key={index}> {item}</span> : null
              })}
            </p>
          </div>
        </div>
      </section>
    )
  }
}
