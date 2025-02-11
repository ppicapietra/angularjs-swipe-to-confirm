( function () {
  'use strict';

  angular.module( 'ppica.pswipeToConfirm', [] )
    .directive( 'pswipeToConfirm', function () {
      return {
        restrict: 'E',
        scope: {
          onConfirm: '&',
          actionText: '@',
          movingText: '@',
          resultText: '@',
          fasClass: '@?',
        },
        template: `
          <div class="pswipe-container">
            <div class="pswipe-track-drag animate" ng-class="{'active-track': scope.active}" ng-mousedown="dragStart($event)" ng-mousemove="drag($event)" ng-mouseup="dragEnd()">
              <div class="pswipe-drag-item">${ fasClass ? `<i class="fas ${ fasClass }"></i>` : '>>' }</div>
              <p class="pswipe-track-text pswipe-track-text--end">${ confirmText }</p>
              <p class="pswipe-track-text pswipe-track-text--after">${ afterText }</p>
              <p class="pswipe-track-text pswipe-track-text--before">${ beforeText }</p>
            </div>
          </div>
        `,
        link: function ( scope, element ) {
          scope.actionText = scope.actionText || 'Slide to Confirm';
          scope.movingText = scope.movingText || 'Confirming...';
          scope.resultText = scope.resultText || 'Confirmed';
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