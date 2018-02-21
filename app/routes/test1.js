import Route from '@ember/routing/route';
import RouteQueryManager from 'ember-apollo-client/mixins/route-query-manager';
import query from '../gql/queries/organization';
import addStar from '../gql/mutations/addStar';
import removeStar from '../gql/mutations/removeStar';

export default Route.extend(RouteQueryManager, {
  model() {
    const variables = { login1: 'emberjs', login2: 'reactjs', repoLimit: 2 };
    return this.get('apollo').watchQuery({ query, variables });
  },

  actions: {
    starRepo(repo) {
      const variables = { id: repo.id };
      this.get('apollo').mutate({ mutation: addStar, variables });
    },

    unstarRepo(repo) {
      const variables = { id: repo.id };
      this.get('apollo').mutate({ mutation: removeStar, variables });
    }
  }
});
