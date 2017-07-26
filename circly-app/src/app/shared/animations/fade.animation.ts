import { trigger, state, animate, transition, style } from "@angular/animations";

export const fadeInAnimation =
    trigger("fadeInAnimation", [
        transition(":enter", [
            style({ opacity: 0 }),
            animate("1s ease-in-out", style({ opacity: 1 }))
        ])
    ]);
