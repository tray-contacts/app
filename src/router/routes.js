const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Home/index'),
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/Login/index'),
    },
]

export default routes;
