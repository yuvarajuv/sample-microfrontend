export const getRouteDefinitions = (options = {}) => {
  const { screenDefinitions, onFederation, onLocalImport, onApplyLayout } =
    options

  return screenDefinitions.map((routeDefinition) => {
    const {
      isFederator,
      componentPath,
      path,
      layoutId,
      componentName,
      isLocalImport,
    } = routeDefinition
    const componentInfo = {}
    if (componentPath && isFederator) {
      componentInfo['component'] = onFederation(componentPath)
    } else if (componentName && isLocalImport) {
      componentInfo['component'] = onLocalImport(componentName)
    }
    return {
      ...componentInfo,
      path,
      layout: onApplyLayout(layoutId),
    }
  })
}
