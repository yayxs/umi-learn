export function onRouteChange({ matchedRoutes }:{matchedRoutes:any}) {
  if (matchedRoutes.length) {
    document.title = matchedRoutes[matchedRoutes.length - 1].route.title || '';
  }
}
