/*jshint camelcase: false*/

module.exports = function (grunt) {
    'use strict';

    // load all grunt tasks
    require('load-grunt-tasks')(grunt);

    // configurable paths
    var config = {
        app: 'app',
        dist: 'dist'
    };

    grunt.initConfig({
        config: config,
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            files: {
                src: ['<%= config.app %>/app.js',
                    '<%= config.app %>/launcher.js',
                    '<%= config.app %>/controllers/*.js',
                    '<%= config.app %>/lib/*.js'
                ]
            }
        },
        nwjs: {
            options: {
                version: 'v0.12.3',
                platforms: ['linux', 'osx', 'win'],
                build_dir: '<%= config.dist %>/',
                buildType: 'versioned',
                appName: 'EVK'
            },
            src: ['./app/**/*']
        },
        clean: {
            dist: {
                src: '<%= config.dist %>/',
                option: {
                    force: true
                }
            }
        }
    });

    grunt.registerTask('build', [
        'jshint',
        'clean:dist',
        'nwjs'
    ])
};
