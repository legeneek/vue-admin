import Login from '@/views/Login'
import Layout from '@/components/Layout'
import Dashboard from '@/views/Dashboard'
import Users from '@/views/Users'

const routes = [
  {
    path: '/login',
    component: Login,
    hide: true
  },
  {
    path: '/404',
    component: () => import('@/views/NotFound'),
    hide: true
  },
  {
    path: '/',
    redirect: '/dashboard',
    hide: true
  },
  {
    path: '/dashboard',
    component: Layout,
    children: [
      {
        path: '',
        component: Dashboard,
        name: 'Dashboard'
      }
    ]
  },
  {
    path: '/user',
    component: Layout,
    roles: ['admin'],
    children: [
      {
        path: '',
        component: Users,
        name: 'Users'
      }
    ]
  },
  {
    path: '/submenu',
    component: Layout,
    title: 'Submenu',
    children: [
      {
        path: '1',
        component: () => import('@/views/SubView'),
        name: 'sub-1'
      },
      {
        path: '2',
        component: () => import('@/views/SubView2'),
        name: 'sub-2',
        roles: ['admin']
      }
    ]
  },
  {
    path: '*',
    redirect: '/404',
    hide: true
  }
]

export default routes