import {
    trigger,
    transition,
    state,
    animate,
    query,
    group,
    style,
    animateChild
} from '@angular/animations';

export const RouteAnimation =
    trigger('routeAnimation', [
        transition('Home=>Comp1, Home=>Comp2, Home=>Comp3', [
            style({ height: '!'}),
            query(':enter', style({ transform: 'translateX(100%)'})),
            query(':enter, :leave', style({ position: 'absolute',  left: 0, right: 0, opacity: 0.5})),
            group([
                query(':leave', [animate('0.8s  cubic-bezier(0.35, 0, 0.25, 1)', style({ transform: 'translateX(-100%)', opacity: 0.5})) ]),
                query(':enter', [animate('0.8s  cubic-bezier(0.35, 0, 0.25, 1)', style({transform: 'translateX(0)', opacity: 1}) )])
            ]),
            query(':enter', animateChild())
        ]),
        transition('Comp1=>Home, Comp2=>Home, Comp3=>Home', [
            style({ height: '!'}),
            query(':enter', style({ transform: 'translateX(-100%)'})),
            query(':enter, :leave', style({ position: 'absolute', left: 0, right: 0, opacity: 0.5})),
            group([
                query(':leave', [ animate('0.8s  cubic-bezier(0.35, 0, 0.25, 1)', style({ transform: 'translateX(100%)', opacity: 0.5}))]),
                query(':enter', [ animate('0.8s  cubic-bezier(0.35, 0, 0.25, 1)', style({ transform: 'translateX(0)', opacity: 1}))])
            ]),
            query(':enter', animateChild())
        ]),

        transition('Comp2=>Comp3', [
            style({ height: '!'}),
            query(':enter', style({ transform: 'translateX(100%)'})),
            query(':enter, :leave', style({ position: 'absolute', left: 0, right: 0, opacity: 0.5 })),
            group([
                query(':leave', [ animate('0.8s cubic-bezier(0.35, 0, 0.25, 1)', style({ transform: 'translateX(-100%)'}))]),
                query(':enter', [ animate('0.8s cubic-bezier(0.35, 0, 0.25, 1)', style({ transform: 'translateX(0)', opacity: 1}))])
            ]),
            query(':enter', animateChild())
        ]),

        transition('Comp3=>Comp2', [
            style({ height: '!' }),
            query(':enter', style({ transform: 'translateX(-100%)'})),
            query(':enter, :leave', style({ position: 'absolute', right: 0, left: 0, opacity: 0.5 })),
            group([
                query(':leave', [ animate('0.8s cubic-bezier(0.35, 0, 0.25, 1)', style({ transform: 'translateX(100%)'}))]),
                query(':enter', [ animate('0.8s cubic-bezier(0.35, 0, 0.25, 1)', style({ transform: 'translateX(0)', opacity: 1}))])
            ]),
            query(':enter', animateChild())
        ])
    ]);
