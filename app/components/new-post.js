import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost: false,
  actions: {
    postFormShow() {
      this.set('addNewPost', true);
    },

    savePost1() {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        image: this.get('image'),
        text: this.get('text'),
      };
      this.set('addNewPost', false);
      this.sendAction('savePost2', params);
    }
  }
});
