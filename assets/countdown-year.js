"use strict";



define('countdown-year/app', ['exports', 'countdown-year/resolver', 'ember-load-initializers', 'countdown-year/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Application = Ember.Application;


  var App = Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
define('countdown-year/components/ember-youtube', ['exports', 'ember-youtube/components/ember-youtube'], function (exports, _emberYoutube) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberYoutube.default;
});
define('countdown-year/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
define('countdown-year/controllers/application', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var Controller = Ember.Controller;
    exports.default = Controller.extend({
        ytVideos: [{
            id: 'Jv3zvWZlXkk',
            title: '終於結束的起點',
            emberYoutube: 'emberYoutube0'
        }, {
            id: 'pd3eV-SG23E',
            title: '後來的我們',
            emberYoutube: 'emberYoutube1'
        }, {
            id: '38lcQsEMGrk',
            title: '我不願讓你一個人',
            emberYoutube: 'emberYoutube2'
        }, {
            id: '_o0oeyCtoFA',
            title: '知足',
            emberYoutube: 'emberYoutube3'
        }, {
            id: 'zBJjFEE0rUc',
            title: '突然好想你',
            emberYoutube: 'emberYoutube4'
        }],
        playerVars: {
            autoplay: 1,
            showinfo: 0,
            modestbranding: 1
        },
        subPlayerVars: {
            autoplay: 1,
            showinfo: 0,
            controls: 0,
            modestbranding: 1
        },
        init: function init() {
            this.set('ytSubVideos', this.get('ytVideos'));
            var mainVideo = this.get('ytSubVideos').objectAt(0);
            this.set('mainVideo', mainVideo);
            this.get('ytSubVideos').removeObject(mainVideo);
        },

        actions: {
            adjust: function adjust(video) {
                var oldVideo = this.get('mainVideo');
                this.set('mainVideo', video);
                this.get('ytSubVideos').removeObject(video);
                this.get('ytSubVideos').addObject(oldVideo);
            }
        }
    });
});
define('countdown-year/helpers/and', ['exports', 'ember-truth-helpers/helpers/and'], function (exports, _and) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _and.default;
    }
  });
  Object.defineProperty(exports, 'and', {
    enumerable: true,
    get: function () {
      return _and.and;
    }
  });
});
define('countdown-year/helpers/app-version', ['exports', 'countdown-year/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  var version = _environment.default.APP.version;
  function appVersion(_) {
    var hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (hash.hideSha) {
      return version.match(_regexp.versionRegExp)[0];
    }

    if (hash.hideVersion) {
      return version.match(_regexp.shaRegExp)[0];
    }

    return version;
  }

  exports.default = Ember.Helper.helper(appVersion);
});
define('countdown-year/helpers/eq', ['exports', 'ember-truth-helpers/helpers/equal'], function (exports, _equal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _equal.default;
    }
  });
  Object.defineProperty(exports, 'equal', {
    enumerable: true,
    get: function () {
      return _equal.equal;
    }
  });
});
define('countdown-year/helpers/gt', ['exports', 'ember-truth-helpers/helpers/gt'], function (exports, _gt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _gt.default;
    }
  });
  Object.defineProperty(exports, 'gt', {
    enumerable: true,
    get: function () {
      return _gt.gt;
    }
  });
});
define('countdown-year/helpers/gte', ['exports', 'ember-truth-helpers/helpers/gte'], function (exports, _gte) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _gte.default;
    }
  });
  Object.defineProperty(exports, 'gte', {
    enumerable: true,
    get: function () {
      return _gte.gte;
    }
  });
});
define('countdown-year/helpers/is-array', ['exports', 'ember-truth-helpers/helpers/is-array'], function (exports, _isArray) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isArray.default;
    }
  });
  Object.defineProperty(exports, 'isArray', {
    enumerable: true,
    get: function () {
      return _isArray.isArray;
    }
  });
});
define('countdown-year/helpers/is-equal', ['exports', 'ember-truth-helpers/helpers/is-equal'], function (exports, _isEqual) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isEqual.default;
    }
  });
  Object.defineProperty(exports, 'isEqual', {
    enumerable: true,
    get: function () {
      return _isEqual.isEqual;
    }
  });
});
define('countdown-year/helpers/lt', ['exports', 'ember-truth-helpers/helpers/lt'], function (exports, _lt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _lt.default;
    }
  });
  Object.defineProperty(exports, 'lt', {
    enumerable: true,
    get: function () {
      return _lt.lt;
    }
  });
});
define('countdown-year/helpers/lte', ['exports', 'ember-truth-helpers/helpers/lte'], function (exports, _lte) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _lte.default;
    }
  });
  Object.defineProperty(exports, 'lte', {
    enumerable: true,
    get: function () {
      return _lte.lte;
    }
  });
});
define('countdown-year/helpers/not-eq', ['exports', 'ember-truth-helpers/helpers/not-equal'], function (exports, _notEqual) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _notEqual.default;
    }
  });
  Object.defineProperty(exports, 'notEq', {
    enumerable: true,
    get: function () {
      return _notEqual.notEq;
    }
  });
});
define('countdown-year/helpers/not', ['exports', 'ember-truth-helpers/helpers/not'], function (exports, _not) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _not.default;
    }
  });
  Object.defineProperty(exports, 'not', {
    enumerable: true,
    get: function () {
      return _not.not;
    }
  });
});
define('countdown-year/helpers/or', ['exports', 'ember-truth-helpers/helpers/or'], function (exports, _or) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _or.default;
    }
  });
  Object.defineProperty(exports, 'or', {
    enumerable: true,
    get: function () {
      return _or.or;
    }
  });
});
define('countdown-year/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
define('countdown-year/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
define('countdown-year/helpers/xor', ['exports', 'ember-truth-helpers/helpers/xor'], function (exports, _xor) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _xor.default;
    }
  });
  Object.defineProperty(exports, 'xor', {
    enumerable: true,
    get: function () {
      return _xor.xor;
    }
  });
});
define('countdown-year/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'countdown-year/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var name = void 0,
      version = void 0;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
define('countdown-year/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('countdown-year/initializers/data-adapter', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('countdown-year/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
define('countdown-year/initializers/export-application-global', ['exports', 'countdown-year/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('countdown-year/initializers/injectStore', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('countdown-year/initializers/store', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('countdown-year/initializers/transforms', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("countdown-year/instance-initializers/ember-data", ["exports", "ember-data/instance-initializers/initialize-store-service"], function (exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-data",
    initialize: _initializeStoreService.default
  };
});
define('countdown-year/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
define('countdown-year/router', ['exports', 'countdown-year/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var EmberRouter = Ember.Router;


  var Router = EmberRouter.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    this.route('page1');
    this.route('page2');
  });

  exports.default = Router;
});
define('countdown-year/routes/page1', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Route = Ember.Route;
  exports.default = Route.extend({});
});
define('countdown-year/routes/page2', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Route = Ember.Route;
  exports.default = Route.extend({});
});
define('countdown-year/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
define("countdown-year/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "PEH50oIP", "block": "{\"symbols\":[\"ytVideo\"],\"statements\":[[6,\"div\"],[9,\"class\",\"container\"],[7],[0,\"\\n    \"],[6,\"br\"],[7],[8],[0,\"\\n    \"],[6,\"h4\"],[9,\"class\",\"center\"],[7],[1,[20,[\"mainVideo\",\"title\"]],false],[8],[0,\"\\n    \"],[1,[25,\"ember-youtube\",null,[[\"ytid\",\"playerVars\",\"width\",\"delegate\",\"delegate-as\"],[[20,[\"mainVideo\",\"id\"]],[20,[\"playerVars\"]],\"100%\",[19,0,[]],\"emberYoutube\"]]],false],[0,\"\\n\\n    \"],[6,\"button\"],[9,\"class\",\"btn-floating waves-effect waves-light\"],[3,\"action\",[[19,0,[]],\"togglePlay\"],[[\"target\"],[[20,[\"emberYoutube\"]]]]],[7],[0,\"\\n\"],[4,\"if\",[[20,[\"emberYoutube\",\"isPlaying\"]]],null,{\"statements\":[[0,\"            \"],[6,\"i\"],[9,\"class\",\"material-icons\"],[7],[0,\"\"],[8],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"            \"],[6,\"i\"],[9,\"class\",\"material-icons\"],[7],[0,\"\"],[8],[0,\"\\n\"]],\"parameters\":[]}],[0,\"    \"],[8],[0,\"\\n    \"],[6,\"button\"],[9,\"class\",\"btn-floating waves-effect waves-light\"],[3,\"action\",[[19,0,[]],\"toggleVolume\"],[[\"target\"],[[20,[\"emberYoutube\"]]]]],[7],[0,\"\\n\"],[4,\"if\",[[20,[\"emberYoutube\",\"isMuted\"]]],null,{\"statements\":[[0,\"            \"],[6,\"i\"],[9,\"class\",\"material-icons\"],[7],[0,\"\"],[8],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"            \"],[6,\"i\"],[9,\"class\",\"material-icons\"],[7],[0,\"\"],[8],[0,\"\\n\"]],\"parameters\":[]}],[0,\"    \"],[8],[0,\"\\n\\n    \"],[6,\"hr\"],[7],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n\"],[4,\"each\",[[20,[\"ytSubVideos\"]]],null,{\"statements\":[[0,\"            \"],[6,\"div\"],[9,\"class\",\"col s6 m4 l3\"],[7],[0,\"\\n                \"],[6,\"button\"],[9,\"class\",\"btn-floating waves-effect waves-write\"],[3,\"action\",[[19,0,[]],\"adjust\",[19,1,[]]]],[7],[0,\"\\n                    \"],[6,\"i\"],[9,\"class\",\"small material-icons\"],[7],[0,\"arrow_upward\"],[8],[0,\"\\n                \"],[8],[0,\"\\n                \"],[6,\"small\"],[7],[1,[19,1,[\"title\"]],false],[8],[0,\"\\n                \"],[1,[25,\"ember-youtube\",null,[[\"ytid\",\"playerVars\",\"width\",\"height\",\"delegate\",\"delegate-as\"],[[19,1,[\"id\"]],[20,[\"subPlayerVars\"]],\"100%\",\"100%\",[19,0,[]],[19,1,[\"emberYoutube\"]]]]],false],[0,\"\\n\\n\"],[4,\"if\",[[25,\"eq\",[[19,1,[\"id\"]],\"Jv3zvWZlXkk\"],null]],null,{\"statements\":[[0,\"                    \"],[6,\"button\"],[9,\"class\",\"btn-floating waves-effect waves-light\"],[3,\"action\",[[19,0,[]],\"togglePlay\"],[[\"target\"],[[20,[\"emberYoutube0\"]]]]],[7],[0,\"\\n                        \"],[4,\"if\",[[20,[\"emberYoutube0\",\"isPlaying\"]]],null,{\"statements\":[[6,\"i\"],[9,\"class\",\"material-icons\"],[7],[0,\"\"],[8]],\"parameters\":[]},{\"statements\":[[6,\"i\"],[9,\"class\",\"material-icons\"],[7],[0,\"\"],[8]],\"parameters\":[]}],[0,\"\\n                    \"],[8],[0,\"\\n                    \"],[6,\"button\"],[9,\"class\",\"btn-floating waves-effect waves-light\"],[3,\"action\",[[19,0,[]],\"toggleVolume\"],[[\"target\"],[[20,[\"emberYoutube0\"]]]]],[7],[0,\"\\n                        \"],[4,\"if\",[[20,[\"emberYoutube0\",\"isMuted\"]]],null,{\"statements\":[[6,\"i\"],[9,\"class\",\"material-icons\"],[7],[0,\"\"],[8]],\"parameters\":[]},{\"statements\":[[6,\"i\"],[9,\"class\",\"material-icons\"],[7],[0,\"\"],[8]],\"parameters\":[]}],[0,\"\\n                    \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[25,\"eq\",[[19,1,[\"id\"]],\"pd3eV-SG23E\"],null]],null,{\"statements\":[[0,\"                    \"],[6,\"button\"],[9,\"class\",\"btn-floating waves-effect waves-light\"],[3,\"action\",[[19,0,[]],\"togglePlay\"],[[\"target\"],[[20,[\"emberYoutube1\"]]]]],[7],[0,\"\\n                        \"],[4,\"if\",[[20,[\"emberYoutube1\",\"isPlaying\"]]],null,{\"statements\":[[6,\"i\"],[9,\"class\",\"material-icons\"],[7],[0,\"\"],[8]],\"parameters\":[]},{\"statements\":[[6,\"i\"],[9,\"class\",\"material-icons\"],[7],[0,\"\"],[8]],\"parameters\":[]}],[0,\"\\n                    \"],[8],[0,\"\\n                    \"],[6,\"button\"],[9,\"class\",\"btn-floating waves-effect waves-light\"],[3,\"action\",[[19,0,[]],\"toggleVolume\"],[[\"target\"],[[20,[\"emberYoutube1\"]]]]],[7],[0,\"\\n                        \"],[4,\"if\",[[20,[\"emberYoutube1\",\"isMuted\"]]],null,{\"statements\":[[6,\"i\"],[9,\"class\",\"material-icons\"],[7],[0,\"\"],[8]],\"parameters\":[]},{\"statements\":[[6,\"i\"],[9,\"class\",\"material-icons\"],[7],[0,\"\"],[8]],\"parameters\":[]}],[0,\"\\n                    \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[25,\"eq\",[[19,1,[\"id\"]],\"38lcQsEMGrk\"],null]],null,{\"statements\":[[0,\"                    \"],[6,\"button\"],[9,\"class\",\"btn-floating waves-effect waves-light\"],[3,\"action\",[[19,0,[]],\"togglePlay\"],[[\"target\"],[[20,[\"emberYoutube2\"]]]]],[7],[0,\"\\n                        \"],[4,\"if\",[[20,[\"emberYoutube2\",\"isPlaying\"]]],null,{\"statements\":[[6,\"i\"],[9,\"class\",\"material-icons\"],[7],[0,\"\"],[8]],\"parameters\":[]},{\"statements\":[[6,\"i\"],[9,\"class\",\"material-icons\"],[7],[0,\"\"],[8]],\"parameters\":[]}],[0,\"\\n                    \"],[8],[0,\"\\n                    \"],[6,\"button\"],[9,\"class\",\"btn-floating waves-effect waves-light\"],[3,\"action\",[[19,0,[]],\"toggleVolume\"],[[\"target\"],[[20,[\"emberYoutube2\"]]]]],[7],[0,\"\\n                        \"],[4,\"if\",[[20,[\"emberYoutube2\",\"isMuted\"]]],null,{\"statements\":[[6,\"i\"],[9,\"class\",\"material-icons\"],[7],[0,\"\"],[8]],\"parameters\":[]},{\"statements\":[[6,\"i\"],[9,\"class\",\"material-icons\"],[7],[0,\"\"],[8]],\"parameters\":[]}],[0,\"\\n                    \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[25,\"eq\",[[19,1,[\"id\"]],\"_o0oeyCtoFA\"],null]],null,{\"statements\":[[0,\"                    \"],[6,\"button\"],[9,\"class\",\"btn-floating waves-effect waves-light\"],[3,\"action\",[[19,0,[]],\"togglePlay\"],[[\"target\"],[[20,[\"emberYoutube3\"]]]]],[7],[0,\"\\n                        \"],[4,\"if\",[[20,[\"emberYoutube3\",\"isPlaying\"]]],null,{\"statements\":[[6,\"i\"],[9,\"class\",\"material-icons\"],[7],[0,\"\"],[8]],\"parameters\":[]},{\"statements\":[[6,\"i\"],[9,\"class\",\"material-icons\"],[7],[0,\"\"],[8]],\"parameters\":[]}],[0,\"\\n                    \"],[8],[0,\"\\n                    \"],[6,\"button\"],[9,\"class\",\"btn-floating waves-effect waves-light\"],[3,\"action\",[[19,0,[]],\"toggleVolume\"],[[\"target\"],[[20,[\"emberYoutube3\"]]]]],[7],[0,\"\\n                        \"],[4,\"if\",[[20,[\"emberYoutube3\",\"isMuted\"]]],null,{\"statements\":[[6,\"i\"],[9,\"class\",\"material-icons\"],[7],[0,\"\"],[8]],\"parameters\":[]},{\"statements\":[[6,\"i\"],[9,\"class\",\"material-icons\"],[7],[0,\"\"],[8]],\"parameters\":[]}],[0,\"\\n                    \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[25,\"eq\",[[19,1,[\"id\"]],\"zBJjFEE0rUc\"],null]],null,{\"statements\":[[0,\"                    \"],[6,\"button\"],[9,\"class\",\"btn-floating waves-effect waves-light\"],[3,\"action\",[[19,0,[]],\"togglePlay\"],[[\"target\"],[[20,[\"emberYoutube4\"]]]]],[7],[0,\"\\n                        \"],[4,\"if\",[[20,[\"emberYoutube4\",\"isPlaying\"]]],null,{\"statements\":[[6,\"i\"],[9,\"class\",\"material-icons\"],[7],[0,\"\"],[8]],\"parameters\":[]},{\"statements\":[[6,\"i\"],[9,\"class\",\"material-icons\"],[7],[0,\"\"],[8]],\"parameters\":[]}],[0,\"\\n                    \"],[8],[0,\"\\n                    \"],[6,\"button\"],[9,\"class\",\"btn-floating waves-effect waves-light\"],[3,\"action\",[[19,0,[]],\"toggleVolume\"],[[\"target\"],[[20,[\"emberYoutube4\"]]]]],[7],[0,\"\\n                        \"],[4,\"if\",[[20,[\"emberYoutube4\",\"isMuted\"]]],null,{\"statements\":[[6,\"i\"],[9,\"class\",\"material-icons\"],[7],[0,\"\"],[8]],\"parameters\":[]},{\"statements\":[[6,\"i\"],[9,\"class\",\"material-icons\"],[7],[0,\"\"],[8]],\"parameters\":[]}],[0,\"\\n                    \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"            \"],[8],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"    \"],[8],[0,\"\\n    \"],[2,\"page1\"],[0,\"\\n    \"],[2,\"page2\"],[0,\"\\n    \"],[6,\"br\"],[7],[8],[0,\"\\n    \"],[1,[18,\"outlet\"],false],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "countdown-year/templates/application.hbs" } });
});
define("countdown-year/templates/components/ember-youtube", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "scExsTuA", "block": "{\"symbols\":[\"&default\"],\"statements\":[[6,\"div\"],[9,\"id\",\"EmberYoutube-player\"],[7],[8],[0,\"\\n\\n\"],[4,\"if\",[[20,[\"showExtras\"]]],null,{\"statements\":[[0,\"\\t\"],[6,\"div\"],[9,\"class\",\"EmberYoutube-extras\"],[7],[0,\"\\n\"],[4,\"if\",[[20,[\"showControls\"]]],null,{\"statements\":[[0,\"\\t\\t\\t\"],[6,\"menu\"],[9,\"class\",\"EmberYoutube-controls\"],[7],[0,\"\\n\\t\\t\\t\\t\"],[6,\"button\"],[3,\"action\",[[19,0,[]],\"togglePlay\"]],[7],[4,\"if\",[[20,[\"isPlaying\"]]],null,{\"statements\":[[0,\"Pause\"]],\"parameters\":[]},{\"statements\":[[0,\"Play\"]],\"parameters\":[]}],[8],[0,\"\\n\\t\\t\\t\\t\"],[6,\"button\"],[3,\"action\",[[19,0,[]],\"toggleVolume\"]],[7],[4,\"if\",[[20,[\"isMuted\"]]],null,{\"statements\":[[0,\"Unmute\"]],\"parameters\":[]},{\"statements\":[[0,\"Mute\"]],\"parameters\":[]}],[8],[0,\"\\n\\t\\t\\t\"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[20,[\"showProgress\"]]],null,{\"statements\":[[0,\"\\t\\t\\t\"],[6,\"p\"],[9,\"class\",\"EmberYoutube-progress\"],[7],[0,\"\\n\\t\\t\\t\\t\"],[6,\"progress\"],[10,\"value\",[18,\"currentTime\"],null],[10,\"max\",[18,\"duration\"],null],[7],[8],[0,\"\\n\\t\\t\\t\"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[20,[\"showDebug\"]]],null,{\"statements\":[[0,\"\\t\\t\\t\"],[6,\"p\"],[9,\"class\",\"EmberYoutube-debug\"],[7],[0,\"\\n\\t\\t\\t\\t\"],[6,\"code\"],[7],[0,\"\\n\\t\\t\\t\\t\\tytid: \"],[1,[18,\"ytid\"],false],[6,\"br\"],[7],[8],[0,\"\\n\\t\\t\\t\\t\\tplayerState: \"],[1,[18,\"playerState\"],false],[6,\"br\"],[7],[8],[0,\"\\n\\t\\t\\t\\t\\tisMuted: \"],[1,[18,\"isMuted\"],false],[6,\"br\"],[7],[8],[0,\"\\n\\t\\t\\t\\t\\tisPlaying: \"],[1,[18,\"isPlaying\"],false],[6,\"br\"],[7],[8],[0,\"\\n\\t\\t\\t\\t\\tcurrentTime: \"],[1,[18,\"currentTime\"],false],[6,\"br\"],[7],[8],[0,\"\\n\\t\\t\\t\\t\\tduration: \"],[1,[18,\"duration\"],false],[6,\"br\"],[7],[8],[0,\"\\n\\t\\t\\t\\t\\tvolume: \"],[1,[18,\"volume\"],false],[6,\"br\"],[7],[8],[0,\"\\n\\t\\t\\t\\t\"],[8],[0,\"\\n\\t\\t\\t\"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\t\"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[22,1]],null,{\"statements\":[[0,\"\\t\"],[6,\"div\"],[9,\"class\",\"EmberYoutube-yield\"],[7],[0,\"\\n\\t\\t\"],[11,1],[0,\"\\n\\t\"],[8],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "countdown-year/templates/components/ember-youtube.hbs" } });
});
define("countdown-year/templates/page1", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "+pWrriSQ", "block": "{\"symbols\":[],\"statements\":[[0,\"page1\\n\"],[1,[18,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "countdown-year/templates/page1.hbs" } });
});
define("countdown-year/templates/page2", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "ouUvgVQm", "block": "{\"symbols\":[],\"statements\":[[0,\"page2\\n\"],[1,[18,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "countdown-year/templates/page2.hbs" } });
});


define('countdown-year/config/environment', [], function() {
  var prefix = 'countdown-year';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("countdown-year/app")["default"].create({"name":"countdown-year","version":"0.0.0+8f0b017b"});
}
//# sourceMappingURL=countdown-year.map
