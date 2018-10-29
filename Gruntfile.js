module.exports = function(grunt) {
	grunt.initConfig({
		less: {
			development: {
				options: {
					compress: false,
					yuicompress: false,
					optimization: 2
				},
				files: {
					// target.css file: source.less file
					'css/styles.css': 'less/styles.less'
				}
			}
		},

		watch: {
			styles: {
				files: ['less/*', 'dev/js/*.js'], // which files to watch
				tasks: ['less', 'concat', 'uglify'],
				options: {
					nospawn: true
				}
			}
		},

		concat: {
			options: {
				stripBanners: true,
				sourceMap: true,
				separator: '\n\r',
				//footer: '\n});\n',
				banner: '/*\nConcatinated JS file \n' +
                    'Created Date: <%= grunt.template.today("yyyy-mm-dd") %>' +
                    '\n */ \n'
			},
			dist: {
				src: ['dev/js/*.js'],
				dest: 'js/scripts.js',
			},
		},

		uglify: {
			my_target: {
				files: {
					'js/scripts.min.js': ['js/scripts.js']
				}
			}
		},

	});
	grunt.registerTask('default', ['watch']);
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
};