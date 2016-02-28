+function ( $ ) {

    $.widget( "dmgts.unhurriedmenu", {

        // Lifecycle

        options: {
            menuItemClassName: "root-item",
            activeItemClassName: "active",
            baseTimeout: 300
        },

        _create: function () {
            // Init instance variables
            this._items = this.element.children();
            this._hoveredElement = null;
            this._activeMenuItem = null;
            this._isTimerRunning = false;
            this._timer = 0;

            // To avoid name collisions of the root elements
            this._items.addClass( this.options.menuItemClassName );

            // Init event handlers
            this._items.on( 'mouseenter', $.proxy( this._onMenuItemMouseOver, this ) );
            this.element.on( 'mousemove', $.proxy( this._onMenuMouseMove, this ) );
            this.element.on( 'mouseleave', $.proxy( this._onMenuMouseLeave, this ) );
        },


        // Event handlers

        _onMenuItemMouseOver: function ( event ) {
            if ( this._isTimerRunning ) {
                return;
            }

            this._activeMenuItem = this._findParentMenuItemForElement( event.target );
            this._isTimerRunning = true;

            this._restartTimer();
        },

        _onMenuMouseMove: function ( event ) {
            this._hoveredElement = event.toElement;
        },

        _onMenuMouseLeave: function () {
            this._hoveredElement = null;
            this._restartTimer();
        },


        // Private helpers

        _runTimer: function () {
            this._timer = setTimeout( $.proxy( function () {
                var hoveredMenuItem;

                this._isTimerRunning = false;

                if ( !this._hoveredElement ) {
                    this._collapseAllMenuItems();
                    return;
                }

                hoveredMenuItem = this._findParentMenuItemForElement( this._hoveredElement );

                if ( hoveredMenuItem === this._activeMenuItem ) {
                    this._toggleActiveItemClass( $( this._activeMenuItem ) );
                } else {
                    this._toggleActiveItemClass( $( hoveredMenuItem ) );
                }

            }, this ), this.options.baseTimeout );
        },

        _stopTimer: function () {
            clearTimeout( this._timer );
            this._isTimerRunning = false;
        },

        _restartTimer: function () {
            this._stopTimer();
            this._runTimer();
        },

        _findParentMenuItemForElement: function ( element ) {
            return this._findParentElementByClassName( element, this.options.menuItemClassName )
        },

        _findParentElementByClassName: function ( element, parentClassName ) {
            // Check whether the element is the required one
            if ( $( element ).hasClass( parentClassName ) ) {
                return element;
            }

            var parent = element.parentNode;

            while ( parent ) {
                if ( $( parent ).hasClass( parentClassName ) ) {
                    return parent;
                } else {
                    parent = parent.parentNode;
                }
            }
        },

        _collapseAllMenuItems: function () {
            this._items.removeClass( this.options.activeItemClassName );
        },

        _toggleActiveItemClass: function ( $activeItem ) {
            this._collapseAllMenuItems();
            $activeItem.addClass( this.options.activeItemClassName );
        },

        _addLeadingDot: function ( className ) {
            return "." + className;
        }

    } );

}( jQuery );