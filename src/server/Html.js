import React, {Component, PropTypes} from 'react';
import {Provider} from 'react-redux';
import {RouterContext} from 'react-router';
import {renderToString} from 'react-dom-stream/server';

class Html extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    assets: PropTypes.object,
    renderProps: PropTypes.object
  }

  render () {
    const PROD = process.env.NODE_ENV === 'production';

    const {
      title,
      store,
      assets,
      renderProps
    } = this.props;

    const {
      manifest,
      app,
      vendor
    } = assets || {};

    const initialState = `window.__INITIAL_STATE__ = ${JSON.stringify(store.getState())}`;

    /**
     * Provider: Makes the Redux store available to the connect() calls in the component hierarchy below.
     * Normally, you can’t use connect() without wrapping the root component in <Provider>.
     * see https://github.com/reactjs/react-redux/blob/master/docs/api.md#provider-store
     *
     * RouterContext: A <RouterContext> renders the component tree for a given router state.
     * Its used by <Router> but also useful for server rendering and integrating in brownfield development.
     * see https://github.com/reactjs/react-router/blob/master/docs/API.md#routercontext
     **/
    const root = PROD && renderToString(
      <Provider store={store}>
        <RouterContext {...renderProps}/>
      </Provider>
    );


    const css = `
      body {
        background-color#fafafa;
      }
      #app {
          opacity: 0;
          transition: opacity 0.4s ease;
          background-color: #fafafa;
      }

      #app.have-loaded {
        opacity: 1;
      }
    `;
    return (
     <html>
       <head>
         <meta charSet="utf-8"/>
         <title>{title}</title>
         <style>{css}</style>
         <meta name="MobileOptimized" content="width"></meta>
         <meta name="HandheldFriendly" content="true"></meta>
         <meta property="og:title" content={title}></meta>
         <meta property="og:type" content="website"></meta>
         <meta property="og:url" content="https://jonathan-gustafsson.herokuapp.com"></meta>
         <meta property="og:image" content={'a'}></meta>
         <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
         <meta property="fb:admins" content="733556657"></meta>
         <meta property="fb:app_id" content="1072045509569270"></meta>
         <meta name="description" content="Jonathan is a fullstack developer with a big love for front-end and a passion for React and Redux and Javascript overall."></meta>
       </head>
       <body>
         <script dangerouslySetInnerHTML={{__html: initialState}} />
         {PROD ? <div id="root" dangerouslySetInnerHTML={{__html: root}}></div> : <div id="root"></div>}
          {PROD && <script dangerouslySetInnerHTML={{__html: manifest.text}}/>}
         <script src={PROD ? app.js : '/static/app.js'} />
       </body>
     </html>
    );
  }

}

export default Html;
