module.exports = function(grunt) {

  grunt.initConfig({
  	pkg: grunt.file.readJSON('package.json')
  });

  // Read the config for the 'run' task that can run any command
  var runConfigs = require('./grunt/run.js');

  if(!runConfigs['node-inspector'].args){
  	runConfigs['node-inspector'].args = [];
  }

  // Prepend the file name to the command line arguments array
  runConfigs['node-inspector'].args.unshift(grunt.option('file'));

  grunt.config( 'jshint', require('./grunt/jshint.js') );
	grunt.config( 'run', runConfigs );

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-run');

  grunt.registerTask('default', ['jshint']);
  grunt.registerTask('debug', ['run:node-inspector']);

};