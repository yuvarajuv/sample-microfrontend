const privateRoutes = []

const publicRoutes = [
  {
    componentName: 'Login',
    path: '/login',
    layoutId: 'LoginLayout',
    isFederator: false,
    isLocalImport: true,
  },
]

const routesDefinition = {
  privateRoutes,
  publicRoutes,
}

export default routesDefinition
