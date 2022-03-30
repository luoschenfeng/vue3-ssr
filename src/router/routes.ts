export default [
  {
    path: '/',
    component: () => import('@/views/home-view.vue'),
  },
  {
    path: '/login',
    component: () => import('@/views/login-view.vue'),
  },
]
