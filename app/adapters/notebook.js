import ApplicationAdapter from './application';
import Ember from 'ember';
export default ApplicationAdapter.extend({
  findQuery: function(store, type, query) {
    var keys = Ember.keys(query);
    for(var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var classifiedKey = Ember.String.classify(key);
      query[classifiedKey] = query[key];
      delete query[key];
    }
    return this._super(store, type, query);
  }
});
