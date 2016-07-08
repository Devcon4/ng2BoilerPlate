'use strict';

module.exports = function (grunt) {

	//var bower_components = grunt.file.readJSON("bower_components.json");

	require('load-grunt-tasks')(grunt);
	grunt.loadNpmTasks('grunt-force-task');
	grunt.loadNpmTasks('grunt-contrib-connect');

	//Using exclusion patterns slows down Grunt significantly
	//instead of creating a set of patterns like '**/*.js' and '!**/node_modules/**'
	//this method is used to create a set of inclusive patterns for all subdirectories
	//skipping node_modules, bower_components, dist, and any .dirs
	//This enables users to create any directory structure they desire.
	var createFolderGlobs = function (fileTypePatterns) {
		fileTypePatterns = Array.isArray(fileTypePatterns) ? fileTypePatterns : [fileTypePatterns];
		var ignore = ['node_modules', 'bower_components', 'dist', 'temp', 'Scripts', 'obj', 'deploy'];
		var fs = require('fs');
		return fs.readdirSync(process.cwd())
				.map(function (file) {
					if (ignore.indexOf(file) !== -1 ||
							file.indexOf('.') === 0 ||
							!fs.lstatSync(file).isDirectory()) {
						return null;
					} else {
						return fileTypePatterns.map(function (pattern) {
							return file + '/**/' + pattern;
						});
					}
				})
				.filter(function (patterns) {
					return patterns;
				})
				.concat(fileTypePatterns);
	};

	// Project configuration.
	grunt.initConfig({
        ts: {
            dev: {
                tsconfig: 'src/tsconfig.json'
            }
        },
        copy: {
            tsDev: {
                files : [
                    {expand: true, cwd: 'dist/src', src: ['**'], dest: 'dist/'},
                ]
            },
            htmlDev: {
                files: [
                    {expand: true, cwd: 'src', src: ['**/*.html'], dest: 'dist/'}
                ]
            },
			imgDev: {
				files:  [
                    {expand: true, cwd: 'src', src: ['img/**'], dest: 'dist/img'}					
				]
			},
            vendorDev: {
                files: [
                    {expand: true, cwd: 'node_modules/@angular', src: '**', dest:'dist/vendor/@angular'},
                    {expand: true, cwd: 'node_modules/ng2-bootstrap', src: '**', dest:'dist/vendor/ng2-bootstrap'},
                    {expand: true, cwd: 'node_modules/es6-shim', src: 'es6-shim.js', dest:'dist/vendor/es6-shim'},
                    {expand: true, cwd: 'node_modules/reflect-metadata', src: '**', dest:'dist/vendor/reflect-metadata'},
                    {expand: true, cwd: 'node_modules/rxjs', src: '**', dest:'dist/vendor/rxjs'},
                    {expand: true, cwd: 'node_modules/systemjs', src: '**', dest:'dist/vendor/systemjs'},
                    {expand: true, cwd: 'node_modules/zone.js/', src: '**', dest:'dist/vendor/zone.js/'},
                    {expand: true, cwd: 'node_modules/moment/min/', src: 'moment.min.js', dest:'dist/vendor/moment.min.js'},
                    {expand: true, cwd: 'node_modules/ui-router-ng2/', src: '**', dest:'dist/vendor/ui-router-ng2'}															
                ]
            },
			fontsDev: {
				files: [
                    {expand: true, cwd: 'bower_components/bootstrap/fonts', src: '**', dest:'dist/fonts/'},
                    {expand: true, cwd: 'src/fonts', src: '**', dest:'dist/fonts/'}
				]
			}
        },
        clean: {
            preDev: ['dist/**'],
            tsDev: ['dist/src']
        },
        less: {
            dev: {
				options: {
					compress: true,
					sourceMap: true,
					sourceMapFileInline: true
				},
				files: [
					{
						expand: true,
						cwd: "src",
						src: ["**/*.less", "!style/**/*.less"],
						dest: 'dist/',
						ext: '.css',
                        extDot: 'last'
					}
                ]
			},
        },
		connect: {
			app: {
				options: {
					port: 9000,
					hostname: '*',
					base: 'dist',
					open: true,
					livereload: true
				}
			}
		},
        watch: {
			options: {
				livereload: true,
				atBegin: true,
				event: ['changed', 'added', 'deleted']
			},
            html: {
                files: ['src/**/*.html'],
                tasks: ['copy:htmlDev']
            },
            ts: {
                files: ['src/**/*.ts'],
                tasks: ['ts', 'copy:tsDev','clean:tsDev']
            },
            less: {
                files: ['src/**/*.less'],
                tasks: ['less:dev']
            },
			images: {
				files: ['src/img/**'],
				tasks: ['copy:imgDev']
			},
			fonts: {
				files: ['src/fonts/**'],
				tasks: ['copy:fontsDev']
			},
			vendor: {
				files: ['package.json', 'bower.json'],
				tasks: ['copy:vendorDev']
			}
        }
	});

	grunt.registerTask('bowerinstall', 'install the backend and frontend dependencies', function () {
		var exec = require('child_process').exec;
		var cb = this.async();
		exec('bower install', { cwd: '' }, function (err, stdout, stderr) {
			console.log(stdout);
			cb();
		});
	});
	grunt.registerTask('serve', 'Builds and hosts project with watch', ['build', 'connect:app', 'watch']);
    grunt.registerTask('build', [
		'clean:preDev',
		'ts:dev', 
		'copy:tsDev',
		'clean:tsDev', 		 
		'copy:htmlDev', 
		'less:dev', 
		'copy:vendorDev', 
		'copy:imgDev',
		'copy:fontsDev']);
};
