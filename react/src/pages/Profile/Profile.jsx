

import { useEffect } from 'react'
import * as RecipeApi from '../../utils/recipes_api'
import { useState } from 'react'


export default function Profile({userId}) {

    const [ userRecipes, setUserRecipes ] = useState([])

        useEffect(()=> {
            RecipeApi.getRecipesForUser(userId)
            .then(data => {
                console.log(data)
                setUserRecipes([... data, ... userRecipes])
            })        
        }, [])


    return (
        <><h1>user profile: {userId}</h1><p>
            <p>test</p></p>
            <p>{userRecipes.map(
                recipe =>
                    <p>{recipe.json_build_object.title}</p>
            )}</p></>
    )
}