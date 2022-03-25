import Home from './routes/Home.svelte';
import Login from './routes/Login.svelte';
import Register from './routes/Register.svelte';
import JobRegister from './routes/JobsRegister.svelte';

export const routes = {
    '/': Home,
    '/login': Login,
    '/registro': Register,
    '/jobs/new-job': JobRegister
}

export default routes;