import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('portfolio', function() {
    this.route('burrito');
    this.route('marionettetodo');
    this.route('personal');
  });
  this.route('embersite');
});

export default Router;
