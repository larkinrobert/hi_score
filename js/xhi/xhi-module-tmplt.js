/**
 *    xhi.module-tmplt.js
 *    Feature module template
 *
 *    Michael S. Mikowski - mike.mikowski@gmail.com
*/
/*jslint         browser : true, continue : true,
  devel  : true, indent  : 2,    maxerr   : 50,
  newcap : true, nomen   : true, plusplus : true,
  regexp : true, sloppy  : true, vars     : false,
  white  : true, todo    : true, unparam  : true
*/
/*global $ */

var __ns = 'xhi', __NS;
/* istanbul ignore next */
try          { __NS = global[ __ns ]; }
catch ( e1 ) { __NS = window[ __ns ]; }

// == BEGIN MODULE __NS._makeTmplt_ ====================================
__NS._makeTmplt_ = function ( aMap ) {
  // == BEGIN MODULE SCOPE VARIABLES ===================================
  'use strict';
  var
    vMap     = aMap._vMap_,
    nMap     = aMap._nMap_,
    __util   = aMap._util_,

    __0      = nMap._0_,
    __1      = nMap._1_,
    __blank  = vMap._blank_,

    __logObj = __util._getLogObj_(),
    __logMsg = __logObj._logMsg_,

    topCmap  = {},
    topSmap  = {},

    $Map
    ;
  // == END MODULE SCOPE VARIABLES =====================================

  // == BEGIN UTILITY METHODS ==========================================
  // == END UTILITY METHODS ============================================

  // == BEGIN DOM METHODS ==============================================
  // BEGIN DOM Method /set$Map/
  // Summary   : set$Map( <jquery_obj> );
  // Purpose   : Set the module jQuery cache
  // Example   : set$Map( $top_box );
  // Arguments : (positional)
  //   0: $top_box : A jQuery object used to locate DOM elements.
  // Settings  : Module-scoped $Map is populated by this function.
  // Returns   : undef
  // Throws    : none
  //
  function set$Map ( $top_box ) {
    $Map = { _$top_box_ : $top_box };
  }
  // == END DOM METHODS ================================================

  // == BEGIN EVENT HANDLERS ===========================================
  // == END EVENT HANDLERS =============================================

  // == BEGIN PUBLIC METHODS ===========================================
  function initModule ( $top_box ) {

    // Initial DOM content using methods above
    // and then set jQuery colection cache
    //
    set$Map( $top_box );
    __logMsg( '_info_', $,
      '__0 === ' + __0,
      '__1 === ' + __1,
      '__blank === ' + __blank,
      'Module cfg map === ', topCmap,
      'Module state  map === ', topSmap,
      '$Map:', $Map
    );
  }

  aMap._makeTmplt_ = { _initModule_ : initModule };
  // == END PUBLIC METHODS =============================================
};
// == END MODULE __NS._makeTmplt_ ======================================

