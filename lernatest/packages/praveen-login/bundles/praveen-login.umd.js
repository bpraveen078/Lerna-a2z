(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('praveen-login', ['exports', '@angular/core'], factory) :
    (factory((global['praveen-login'] = {}),global.ng.core));
}(this, (function (exports,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var PraveenLoginService = /** @class */ (function () {
        function PraveenLoginService() {
        }
        PraveenLoginService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        PraveenLoginService.ctorParameters = function () { return []; };
        /** @nocollapse */ PraveenLoginService.ngInjectableDef = i0.defineInjectable({ factory: function PraveenLoginService_Factory() { return new PraveenLoginService(); }, token: PraveenLoginService, providedIn: "root" });
        return PraveenLoginService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var PraveenLoginComponent = /** @class */ (function () {
        function PraveenLoginComponent() {
        }
        /**
         * @return {?}
         */
        PraveenLoginComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        PraveenLoginComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-praveen-login',
                        template: "\n    <p>\n      praveen-login works!\n    </p>\n  "
                    }] }
        ];
        /** @nocollapse */
        PraveenLoginComponent.ctorParameters = function () { return []; };
        return PraveenLoginComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var PraveenLoginModule = /** @class */ (function () {
        function PraveenLoginModule() {
        }
        PraveenLoginModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [PraveenLoginComponent],
                        imports: [],
                        exports: [PraveenLoginComponent]
                    },] }
        ];
        return PraveenLoginModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    exports.PraveenLoginService = PraveenLoginService;
    exports.PraveenLoginComponent = PraveenLoginComponent;
    exports.PraveenLoginModule = PraveenLoginModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJhdmVlbi1sb2dpbi51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL3ByYXZlZW4tbG9naW4vbGliL3ByYXZlZW4tbG9naW4uc2VydmljZS50cyIsIm5nOi8vcHJhdmVlbi1sb2dpbi9saWIvcHJhdmVlbi1sb2dpbi5jb21wb25lbnQudHMiLCJuZzovL3ByYXZlZW4tbG9naW4vbGliL3ByYXZlZW4tbG9naW4ubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgUHJhdmVlbkxvZ2luU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1wcmF2ZWVuLWxvZ2luJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8cD5cbiAgICAgIHByYXZlZW4tbG9naW4gd29ya3MhXG4gICAgPC9wPlxuICBgLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFByYXZlZW5Mb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHJhdmVlbkxvZ2luQ29tcG9uZW50IH0gZnJvbSAnLi9wcmF2ZWVuLWxvZ2luLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1ByYXZlZW5Mb2dpbkNvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtcbiAgXSxcbiAgZXhwb3J0czogW1ByYXZlZW5Mb2dpbkNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgUHJhdmVlbkxvZ2luTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbIkluamVjdGFibGUiLCJDb21wb25lbnQiLCJOZ01vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO1FBT0U7U0FBaUI7O29CQUxsQkEsYUFBVSxTQUFDO3dCQUNWLFVBQVUsRUFBRSxNQUFNO3FCQUNuQjs7Ozs7a0NBSkQ7S0FFQTs7Ozs7O0FDRkE7UUFhRTtTQUFpQjs7OztRQUVqQix3Q0FBUTs7O1lBQVI7YUFDQzs7b0JBZEZDLFlBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsbUJBQW1CO3dCQUM3QixRQUFRLEVBQUUscURBSVQ7cUJBRUY7Ozs7UUFRRCw0QkFBQztLQWhCRDs7Ozs7O0FDRkE7UUFHQTtTQU1tQzs7b0JBTmxDQyxXQUFRLFNBQUM7d0JBQ1IsWUFBWSxFQUFFLENBQUMscUJBQXFCLENBQUM7d0JBQ3JDLE9BQU8sRUFBRSxFQUNSO3dCQUNELE9BQU8sRUFBRSxDQUFDLHFCQUFxQixDQUFDO3FCQUNqQzs7UUFDaUMseUJBQUM7S0FObkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==