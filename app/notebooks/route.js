import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('notebook',{user: params.user_id});
  },
  actions: {
  }
});
