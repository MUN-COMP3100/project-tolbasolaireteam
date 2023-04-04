import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.mjs';
import Public from './components/Public.mjs';
import Login from './features/auth/Login.mjs';
import DashLayout from './components/DashLayout.mjs';
import Welcome from './features/auth/Welcome.mjs';
import RecipesList from './features/recipes/RecipesList.mjs';
import MealPlanner from './features/recipes/MealPlanner.mjs';
import Register from './features/Register/Register.mjs';
import RequireAuth from './components/RequireAuth.mjs';

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
              <Route index element={<RecipesList />} />
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
