import Home from './routes/Home.svelte';
import Login from './routes/Login.svelte';

export const routes = {
    '/': Home,
    '/login': Login,
}

export default routes;