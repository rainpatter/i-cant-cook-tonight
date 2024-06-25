import { useState } from "react"


export default function SearchArea({ setHasSearched, recipes, setRecipes}) {

    let [ text, setText ] = useState('')

    function handleChange(evt) {
        let input = evt.target.value
        console.log(input)
        setText(evt.target.value)
    }

    return (
        <>
        <div>
            <label htmlFor=""name="search-ingredients-bar"> Anything else?</label>
            <input type="text" onChange={handleChange} name="search-ingredients-bar"/>
     
        </div>
        </>
    )
}