import React, { lazy } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from 'react-router-dom'
import { MainLayout, LoginLayout, Login } from '@/blocks'
import { PrivateRoute } from '@/utils'
import { routesDefinition, getRouteDefinitions } from '@/utils/routes'

const screenComponentMap = {
  Login,
}

const screeLayoutComponentMap = {
  MainLayout,
  LoginLayout,
}

const definitionOptions = {
  onFederation: (dynamicComponent) => lazy(() => dynamicComponent),
  onLocalImport: (componentName) => screenComponentMap[componentName] || null,
  onApplyLayout: (layoutId) => screeLayoutComponentMap[layoutId] || null,
}

const privateScreens = getRouteDefinitions({
  screenDefinitions: routesDefinition.privateRoutes,
  ...definitionOptions,
})

const publicScreens = getRouteDefinitions({
  screenDefinitions: routesDefinition.publicRoutes,
  ...definitionOptions,
})

const Routes = () => (
  <Router>
    <Switch>
      {privateScreens.map((screen) => {
        const {
          path,
          component: ScreenComponent,
          layout: LayoutComponent,
        } = screen
        return (
          <Route
            key={path}
            path={path}
            element={
              <PrivateRoute>
                <LayoutComponent location={path}>
                  <ScreenComponent />
                </LayoutComponent>
              </PrivateRoute>
            }
          />
        )
      })}
      {publicScreens.map((screen) => {
        const {
          path,
          component: ScreenComponent,
          layout: LayoutComponent,
        } = screen
        return (
          <Route
            key={path}
            path={path}
            element={
              <LayoutComponent location={path}>
                <ScreenComponent />
              </LayoutComponent>
            }
          />
        )
      })}
      <Route
        path="*"
        element={
          <PrivateRoute>
            <MainLayout />
          </PrivateRoute>
        }
      />
    </Switch>
  </Router>
)

export default Routes
