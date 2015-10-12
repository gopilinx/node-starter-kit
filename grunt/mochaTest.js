module.exports = {
  mochaTest: {
    options: {
      reporter: 'tap',
      require: 'coverage/blanket',
      captureFile: 'results.txt',
      quiet: false
    },
    src: ['tests/unit/**/*.test.js']
  },
  coverage: {
        options: {
          reporter: 'html-cov',
          // use the quiet flag to suppress the mocha console output
          quiet: true,
          // specify a destination file to capture the mocha
          // output (the quiet option does not suppress this)
          captureFile: 'coverage.html'
        },
    src: ['tests/unit/**/*.test.js']
  }
};
