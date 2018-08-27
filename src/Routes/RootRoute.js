import { dynamic } from '../Utils/dynamicWrapper'

export function getRouteData() {
  const routes = [
    {
      key: 'mainPage',
      path: '/',
      component: dynamic(() => import('./mainPage/mainPage'))
    }
  ];
  
  return routes;
}