import { createRouter as createVueRouter, createWebHistory, createMemoryHistory, Router } from 'vue-router'
import routes from './routes'

export function createRouter(type: 'client' | 'server'): Router {
    return createVueRouter({
        history: (type === 'client') ? createWebHistory() : createMemoryHistory(),
        routes,
    })
}