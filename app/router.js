import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('portfolio', function() {
    this.route('burrito');
    this.route('marionettetodo');
    this.route('personal');
    this.route('ipapi');
    this.route('duckhunt');
  });
  this.route('embersite');
});

export default Router;
