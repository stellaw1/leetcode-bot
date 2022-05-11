export default [
    {
        name: 'Home',
        path: '/',
        component: require('@/pages/HomePage').default,
    },
    {
        name: 'Add',
        path: '/add',
        component: require('@/pages/AddPage').default,
    },
    {
        name: 'View',
        path: '/view',
        component: require('@/pages/ViewPage').default,
    }
]