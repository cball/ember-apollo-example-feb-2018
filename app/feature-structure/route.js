import Route from '@ember/routing/route';
import RouteQueryManager from 'ember-apollo-client/mixins/route-query-manager';
import query from './queries/organization';
import addStar from 'apollo-test/gql/mutations/addStar';
import removeStar from 'apollo-test/gql/mutations/removeStar';

export default Route.extend(RouteQueryManager, {
  model() {
    const variables = { login1: 'denali-js', login2: 'reactjs', repoLimit: 2 };
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
