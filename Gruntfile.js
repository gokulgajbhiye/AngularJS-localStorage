module.exports = function(grunt) {  
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    build_dir: 'build',
    compile_dir: 'www',

    //All third party plugin and required files refrence goes here
    vendor_files: {
        js: [
          'vendor/jquery/jquery.js',
          'vendor/jquery-placeholder/jquery.placeholder.js',
          // 'vendor/angular/angular.js',
          'vendor/angular/angular.js',
          'vendor/angular-ui/bootstrap/ui-bootstrap-custom-0.1.0-SNAPSHOT.js',
          'vendor/angular-animate/angular-animate.min.js',
          'vendor/angular-aria/angular-aria.min.js',
          'vendor/angular-material/angular-material.js',
          'vendor/angular-messages/angular-messages.min.js',
          'vendor/angular-route/angular-route.js',
          'vendor/angular-sanitize/angular-sanitize.js',   
          'vendor/ngstorage/ngStorage.js',
          'vendor/moment/moment.js',
          'vendor/ScrollToFixed/jquery-scrolltofixed.js',
          'vendor/angular-moment/angular-moment.js',
          'vendor/angular-cache/angular-cache.js',
          'vendor/angular-bootstrap/src/bindHtml/bindHtml.js',
          'vendor/angular-bootstrap/src/position/position.js',
          'vendor/angular-bootstrap/src/dateparser/dateparser.js',
          'vendor/angular-bootstrap/src/transition/transition.js',
          'vendor/angular-bootstrap/src/collapse/collapse.js',
          'vendor/angular-bootstrap/src/typeahead/typeahead.js',
          'vendor/angular-bootstrap/src/carousel/carousel.js',
          'vendor/angular-bootstrap/src/datepicker/datepicker.js',
          'vendor/angular-bootstrap/src/timepicker/timepicker.js',
          'vendor/angular-bootstrap/src/tabs/tabs.js',
          'vendor/angular-bootstrap/src/dropdown/dropdown.js',
          'vendor/angular-bootstrap/src/modal/modal.js',
          'vendor/angular-bootstrap/src/accordion/accordion.js',
          'vendor/angular-scroll/angular-scroll.js',
          'vendor/jquery.transit/jquery.transit.js',
          'vendor/bootstrap/js/bootstrap.min.js',
          'vendor/ui-calendar/src/calendar.js',
          'vendor/ui-calendar/src/fullcalendar.js',
          'vendor/angular-jquery-datatable/resource.js',
          'vendor/angular-jquery-datatable/angular-datatables.min.js',
          'vendor/angular-jquery-datatable/jquery.datatables.min.js',
          'vendor/ng-flow/ng-flow.js',
          'vendor/ng-flow/ng-flow-standalone.js'           
        ],
        css: [
          'vendor/bootstrap/css/bootstrap.css',
          'vendor/bootstrap/css/bootstrap.min.css',
          'vendor/bootstrap/css/bootstrap-theme.min.css',
          'vendor/animate.css/animate.min.css',
          'vendor/ui-calendar/src/fullcalendar.css',
          'vendor/angular-material/angular-material.css',
          'vendor/angular-jquery-datatable/jquery.datatables.min.css'
        ],
        assets: [
          'vendor/bootstrap/fonts/glyphicons-halflings-regular.eot',
          'vendor/bootstrap/fonts/glyphicons-halflings-regular.svg',
          'vendor/bootstrap/fonts/glyphicons-halflings-regular.ttf',
          'vendor/bootstrap/fonts/glyphicons-halflings-regular.woff',
          'vendor/bootstrap/fonts/glyphicons-halflings-regular.woff2',
          'vendor/font-awesome/fonts/fontawesome-webfont.eot',
          'vendor/font-awesome/fonts/fontawesome-webfont.svg',
          'vendor/font-awesome/fonts/fontawesome-webfont.ttf',
          'vendor/font-awesome/fonts/fontawesome-webfont.woff'
        ],
        btemp: [
          'vendor/angular-bootstrap/template/typeahead/*.html',
          'vendor/angular-bootstrap/template/carousel/*.html',
          'vendor/angular-bootstrap/template/tabs/*.html',
          'vendor/angular-bootstrap/template/datepicker/*.html',
          'vendor/angular-bootstrap/template/timepicker/*.html',
          'vendor/angular-bootstrap/template/modal/*.html',
          'vendor/angular-bootstrap/template/accordion/*.html'
        ]        
      },

     // Withing application required files
     app_files: {
        js: [ 'src/app/**/*.js'],
        html: [ 'src/app/**/*.html']
     },
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        // src: ['src/bower/angular/angular.js','src/js/*.js'],
        // dest: 'dist/js/<%= pkg.name %>.js'
      },
      build_bower: {
        // src: ['src/bower/angular/angular.js','src/js/*.js'],
        // dest: '<%= build_dir %>/js/<%= pkg.name %>.js'
      }           
    },
    copy: {
      main: {
        src: 'src/css/main.css',
        dest: '<%= build_dir %>/css/main.css',
      },
     // Site/app build required images
      site_images: {
        files: [
          {
            src: [ '**', '!svg/**/*', 'svg/logo.svg' ],
            dest: '<%= build_dir %>/images/',
            cwd: 'src/images',
            expand: true
          }
        ]
      },    
      build_appjs: {
        files: [
          {
            src: [ '<%= app_files.js %>', '<%= app_files.html %>' ],
            dest: '<%= build_dir %>/',
            cwd: '.',
            expand: true
          }
        ]
      },      
      vendor_js: {
        files: [
            {
              src: ['<%= vendor_files.js %>'],
              dest: '<%= build_dir %>/'
            }
        ]
      }, 
      vendor_assets: {
        files: [
            {
              src: ['<%= vendor_files.assets %>'],
              dest: '<%= build_dir %>/'
            }
        ]
      },            
      vendor_css: {
        files: [
          {
            src: [
              '<%= vendor_files.css %>'
            ],
            dest: '<%= build_dir %>/'
          }
        ]
      }       
    },
    targethtml: {
      // dist: {
      //   files: {
      //     'dist/index.html': 'src/index.html'
      //   }
      // },
      build: {
        files: {
          'build/index.html': 'src/index.html'
        }
      }      
    },
    karma: {
      unit: {
        configFile: 'conf/karma.conf.js',
        singleRun: true
      }
    },
    /**
     * The directories to delete when `grunt clean` is executed.
     */
    clean: [
      '<%= build_dir %>/*',
      '<%= compile_dir %>/*'
    ],          
    protractor: {
      e2e: {
        options: {
          configFile: 'conf/protractor.conf.js'
        } 
      },
      ios: {
        options: {
          configFile: 'conf/protractor-ios.conf.js'
        } 
      },
      andrid: {
        options: {
          configFile: 'conf/protractor-android.conf.js'
        } 
      }
    },
    html_build: {
      build: {
        dir: '<%= build_dir %>',
        src: [
          '<%= vendor_files.css %>',
          '<%= vendor_files.js %>',
          '<%= app_files.js %>',          
          '<%= vendor_files.assets %>'
        ]
      }
    },
    /**
     * The server config parameters for running `grunt serve`.
     */     
    connect: {
      devserver: {
        options: {
          port: 8005,
          base: 'build',  // Unused, see below!
          keepalive: true,
          open: true,
          hostname: '127.0.0.1',
          middleware: function(connect) {
            return [
              connect().use(function(rq, rs, nx) {
                rs.setHeader('Access-Control-Allow-Origin', '*');
                nx();
              }),
              connect.static('build') // 'build' if you're debugging
            ];
          }
        }
      },
      e2e: {
        options: {
          port: 33333,
          base: 'build',
          keepalive: false,
          open: false
        }
      }
    },
 /**
     * HTML2JS is a Grunt plugin that takes all of your template files and
     * places them into JavaScript files as strings that are added to
     * AngularJS's template cache. This means that the templates too become
     * part of the initial payload as one JavaScript file. Neat!
     */
    html2js: {
      /**
       * These are the templates from `src/app`.
       */
      // app: {
      //   options: {
      //     base: 'src/app'
      //   },
      //   src: [ '<%= app_files.atpl %>' ],
      //   dest: '<%= build_dir %>/templates-app.js'
      // },

      /**
       * These are the templates from `src/common`.
       */
      // common: {
      //   options: {
      //     base: 'src/common'
      //   },
      //   src: [ '<%= app_files.ctpl %>' ],
      //   dest: '<%= build_dir %>/templates-common.js'
      // },

      /**
       * These are the templates from `vendor/angular-bootstrap/template`.
       */
      bootstrap: {
        options: {
          base: 'vendor/angular-bootstrap'
        },
        src: [ '<%= vendor_files.btemp %>' ],
        dest: '<%= build_dir %>/templates-bootstrap.js'
      }
    },       

  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-targethtml');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-protractor-runner');
  grunt.loadNpmTasks('grunt-html2js');
  grunt.registerTask('test', ['karma', 'protractor:e2e']);
  grunt.registerTask('dist', ['karma', 'protractor', 'concat', 'targethtml', 'copy']);
  grunt.registerTask( 'watch', [ 'build'] );
  grunt.renameTask( 'watch', 'delta' );
  grunt.registerTask( 'watch', [ 'build', 'karma:unit', 'delta' ] );
  grunt.registerTask( 'default', [ 'build', 'compile' ] );
  grunt.registerTask('build',['clean', 'html_build:build', 'concat:build_bower', 'html2js', 'copy:main', 'copy:site_images', 'copy:vendor_css', 'copy:vendor_js', 'copy:vendor_assets', 'copy:build_appjs']);
  grunt.registerTask('serve', ['connect:devserver']);
  /**
   * A utility function to get all app JavaScript sources.
   */
  function filterForJS ( files ) {    
    return files.filter( function ( file ) {
      console.log('JS File names', file);
      return file.match( /\.js$/ );
    });
  }

  /**
   * A utility function to get all app CSS sources. Accept only files that contain
   * '.css' substring and do not contain 'vendor' substring
   */
  function filterForCSS ( files ) {
    console.log('CSS File names', files);
    return files.filter( function ( file ) {
      return file.match( /\.css$/ );
      // return file.match(/^(?=.*.css)((?!vendor).)*$/);
    });
  }
  

  /**
   * The index.html template includes the stylesheet and javascript sources
   * based on dynamic names calculated in this Gruntfile. This task assembles
   * the list into variables for the template to use and then runs the
   * compilation.
   */
  grunt.registerMultiTask( 'html_build', 'Process index.html template', function () {
    var dirRE = new RegExp( '^('+grunt.config('build_dir')+'|'+grunt.config('compile_dir')+')\/', 'g' );
    var jsFiles = filterForJS( this.filesSrc ).map( function ( file ) {
      return file.replace( dirRE, '' );
    });
    var cssFiles = filterForCSS( this.filesSrc ).map( function ( file ) {
      return file.replace( dirRE, '' );
    });

    grunt.file.copy('src/index.html', this.data.dir + '/index.html', {
      process: function ( contents, path ) {
        return grunt.template.process( contents, {
          data: {
            scripts: jsFiles,
            styles: cssFiles,
            version: grunt.config('pkg.version')
          }
        });
      }
    });
  });


};