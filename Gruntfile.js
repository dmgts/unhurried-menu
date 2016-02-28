module.exports = function(grunt){

	grunt.initConfig({
        uglify: {
            options: {
                mangle: true,
                compress: {
                    sequences: true,
                    dead_code: true,
                    conditionals: true,
                    booleans: true,
                    unused: true,
                    if_return: true,
                    join_vars: true,
                    drop_console: true
                }
            },
            build: {
                files: {
                    'build/jquery.unhurried-menu.min.js': ['src/frame-zoomer.js']
                }
            }
        }
	});
	
	
	grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    //grunt.registerTask('default', ['testem:run:unit']);
}