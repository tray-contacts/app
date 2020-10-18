const routes = [
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/Login/index'),
    },
    {
        path: '/contacts',
        name: 'Contacts',
        component: () => import('@/views/Contacts/index'),
          meta: { requiresAuth: false }
    },
]

export default routes;
