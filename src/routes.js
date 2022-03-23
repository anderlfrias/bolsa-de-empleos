import Home from './routes/Home.svelte';
import Login from './routes/Login.svelte';
import Register from './routes/Register.svelte'

export const routes = {
    '/': Home,
    '/login': Login,
    '/registro': Register
}

export default routes;