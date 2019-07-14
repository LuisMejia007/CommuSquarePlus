import {
    transition,
    state,
    trigger,
    animate,
    query,
    group,
    style,
    animateChild
} from '@angular/animations';

export const CreateNewPostAnimation =
    trigger('createPost', [

        state('cancel', style({
            display: 'block',
            height: '0px',
            opacity: 0,
            bottom: 0
        })),

        state('create', style({
            display: 'block',
            height: '300px',
            bottom: 0,
            opacity: 1
        })),

        state('*', style({
            display: 'block',
            height: '0px',
            opacity: 0,
            bottom: 0
        })),

        transition('cancel=>create', [
            animate('1000ms')
        ]),
        transition('create=>cancel', [
            animate('1000ms')
        ]),
        transition('*=>create', [
            animate('1000ms')
        ])

    ])
;
