import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.mjs';
import Public from './components/Public.mjs';
import Login from './features/auth/Login.mjs';
import DashLayout from './components/DashLayout.mjs';
import Welcome from './features/auth/Welcome.mjs';
import RecipesMenu from './features/recipes/RecipesMenu.mjs';
import MealPlanner from './features/recipes/MealPlanner.mjs';
import Register from './features/Register/Register.mjs';
import RequireAuth from './components/RequireAuth.mjs';
import CreateRecipe from './features/recipes/CreateRecipe.mjs';
import AmendRecipe from './features/recipes/AmendRecipe.mjs';
import SearchRecipe from './features/recipes/SearchRecipe.mjs';
import SearchRecipeIngredient from './features/recipes/SearchRecipeIngredient.mjs';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Public />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        <Route element={<RequireAuth />}>
          <Route path="dash" element={<DashLayout />}> {/* start of dash */}

            <Route index element={<Welcome />} />

            <Route path="recipes">
              <Route index element={<RecipesMenu />} />
              <Route path="create_recipe" element={<CreateRecipe />} />
              <Route path="amend_recipe" element={<AmendRecipe />} />
              <Route path="search" element={<SearchRecipe />} />
              <Route path="search_ingredient" element={<SearchRecipeIngredient />} />
            </Route>

            <Route path="meal_planner">
              <Route index element={<MealPlanner />} />
            </Route>

          </Route> {/* end of dash */}
        </Route>

      </Route>
    </Routes>
  );
}

export default App;
