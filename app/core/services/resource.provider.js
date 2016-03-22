(function() {
    'use strict';

    angular
        .module('app.core')
        .provider('Resource', ResourceProvider);

    function ResourceProvider() {
        /* ----------------- */
        /* Provider          */
        /* ----------------- */
        var provider = this;

        // Data
        var app = {};   // aplication state

        // Methods
        provider.setState = providerSetState;

        //////////

        /**
         * Set State
         *
         * @param state [String]
         * @return undefined
         */
        function providerSetState(state) {
            if (typeof app[state] === 'undefined')
                app[state] = {};
        }

        /* ----------------- */
        /* Service           */
        /* ----------------- */
        provider.$get = function () {
            // Data

            // Methods
            var service = {
                getApp: getApp,
                getState: getState,
                getComponent: getComponent,
                set: set,
                clear: clear,
            };

            return service;

            //////////

            /**
             * Get App
             *
             * @return app state [Object]
             */
            function getApp() {
                return app;
            }

            /**
             * Get State
             *
             * @param state [String]
             * @return app state [Object]
             */
            function getState(state) {
                if (!state)
                    return null;

                if (typeof app[state] === 'object')
                    return app[state];
                else
                    return null;
            }

            /**
             * Get Component
             *
             * @param state [String]
             * @param component [String]
             * @return app component [Object]
             */
            function getComponent(state, component) {   
                if (!state || !component)
                    return null;

                if (typeof app[state] === 'object' && typeof app[state][component] === 'object')
                    return app[state][component];
                else
                    return null;
            }

            /**
             * Set
             *
             * @param state [String]
             * @param component [String]
             * @return [Boolean]
             */
            function set(state, component, data) {
                if (!state || !component)
                    return false;

                // set component
                if (typeof app[state] !== 'undefined')
                    app[state][component] = {};

                // set component data
                if (typeof app[state] !== 'undefined' && typeof app[state][component] !== 'undefined' && data) {
                    app[state][component] = data;
                    return true;
                }
                else {
                    return false;
                }
            }

            /**
             * Clear Component
             *
             * @param state [String]
             * @param component [String]
             * @return [Boolean]
             */
            function clear(state, component) {
        
                // clear state
                if (typeof app[state] === 'object' && !component) {
                    app[state] = {};
                    return true;
                }

                // clear component
                if (typeof app[state] === 'object' && typeof app[state][component] === 'object') {
                    app[state][component] = {};
                    return true;
                }

                return false;
            }
        }
    }

})();