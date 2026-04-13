export const portfolioItems = [
  {
    slug: 'personal',
    title: 'www.tomleskin.com',
    description:
      "This current site, my personal website, is an on-going project. I originally built my website with Jekyll, which still hosts my blog, but wanted something that I could also use to show off some of my skills. This site, www.tomleskin.com, is built with Ember.js 2.6 and Bootstrap. It uses a couple Ember addons such as Liquid Fire for transition animations and font awesome. It's hosted on Heroku.",
    image: '/assets/personal.png',
    link: null,
  },
  {
    slug: 'avalon',
    title: 'Avalon Flooring',
    description:
      'Customer facing site built while working for DragonDev from Oct. 2015 to Feb. 2016 in Angular.js.',
    image: '/assets/avalon.png',
    link: 'http://avalonflooring.com',
  },
  {
    slug: 'dcorp',
    title: 'Daniels Corporation',
    description:
      'Company website for Daniels Corporation. Originally a Rails/jQuery website, I rebuilt our company website with an Ember front-end in Nov. 2016.',
    image: '/assets/dcorp.png',
    link: 'http://danielscorporation.com',
  },
  {
    slug: 'burrito',
    title: 'BurritoFinder',
    description:
      'Burrito Finder is an app built while at Turing. It is built with Rails, the Yelp API, jQuery and MapBox.',
    image: '/assets/burrito.png',
    link: 'https://burritofinder.herokuapp.com',
  },
  {
    slug: 'duckhunt',
    title: 'Duck Hunt JS',
    description:
      'A simple implementation of Duck Hunt built in JavaScript with Canvas and Webpack. This project was completed at Turing. It is completely object oriented and was built with Test Driven Development.',
    image: '/assets/duckhunt.png',
    link: 'http://tleskin.github.io/duck-hunt',
  },
  {
    slug: 'marionettetodo',
    title: 'Marionette TodoList',
    description:
      'Marionette TodoList is an simple todolist app. It was built with Backbone/Marionette and uses Materialize CSS for styling.',
    image: '/assets/marionettetodo.png',
    link: 'https://thawing-hollows-5297.herokuapp.com/',
  },
  {
    slug: 'ipapi',
    title: 'IPAPI',
    description:
      'IPAPI was my first Ember project. It was built on Ember 1.11. It may not look like much but this was a project built in about two weeks. It involves an API of homebrew recipes built in Rails and then the front-end is built in Ember and has minimal styling with Bootstrap. It was a very much exploration project and was my first time working with a JavaScript framework.',
    image: '/assets/ipapi.png',
    link: 'https://ipapi-ember.herokuapp.com',
  },
];

export function getProjectBySlug(slug) {
  return portfolioItems.find((project) => project.slug === slug);
}
