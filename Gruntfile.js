module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),


		jshint: {
			files: ['Gruntfile.js', 'src/**/*.js', 'tests/*.js'],
		},
		browserify: {
			control: {
				src: ['src/L.Marker.Pin.Interface.js'],
				dest: 'dist/L.Marker.Pin.js'
			}
		},
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> - version <%= pkg.version %> - ' +
				'<%= grunt.template.today("yyyy-mm-dd") %> - Copyright 2015 2016 Christian Guyette - Contact: http//www.ouaie.be/ - This  program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation; either version 3 of the License, or any later version.*/\n\n'
			},
			build: {
				src: 'dist/L.Marker.Pin.js',
				dest: 'dist/L.Marker.Pin.min.js'
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.registerTask('default', ['jshint', 'browserify', 'uglify']);
};