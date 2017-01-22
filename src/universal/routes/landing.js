import Home from 'universal/components/Home/Home';
import WorkItemDetail from 'universal/components/WorkItemDetail/WorkItemDetail';
import { work } from '../data';


export default {
  path: '/',
  component: Home,
  childRoutes : [
      {
        path : 'work/:workName',
        component : WorkItemDetail,
        onEnter : (nextState, replace) => {
          const match = work.filter(w => w.url == nextState.params.workName);

          if(!match.length) {
              replace('/');
          }
          else {
            nextState.params.workItem = match[0];
          }
        }
      }
  ]
};
