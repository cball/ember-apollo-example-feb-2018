import Route from '@ember/routing/route';
import RouteQueryManager from 'ember-apollo-client/mixins/route-query-manager';
import query from '../gql/queries/organization';

export default Route.extend(RouteQueryManager, {
  model() {
    const variables = { login: 'reactjs' };
    return this.get('apollo').query({ query, variables }, 'organization');
  }
});
