( function () {
  'use strict';

  angular.module( 'picaSlideToConfirm', [] )
    .directive( 'picaSlideToConfirm', function () {
      return {
        restrict: 'E',
        scope: {
          onConfirm: '&',
          confirmText: '@',
          afterText: '@',
          beforeText: '@',
          fasClass: '@?',
        },
        template: `
          <div class="pswipe-container">
            <div class="pswipe-track-drag animate" ng-class="{'active-track': scope.active}" ng-mousedown="dragStart($event)" ng-mousemove="drag($event)" ng-mouseup="dragEnd()">
              <div class="pswipe-drag-item">${ scope.fasClass ? `<i class="fas ${ scope.fasClass }"></i>` : '>>' }</div>
              <p class="pswipe-track-text pswipe-track-text--end">${ scope.confirmText }</p>
              <p class="pswipe-track-text pswipe-track-text--after">${ scope.afterText }</p>
              <p class="pswipe-track-text pswipe-track-text--before">${ scope.beforeText }</p>
            </div>
          </div>
        `,
        link: function ( scope, element ) {
          scope.confirmText = scope.confirmText || 'Confirm';
          scope.afterText = scope.afterText || 'Confirming...';
          scope.beforeText = scope.beforeText || 'Slide to Confirm';
          scope.fasClass = scope.fasClass || null;
          let dragItem = element[ 0 ].querySelector( '.pswipe-drag-item' );
          let container = element[ 0 ].querySelector( '.pswipe-track-drag' );
          let dragWidth = container.clientWidth - dragItem.clientWidth - 20;
          scope.active = false;
          let initialX, currentX = 0;

          scope.dragStart = function ( e ) {
            if ( e.target !== dragItem ) return;
            scope.active = true;
            initialX = e.clientX - currentX;
          };

          scope.drag = function ( e ) {
            if ( !scope.active ) return;
            e.preventDefault();
            currentX = e.clientX - initialX;
            if ( currentX > 0 && currentX < dragWidth ) {
              dragItem.style.transform = `translate3d(${ currentX }px, 0, 0)`;
            }
          };

          scope.dragEnd = function () {
            if ( currentX >= dragWidth - 5 ) {
              scope.onConfirm(); // Ejecuta el callback
            }
            dragItem.style.transform = 'translate3d(0px, 0, 0)';
            scope.active = false;
          };
        }
      };
    } );

} )();