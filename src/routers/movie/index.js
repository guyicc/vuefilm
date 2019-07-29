export default {
    path: '/movie',
    component: () => import('@/views/Movie'),
    children: [
        {
            path: 'city',
            component: () => import('@/components/City')
        },
        {
            path: 'nowPlaying',
            component: () => import('@/components/NowPlaying')
        },
        {
            path: 'comingSoon',
            component: () => import('@/components/ComingSoon')
        },
        {
            path: 'searsh',
            component: () => import('@/components/Searsh')
        },
        {
            path: '/movie',
            redirect: '/movie/nowPlaying'
        }
    ]
}