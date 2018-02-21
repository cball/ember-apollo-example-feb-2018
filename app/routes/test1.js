import Route from '@ember/routing/route';
import RouteQueryManager from 'ember-apollo-client/mixins/route-query-manager';
import query from '../gql/queries/organization';

export default Route.extend(RouteQueryManager, {
  model() {
    return this.get('apollo').query({ query }, 'organization');
  }
});
