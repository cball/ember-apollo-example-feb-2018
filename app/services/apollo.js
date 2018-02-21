import computed from '@ember/object';
import { readOnly } from '@ember/object/computed';
import ApolloService from 'ember-apollo-client/services/apollo';
import { setContext } from 'apollo-link-context';

export default ApolloService.extend({
  authorization: readOnly('options.headers'),

  link: computed(function() {
    let httpLink = this._super(...arguments);
    let headers = this.get('headers');

    let authLink = setContext(() => {
      return {
        headers
      };
    });

    return authLink.concat(httpLink);
  })
});
