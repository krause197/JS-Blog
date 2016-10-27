import Ember from 'ember';

export default Ember.Component.extend({
  isImageShowing: false,
  editPostForm: false,
  actions: {
    imageShow: function() {
      this.set('isImageShowing', true);
    },
    imageHide: function() {
      this.set('isImageShowing', false);
    },
    edit(post, params) {
      this.sendAction('edit', post, params);
    },
    delete(post) {
      if (confirm('Are you sure you want to delete this post?')) {
        this.sendAction('destroyPost', post);
      }
    }
  }
});
