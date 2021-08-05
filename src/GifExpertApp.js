import React, { useState } from 'react'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

function GifExpertApp() {

    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball']
    const [categories, setCategories] = useState(['Re Zero']);

    //const handleAdd = (e) => {

        //setCategories([...categories,'HunterXHunter'])

    //}

    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr />

           

            <ol>
                {
                    categories.map(category => {
                        return <GifGrid key ={category} category={ category }/>
                    })
                }
            </ol>
        </div>
    )
}

export default GifExpertApp
