import {Directive, ElementRef, EventEmitter} from 'angular2/core';

@Directive({
    selector: '[date-time-picker]',
    inputs: [
    ],
    outputs: [
        'ngModelChange',
        'input',
    ]
})

export class DateTimePicker {
    ngModelChange = new EventEmitter();
    input = new EventEmitter();

    constructor(element: ElementRef) {
        var minDate = new Date(),
            maxDate = new Date();

        minDate.setHours(0, 0, 0, 0);

        maxDate.setHours(0, 0, 0, 0);

        maxDate.setFullYear(maxDate.getFullYear() + 1);

        var $this = this;

        $(element.nativeElement).datetimepicker({
            format: 'YYYY-MM-DD HH:mm',
            minDate: minDate,
            maxDate: maxDate,
            useCurrent: false
        }).on('dp.change', function(e) {
            $this.ngModelChange.next(e.target.value);
            $this.input.next(e);
        });
    }
}
