(function() {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('subjects.subject', {
        url: '/subjects',
        views: {
          '@': {
            templateUrl: 'src/app/subjects/subjects.tpl.html',
            controller: 'SubjectCtrl as subject',
            resolve: {
              data: function(DataService) {
                return DataService.get();
              }
            }
          }
        }
      });
  }

  /**
   * @name  HomeCtrl
   * @description Controller
   */
  function SubjectCtrl(data) {
    var home = this;
    home.data = data.data;
  }

  angular.module('subject', [])
    .config(config)
    .controller('SubjectCtrl',SubjectCtrl);
})();
