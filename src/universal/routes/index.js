import AppContainer from 'universal/containers/App/AppContainer';
import SoundcloudContainer from 'universal/containers/soundcloud/SoundcloudContainer';

export default (store) => {
  return {
    component: AppContainer,
    childRoutes: [
      require('./landing'),
        {
            path: '/soundcloud',
            component: SoundcloudContainer
        },
        require('./missingPage'),
    ]
  }
}
