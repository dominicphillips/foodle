module.exports = (grunt) ->

	grunt.loadNpmTasks('grunt-contrib-qunit')
	grunt.loadNpmTasks('grunt-contrib-jshint')
	grunt.loadNpmTasks('grunt-contrib-coffee')
	grunt.loadNpmTasks('grunt-contrib-concat')
	grunt.loadNpmTasks('grunt-contrib-watch')
	grunt.loadNpmTasks('grunt-contrib-handlebars')
	grunt.loadNpmTasks('grunt-contrib-uglify')
	grunt.loadNpmTasks('grunt-contrib-less')
	grunt.loadNpmTasks('grunt-contrib-copy')
	grunt.loadNpmTasks('grunt-contrib-compress')
	grunt.loadNpmTasks('grunt-contrib-cssmin')

	grunt.initConfig

		dirs:
			javascript: 				'static/js'
			templates: 					'static/templates'
			coffe:		 				'static/coffee'
			css:		 				'static/css'
			less:		 				'static/less'
			flat:			 			'static/flat'

		less:
			options:
				paths: [ '<%= dirs.less %>', '<%= dirs.flat %>']
			main:
				files:
					"<%= dirs.css %>/main.css": '<%= dirs.less %>/main.less'

		handlebars:
			compile:
				options:
					namespace: 'App.templates'
					processName: (filename) ->
						filename.split('static/templates/')[1].split('.handlebars')[0]

				files:
					"<%= dirs.javascript %>/templates.js": ["<%= dirs.templates %>/**/*.handlebars"]

		watch:
			handlebars:
				files: ['<%= dirs.templates %>/**/*.handlebars']
				tasks: ['handlebars']

			less:
				files: ['<%= dirs.less %>/**/*.less', '<%= dirs.flat %>/**/*.less']
				tasks: ['less']
				options:
					nospawn: true
