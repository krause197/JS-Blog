import Ember from 'ember';

export default Ember.Component.extend({
  editPostForm: false,
  actions: {
    editPostForm() {
      this.set('editPostForm', true);
    },

    edit(post) {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        image: this.get('image'),
        text: this.get('image'),
      };
      this.set('editPostForm', false);
      this.sendAction('edit', post, params);
    }
  }
});
