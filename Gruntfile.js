/*jshint camelcase: false*/

module.exports = function (grunt) {
    'use strict';

    // load all grunt tasks
    require('load-grunt-tasks')(grunt);

    // configurable paths
    var config = {
        name: 'appName',
        app: 'app',
        dist: 'dist',
        release: 'release',
        version: 'v' + require('./package.json').version,
        platforms: ['linux64', 'linux32', 'osx64', 'osx32', 'win64', 'win32']
    };
    config.distrib = config.dist + '/' + config.name + ' - ' + config.version;

    var compressConfig = {};
    // define task compress:dist regarding pltaforms list
    config.platforms.forEach(function(platform) {
        compressConfig[platform] = {
            options: {
                archive: config.release + '/' + config.name + '-' + config.version + '-' + platform + '.zip',
                mode: 'zip'
            },
            files: [
                {
                    expand: true,
                    cwd: '<%= config.distrib %>/' + platform + '/',
                    src: ['**'],
                    dest: config.name + '-' + config.version + '-' + platform + '/'
                }
            ]
        }
    });

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
                appName: config.name
            },
            src: ['./app/**/*']
        },
        clean: {
            dist: {
                src: '<%= config.dist %>/',
                option: {
                    force: true
                }
            },
            release: {
                src: '<%= config.release %>/',
                option: {
                    force: true
                }
            }
        },
        compress: compressConfig
    });

    grunt.registerTask('build', [
        'jshint',
        'clean:dist',
        'nwjs'
    ]);

    grunt.registerTask('package', [
        'clean:release',
        'compress'
    ]);

    grunt.registerTask('release', [
        'build',
        'package'
    ]);
};
