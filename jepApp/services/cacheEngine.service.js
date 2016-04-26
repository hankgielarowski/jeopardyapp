angular
  .module('jeopardy')
  .service('CacheEngine',function($cacheFactory) {
    return $cacheFactory('jeopardyAPI');
});
