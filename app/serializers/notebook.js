import DS from 'ember-data';
export default DS.RESTSerializer.extend({
  normalizeHash: {
    notebooks: function(hash) {
      hash.title = hash.Title;
      delete hash.Title;
      hash.user = hash.User;
      delete hash.User;
      return hash;
    }
  },
  serialize: function(snapshot, options) {
    var json = {
      Title: snapshot.attr('title'),
      User: snapshot.belongsTo('user').get('id')
    }
    return json;
  },
});
