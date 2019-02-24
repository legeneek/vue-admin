import Login from '@/views/Login'
import Layout from '@/components/Layout'
import Welcome from '@/views/Welcome'
import Users from '@/views/Users'

const routes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/404',
    component: () => import('@/views/NotFound')
  },
  {
    path: '/',
    component: Layout,
    redirect: '/welcome',
    children: [
      {
        path: '/welcome',
        component: Welcome
      }
    ]
  },
  {
    path: '/user',
    name: 'user',
    component: Layout,
    children: [
      {
        path: '',
        component: Users
      }
    ]
  },
  {
    path: '*',
    redirect: '/404'
  }
]

export default routes