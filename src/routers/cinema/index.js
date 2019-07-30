export default {
    path: '/cinema',
    component: () => import('@/views/Cinema'),
    children: [
        {
            path: 'CiList',
            component: () => import('@/components/CiList')
        }
    ]
}