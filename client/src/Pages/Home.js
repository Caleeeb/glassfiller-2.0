import React from 'react';
import RecipeList from '../components/RecipeList'
import { QUERY_RECIPES } from '../utils/queries'
import { useQuery } from "@apollo/client";
// import Auth from '../utils/auth'

const Home = () => {
    // const user = Auth.getProfile()
    // console.log(user)
    const { loading, data } = useQuery(QUERY_RECIPES, /*{variables: {username: "Horse Man" }}*/);
    const recipes = data?.recipes || [];
    console.log(recipes)
    return (
        <main>
            <h1>Home</h1>

            <div>
                {loading ? (
                    <div>Loading...</div>
                ) : (
                    <RecipeList
                        recipes={recipes}
                        title=""
                    />
                )}
            </div>
        </main>
    )
}

export default Home;