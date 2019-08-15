(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["editais-editais-module"],{

/***/ "./node_modules/primeng/calendar.js":
/*!******************************************!*\
  !*** ./node_modules/primeng/calendar.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/calendar/calendar */ "./node_modules/primeng/components/calendar/calendar.js"));

/***/ }),

/***/ "./node_modules/primeng/components/calendar/calendar.js":
/*!**************************************************************!*\
  !*** ./node_modules/primeng/components/calendar/calendar.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var animations_1 = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
var button_1 = __webpack_require__(/*! ../button/button */ "./node_modules/primeng/components/button/button.js");
var domhandler_1 = __webpack_require__(/*! ../dom/domhandler */ "./node_modules/primeng/components/dom/domhandler.js");
var shared_1 = __webpack_require__(/*! ../common/shared */ "./node_modules/primeng/components/common/shared.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
exports.CALENDAR_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return Calendar; }),
    multi: true
};
var Calendar = /** @class */ (function () {
    function Calendar(el, renderer, cd) {
        this.el = el;
        this.renderer = renderer;
        this.cd = cd;
        this.dateFormat = 'mm/dd/yy';
        this.inline = false;
        this.showOtherMonths = true;
        this.icon = 'pi pi-calendar';
        this.shortYearCutoff = '+10';
        this.hourFormat = '24';
        this.stepHour = 1;
        this.stepMinute = 1;
        this.stepSecond = 1;
        this.showSeconds = false;
        this.showOnFocus = true;
        this.showWeek = false;
        this.dataType = 'date';
        this.selectionMode = 'single';
        this.todayButtonStyleClass = 'ui-button-secondary';
        this.clearButtonStyleClass = 'ui-button-secondary';
        this.autoZIndex = true;
        this.baseZIndex = 0;
        this.keepInvalid = false;
        this.hideOnDateTimeSelect = false;
        this.numberOfMonths = 1;
        this.view = 'date';
        this.timeSeparator = ":";
        this.showTransitionOptions = '225ms ease-out';
        this.hideTransitionOptions = '195ms ease-in';
        this.onFocus = new core_1.EventEmitter();
        this.onBlur = new core_1.EventEmitter();
        this.onClose = new core_1.EventEmitter();
        this.onSelect = new core_1.EventEmitter();
        this.onInput = new core_1.EventEmitter();
        this.onTodayClick = new core_1.EventEmitter();
        this.onClearClick = new core_1.EventEmitter();
        this.onMonthChange = new core_1.EventEmitter();
        this.onYearChange = new core_1.EventEmitter();
        this._locale = {
            firstDayOfWeek: 0,
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            today: 'Today',
            clear: 'Clear',
            dateFormat: 'mm/dd/yy',
            weekHeader: 'Wk'
        };
        this.onModelChange = function () { };
        this.onModelTouched = function () { };
        this.inputFieldValue = null;
    }
    Object.defineProperty(Calendar.prototype, "utc", {
        get: function () {
            return this._utc;
        },
        set: function (_utc) {
            this._utc = _utc;
            console.log("Setting utc has no effect as built-in UTC support is dropped.");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Calendar.prototype, "minDate", {
        get: function () {
            return this._minDate;
        },
        set: function (date) {
            this._minDate = date;
            if (this.currentMonth != undefined && this.currentMonth != null && this.currentYear) {
                this.createMonths(this.currentMonth, this.currentYear);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Calendar.prototype, "maxDate", {
        get: function () {
            return this._maxDate;
        },
        set: function (date) {
            this._maxDate = date;
            if (this.currentMonth != undefined && this.currentMonth != null && this.currentYear) {
                this.createMonths(this.currentMonth, this.currentYear);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Calendar.prototype, "disabledDates", {
        get: function () {
            return this._disabledDates;
        },
        set: function (disabledDates) {
            this._disabledDates = disabledDates;
            if (this.currentMonth != undefined && this.currentMonth != null && this.currentYear) {
                this.createMonths(this.currentMonth, this.currentYear);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Calendar.prototype, "disabledDays", {
        get: function () {
            return this._disabledDays;
        },
        set: function (disabledDays) {
            this._disabledDays = disabledDays;
            if (this.currentMonth != undefined && this.currentMonth != null && this.currentYear) {
                this.createMonths(this.currentMonth, this.currentYear);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Calendar.prototype, "yearRange", {
        get: function () {
            return this._yearRange;
        },
        set: function (yearRange) {
            if (this.yearNavigator && yearRange) {
                var years = yearRange.split(':');
                var yearStart = parseInt(years[0]);
                var yearEnd = parseInt(years[1]);
                this.populateYearOptions(yearStart, yearEnd);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Calendar.prototype, "showTime", {
        get: function () {
            return this._showTime;
        },
        set: function (showTime) {
            this._showTime = showTime;
            if (this.currentHour === undefined) {
                this.initTime(this.value || new Date());
            }
            this.updateInputfield();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Calendar.prototype, "locale", {
        get: function () {
            return this._locale;
        },
        set: function (newLocale) {
            this._locale = newLocale;
            if (this.view === 'date') {
                this.createWeekDays();
                this.createMonths(this.currentMonth, this.currentYear);
            }
            else if (this.view === 'month') {
                this.createMonthPickerValues();
            }
        },
        enumerable: true,
        configurable: true
    });
    Calendar.prototype.ngOnInit = function () {
        var date = this.defaultDate || new Date();
        this.currentMonth = date.getMonth();
        this.currentYear = date.getFullYear();
        if (this.view === 'date') {
            this.createWeekDays();
            this.initTime(date);
            this.createMonths(this.currentMonth, this.currentYear);
            this.ticksTo1970 = (((1970 - 1) * 365 + Math.floor(1970 / 4) - Math.floor(1970 / 100) + Math.floor(1970 / 400)) * 24 * 60 * 60 * 10000000);
        }
        else if (this.view === 'month') {
            this.createMonthPickerValues();
        }
    };
    Calendar.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.templates.forEach(function (item) {
            switch (item.getType()) {
                case 'date':
                    _this.dateTemplate = item.template;
                    break;
                default:
                    _this.dateTemplate = item.template;
                    break;
            }
        });
    };
    Calendar.prototype.populateYearOptions = function (start, end) {
        this.yearOptions = [];
        for (var i = start; i <= end; i++) {
            this.yearOptions.push(i);
        }
    };
    Calendar.prototype.createWeekDays = function () {
        this.weekDays = [];
        var dayIndex = this.locale.firstDayOfWeek;
        for (var i = 0; i < 7; i++) {
            this.weekDays.push(this.locale.dayNamesMin[dayIndex]);
            dayIndex = (dayIndex == 6) ? 0 : ++dayIndex;
        }
    };
    Calendar.prototype.createMonthPickerValues = function () {
        this.monthPickerValues = [];
        for (var i = 0; i <= 11; i++) {
            this.monthPickerValues.push(this.locale.monthNamesShort[i]);
        }
    };
    Calendar.prototype.createMonths = function (month, year) {
        this.months = this.months = [];
        for (var i = 0; i < this.numberOfMonths; i++) {
            var m = month + i;
            var y = year;
            if (m > 11) {
                m = m % 11 - 1;
                y = year + 1;
            }
            this.months.push(this.createMonth(m, y));
        }
    };
    Calendar.prototype.getWeekNumber = function (date) {
        var checkDate = new Date(date.getTime());
        checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7));
        var time = checkDate.getTime();
        checkDate.setMonth(0);
        checkDate.setDate(1);
        return Math.floor(Math.round((time - checkDate.getTime()) / 86400000) / 7) + 1;
    };
    Calendar.prototype.createMonth = function (month, year) {
        var dates = [];
        var firstDay = this.getFirstDayOfMonthIndex(month, year);
        var daysLength = this.getDaysCountInMonth(month, year);
        var prevMonthDaysLength = this.getDaysCountInPrevMonth(month, year);
        var dayNo = 1;
        var today = new Date();
        var weekNumbers = [];
        var monthRows = Math.ceil((daysLength + firstDay) / 7);
        for (var i = 0; i < monthRows; i++) {
            var week = [];
            if (i == 0) {
                for (var j = (prevMonthDaysLength - firstDay + 1); j <= prevMonthDaysLength; j++) {
                    var prev = this.getPreviousMonthAndYear(month, year);
                    week.push({ day: j, month: prev.month, year: prev.year, otherMonth: true,
                        today: this.isToday(today, j, prev.month, prev.year), selectable: this.isSelectable(j, prev.month, prev.year, true) });
                }
                var remainingDaysLength = 7 - week.length;
                for (var j = 0; j < remainingDaysLength; j++) {
                    week.push({ day: dayNo, month: month, year: year, today: this.isToday(today, dayNo, month, year),
                        selectable: this.isSelectable(dayNo, month, year, false) });
                    dayNo++;
                }
            }
            else {
                for (var j = 0; j < 7; j++) {
                    if (dayNo > daysLength) {
                        var next = this.getNextMonthAndYear(month, year);
                        week.push({ day: dayNo - daysLength, month: next.month, year: next.year, otherMonth: true,
                            today: this.isToday(today, dayNo - daysLength, next.month, next.year),
                            selectable: this.isSelectable((dayNo - daysLength), next.month, next.year, true) });
                    }
                    else {
                        week.push({ day: dayNo, month: month, year: year, today: this.isToday(today, dayNo, month, year),
                            selectable: this.isSelectable(dayNo, month, year, false) });
                    }
                    dayNo++;
                }
            }
            if (this.showWeek) {
                weekNumbers.push(this.getWeekNumber(new Date(week[0].year, week[0].month, week[0].day)));
            }
            dates.push(week);
        }
        return {
            month: month,
            year: year,
            dates: dates,
            weekNumbers: weekNumbers
        };
    };
    Calendar.prototype.initTime = function (date) {
        this.pm = date.getHours() > 11;
        if (this.showTime) {
            this.currentMinute = date.getMinutes();
            this.currentSecond = date.getSeconds();
            if (this.hourFormat == '12')
                this.currentHour = date.getHours() == 0 ? 12 : date.getHours() % 12;
            else
                this.currentHour = date.getHours();
        }
        else if (this.timeOnly) {
            this.currentMinute = 0;
            this.currentHour = 0;
            this.currentSecond = 0;
        }
    };
    Calendar.prototype.navBackward = function (event) {
        if (this.disabled) {
            event.preventDefault();
            return;
        }
        if (this.view === 'month') {
            this.decrementYear();
        }
        else {
            if (this.currentMonth === 0) {
                this.currentMonth = 11;
                this.decrementYear();
            }
            else {
                this.currentMonth--;
            }
            this.onMonthChange.emit({ month: this.currentMonth + 1, year: this.currentYear });
            this.createMonths(this.currentMonth, this.currentYear);
        }
    };
    Calendar.prototype.navForward = function (event) {
        if (this.disabled) {
            event.preventDefault();
            return;
        }
        if (this.view === 'month') {
            this.incrementYear();
        }
        else {
            if (this.currentMonth === 11) {
                this.currentMonth = 0;
                this.incrementYear();
            }
            else {
                this.currentMonth++;
            }
            this.onMonthChange.emit({ month: this.currentMonth + 1, year: this.currentYear });
            this.createMonths(this.currentMonth, this.currentYear);
        }
    };
    Calendar.prototype.decrementYear = function () {
        this.currentYear--;
        if (this.yearNavigator && this.currentYear < this.yearOptions[0]) {
            var difference = this.yearOptions[this.yearOptions.length - 1] - this.yearOptions[0];
            this.populateYearOptions(this.yearOptions[0] - difference, this.yearOptions[this.yearOptions.length - 1] - difference);
        }
    };
    Calendar.prototype.incrementYear = function () {
        this.currentYear++;
        if (this.yearNavigator && this.currentYear > this.yearOptions[this.yearOptions.length - 1]) {
            var difference = this.yearOptions[this.yearOptions.length - 1] - this.yearOptions[0];
            this.populateYearOptions(this.yearOptions[0] + difference, this.yearOptions[this.yearOptions.length - 1] + difference);
        }
    };
    Calendar.prototype.onDateSelect = function (event, dateMeta) {
        var _this = this;
        if (this.disabled || !dateMeta.selectable) {
            event.preventDefault();
            return;
        }
        if (this.isMultipleSelection() && this.isSelected(dateMeta)) {
            this.value = this.value.filter(function (date, i) {
                return !_this.isDateEquals(date, dateMeta);
            });
            this.updateModel(this.value);
        }
        else {
            if (this.shouldSelectDate(dateMeta)) {
                if (dateMeta.otherMonth) {
                    this.currentMonth = dateMeta.month;
                    this.currentYear = dateMeta.year;
                    this.createMonths(this.currentMonth, this.currentYear);
                    this.selectDate(dateMeta);
                }
                else {
                    this.selectDate(dateMeta);
                }
            }
        }
        if (this.isSingleSelection() && (!this.showTime || this.hideOnDateTimeSelect)) {
            setTimeout(function () {
                event.preventDefault();
                _this.hideOverlay();
                if (_this.mask) {
                    _this.disableModality();
                }
                _this.cd.markForCheck();
            }, 150);
        }
        this.updateInputfield();
        event.preventDefault();
    };
    Calendar.prototype.shouldSelectDate = function (dateMeta) {
        if (this.isMultipleSelection())
            return this.maxDateCount != null ? this.maxDateCount > (this.value ? this.value.length : 0) : true;
        else
            return true;
    };
    Calendar.prototype.onMonthSelect = function (event, index) {
        this.onDateSelect(event, { year: this.currentYear, month: index, day: 1, selectable: true });
    };
    Calendar.prototype.updateInputfield = function () {
        var formattedValue = '';
        if (this.value) {
            if (this.isSingleSelection()) {
                formattedValue = this.formatDateTime(this.value);
            }
            else if (this.isMultipleSelection()) {
                for (var i = 0; i < this.value.length; i++) {
                    var dateAsString = this.formatDateTime(this.value[i]);
                    formattedValue += dateAsString;
                    if (i !== (this.value.length - 1)) {
                        formattedValue += ', ';
                    }
                }
            }
            else if (this.isRangeSelection()) {
                if (this.value && this.value.length) {
                    var startDate = this.value[0];
                    var endDate = this.value[1];
                    formattedValue = this.formatDateTime(startDate);
                    if (endDate) {
                        formattedValue += ' - ' + this.formatDateTime(endDate);
                    }
                }
            }
        }
        this.inputFieldValue = formattedValue;
        this.updateFilledState();
        if (this.inputfieldViewChild && this.inputfieldViewChild.nativeElement) {
            this.inputfieldViewChild.nativeElement.value = this.inputFieldValue;
        }
    };
    Calendar.prototype.formatDateTime = function (date) {
        var formattedValue = null;
        if (date) {
            if (this.timeOnly) {
                formattedValue = this.formatTime(date);
            }
            else {
                formattedValue = this.formatDate(date, this.getDateFormat());
                if (this.showTime) {
                    formattedValue += ' ' + this.formatTime(date);
                }
            }
        }
        return formattedValue;
    };
    Calendar.prototype.selectDate = function (dateMeta) {
        var date = new Date(dateMeta.year, dateMeta.month, dateMeta.day);
        if (this.showTime) {
            if (this.hourFormat == '12') {
                if (this.currentHour === 12)
                    date.setHours(this.pm ? 12 : 0);
                else
                    date.setHours(this.pm ? this.currentHour + 12 : this.currentHour);
            }
            else {
                date.setHours(this.currentHour);
            }
            date.setMinutes(this.currentMinute);
            date.setSeconds(this.currentSecond);
        }
        if (this.minDate && this.minDate > date) {
            date = this.minDate;
            this.currentHour = date.getHours();
            this.currentMinute = date.getMinutes();
            this.currentSecond = date.getSeconds();
        }
        if (this.maxDate && this.maxDate < date) {
            date = this.maxDate;
            this.currentHour = date.getHours();
            this.currentMinute = date.getMinutes();
            this.currentSecond = date.getSeconds();
        }
        if (this.isSingleSelection()) {
            this.updateModel(date);
        }
        else if (this.isMultipleSelection()) {
            this.updateModel(this.value ? this.value.concat([date]) : [date]);
        }
        else if (this.isRangeSelection()) {
            if (this.value && this.value.length) {
                var startDate = this.value[0];
                var endDate = this.value[1];
                if (!endDate && date.getTime() >= startDate.getTime()) {
                    endDate = date;
                }
                else {
                    startDate = date;
                    endDate = null;
                }
                this.updateModel([startDate, endDate]);
            }
            else {
                this.updateModel([date, null]);
            }
        }
        this.onSelect.emit(date);
    };
    Calendar.prototype.updateModel = function (value) {
        var _this = this;
        this.value = value;
        if (this.dataType == 'date') {
            this.onModelChange(this.value);
        }
        else if (this.dataType == 'string') {
            if (this.isSingleSelection()) {
                this.onModelChange(this.formatDateTime(this.value));
            }
            else {
                var stringArrValue = null;
                if (this.value) {
                    stringArrValue = this.value.map(function (date) { return _this.formatDateTime(date); });
                }
                this.onModelChange(stringArrValue);
            }
        }
    };
    Calendar.prototype.getFirstDayOfMonthIndex = function (month, year) {
        var day = new Date();
        day.setDate(1);
        day.setMonth(month);
        day.setFullYear(year);
        var dayIndex = day.getDay() + this.getSundayIndex();
        return dayIndex >= 7 ? dayIndex - 7 : dayIndex;
    };
    Calendar.prototype.getDaysCountInMonth = function (month, year) {
        return 32 - this.daylightSavingAdjust(new Date(year, month, 32)).getDate();
    };
    Calendar.prototype.getDaysCountInPrevMonth = function (month, year) {
        var prev = this.getPreviousMonthAndYear(month, year);
        return this.getDaysCountInMonth(prev.month, prev.year);
    };
    Calendar.prototype.getPreviousMonthAndYear = function (month, year) {
        var m, y;
        if (month === 0) {
            m = 11;
            y = year - 1;
        }
        else {
            m = month - 1;
            y = year;
        }
        return { 'month': m, 'year': y };
    };
    Calendar.prototype.getNextMonthAndYear = function (month, year) {
        var m, y;
        if (month === 11) {
            m = 0;
            y = year + 1;
        }
        else {
            m = month + 1;
            y = year;
        }
        return { 'month': m, 'year': y };
    };
    Calendar.prototype.getSundayIndex = function () {
        return this.locale.firstDayOfWeek > 0 ? 7 - this.locale.firstDayOfWeek : 0;
    };
    Calendar.prototype.isSelected = function (dateMeta) {
        if (this.value) {
            if (this.isSingleSelection()) {
                return this.isDateEquals(this.value, dateMeta);
            }
            else if (this.isMultipleSelection()) {
                var selected = false;
                for (var _i = 0, _a = this.value; _i < _a.length; _i++) {
                    var date = _a[_i];
                    selected = this.isDateEquals(date, dateMeta);
                    if (selected) {
                        break;
                    }
                }
                return selected;
            }
            else if (this.isRangeSelection()) {
                if (this.value[1])
                    return this.isDateEquals(this.value[0], dateMeta) || this.isDateEquals(this.value[1], dateMeta) || this.isDateBetween(this.value[0], this.value[1], dateMeta);
                else
                    return this.isDateEquals(this.value[0], dateMeta);
            }
        }
        else {
            return false;
        }
    };
    Calendar.prototype.isMonthSelected = function (month) {
        return this.value ? (this.value.getMonth() === month && this.value.getFullYear() === this.currentYear) : false;
    };
    Calendar.prototype.isDateEquals = function (value, dateMeta) {
        if (value)
            return value.getDate() === dateMeta.day && value.getMonth() === dateMeta.month && value.getFullYear() === dateMeta.year;
        else
            return false;
    };
    Calendar.prototype.isDateBetween = function (start, end, dateMeta) {
        var between = false;
        if (start && end) {
            var date = new Date(dateMeta.year, dateMeta.month, dateMeta.day);
            return start.getTime() <= date.getTime() && end.getTime() >= date.getTime();
        }
        return between;
    };
    Calendar.prototype.isSingleSelection = function () {
        return this.selectionMode === 'single';
    };
    Calendar.prototype.isRangeSelection = function () {
        return this.selectionMode === 'range';
    };
    Calendar.prototype.isMultipleSelection = function () {
        return this.selectionMode === 'multiple';
    };
    Calendar.prototype.isToday = function (today, day, month, year) {
        return today.getDate() === day && today.getMonth() === month && today.getFullYear() === year;
    };
    Calendar.prototype.isSelectable = function (day, month, year, otherMonth) {
        var validMin = true;
        var validMax = true;
        var validDate = true;
        var validDay = true;
        if (otherMonth && !this.selectOtherMonths) {
            return false;
        }
        if (this.minDate) {
            if (this.minDate.getFullYear() > year) {
                validMin = false;
            }
            else if (this.minDate.getFullYear() === year) {
                if (this.minDate.getMonth() > month) {
                    validMin = false;
                }
                else if (this.minDate.getMonth() === month) {
                    if (this.minDate.getDate() > day) {
                        validMin = false;
                    }
                }
            }
        }
        if (this.maxDate) {
            if (this.maxDate.getFullYear() < year) {
                validMax = false;
            }
            else if (this.maxDate.getFullYear() === year) {
                if (this.maxDate.getMonth() < month) {
                    validMax = false;
                }
                else if (this.maxDate.getMonth() === month) {
                    if (this.maxDate.getDate() < day) {
                        validMax = false;
                    }
                }
            }
        }
        if (this.disabledDates) {
            validDate = !this.isDateDisabled(day, month, year);
        }
        if (this.disabledDays) {
            validDay = !this.isDayDisabled(day, month, year);
        }
        return validMin && validMax && validDate && validDay;
    };
    Calendar.prototype.isDateDisabled = function (day, month, year) {
        if (this.disabledDates) {
            for (var _i = 0, _a = this.disabledDates; _i < _a.length; _i++) {
                var disabledDate = _a[_i];
                if (disabledDate.getFullYear() === year && disabledDate.getMonth() === month && disabledDate.getDate() === day) {
                    return true;
                }
            }
        }
        return false;
    };
    Calendar.prototype.isDayDisabled = function (day, month, year) {
        if (this.disabledDays) {
            var weekday = new Date(year, month, day);
            var weekdayNumber = weekday.getDay();
            return this.disabledDays.indexOf(weekdayNumber) !== -1;
        }
        return false;
    };
    Calendar.prototype.onInputFocus = function (event) {
        this.focus = true;
        if (this.showOnFocus) {
            this.showOverlay();
        }
        this.onFocus.emit(event);
    };
    Calendar.prototype.onInputClick = function (event) {
        if (this.overlay && this.autoZIndex) {
            this.overlay.style.zIndex = String(this.baseZIndex + (++domhandler_1.DomHandler.zindex));
        }
        if (this.showOnFocus && !this.overlayVisible) {
            this.showOverlay();
        }
    };
    Calendar.prototype.onInputBlur = function (event) {
        this.focus = false;
        this.onBlur.emit(event);
        if (!this.keepInvalid) {
            this.updateInputfield();
        }
        this.onModelTouched();
    };
    Calendar.prototype.onButtonClick = function (event, inputfield) {
        if (!this.overlayVisible) {
            inputfield.focus();
            this.showOverlay();
        }
        else {
            this.hideOverlay();
        }
    };
    Calendar.prototype.onInputKeydown = function (event) {
        this.isKeydown = true;
        if (event.keyCode === 9) {
            if (this.touchUI)
                this.disableModality();
            else
                this.hideOverlay();
        }
    };
    Calendar.prototype.onMonthDropdownChange = function (m) {
        this.currentMonth = parseInt(m);
        this.onMonthChange.emit({ month: this.currentMonth + 1, year: this.currentYear });
        this.createMonths(this.currentMonth, this.currentYear);
    };
    Calendar.prototype.onYearDropdownChange = function (y) {
        this.currentYear = parseInt(y);
        this.onYearChange.emit({ month: this.currentMonth + 1, year: this.currentYear });
        this.createMonths(this.currentMonth, this.currentYear);
    };
    Calendar.prototype.incrementHour = function (event) {
        var prevHour = this.currentHour;
        var newHour = this.currentHour + this.stepHour;
        if (this.validateHour(newHour)) {
            if (this.hourFormat == '24')
                this.currentHour = (newHour >= 24) ? (newHour - 24) : newHour;
            else if (this.hourFormat == '12') {
                // Before the AM/PM break, now after
                if (prevHour < 12 && newHour > 11) {
                    this.pm = !this.pm;
                }
                this.currentHour = (newHour >= 13) ? (newHour - 12) : newHour;
            }
        }
        event.preventDefault();
    };
    Calendar.prototype.onTimePickerElementMouseDown = function (event, type, direction) {
        if (!this.disabled) {
            this.repeat(event, null, type, direction);
            event.preventDefault();
        }
    };
    Calendar.prototype.onTimePickerElementMouseUp = function (event) {
        if (!this.disabled) {
            this.clearTimePickerTimer();
            this.updateTime();
        }
    };
    Calendar.prototype.repeat = function (event, interval, type, direction) {
        var _this = this;
        var i = interval || 500;
        this.clearTimePickerTimer();
        this.timePickerTimer = setTimeout(function () {
            _this.repeat(event, 100, type, direction);
        }, i);
        switch (type) {
            case 0:
                if (direction === 1)
                    this.incrementHour(event);
                else
                    this.decrementHour(event);
                break;
            case 1:
                if (direction === 1)
                    this.incrementMinute(event);
                else
                    this.decrementMinute(event);
                break;
            case 2:
                if (direction === 1)
                    this.incrementSecond(event);
                else
                    this.decrementSecond(event);
                break;
        }
        this.updateInputfield();
    };
    Calendar.prototype.clearTimePickerTimer = function () {
        if (this.timePickerTimer) {
            clearInterval(this.timePickerTimer);
        }
    };
    Calendar.prototype.decrementHour = function (event) {
        var newHour = this.currentHour - this.stepHour;
        if (this.validateHour(newHour)) {
            if (this.hourFormat == '24')
                this.currentHour = (newHour < 0) ? (24 + newHour) : newHour;
            else if (this.hourFormat == '12') {
                // If we were at noon/midnight, then switch
                if (this.currentHour === 12) {
                    this.pm = !this.pm;
                }
                this.currentHour = (newHour <= 0) ? (12 + newHour) : newHour;
            }
        }
        event.preventDefault();
    };
    Calendar.prototype.validateHour = function (hour) {
        var valid = true;
        var value = this.value;
        if (this.isRangeSelection()) {
            value = this.value[1] || this.value[0];
        }
        if (this.isMultipleSelection()) {
            value = this.value[this.value.length - 1];
        }
        var valueDateString = value ? value.toDateString() : null;
        if (this.minDate && valueDateString && this.minDate.toDateString() === valueDateString) {
            if (this.minDate.getHours() > hour) {
                valid = false;
            }
        }
        if (this.maxDate && valueDateString && this.maxDate.toDateString() === valueDateString) {
            if (this.maxDate.getHours() < hour) {
                valid = false;
            }
        }
        return valid;
    };
    Calendar.prototype.incrementMinute = function (event) {
        var newMinute = this.currentMinute + this.stepMinute;
        if (this.validateMinute(newMinute)) {
            this.currentMinute = (newMinute > 59) ? newMinute - 60 : newMinute;
        }
        event.preventDefault();
    };
    Calendar.prototype.decrementMinute = function (event) {
        var newMinute = this.currentMinute - this.stepMinute;
        newMinute = (newMinute < 0) ? 60 + newMinute : newMinute;
        if (this.validateMinute(newMinute)) {
            this.currentMinute = newMinute;
        }
        event.preventDefault();
    };
    Calendar.prototype.validateMinute = function (minute) {
        var valid = true;
        var value = this.value;
        if (this.isRangeSelection()) {
            value = this.value[1] || this.value[0];
        }
        if (this.isMultipleSelection()) {
            value = this.value[this.value.length - 1];
        }
        var valueDateString = value ? value.toDateString() : null;
        if (this.minDate && valueDateString && this.minDate.toDateString() === valueDateString) {
            if (value.getHours() == this.minDate.getHours()) {
                if (this.minDate.getMinutes() > minute) {
                    valid = false;
                }
            }
        }
        if (this.maxDate && valueDateString && this.maxDate.toDateString() === valueDateString) {
            if (value.getHours() == this.maxDate.getHours()) {
                if (this.maxDate.getMinutes() < minute) {
                    valid = false;
                }
            }
        }
        return valid;
    };
    Calendar.prototype.incrementSecond = function (event) {
        var newSecond = this.currentSecond + this.stepSecond;
        if (this.validateSecond(newSecond)) {
            this.currentSecond = (newSecond > 59) ? newSecond - 60 : newSecond;
        }
        event.preventDefault();
    };
    Calendar.prototype.decrementSecond = function (event) {
        var newSecond = this.currentSecond - this.stepSecond;
        newSecond = (newSecond < 0) ? 60 + newSecond : newSecond;
        if (this.validateSecond(newSecond)) {
            this.currentSecond = newSecond;
        }
        event.preventDefault();
    };
    Calendar.prototype.validateSecond = function (second) {
        var valid = true;
        var value = this.value;
        if (this.isRangeSelection()) {
            value = this.value[1] || this.value[0];
        }
        if (this.isMultipleSelection()) {
            value = this.value[this.value.length - 1];
        }
        var valueDateString = value ? value.toDateString() : null;
        if (this.minDate && valueDateString && this.minDate.toDateString() === valueDateString) {
            if (this.minDate.getSeconds() > second) {
                valid = false;
            }
        }
        if (this.maxDate && valueDateString && this.maxDate.toDateString() === valueDateString) {
            if (this.maxDate.getSeconds() < second) {
                valid = false;
            }
        }
        return valid;
    };
    Calendar.prototype.updateTime = function () {
        var value = this.value;
        if (this.isRangeSelection()) {
            value = this.value[1] || this.value[0];
        }
        if (this.isMultipleSelection()) {
            value = this.value[this.value.length - 1];
        }
        value = value ? new Date(value.getTime()) : new Date();
        if (this.hourFormat == '12') {
            if (this.currentHour === 12)
                value.setHours(this.pm ? 12 : 0);
            else
                value.setHours(this.pm ? this.currentHour + 12 : this.currentHour);
        }
        else {
            value.setHours(this.currentHour);
        }
        value.setMinutes(this.currentMinute);
        value.setSeconds(this.currentSecond);
        if (this.isRangeSelection()) {
            if (this.value[1])
                value = [this.value[0], value];
            else
                value = [value, null];
        }
        if (this.isMultipleSelection()) {
            value = this.value.slice(0, -1).concat([value]);
        }
        this.updateModel(value);
        this.onSelect.emit(value);
        this.updateInputfield();
    };
    Calendar.prototype.toggleAMPM = function (event) {
        this.pm = !this.pm;
        this.updateTime();
        event.preventDefault();
    };
    Calendar.prototype.onUserInput = function (event) {
        // IE 11 Workaround for input placeholder : https://github.com/primefaces/primeng/issues/2026
        if (!this.isKeydown) {
            return;
        }
        this.isKeydown = false;
        var val = event.target.value;
        try {
            var value = this.parseValueFromString(val);
            if (this.isValidSelection(value)) {
                this.updateModel(value);
                this.updateUI();
            }
        }
        catch (err) {
            //invalid date
            this.updateModel(null);
        }
        this.filled = val != null && val.length;
        this.onInput.emit(event);
    };
    Calendar.prototype.isValidSelection = function (value) {
        var _this = this;
        var isValid = true;
        if (this.isSingleSelection()) {
            if (!this.isSelectable(value.getDate(), value.getMonth(), value.getFullYear(), false)) {
                isValid = false;
            }
        }
        else if (value.every(function (v) { return _this.isSelectable(v.getDate(), v.getMonth(), v.getFullYear(), false); })) {
            if (this.isRangeSelection()) {
                isValid = value.length > 1 && value[1] > value[0] ? true : false;
            }
        }
        return isValid;
    };
    Calendar.prototype.parseValueFromString = function (text) {
        if (!text || text.trim().length === 0) {
            return null;
        }
        var value;
        if (this.isSingleSelection()) {
            value = this.parseDateTime(text);
        }
        else if (this.isMultipleSelection()) {
            var tokens = text.split(',');
            value = [];
            for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
                var token = tokens_1[_i];
                value.push(this.parseDateTime(token.trim()));
            }
        }
        else if (this.isRangeSelection()) {
            var tokens = text.split(' - ');
            value = [];
            for (var i = 0; i < tokens.length; i++) {
                value[i] = this.parseDateTime(tokens[i].trim());
            }
        }
        return value;
    };
    Calendar.prototype.parseDateTime = function (text) {
        var date;
        var parts = text.split(' ');
        if (this.timeOnly) {
            date = new Date();
            this.populateTime(date, parts[0], parts[1]);
        }
        else {
            var dateFormat = this.getDateFormat();
            if (this.showTime) {
                date = this.parseDate(parts[0], dateFormat);
                this.populateTime(date, parts[1], parts[2]);
            }
            else {
                date = this.parseDate(text, dateFormat);
            }
        }
        return date;
    };
    Calendar.prototype.populateTime = function (value, timeString, ampm) {
        if (this.hourFormat == '12' && !ampm) {
            throw 'Invalid Time';
        }
        this.pm = (ampm === 'PM' || ampm === 'pm');
        var time = this.parseTime(timeString);
        value.setHours(time.hour);
        value.setMinutes(time.minute);
        value.setSeconds(time.second);
    };
    Calendar.prototype.updateUI = function () {
        var val = this.value || this.defaultDate || new Date();
        if (Array.isArray(val)) {
            val = val[0];
        }
        this.currentMonth = val.getMonth();
        this.currentYear = val.getFullYear();
        this.createMonths(this.currentMonth, this.currentYear);
        if (this.showTime || this.timeOnly) {
            var hours = val.getHours();
            if (this.hourFormat == '12') {
                this.pm = hours > 11;
                if (hours >= 12) {
                    this.currentHour = (hours == 12) ? 12 : hours - 12;
                }
                else {
                    this.currentHour = (hours == 0) ? 12 : hours;
                }
            }
            else {
                this.currentHour = val.getHours();
            }
            this.currentMinute = val.getMinutes();
            this.currentSecond = val.getSeconds();
        }
    };
    Calendar.prototype.showOverlay = function () {
        if (!this.overlayVisible) {
            this.updateUI();
            this.overlayVisible = true;
        }
    };
    Calendar.prototype.hideOverlay = function () {
        this.overlayVisible = false;
        if (this.touchUI) {
            this.disableModality();
        }
    };
    Calendar.prototype.onOverlayAnimationStart = function (event) {
        switch (event.toState) {
            case 'visible':
            case 'visibleTouchUI':
                if (!this.inline) {
                    this.overlay = event.element;
                    this.appendOverlay();
                    if (this.autoZIndex) {
                        this.overlay.style.zIndex = String(this.baseZIndex + (++domhandler_1.DomHandler.zindex));
                    }
                    this.alignOverlay();
                }
                break;
            case 'void':
                this.onOverlayHide();
                this.onClose.emit(event);
                break;
        }
    };
    Calendar.prototype.onOverlayAnimationDone = function (event) {
        switch (event.toState) {
            case 'visible':
            case 'visibleTouchUI':
                if (!this.inline) {
                    this.bindDocumentClickListener();
                    this.bindDocumentResizeListener();
                }
                break;
        }
    };
    Calendar.prototype.appendOverlay = function () {
        if (this.appendTo) {
            if (this.appendTo === 'body')
                document.body.appendChild(this.overlay);
            else
                domhandler_1.DomHandler.appendChild(this.overlay, this.appendTo);
        }
    };
    Calendar.prototype.restoreOverlayAppend = function () {
        if (this.overlay && this.appendTo) {
            this.el.nativeElement.appendChild(this.overlay);
        }
    };
    Calendar.prototype.alignOverlay = function () {
        if (this.touchUI) {
            this.enableModality(this.overlay);
        }
        else {
            if (this.appendTo)
                domhandler_1.DomHandler.absolutePosition(this.overlay, this.inputfieldViewChild.nativeElement);
            else
                domhandler_1.DomHandler.relativePosition(this.overlay, this.inputfieldViewChild.nativeElement);
        }
    };
    Calendar.prototype.enableModality = function (element) {
        var _this = this;
        if (!this.mask) {
            this.mask = document.createElement('div');
            this.mask.style.zIndex = String(parseInt(element.style.zIndex) - 1);
            var maskStyleClass = 'ui-widget-overlay ui-datepicker-mask ui-datepicker-mask-scrollblocker';
            domhandler_1.DomHandler.addMultipleClasses(this.mask, maskStyleClass);
            this.maskClickListener = this.renderer.listen(this.mask, 'click', function (event) {
                _this.disableModality();
            });
            document.body.appendChild(this.mask);
            domhandler_1.DomHandler.addClass(document.body, 'ui-overflow-hidden');
        }
    };
    Calendar.prototype.disableModality = function () {
        if (this.mask) {
            document.body.removeChild(this.mask);
            var bodyChildren = document.body.children;
            var hasBlockerMasks = void 0;
            for (var i = 0; i < bodyChildren.length; i++) {
                var bodyChild = bodyChildren[i];
                if (domhandler_1.DomHandler.hasClass(bodyChild, 'ui-datepicker-mask-scrollblocker')) {
                    hasBlockerMasks = true;
                    break;
                }
            }
            if (!hasBlockerMasks) {
                domhandler_1.DomHandler.removeClass(document.body, 'ui-overflow-hidden');
            }
            this.unbindMaskClickListener();
            this.mask = null;
        }
    };
    Calendar.prototype.unbindMaskClickListener = function () {
        if (this.maskClickListener) {
            this.maskClickListener();
            this.maskClickListener = null;
        }
    };
    Calendar.prototype.writeValue = function (value) {
        this.value = value;
        if (this.value && typeof this.value === 'string') {
            this.value = this.parseValueFromString(this.value);
        }
        this.updateInputfield();
        this.updateUI();
    };
    Calendar.prototype.registerOnChange = function (fn) {
        this.onModelChange = fn;
    };
    Calendar.prototype.registerOnTouched = function (fn) {
        this.onModelTouched = fn;
    };
    Calendar.prototype.setDisabledState = function (val) {
        this.disabled = val;
    };
    Calendar.prototype.getDateFormat = function () {
        return this.dateFormat || this.locale.dateFormat;
    };
    // Ported from jquery-ui datepicker formatDate
    Calendar.prototype.formatDate = function (date, format) {
        if (!date) {
            return '';
        }
        var iFormat;
        var lookAhead = function (match) {
            var matches = (iFormat + 1 < format.length && format.charAt(iFormat + 1) === match);
            if (matches) {
                iFormat++;
            }
            return matches;
        }, formatNumber = function (match, value, len) {
            var num = '' + value;
            if (lookAhead(match)) {
                while (num.length < len) {
                    num = '0' + num;
                }
            }
            return num;
        }, formatName = function (match, value, shortNames, longNames) {
            return (lookAhead(match) ? longNames[value] : shortNames[value]);
        };
        var output = '';
        var literal = false;
        if (date) {
            for (iFormat = 0; iFormat < format.length; iFormat++) {
                if (literal) {
                    if (format.charAt(iFormat) === '\'' && !lookAhead('\'')) {
                        literal = false;
                    }
                    else {
                        output += format.charAt(iFormat);
                    }
                }
                else {
                    switch (format.charAt(iFormat)) {
                        case 'd':
                            output += formatNumber('d', date.getDate(), 2);
                            break;
                        case 'D':
                            output += formatName('D', date.getDay(), this.locale.dayNamesShort, this.locale.dayNames);
                            break;
                        case 'o':
                            output += formatNumber('o', Math.round((new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime() -
                                new Date(date.getFullYear(), 0, 0).getTime()) / 86400000), 3);
                            break;
                        case 'm':
                            output += formatNumber('m', date.getMonth() + 1, 2);
                            break;
                        case 'M':
                            output += formatName('M', date.getMonth(), this.locale.monthNamesShort, this.locale.monthNames);
                            break;
                        case 'y':
                            output += lookAhead('y') ? date.getFullYear() : (date.getFullYear() % 100 < 10 ? '0' : '') + (date.getFullYear() % 100);
                            break;
                        case '@':
                            output += date.getTime();
                            break;
                        case '!':
                            output += date.getTime() * 10000 + this.ticksTo1970;
                            break;
                        case '\'':
                            if (lookAhead('\'')) {
                                output += '\'';
                            }
                            else {
                                literal = true;
                            }
                            break;
                        default:
                            output += format.charAt(iFormat);
                    }
                }
            }
        }
        return output;
    };
    Calendar.prototype.formatTime = function (date) {
        if (!date) {
            return '';
        }
        var output = '';
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        if (this.hourFormat == '12' && hours > 11 && hours != 12) {
            hours -= 12;
        }
        if (this.hourFormat == '12') {
            output += hours === 0 ? 12 : (hours < 10) ? '0' + hours : hours;
        }
        else {
            output += (hours < 10) ? '0' + hours : hours;
        }
        output += ':';
        output += (minutes < 10) ? '0' + minutes : minutes;
        if (this.showSeconds) {
            output += ':';
            output += (seconds < 10) ? '0' + seconds : seconds;
        }
        if (this.hourFormat == '12') {
            output += date.getHours() > 11 ? ' PM' : ' AM';
        }
        return output;
    };
    Calendar.prototype.parseTime = function (value) {
        var tokens = value.split(':');
        var validTokenLength = this.showSeconds ? 3 : 2;
        if (tokens.length !== validTokenLength) {
            throw "Invalid time";
        }
        var h = parseInt(tokens[0]);
        var m = parseInt(tokens[1]);
        var s = this.showSeconds ? parseInt(tokens[2]) : null;
        if (isNaN(h) || isNaN(m) || h > 23 || m > 59 || (this.hourFormat == '12' && h > 12) || (this.showSeconds && (isNaN(s) || s > 59))) {
            throw "Invalid time";
        }
        else {
            if (this.hourFormat == '12' && h !== 12 && this.pm) {
                h += 12;
            }
            return { hour: h, minute: m, second: s };
        }
    };
    // Ported from jquery-ui datepicker parseDate
    Calendar.prototype.parseDate = function (value, format) {
        if (format == null || value == null) {
            throw "Invalid arguments";
        }
        value = (typeof value === "object" ? value.toString() : value + "");
        if (value === "") {
            return null;
        }
        var iFormat, dim, extra, iValue = 0, shortYearCutoff = (typeof this.shortYearCutoff !== "string" ? this.shortYearCutoff : new Date().getFullYear() % 100 + parseInt(this.shortYearCutoff, 10)), year = -1, month = -1, day = -1, doy = -1, literal = false, date, lookAhead = function (match) {
            var matches = (iFormat + 1 < format.length && format.charAt(iFormat + 1) === match);
            if (matches) {
                iFormat++;
            }
            return matches;
        }, getNumber = function (match) {
            var isDoubled = lookAhead(match), size = (match === "@" ? 14 : (match === "!" ? 20 :
                (match === "y" && isDoubled ? 4 : (match === "o" ? 3 : 2)))), minSize = (match === "y" ? size : 1), digits = new RegExp("^\\d{" + minSize + "," + size + "}"), num = value.substring(iValue).match(digits);
            if (!num) {
                throw "Missing number at position " + iValue;
            }
            iValue += num[0].length;
            return parseInt(num[0], 10);
        }, getName = function (match, shortNames, longNames) {
            var index = -1;
            var arr = lookAhead(match) ? longNames : shortNames;
            var names = [];
            for (var i = 0; i < arr.length; i++) {
                names.push([i, arr[i]]);
            }
            names.sort(function (a, b) {
                return -(a[1].length - b[1].length);
            });
            for (var i = 0; i < names.length; i++) {
                var name_1 = names[i][1];
                if (value.substr(iValue, name_1.length).toLowerCase() === name_1.toLowerCase()) {
                    index = names[i][0];
                    iValue += name_1.length;
                    break;
                }
            }
            if (index !== -1) {
                return index + 1;
            }
            else {
                throw "Unknown name at position " + iValue;
            }
        }, checkLiteral = function () {
            if (value.charAt(iValue) !== format.charAt(iFormat)) {
                throw "Unexpected literal at position " + iValue;
            }
            iValue++;
        };
        if (this.view === 'month') {
            day = 1;
        }
        for (iFormat = 0; iFormat < format.length; iFormat++) {
            if (literal) {
                if (format.charAt(iFormat) === "'" && !lookAhead("'")) {
                    literal = false;
                }
                else {
                    checkLiteral();
                }
            }
            else {
                switch (format.charAt(iFormat)) {
                    case "d":
                        day = getNumber("d");
                        break;
                    case "D":
                        getName("D", this.locale.dayNamesShort, this.locale.dayNames);
                        break;
                    case "o":
                        doy = getNumber("o");
                        break;
                    case "m":
                        month = getNumber("m");
                        break;
                    case "M":
                        month = getName("M", this.locale.monthNamesShort, this.locale.monthNames);
                        break;
                    case "y":
                        year = getNumber("y");
                        break;
                    case "@":
                        date = new Date(getNumber("@"));
                        year = date.getFullYear();
                        month = date.getMonth() + 1;
                        day = date.getDate();
                        break;
                    case "!":
                        date = new Date((getNumber("!") - this.ticksTo1970) / 10000);
                        year = date.getFullYear();
                        month = date.getMonth() + 1;
                        day = date.getDate();
                        break;
                    case "'":
                        if (lookAhead("'")) {
                            checkLiteral();
                        }
                        else {
                            literal = true;
                        }
                        break;
                    default:
                        checkLiteral();
                }
            }
        }
        if (iValue < value.length) {
            extra = value.substr(iValue);
            if (!/^\s+/.test(extra)) {
                throw "Extra/unparsed characters found in date: " + extra;
            }
        }
        if (year === -1) {
            year = new Date().getFullYear();
        }
        else if (year < 100) {
            year += new Date().getFullYear() - new Date().getFullYear() % 100 +
                (year <= shortYearCutoff ? 0 : -100);
        }
        if (doy > -1) {
            month = 1;
            day = doy;
            do {
                dim = this.getDaysCountInMonth(year, month - 1);
                if (day <= dim) {
                    break;
                }
                month++;
                day -= dim;
            } while (true);
        }
        date = this.daylightSavingAdjust(new Date(year, month - 1, day));
        if (date.getFullYear() !== year || date.getMonth() + 1 !== month || date.getDate() !== day) {
            throw "Invalid date"; // E.g. 31/02/00
        }
        return date;
    };
    Calendar.prototype.daylightSavingAdjust = function (date) {
        if (!date) {
            return null;
        }
        date.setHours(date.getHours() > 12 ? date.getHours() + 2 : 0);
        return date;
    };
    Calendar.prototype.updateFilledState = function () {
        this.filled = this.inputFieldValue && this.inputFieldValue != '';
    };
    Calendar.prototype.onTodayButtonClick = function (event) {
        var date = new Date();
        var dateMeta = { day: date.getDate(), month: date.getMonth(), year: date.getFullYear(), otherMonth: date.getMonth() !== this.currentMonth || date.getFullYear() !== this.currentYear, today: true, selectable: true };
        this.onDateSelect(event, dateMeta);
        this.onTodayClick.emit(event);
    };
    Calendar.prototype.onClearButtonClick = function (event) {
        this.updateModel(null);
        this.updateInputfield();
        this.hideOverlay();
        this.onClearClick.emit(event);
    };
    Calendar.prototype.bindDocumentClickListener = function () {
        var _this = this;
        if (!this.documentClickListener) {
            this.documentClickListener = this.renderer.listen('document', 'click', function (event) {
                if (_this.isOutsideClicked(event) && _this.overlayVisible) {
                    _this.hideOverlay();
                }
                _this.cd.detectChanges();
            });
        }
    };
    Calendar.prototype.unbindDocumentClickListener = function () {
        if (this.documentClickListener) {
            this.documentClickListener();
            this.documentClickListener = null;
        }
    };
    Calendar.prototype.bindDocumentResizeListener = function () {
        if (!this.documentResizeListener && !this.touchUI) {
            this.documentResizeListener = this.onWindowResize.bind(this);
            window.addEventListener('resize', this.documentResizeListener);
        }
    };
    Calendar.prototype.unbindDocumentResizeListener = function () {
        if (this.documentResizeListener) {
            window.removeEventListener('resize', this.documentResizeListener);
            this.documentResizeListener = null;
        }
    };
    Calendar.prototype.isOutsideClicked = function (event) {
        return !(this.el.nativeElement.isSameNode(event.target) || this.isNavIconClicked(event) ||
            this.el.nativeElement.contains(event.target) || (this.overlay && this.overlay.contains(event.target)));
    };
    Calendar.prototype.isNavIconClicked = function (event) {
        return (domhandler_1.DomHandler.hasClass(event.target, 'ui-datepicker-prev') || domhandler_1.DomHandler.hasClass(event.target, 'ui-datepicker-prev-icon')
            || domhandler_1.DomHandler.hasClass(event.target, 'ui-datepicker-next') || domhandler_1.DomHandler.hasClass(event.target, 'ui-datepicker-next-icon'));
    };
    Calendar.prototype.onWindowResize = function () {
        if (this.overlayVisible && !domhandler_1.DomHandler.isAndroid()) {
            this.hideOverlay();
        }
    };
    Calendar.prototype.onOverlayHide = function () {
        this.unbindDocumentClickListener();
        this.unbindMaskClickListener();
        this.unbindDocumentResizeListener();
        this.overlay = null;
        this.disableModality();
    };
    Calendar.prototype.ngOnDestroy = function () {
        this.restoreOverlayAppend();
        this.onOverlayHide();
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Date)
    ], Calendar.prototype, "defaultDate", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], Calendar.prototype, "style", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Calendar.prototype, "styleClass", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], Calendar.prototype, "inputStyle", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Calendar.prototype, "inputId", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Calendar.prototype, "name", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Calendar.prototype, "inputStyleClass", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Calendar.prototype, "placeholder", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], Calendar.prototype, "disabled", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Calendar.prototype, "dateFormat", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], Calendar.prototype, "inline", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], Calendar.prototype, "showOtherMonths", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], Calendar.prototype, "selectOtherMonths", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], Calendar.prototype, "showIcon", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Calendar.prototype, "icon", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], Calendar.prototype, "appendTo", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], Calendar.prototype, "readonlyInput", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], Calendar.prototype, "shortYearCutoff", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], Calendar.prototype, "monthNavigator", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], Calendar.prototype, "yearNavigator", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Calendar.prototype, "hourFormat", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], Calendar.prototype, "timeOnly", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], Calendar.prototype, "stepHour", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], Calendar.prototype, "stepMinute", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], Calendar.prototype, "stepSecond", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], Calendar.prototype, "showSeconds", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], Calendar.prototype, "required", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], Calendar.prototype, "showOnFocus", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], Calendar.prototype, "showWeek", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Calendar.prototype, "dataType", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Calendar.prototype, "selectionMode", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], Calendar.prototype, "maxDateCount", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], Calendar.prototype, "showButtonBar", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Calendar.prototype, "todayButtonStyleClass", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Calendar.prototype, "clearButtonStyleClass", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], Calendar.prototype, "autoZIndex", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], Calendar.prototype, "baseZIndex", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Calendar.prototype, "panelStyleClass", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], Calendar.prototype, "panelStyle", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], Calendar.prototype, "keepInvalid", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], Calendar.prototype, "hideOnDateTimeSelect", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], Calendar.prototype, "numberOfMonths", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Calendar.prototype, "view", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], Calendar.prototype, "touchUI", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Calendar.prototype, "timeSeparator", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Calendar.prototype, "showTransitionOptions", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Calendar.prototype, "hideTransitionOptions", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], Calendar.prototype, "onFocus", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], Calendar.prototype, "onBlur", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], Calendar.prototype, "onClose", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], Calendar.prototype, "onSelect", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], Calendar.prototype, "onInput", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], Calendar.prototype, "onTodayClick", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], Calendar.prototype, "onClearClick", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], Calendar.prototype, "onMonthChange", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], Calendar.prototype, "onYearChange", void 0);
    __decorate([
        core_1.ContentChildren(shared_1.PrimeTemplate),
        __metadata("design:type", core_1.QueryList)
    ], Calendar.prototype, "templates", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], Calendar.prototype, "tabindex", void 0);
    __decorate([
        core_1.ViewChild('inputfield', { static: false }),
        __metadata("design:type", core_1.ElementRef)
    ], Calendar.prototype, "inputfieldViewChild", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], Calendar.prototype, "utc", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Date),
        __metadata("design:paramtypes", [Date])
    ], Calendar.prototype, "minDate", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Date),
        __metadata("design:paramtypes", [Date])
    ], Calendar.prototype, "maxDate", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], Calendar.prototype, "disabledDates", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], Calendar.prototype, "disabledDays", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], Calendar.prototype, "yearRange", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], Calendar.prototype, "showTime", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], Calendar.prototype, "locale", null);
    Calendar = __decorate([
        core_1.Component({
            selector: 'p-calendar',
            template: "\n        <span [ngClass]=\"{'ui-calendar':true, 'ui-calendar-w-btn': showIcon, 'ui-calendar-timeonly': timeOnly}\" [ngStyle]=\"style\" [class]=\"styleClass\">\n            <ng-template [ngIf]=\"!inline\">\n                <input #inputfield type=\"text\" [attr.id]=\"inputId\" [attr.name]=\"name\" [attr.required]=\"required\" [value]=\"inputFieldValue\" (focus)=\"onInputFocus($event)\" (keydown)=\"onInputKeydown($event)\" (click)=\"onInputClick($event)\" (blur)=\"onInputBlur($event)\"\n                    [readonly]=\"readonlyInput\" (input)=\"onUserInput($event)\" [ngStyle]=\"inputStyle\" [class]=\"inputStyleClass\" [placeholder]=\"placeholder||''\" [disabled]=\"disabled\" [attr.tabindex]=\"tabindex\"\n                    [ngClass]=\"'ui-inputtext ui-widget ui-state-default ui-corner-all'\" autocomplete=\"off\"\n                    ><button type=\"button\" [icon]=\"icon\" pButton *ngIf=\"showIcon\" (click)=\"onButtonClick($event,inputfield)\" class=\"ui-datepicker-trigger ui-calendar-button\"\n                    [ngClass]=\"{'ui-state-disabled':disabled}\" [disabled]=\"disabled\" tabindex=\"-1\"></button>\n            </ng-template>\n            <div [class]=\"panelStyleClass\" [ngStyle]=\"panelStyle\" [ngClass]=\"{'ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all': true, 'ui-datepicker-inline':inline,'ui-shadow':!inline,\n                'ui-state-disabled':disabled,'ui-datepicker-timeonly':timeOnly,'ui-datepicker-multiple-month': this.numberOfMonths > 1, 'ui-datepicker-monthpicker': (view === 'month'), 'ui-datepicker-touch-ui': touchUI}\"\n                [@overlayAnimation]=\"touchUI ? {value: 'visibleTouchUI', params: {showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions}}: \n                                            {value: 'visible', params: {showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions}}\" \n                                            [@.disabled]=\"inline === true\" (@overlayAnimation.start)=\"onOverlayAnimationStart($event)\" (@overlayAnimation.done)=\"onOverlayAnimationDone($event)\" *ngIf=\"inline || overlayVisible\">\n                <ng-container *ngIf=\"!timeOnly\">\n                    <div class=\"ui-datepicker-group ui-widget-content\" *ngFor=\"let month of months; let i = index;\">\n                        <div class=\"ui-datepicker-header ui-widget-header ui-helper-clearfix ui-corner-all\">\n                            <ng-content select=\"p-header\"></ng-content>\n                            <a class=\"ui-datepicker-prev ui-corner-all\" (click)=\"navBackward($event)\" *ngIf=\"i === 0\">\n                                <span class=\"ui-datepicker-prev-icon pi pi-chevron-left\"></span>\n                            </a>\n                            <a class=\"ui-datepicker-next ui-corner-all\" (click)=\"navForward($event)\" *ngIf=\"numberOfMonths === 1 ? true : (i === numberOfMonths -1)\">\n                                <span class=\"ui-datepicker-next-icon pi pi-chevron-right\"></span>\n                            </a>\n                            <div class=\"ui-datepicker-title\">\n                                <span class=\"ui-datepicker-month\" *ngIf=\"!monthNavigator && (view !== 'month')\">{{locale.monthNames[month.month]}}</span>\n                                <select class=\"ui-datepicker-month\" *ngIf=\"monthNavigator && (view !== 'month') && numberOfMonths === 1\" (change)=\"onMonthDropdownChange($event.target.value)\">\n                                    <option [value]=\"i\" *ngFor=\"let monthName of locale.monthNames;let i = index\" [selected]=\"i === month.month\">{{monthName}}</option>\n                                </select>\n                                <select class=\"ui-datepicker-year\" *ngIf=\"yearNavigator && numberOfMonths === 1\" (change)=\"onYearDropdownChange($event.target.value)\">\n                                    <option [value]=\"year\" *ngFor=\"let year of yearOptions\" [selected]=\"year === currentYear\">{{year}}</option>\n                                </select>\n                                <span class=\"ui-datepicker-year\" *ngIf=\"!yearNavigator\">{{view === 'month' ? currentYear : month.year}}</span>\n                            </div>\n                        </div>\n                        <div class=\"ui-datepicker-calendar-container\" *ngIf=\"view ==='date'\">\n                            <table class=\"ui-datepicker-calendar\">\n                                <thead>\n                                    <tr>\n                                        <th *ngIf=\"showWeek\" class=\"ui-datepicker-weekheader\">\n                                            <span>{{locale['weekHeader']}}</span>\n                                        </th>\n                                        <th scope=\"col\" *ngFor=\"let weekDay of weekDays;let begin = first; let end = last\">\n                                            <span>{{weekDay}}</span>\n                                        </th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr *ngFor=\"let week of month.dates; let i = index;\">\n                                        <td *ngIf=\"showWeek\" class=\"ui-datepicker-weeknumber ui-state-disabled\">\n                                            <span>\n                                                {{month.weekNumbers[i]}}\n                                            </span>\n                                        </td>\n                                        <td *ngFor=\"let date of week\" [ngClass]=\"{'ui-datepicker-other-month': date.otherMonth,\n                                            'ui-datepicker-current-day':isSelected(date),'ui-datepicker-today':date.today}\">\n                                            <ng-container *ngIf=\"date.otherMonth ? showOtherMonths : true\">\n                                                <a class=\"ui-state-default\" *ngIf=\"date.selectable\" [ngClass]=\"{'ui-state-active':isSelected(date), 'ui-state-highlight':date.today}\"\n                                                    (click)=\"onDateSelect($event,date)\" draggable=\"false\">\n                                                    <ng-container *ngIf=\"!dateTemplate\">{{date.day}}</ng-container>\n                                                    <ng-container *ngTemplateOutlet=\"dateTemplate; context: {$implicit: date}\"></ng-container>\n                                                </a>\n                                                <span class=\"ui-state-default ui-state-disabled\" [ngClass]=\"{'ui-state-active':isSelected(date), 'ui-state-highlight':date.today}\" *ngIf=\"!date.selectable\">\n                                                    {{date.day}}\n                                                </span>\n                                            </ng-container>\n                                        </td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                    <div class=\"ui-monthpicker\" *ngIf=\"view === 'month'\">\n                        <a tabindex=\"0\" *ngFor=\"let m of monthPickerValues; let i = index\" (click)=\"onMonthSelect($event, i)\" class=\"ui-monthpicker-month\" [ngClass]=\"{'ui-state-active': isMonthSelected(i)}\">\n                            {{m}}\n                        </a>\n                    </div>\n                </ng-container>\n                <div class=\"ui-timepicker ui-widget-header ui-corner-all\" *ngIf=\"showTime||timeOnly\">\n                    <div class=\"ui-hour-picker\">\n                        <a tabindex=\"0\" (mousedown)=\"onTimePickerElementMouseDown($event, 0, 1)\" (mouseup)=\"onTimePickerElementMouseUp($event)\">\n                            <span class=\"pi pi-chevron-up\"></span>\n                        </a>\n                        <span [ngStyle]=\"{'display': currentHour < 10 ? 'inline': 'none'}\">0</span><span>{{currentHour}}</span>\n                        <a tabindex=\"0\" (mousedown)=\"onTimePickerElementMouseDown($event, 0, -1)\" (mouseup)=\"onTimePickerElementMouseUp($event)\">\n                            <span class=\"pi pi-chevron-down\"></span>\n                        </a>\n                    </div>\n                    <div class=\"ui-separator\">\n                        <a tabindex=\"0\">\n                            <span class=\"pi pi-chevron-up\"></span>\n                        </a>\n                        <span>{{timeSeparator}}</span>\n                        <a tabindex=\"0\">\n                            <span class=\"pi pi-chevron-down\"></span>\n                        </a>\n                    </div>\n                    <div class=\"ui-minute-picker\">\n                        <a tabindex=\"0\" (mousedown)=\"onTimePickerElementMouseDown($event, 1, 1)\" (mouseup)=\"onTimePickerElementMouseUp($event)\">\n                            <span class=\"pi pi-chevron-up\"></span>\n                        </a>\n                        <span [ngStyle]=\"{'display': currentMinute < 10 ? 'inline': 'none'}\">0</span><span>{{currentMinute}}</span>\n                        <a tabindex=\"0\" (mousedown)=\"onTimePickerElementMouseDown($event, 1, -1)\" (mouseup)=\"onTimePickerElementMouseUp($event)\">\n                            <span class=\"pi pi-chevron-down\"></span>\n                        </a>\n                    </div>\n                    <div class=\"ui-separator\" *ngIf=\"showSeconds\">\n                        <a tabindex=\"0\">\n                            <span class=\"pi pi-chevron-up\"></span>\n                        </a>\n                        <span>{{timeSeparator}}</span>\n                        <a tabindex=\"0\">\n                            <span class=\"pi pi-chevron-down\"></span>\n                        </a>\n                    </div>\n                    <div class=\"ui-second-picker\" *ngIf=\"showSeconds\">\n                        <a tabindex=\"0\" (mousedown)=\"onTimePickerElementMouseDown($event, 2, 1)\" (mouseup)=\"onTimePickerElementMouseUp($event)\">\n                            <span class=\"pi pi-chevron-up\"></span>\n                        </a>\n                        <span [ngStyle]=\"{'display': currentSecond < 10 ? 'inline': 'none'}\">0</span><span>{{currentSecond}}</span>\n                        <a tabindex=\"0\" (mousedown)=\"onTimePickerElementMouseDown($event, 2, -1)\" (mouseup)=\"onTimePickerElementMouseUp($event)\">\n                            <span class=\"pi pi-chevron-down\"></span>\n                        </a>\n                    </div>\n                    <div class=\"ui-ampm-picker\" *ngIf=\"hourFormat=='12'\">\n                        <a tabindex=\"0\" (click)=\"toggleAMPM($event)\">\n                            <span class=\"pi pi-chevron-up\"></span>\n                        </a>\n                        <span>{{pm ? 'PM' : 'AM'}}</span>\n                        <a tabindex=\"0\" (click)=\"toggleAMPM($event)\">\n                            <span class=\"pi pi-chevron-down\"></span>\n                        </a>\n                    </div>\n                </div>\n                <div class=\"ui-datepicker-buttonbar ui-widget-header\" *ngIf=\"showButtonBar\">\n                    <div class=\"ui-g\">\n                        <div class=\"ui-g-6\">\n                            <button type=\"button\" [label]=\"_locale.today\" (click)=\"onTodayButtonClick($event)\" pButton [ngClass]=\"[todayButtonStyleClass]\"></button>\n                        </div>\n                        <div class=\"ui-g-6\">\n                            <button type=\"button\" [label]=\"_locale.clear\" (click)=\"onClearButtonClick($event)\" pButton [ngClass]=\"[clearButtonStyleClass]\"></button>\n                        </div>\n                    </div>\n                </div>\n                <ng-content select=\"p-footer\"></ng-content>\n            </div>\n        </span>\n    ",
            animations: [
                animations_1.trigger('overlayAnimation', [
                    animations_1.state('visible', animations_1.style({
                        transform: 'translateY(0)',
                        opacity: 1
                    })),
                    animations_1.state('visibleTouchUI', animations_1.style({
                        transform: 'translate(-50%,-50%)',
                        opacity: 1
                    })),
                    animations_1.transition('void => visible', [
                        animations_1.style({ transform: 'translateY(5%)', opacity: 0 }),
                        animations_1.animate('{{showTransitionParams}}')
                    ]),
                    animations_1.transition('visible => void', [
                        animations_1.animate(('{{hideTransitionParams}}'), animations_1.style({
                            opacity: 0,
                            transform: 'translateY(5%)'
                        }))
                    ]),
                    animations_1.transition('void => visibleTouchUI', [
                        animations_1.style({ opacity: 0, transform: 'translate3d(-50%, -40%, 0) scale(0.9)' }),
                        animations_1.animate('{{showTransitionParams}}')
                    ]),
                    animations_1.transition('visibleTouchUI => void', [
                        animations_1.animate(('{{hideTransitionParams}}'), animations_1.style({
                            opacity: 0,
                            transform: 'translate3d(-50%, -40%, 0) scale(0.9)'
                        }))
                    ])
                ])
            ],
            host: {
                '[class.ui-inputwrapper-filled]': 'filled',
                '[class.ui-inputwrapper-focus]': 'focus'
            },
            providers: [exports.CALENDAR_VALUE_ACCESSOR]
        }),
        __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer2, core_1.ChangeDetectorRef])
    ], Calendar);
    return Calendar;
}());
exports.Calendar = Calendar;
var CalendarModule = /** @class */ (function () {
    function CalendarModule() {
    }
    CalendarModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, button_1.ButtonModule, shared_1.SharedModule],
            exports: [Calendar, button_1.ButtonModule, shared_1.SharedModule],
            declarations: [Calendar]
        })
    ], CalendarModule);
    return CalendarModule;
}());
exports.CalendarModule = CalendarModule;
//# sourceMappingURL=calendar.js.map

/***/ }),

/***/ "./node_modules/primeng/components/dialog/dialog.js":
/*!**********************************************************!*\
  !*** ./node_modules/primeng/components/dialog/dialog.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var animations_1 = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
var domhandler_1 = __webpack_require__(/*! ../dom/domhandler */ "./node_modules/primeng/components/dom/domhandler.js");
var shared_1 = __webpack_require__(/*! ../common/shared */ "./node_modules/primeng/components/common/shared.js");
var idx = 0;
var Dialog = /** @class */ (function () {
    function Dialog(el, renderer, zone) {
        this.el = el;
        this.renderer = renderer;
        this.zone = zone;
        this.draggable = true;
        this.resizable = true;
        this.closeOnEscape = true;
        this.closable = true;
        this.responsive = true;
        this.showHeader = true;
        this.breakpoint = 640;
        this.blockScroll = false;
        this.autoZIndex = true;
        this.baseZIndex = 0;
        this.minX = 0;
        this.minY = 0;
        this.focusOnShow = true;
        this.focusTrap = true;
        this.transitionOptions = '150ms cubic-bezier(0, 0, 0.2, 1)';
        this.closeIcon = 'pi pi-times';
        this.minimizeIcon = 'pi pi-window-minimize';
        this.maximizeIcon = 'pi pi-window-maximize';
        this.onShow = new core_1.EventEmitter();
        this.onHide = new core_1.EventEmitter();
        this.visibleChange = new core_1.EventEmitter();
        this.id = "ui-dialog-" + idx++;
    }
    Object.defineProperty(Dialog.prototype, "width", {
        get: function () {
            return this._width;
        },
        set: function (val) {
            this._width = val;
            console.warn("width property is deprecated, use style to define the width of the Dialog.");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dialog.prototype, "height", {
        get: function () {
            return this._height;
        },
        set: function (val) {
            this._height = val;
            console.warn("height property is deprecated, use style to define the height of the Dialog.");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dialog.prototype, "minWidth", {
        get: function () {
            return this._minWidth;
        },
        set: function (val) {
            this._minWidth = val;
            console.warn("minWidth property is deprecated, use style to define the minWidth of the Dialog.");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dialog.prototype, "minHeight", {
        get: function () {
            return this._minHeight;
        },
        set: function (val) {
            this._minHeight = val;
            console.warn("minHeight property is deprecated, use style to define the minHeight of the Dialog.");
        },
        enumerable: true,
        configurable: true
    });
    Dialog.prototype.focus = function () {
        var focusable = domhandler_1.DomHandler.findSingle(this.container, 'button');
        if (focusable) {
            this.zone.runOutsideAngular(function () {
                setTimeout(function () { return focusable.focus(); }, 5);
            });
        }
    };
    Dialog.prototype.positionOverlay = function () {
        var viewport = domhandler_1.DomHandler.getViewport();
        if (domhandler_1.DomHandler.getOuterHeight(this.container) + this.contentViewChild.nativeElement.scrollHeight - this.contentViewChild.nativeElement.clientHeight > viewport.height) {
            this.contentViewChild.nativeElement.style.height = (viewport.height * .75) + 'px';
            this.container.style.height = 'auto';
        }
        else {
            this.contentViewChild.nativeElement.style.height = null;
            if (this.height) {
                this.container.style.height = this.height + 'px';
            }
        }
        if (this.positionLeft >= 0 && this.positionTop >= 0) {
            this.container.style.left = this.positionLeft + 'px';
            this.container.style.top = this.positionTop + 'px';
        }
        else if (this.positionTop >= 0) {
            this.center();
            this.container.style.top = this.positionTop + 'px';
        }
        else {
            this.center();
        }
    };
    Dialog.prototype.close = function (event) {
        this.visibleChange.emit(false);
        event.preventDefault();
    };
    Dialog.prototype.center = function () {
        var elementWidth = domhandler_1.DomHandler.getOuterWidth(this.container);
        var elementHeight = domhandler_1.DomHandler.getOuterHeight(this.container);
        if (elementWidth == 0 && elementHeight == 0) {
            this.container.style.visibility = 'hidden';
            this.container.style.display = 'block';
            elementWidth = domhandler_1.DomHandler.getOuterWidth(this.container);
            elementHeight = domhandler_1.DomHandler.getOuterHeight(this.container);
            this.container.style.display = 'none';
            this.container.style.visibility = 'visible';
        }
        var viewport = domhandler_1.DomHandler.getViewport();
        var x = Math.max(Math.floor((viewport.width - elementWidth) / 2), 0);
        var y = Math.max(Math.floor((viewport.height - elementHeight) / 2), 0);
        this.container.style.left = x + 'px';
        this.container.style.top = y + 'px';
    };
    Dialog.prototype.enableModality = function () {
        var _this = this;
        if (!this.mask) {
            this.mask = document.createElement('div');
            this.mask.style.zIndex = String(parseInt(this.container.style.zIndex) - 1);
            var maskStyleClass = 'ui-widget-overlay ui-dialog-mask';
            if (this.blockScroll) {
                maskStyleClass += ' ui-dialog-mask-scrollblocker';
            }
            domhandler_1.DomHandler.addMultipleClasses(this.mask, maskStyleClass);
            if (this.closable && this.dismissableMask) {
                this.maskClickListener = this.renderer.listen(this.mask, 'click', function (event) {
                    _this.close(event);
                });
            }
            document.body.appendChild(this.mask);
            if (this.blockScroll) {
                domhandler_1.DomHandler.addClass(document.body, 'ui-overflow-hidden');
            }
        }
    };
    Dialog.prototype.disableModality = function () {
        if (this.mask) {
            this.unbindMaskClickListener();
            document.body.removeChild(this.mask);
            if (this.blockScroll) {
                var bodyChildren = document.body.children;
                var hasBlockerMasks = void 0;
                for (var i = 0; i < bodyChildren.length; i++) {
                    var bodyChild = bodyChildren[i];
                    if (domhandler_1.DomHandler.hasClass(bodyChild, 'ui-dialog-mask-scrollblocker')) {
                        hasBlockerMasks = true;
                        break;
                    }
                }
                if (!hasBlockerMasks) {
                    domhandler_1.DomHandler.removeClass(document.body, 'ui-overflow-hidden');
                }
            }
            this.mask = null;
        }
    };
    Dialog.prototype.toggleMaximize = function (event) {
        if (this.maximized)
            this.revertMaximize();
        else
            this.maximize();
        event.preventDefault();
    };
    Dialog.prototype.maximize = function () {
        this.preMaximizePageX = parseFloat(this.container.style.top);
        this.preMaximizePageY = parseFloat(this.container.style.left);
        this.preMaximizeContainerWidth = domhandler_1.DomHandler.getOuterWidth(this.container);
        this.preMaximizeContainerHeight = domhandler_1.DomHandler.getOuterHeight(this.container);
        this.preMaximizeContentHeight = domhandler_1.DomHandler.getOuterHeight(this.contentViewChild.nativeElement);
        this.container.style.top = '0px';
        this.container.style.left = '0px';
        this.container.style.width = '100vw';
        this.container.style.height = '100vh';
        var diffHeight = parseFloat(this.container.style.top);
        if (this.headerViewChild && this.headerViewChild.nativeElement) {
            diffHeight += domhandler_1.DomHandler.getOuterHeight(this.headerViewChild.nativeElement);
        }
        if (this.footerViewChild && this.footerViewChild.nativeElement) {
            diffHeight += domhandler_1.DomHandler.getOuterHeight(this.footerViewChild.nativeElement);
        }
        this.contentViewChild.nativeElement.style.height = 'calc(100vh - ' + diffHeight + 'px)';
        domhandler_1.DomHandler.addClass(this.container, 'ui-dialog-maximized');
        domhandler_1.DomHandler.addClass(document.body, 'ui-overflow-hidden');
        this.moveOnTop();
        this.maximized = true;
    };
    Dialog.prototype.revertMaximize = function () {
        var _this = this;
        this.container.style.top = this.preMaximizePageX + 'px';
        this.container.style.left = this.preMaximizePageY + 'px';
        this.container.style.width = this.preMaximizeContainerWidth + 'px';
        this.container.style.height = this.preMaximizeContainerHeight + 'px';
        this.contentViewChild.nativeElement.style.height = this.preMaximizeContentHeight + 'px';
        domhandler_1.DomHandler.removeClass(document.body, 'ui-overflow-hidden');
        this.maximized = false;
        this.zone.runOutsideAngular(function () {
            setTimeout(function () { return domhandler_1.DomHandler.removeClass(_this.container, 'ui-dialog-maximized'); }, 300);
        });
    };
    Dialog.prototype.unbindMaskClickListener = function () {
        if (this.maskClickListener) {
            this.maskClickListener();
            this.maskClickListener = null;
        }
    };
    Dialog.prototype.moveOnTop = function () {
        if (this.autoZIndex) {
            this.container.style.zIndex = String(this.baseZIndex + (++domhandler_1.DomHandler.zindex));
        }
    };
    Dialog.prototype.onCloseMouseDown = function (event) {
        this.closeIconMouseDown = true;
    };
    Dialog.prototype.initDrag = function (event) {
        if (this.closeIconMouseDown) {
            this.closeIconMouseDown = false;
            return;
        }
        if (this.draggable) {
            this.dragging = true;
            this.lastPageX = event.pageX;
            this.lastPageY = event.pageY;
            domhandler_1.DomHandler.addClass(document.body, 'ui-unselectable-text');
        }
    };
    Dialog.prototype.onKeydown = function (event) {
        if (this.focusTrap) {
            if (event.which === 9) {
                event.preventDefault();
                var focusableElements = domhandler_1.DomHandler.getFocusableElements(this.container);
                if (focusableElements && focusableElements.length > 0) {
                    if (!document.activeElement) {
                        focusableElements[0].focus();
                    }
                    else {
                        var focusedIndex = focusableElements.indexOf(document.activeElement);
                        if (event.shiftKey) {
                            if (focusedIndex == -1 || focusedIndex === 0)
                                focusableElements[focusableElements.length - 1].focus();
                            else
                                focusableElements[focusedIndex - 1].focus();
                        }
                        else {
                            if (focusedIndex == -1 || focusedIndex === (focusableElements.length - 1))
                                focusableElements[0].focus();
                            else
                                focusableElements[focusedIndex + 1].focus();
                        }
                    }
                }
            }
        }
    };
    Dialog.prototype.onDrag = function (event) {
        if (this.dragging) {
            var containerWidth = domhandler_1.DomHandler.getOuterWidth(this.container);
            var containerHeight = domhandler_1.DomHandler.getOuterHeight(this.container);
            var deltaX = event.pageX - this.lastPageX;
            var deltaY = event.pageY - this.lastPageY;
            var offset = domhandler_1.DomHandler.getOffset(this.container);
            var leftPos = offset.left + deltaX;
            var topPos = offset.top + deltaY;
            var viewport = domhandler_1.DomHandler.getViewport();
            if (leftPos >= this.minX && (leftPos + containerWidth) < viewport.width) {
                this.container.style.left = leftPos + 'px';
            }
            if (topPos >= this.minY && (topPos + containerHeight) < viewport.height) {
                this.container.style.top = topPos + 'px';
            }
            this.lastPageX = event.pageX;
            this.lastPageY = event.pageY;
        }
    };
    Dialog.prototype.endDrag = function (event) {
        if (this.draggable) {
            this.dragging = false;
            domhandler_1.DomHandler.removeClass(document.body, 'ui-unselectable-text');
        }
    };
    Dialog.prototype.initResize = function (event) {
        if (this.resizable) {
            this.preWidth = null;
            this.resizing = true;
            this.lastPageX = event.pageX;
            this.lastPageY = event.pageY;
            domhandler_1.DomHandler.addClass(document.body, 'ui-unselectable-text');
        }
    };
    Dialog.prototype.onResize = function (event) {
        if (this.resizing) {
            var deltaX = event.pageX - this.lastPageX;
            var deltaY = event.pageY - this.lastPageY;
            var containerWidth = domhandler_1.DomHandler.getOuterWidth(this.container);
            var containerHeight = domhandler_1.DomHandler.getOuterHeight(this.container);
            var contentHeight = domhandler_1.DomHandler.getOuterHeight(this.contentViewChild.nativeElement);
            var newWidth = containerWidth + deltaX;
            var newHeight = containerHeight + deltaY;
            var minWidth = this.container.style.minWidth;
            var minHeight = this.container.style.minHeight;
            var offset = domhandler_1.DomHandler.getOffset(this.container);
            var viewport = domhandler_1.DomHandler.getViewport();
            if ((!minWidth || newWidth > parseInt(minWidth)) && (offset.left + newWidth) < viewport.width) {
                this.container.style.width = newWidth + 'px';
            }
            if ((!minHeight || newHeight > parseInt(minHeight)) && (offset.top + newHeight) < viewport.height) {
                this.container.style.height = newHeight + 'px';
                this.contentViewChild.nativeElement.style.height = contentHeight + deltaY + 'px';
            }
            this.lastPageX = event.pageX;
            this.lastPageY = event.pageY;
        }
    };
    Dialog.prototype.onResizeEnd = function () {
        if (this.resizing) {
            this.resizing = false;
            domhandler_1.DomHandler.removeClass(document.body, 'ui-unselectable-text');
        }
    };
    Dialog.prototype.bindGlobalListeners = function () {
        if (this.modal) {
            this.bindDocumentKeydownListener();
        }
        if (this.draggable) {
            this.bindDocumentDragListener();
            this.bindDocumentDragEndListener();
        }
        if (this.resizable) {
            this.bindDocumentResizeListeners();
        }
        if (this.responsive) {
            this.bindDocumentResponsiveListener();
        }
        if (this.closeOnEscape && this.closable) {
            this.bindDocumentEscapeListener();
        }
    };
    Dialog.prototype.unbindGlobalListeners = function () {
        this.unbindDocumentDragListener();
        this.unbindDocumentKeydownListener();
        this.unbindDocumentDragEndListener();
        this.unbindDocumentResizeListeners();
        this.unbindDocumentResponsiveListener();
        this.unbindDocumentEscapeListener();
    };
    Dialog.prototype.bindDocumentKeydownListener = function () {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            _this.documentKeydownListener = _this.onKeydown.bind(_this);
            window.document.addEventListener('keydown', _this.documentKeydownListener);
        });
    };
    Dialog.prototype.unbindDocumentKeydownListener = function () {
        if (this.documentKeydownListener) {
            window.document.removeEventListener('keydown', this.documentKeydownListener);
            this.documentKeydownListener = null;
        }
    };
    Dialog.prototype.bindDocumentDragListener = function () {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            _this.documentDragListener = _this.onDrag.bind(_this);
            window.document.addEventListener('mousemove', _this.documentDragListener);
        });
    };
    Dialog.prototype.unbindDocumentDragListener = function () {
        if (this.documentDragListener) {
            window.document.removeEventListener('mousemove', this.documentDragListener);
            this.documentDragListener = null;
        }
    };
    Dialog.prototype.bindDocumentDragEndListener = function () {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            _this.documentDragEndListener = _this.endDrag.bind(_this);
            window.document.addEventListener('mouseup', _this.documentDragEndListener);
        });
    };
    Dialog.prototype.unbindDocumentDragEndListener = function () {
        if (this.documentDragEndListener) {
            window.document.removeEventListener('mouseup', this.documentDragEndListener);
            this.documentDragEndListener = null;
        }
    };
    Dialog.prototype.bindDocumentResizeListeners = function () {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            _this.documentResizeListener = _this.onResize.bind(_this);
            _this.documentResizeEndListener = _this.onResizeEnd.bind(_this);
            window.document.addEventListener('mousemove', _this.documentResizeListener);
            window.document.addEventListener('mouseup', _this.documentResizeEndListener);
        });
    };
    Dialog.prototype.unbindDocumentResizeListeners = function () {
        if (this.documentResizeListener && this.documentResizeEndListener) {
            window.document.removeEventListener('mouseup', this.documentResizeListener);
            window.document.removeEventListener('mouseup', this.documentResizeEndListener);
            this.documentResizeListener = null;
            this.documentResizeEndListener = null;
        }
    };
    Dialog.prototype.bindDocumentResponsiveListener = function () {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            _this.documentResponsiveListener = _this.onWindowResize.bind(_this);
            window.addEventListener('resize', _this.documentResponsiveListener);
        });
    };
    Dialog.prototype.unbindDocumentResponsiveListener = function () {
        if (this.documentResponsiveListener) {
            window.removeEventListener('resize', this.documentResponsiveListener);
            this.documentResponsiveListener = null;
        }
    };
    Dialog.prototype.onWindowResize = function () {
        if (this.maximized) {
            return;
        }
        var viewport = domhandler_1.DomHandler.getViewport();
        var width = domhandler_1.DomHandler.getOuterWidth(this.container);
        if (viewport.width <= this.breakpoint) {
            if (!this.preWidth) {
                this.preWidth = width;
            }
            this.container.style.left = '0px';
            this.container.style.width = '100%';
        }
        else {
            this.container.style.width = this.preWidth + 'px';
            this.positionOverlay();
        }
    };
    Dialog.prototype.bindDocumentEscapeListener = function () {
        var _this = this;
        this.documentEscapeListener = this.renderer.listen('document', 'keydown', function (event) {
            if (event.which == 27) {
                if (parseInt(_this.container.style.zIndex) === (domhandler_1.DomHandler.zindex + _this.baseZIndex)) {
                    _this.close(event);
                }
            }
        });
    };
    Dialog.prototype.unbindDocumentEscapeListener = function () {
        if (this.documentEscapeListener) {
            this.documentEscapeListener();
            this.documentEscapeListener = null;
        }
    };
    Dialog.prototype.setDimensions = function () {
        if (this.width) {
            this.container.style.width = this.width + 'px';
        }
        if (this.height) {
            this.container.style.height = this.height + 'px';
        }
        if (this.minWidth) {
            this.container.style.minWidth = this.minWidth + 'px';
        }
        if (this.minHeight) {
            this.container.style.minHeight = this.minHeight + 'px';
        }
    };
    Dialog.prototype.appendContainer = function () {
        if (this.appendTo) {
            if (this.appendTo === 'body')
                document.body.appendChild(this.container);
            else
                domhandler_1.DomHandler.appendChild(this.container, this.appendTo);
        }
    };
    Dialog.prototype.restoreAppend = function () {
        if (this.container && this.appendTo) {
            this.el.nativeElement.appendChild(this.container);
        }
    };
    Dialog.prototype.onAnimationStart = function (event) {
        switch (event.toState) {
            case 'visible':
                this.container = event.element;
                this.setDimensions();
                this.onShow.emit({});
                this.appendContainer();
                this.moveOnTop();
                this.positionOverlay();
                this.bindGlobalListeners();
                if (this.maximized) {
                    domhandler_1.DomHandler.addClass(document.body, 'ui-overflow-hidden');
                }
                if (this.modal) {
                    this.enableModality();
                }
                if (this.focusOnShow) {
                    this.focus();
                }
                if (this.responsive) {
                    this.onWindowResize();
                }
                break;
            case 'void':
                this.onContainerDestroy();
                this.onHide.emit({});
                break;
        }
    };
    Dialog.prototype.onContainerDestroy = function () {
        this.unbindGlobalListeners();
        this.dragging = false;
        if (this.maximized) {
            domhandler_1.DomHandler.removeClass(document.body, 'ui-overflow-hidden');
            this.maximized = false;
        }
        if (this.modal) {
            this.disableModality();
        }
        this.container = null;
    };
    Dialog.prototype.ngOnDestroy = function () {
        if (this.container) {
            this.restoreAppend();
            this.onContainerDestroy();
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], Dialog.prototype, "visible", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Dialog.prototype, "header", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], Dialog.prototype, "draggable", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], Dialog.prototype, "resizable", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], Dialog.prototype, "positionLeft", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], Dialog.prototype, "positionTop", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], Dialog.prototype, "contentStyle", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], Dialog.prototype, "modal", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], Dialog.prototype, "closeOnEscape", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], Dialog.prototype, "dismissableMask", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], Dialog.prototype, "rtl", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], Dialog.prototype, "closable", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], Dialog.prototype, "responsive", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], Dialog.prototype, "appendTo", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], Dialog.prototype, "style", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Dialog.prototype, "styleClass", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], Dialog.prototype, "showHeader", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], Dialog.prototype, "breakpoint", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], Dialog.prototype, "blockScroll", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], Dialog.prototype, "autoZIndex", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], Dialog.prototype, "baseZIndex", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], Dialog.prototype, "minX", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], Dialog.prototype, "minY", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], Dialog.prototype, "focusOnShow", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], Dialog.prototype, "maximizable", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], Dialog.prototype, "focusTrap", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Dialog.prototype, "transitionOptions", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Dialog.prototype, "closeIcon", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Dialog.prototype, "minimizeIcon", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Dialog.prototype, "maximizeIcon", void 0);
    __decorate([
        core_1.ContentChildren(shared_1.Header, { descendants: false }),
        __metadata("design:type", core_1.QueryList)
    ], Dialog.prototype, "headerFacet", void 0);
    __decorate([
        core_1.ContentChildren(shared_1.Footer, { descendants: false }),
        __metadata("design:type", core_1.QueryList)
    ], Dialog.prototype, "footerFacet", void 0);
    __decorate([
        core_1.ViewChild('titlebar', { static: false }),
        __metadata("design:type", core_1.ElementRef)
    ], Dialog.prototype, "headerViewChild", void 0);
    __decorate([
        core_1.ViewChild('content', { static: false }),
        __metadata("design:type", core_1.ElementRef)
    ], Dialog.prototype, "contentViewChild", void 0);
    __decorate([
        core_1.ViewChild('footer', { static: false }),
        __metadata("design:type", core_1.ElementRef)
    ], Dialog.prototype, "footerViewChild", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], Dialog.prototype, "onShow", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], Dialog.prototype, "onHide", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], Dialog.prototype, "visibleChange", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], Dialog.prototype, "width", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], Dialog.prototype, "height", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], Dialog.prototype, "minWidth", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], Dialog.prototype, "minHeight", null);
    Dialog = __decorate([
        core_1.Component({
            selector: 'p-dialog',
            template: "\n        <div #container [ngClass]=\"{'ui-dialog ui-widget ui-widget-content ui-corner-all ui-shadow':true, 'ui-dialog-rtl':rtl,'ui-dialog-draggable':draggable,'ui-dialog-resizable':resizable}\"\n            [ngStyle]=\"style\" [class]=\"styleClass\"\n            [@animation]=\"{value: 'visible', params: {transitionParams: transitionOptions}}\" (@animation.start)=\"onAnimationStart($event)\" role=\"dialog\" [attr.aria-labelledby]=\"id + '-label'\" *ngIf=\"visible\">\n            <div #titlebar class=\"ui-dialog-titlebar ui-widget-header ui-helper-clearfix ui-corner-top\" (mousedown)=\"initDrag($event)\" *ngIf=\"showHeader\">\n                <span [attr.id]=\"id + '-label'\" class=\"ui-dialog-title\" *ngIf=\"header\">{{header}}</span>\n                <span [attr.id]=\"id + '-label'\" class=\"ui-dialog-title\" *ngIf=\"headerFacet && headerFacet.first\">\n                    <ng-content select=\"p-header\"></ng-content>\n                </span>\n                <a *ngIf=\"closable\" [ngClass]=\"{'ui-dialog-titlebar-icon ui-dialog-titlebar-close ui-corner-all':true}\" tabindex=\"0\" role=\"button\" (click)=\"close($event)\" (keydown.enter)=\"close($event)\" (mousedown)=\"onCloseMouseDown($event)\">\n                    <span [class]=\"closeIcon\"></span>\n                </a>\n                <a *ngIf=\"maximizable\" [ngClass]=\"{'ui-dialog-titlebar-icon ui-dialog-titlebar-maximize ui-corner-all':true}\" tabindex=\"0\" role=\"button\" (click)=\"toggleMaximize($event)\" (keydown.enter)=\"toggleMaximize($event)\">\n                    <span [ngClass]=\"maximized ? minimizeIcon : maximizeIcon\"></span>\n                </a>\n            </div>\n            <div #content class=\"ui-dialog-content ui-widget-content\" [ngStyle]=\"contentStyle\">\n                <ng-content></ng-content>\n            </div>\n            <div #footer class=\"ui-dialog-footer ui-widget-content\" *ngIf=\"footerFacet && footerFacet.first\">\n                <ng-content select=\"p-footer\"></ng-content>\n            </div>\n            <div *ngIf=\"resizable\" class=\"ui-resizable-handle ui-resizable-se ui-icon ui-icon-gripsmall-diagonal-se\" style=\"z-index: 90;\" (mousedown)=\"initResize($event)\"></div>\n        </div>\n    ",
            animations: [
                animations_1.trigger('animation', [
                    animations_1.state('void', animations_1.style({
                        transform: 'scale(0.7)',
                        opacity: 0
                    })),
                    animations_1.state('visible', animations_1.style({
                        transform: 'none',
                        opacity: 1
                    })),
                    animations_1.transition('* => *', animations_1.animate('{{transitionParams}}'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer2, core_1.NgZone])
    ], Dialog);
    return Dialog;
}());
exports.Dialog = Dialog;
var DialogModule = /** @class */ (function () {
    function DialogModule() {
    }
    DialogModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            exports: [Dialog, shared_1.SharedModule],
            declarations: [Dialog]
        })
    ], DialogModule);
    return DialogModule;
}());
exports.DialogModule = DialogModule;
//# sourceMappingURL=dialog.js.map

/***/ }),

/***/ "./node_modules/primeng/components/fileupload/fileupload.js":
/*!******************************************************************!*\
  !*** ./node_modules/primeng/components/fileupload/fileupload.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
var button_1 = __webpack_require__(/*! ../button/button */ "./node_modules/primeng/components/button/button.js");
var messages_1 = __webpack_require__(/*! ../messages/messages */ "./node_modules/primeng/components/messages/messages.js");
var progressbar_1 = __webpack_require__(/*! ../progressbar/progressbar */ "./node_modules/primeng/components/progressbar/progressbar.js");
var domhandler_1 = __webpack_require__(/*! ../dom/domhandler */ "./node_modules/primeng/components/dom/domhandler.js");
var shared_1 = __webpack_require__(/*! ../common/shared */ "./node_modules/primeng/components/common/shared.js");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
var FileUpload = /** @class */ (function () {
    function FileUpload(el, sanitizer, zone, http) {
        this.el = el;
        this.sanitizer = sanitizer;
        this.zone = zone;
        this.http = http;
        this.method = 'POST';
        this.invalidFileSizeMessageSummary = '{0}: Invalid file size, ';
        this.invalidFileSizeMessageDetail = 'maximum upload size is {0}.';
        this.invalidFileTypeMessageSummary = '{0}: Invalid file type, ';
        this.invalidFileTypeMessageDetail = 'allowed file types: {0}.';
        this.previewWidth = 50;
        this.chooseLabel = 'Choose';
        this.uploadLabel = 'Upload';
        this.cancelLabel = 'Cancel';
        this.showUploadButton = true;
        this.showCancelButton = true;
        this.mode = 'advanced';
        this.onBeforeUpload = new core_1.EventEmitter();
        this.onSend = new core_1.EventEmitter();
        this.onUpload = new core_1.EventEmitter();
        this.onError = new core_1.EventEmitter();
        this.onClear = new core_1.EventEmitter();
        this.onRemove = new core_1.EventEmitter();
        this.onSelect = new core_1.EventEmitter();
        this.onProgress = new core_1.EventEmitter();
        this.uploadHandler = new core_1.EventEmitter();
        this.files = [];
        this.progress = 0;
    }
    FileUpload.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.templates.forEach(function (item) {
            switch (item.getType()) {
                case 'file':
                    _this.fileTemplate = item.template;
                    break;
                case 'content':
                    _this.contentTemplate = item.template;
                    break;
                case 'toolbar':
                    _this.toolbarTemplate = item.template;
                    break;
                default:
                    _this.fileTemplate = item.template;
                    break;
            }
        });
    };
    FileUpload.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.mode === 'advanced') {
            this.zone.runOutsideAngular(function () {
                if (_this.content)
                    _this.content.nativeElement.addEventListener('dragover', _this.onDragOver.bind(_this));
            });
        }
    };
    FileUpload.prototype.onFileSelect = function (event) {
        if (event.type !== 'drop' && this.isIE11() && this.duplicateIEEvent) {
            this.duplicateIEEvent = false;
            return;
        }
        this.msgs = [];
        if (!this.multiple) {
            this.files = [];
        }
        var files = event.dataTransfer ? event.dataTransfer.files : event.target.files;
        for (var i = 0; i < files.length; i++) {
            var file = files[i];
            if (!this.isFileSelected(file)) {
                if (this.validate(file)) {
                    if (this.isImage(file)) {
                        file.objectURL = this.sanitizer.bypassSecurityTrustUrl((window.URL.createObjectURL(files[i])));
                    }
                    this.files.push(files[i]);
                }
            }
        }
        this.onSelect.emit({ originalEvent: event, files: files });
        if (this.hasFiles() && this.auto) {
            this.upload();
        }
        if (event.type !== 'drop' && this.isIE11()) {
            this.clearIEInput();
        }
        else {
            this.clearInputElement();
        }
    };
    FileUpload.prototype.isFileSelected = function (file) {
        for (var _i = 0, _a = this.files; _i < _a.length; _i++) {
            var sFile = _a[_i];
            if ((sFile.name + sFile.type + sFile.size) === (file.name + file.type + file.size)) {
                return true;
            }
        }
        return false;
    };
    FileUpload.prototype.isIE11 = function () {
        return !!window['MSInputMethodContext'] && !!document['documentMode'];
    };
    FileUpload.prototype.validate = function (file) {
        if (this.accept && !this.isFileTypeValid(file)) {
            this.msgs.push({
                severity: 'error',
                summary: this.invalidFileTypeMessageSummary.replace('{0}', file.name),
                detail: this.invalidFileTypeMessageDetail.replace('{0}', this.accept)
            });
            return false;
        }
        if (this.maxFileSize && file.size > this.maxFileSize) {
            this.msgs.push({
                severity: 'error',
                summary: this.invalidFileSizeMessageSummary.replace('{0}', file.name),
                detail: this.invalidFileSizeMessageDetail.replace('{0}', this.formatSize(this.maxFileSize))
            });
            return false;
        }
        return true;
    };
    FileUpload.prototype.isFileTypeValid = function (file) {
        var acceptableTypes = this.accept.split(',').map(function (type) { return type.trim(); });
        for (var _i = 0, acceptableTypes_1 = acceptableTypes; _i < acceptableTypes_1.length; _i++) {
            var type = acceptableTypes_1[_i];
            var acceptable = this.isWildcard(type) ? this.getTypeClass(file.type) === this.getTypeClass(type)
                : file.type == type || this.getFileExtension(file).toLowerCase() === type.toLowerCase();
            if (acceptable) {
                return true;
            }
        }
        return false;
    };
    FileUpload.prototype.getTypeClass = function (fileType) {
        return fileType.substring(0, fileType.indexOf('/'));
    };
    FileUpload.prototype.isWildcard = function (fileType) {
        return fileType.indexOf('*') !== -1;
    };
    FileUpload.prototype.getFileExtension = function (file) {
        return '.' + file.name.split('.').pop();
    };
    FileUpload.prototype.isImage = function (file) {
        return /^image\//.test(file.type);
    };
    FileUpload.prototype.onImageLoad = function (img) {
        window.URL.revokeObjectURL(img.src);
    };
    FileUpload.prototype.upload = function () {
        var _this = this;
        if (this.customUpload) {
            this.uploadHandler.emit({
                files: this.files
            });
        }
        else {
            this.uploading = true;
            this.msgs = [];
            var formData_1 = new FormData();
            this.onBeforeUpload.emit({
                'formData': formData_1
            });
            for (var i = 0; i < this.files.length; i++) {
                formData_1.append(this.name, this.files[i], this.files[i].name);
            }
            this.http.post(this.url, formData_1, {
                headers: this.headers, reportProgress: true, observe: 'events', withCredentials: this.withCredentials
            }).subscribe(function (event) {
                switch (event.type) {
                    case http_1.HttpEventType.Sent:
                        _this.onSend.emit({
                            originalEvent: event,
                            'formData': formData_1
                        });
                        break;
                    case http_1.HttpEventType.Response:
                        _this.uploading = false;
                        _this.progress = 0;
                        if (event['status'] >= 200 && event['status'] < 300) {
                            _this.onUpload.emit({ originalEvent: event, files: _this.files });
                        }
                        else {
                            _this.onError.emit({ files: _this.files });
                        }
                        _this.clear();
                        break;
                    case http_1.HttpEventType.UploadProgress: {
                        if (event['loaded']) {
                            _this.progress = Math.round((event['loaded'] * 100) / event['total']);
                        }
                        _this.onProgress.emit({ originalEvent: event, progress: _this.progress });
                        break;
                    }
                }
            }, function (error) {
                _this.uploading = false;
                _this.onError.emit({ files: _this.files, error: error });
            });
        }
    };
    FileUpload.prototype.clear = function () {
        this.files = [];
        this.onClear.emit();
        this.clearInputElement();
    };
    FileUpload.prototype.remove = function (event, index) {
        this.clearInputElement();
        this.onRemove.emit({ originalEvent: event, file: this.files[index] });
        this.files.splice(index, 1);
    };
    FileUpload.prototype.clearInputElement = function () {
        if (this.advancedFileInput && this.advancedFileInput.nativeElement) {
            this.advancedFileInput.nativeElement.value = '';
        }
        if (this.basicFileInput && this.basicFileInput.nativeElement) {
            this.basicFileInput.nativeElement.value = '';
        }
    };
    FileUpload.prototype.clearIEInput = function () {
        if (this.advancedFileInput && this.advancedFileInput.nativeElement) {
            this.duplicateIEEvent = true; //IE11 fix to prevent onFileChange trigger again
            this.advancedFileInput.nativeElement.value = '';
        }
    };
    FileUpload.prototype.hasFiles = function () {
        return this.files && this.files.length > 0;
    };
    FileUpload.prototype.onDragEnter = function (e) {
        if (!this.disabled) {
            e.stopPropagation();
            e.preventDefault();
        }
    };
    FileUpload.prototype.onDragOver = function (e) {
        if (!this.disabled) {
            domhandler_1.DomHandler.addClass(this.content.nativeElement, 'ui-fileupload-highlight');
            this.dragHighlight = true;
            e.stopPropagation();
            e.preventDefault();
        }
    };
    FileUpload.prototype.onDragLeave = function (event) {
        if (!this.disabled) {
            domhandler_1.DomHandler.removeClass(this.content.nativeElement, 'ui-fileupload-highlight');
        }
    };
    FileUpload.prototype.onDrop = function (event) {
        if (!this.disabled) {
            domhandler_1.DomHandler.removeClass(this.content.nativeElement, 'ui-fileupload-highlight');
            event.stopPropagation();
            event.preventDefault();
            var files = event.dataTransfer ? event.dataTransfer.files : event.target.files;
            var allowDrop = this.multiple || (files && files.length === 1);
            if (allowDrop) {
                this.onFileSelect(event);
            }
        }
    };
    FileUpload.prototype.onFocus = function () {
        this.focus = true;
    };
    FileUpload.prototype.onBlur = function () {
        this.focus = false;
    };
    FileUpload.prototype.formatSize = function (bytes) {
        if (bytes == 0) {
            return '0 B';
        }
        var k = 1000, dm = 3, sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'], i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    };
    FileUpload.prototype.onSimpleUploaderClick = function (event) {
        if (this.hasFiles()) {
            this.upload();
        }
    };
    FileUpload.prototype.getBlockableElement = function () {
        return this.el.nativeElement.children[0];
    };
    FileUpload.prototype.ngOnDestroy = function () {
        if (this.content && this.content.nativeElement) {
            this.content.nativeElement.removeEventListener('dragover', this.onDragOver);
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], FileUpload.prototype, "name", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], FileUpload.prototype, "url", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], FileUpload.prototype, "method", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], FileUpload.prototype, "multiple", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], FileUpload.prototype, "accept", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], FileUpload.prototype, "disabled", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], FileUpload.prototype, "auto", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], FileUpload.prototype, "withCredentials", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], FileUpload.prototype, "maxFileSize", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], FileUpload.prototype, "invalidFileSizeMessageSummary", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], FileUpload.prototype, "invalidFileSizeMessageDetail", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], FileUpload.prototype, "invalidFileTypeMessageSummary", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], FileUpload.prototype, "invalidFileTypeMessageDetail", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], FileUpload.prototype, "style", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], FileUpload.prototype, "styleClass", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], FileUpload.prototype, "previewWidth", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], FileUpload.prototype, "chooseLabel", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], FileUpload.prototype, "uploadLabel", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], FileUpload.prototype, "cancelLabel", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], FileUpload.prototype, "showUploadButton", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], FileUpload.prototype, "showCancelButton", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], FileUpload.prototype, "mode", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", http_1.HttpHeaders)
    ], FileUpload.prototype, "headers", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], FileUpload.prototype, "customUpload", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], FileUpload.prototype, "onBeforeUpload", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], FileUpload.prototype, "onSend", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], FileUpload.prototype, "onUpload", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], FileUpload.prototype, "onError", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], FileUpload.prototype, "onClear", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], FileUpload.prototype, "onRemove", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], FileUpload.prototype, "onSelect", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], FileUpload.prototype, "onProgress", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], FileUpload.prototype, "uploadHandler", void 0);
    __decorate([
        core_1.ContentChildren(shared_1.PrimeTemplate),
        __metadata("design:type", core_1.QueryList)
    ], FileUpload.prototype, "templates", void 0);
    __decorate([
        core_1.ViewChild('advancedfileinput', { static: false }),
        __metadata("design:type", core_1.ElementRef)
    ], FileUpload.prototype, "advancedFileInput", void 0);
    __decorate([
        core_1.ViewChild('basicfileinput', { static: false }),
        __metadata("design:type", core_1.ElementRef)
    ], FileUpload.prototype, "basicFileInput", void 0);
    __decorate([
        core_1.ViewChild('content', { static: false }),
        __metadata("design:type", core_1.ElementRef)
    ], FileUpload.prototype, "content", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], FileUpload.prototype, "files", void 0);
    FileUpload = __decorate([
        core_1.Component({
            selector: 'p-fileUpload',
            template: "\n        <div [ngClass]=\"'ui-fileupload ui-widget'\" [ngStyle]=\"style\" [class]=\"styleClass\" *ngIf=\"mode === 'advanced'\">\n            <div class=\"ui-fileupload-buttonbar ui-widget-header ui-corner-top\">\n                <span class=\"ui-fileupload-choose\" [label]=\"chooseLabel\" icon=\"pi pi-plus\" pButton [ngClass]=\"{'ui-state-focus': focus, 'ui-state-disabled':disabled}\"> \n                    <input #advancedfileinput type=\"file\" (change)=\"onFileSelect($event)\" [multiple]=\"multiple\" [accept]=\"accept\" [disabled]=\"disabled\" (focus)=\"onFocus()\" (blur)=\"onBlur()\">\n                </span>\n\n                <p-button *ngIf=\"!auto&&showUploadButton\" type=\"button\" [label]=\"uploadLabel\" icon=\"pi pi-upload\" (click)=\"upload()\" [disabled]=\"!hasFiles()\"></p-button>\n                <p-button *ngIf=\"!auto&&showCancelButton\" type=\"button\" [label]=\"cancelLabel\" icon=\"pi pi-times\" (click)=\"clear()\" [disabled]=\"!hasFiles() ||\u00A0uploading\"></p-button>\n\n                <ng-container *ngTemplateOutlet=\"toolbarTemplate\"></ng-container>\n            </div>\n            <div #content [ngClass]=\"{'ui-fileupload-content ui-widget-content ui-corner-bottom':true}\"\n                 (dragenter)=\"onDragEnter($event)\" (dragleave)=\"onDragLeave($event)\" (drop)=\"onDrop($event)\">\n                <p-progressBar [value]=\"progress\" [showValue]=\"false\" *ngIf=\"hasFiles()\"></p-progressBar>\n\n                <p-messages [value]=\"msgs\" [enableService]=\"false\"></p-messages>\n\n                <div class=\"ui-fileupload-files\" *ngIf=\"hasFiles()\">\n                    <div *ngIf=\"!fileTemplate\">\n                        <div class=\"ui-fileupload-row\" *ngFor=\"let file of files; let i = index;\">\n                            <div><img [src]=\"file.objectURL\" *ngIf=\"isImage(file)\" [width]=\"previewWidth\" /></div>\n                            <div>{{file.name}}</div>\n                            <div>{{formatSize(file.size)}}</div>\n                            <div>\n                                <button type=\"button\" icon=\"pi pi-times\" pButton (click)=\"remove($event,i)\" [disabled]=\"uploading\"></button>\n                            </div>\n                        </div>\n                    </div>\n                    <div *ngIf=\"fileTemplate\">\n                        <ng-template ngFor [ngForOf]=\"files\" [ngForTemplate]=\"fileTemplate\"></ng-template>\n                    </div>\n                </div>\n                <ng-container *ngTemplateOutlet=\"contentTemplate\"></ng-container>\n            </div>\n        </div>\n        <span *ngIf=\"mode === 'basic'\" [ngClass]=\"{'ui-button ui-fileupload-choose ui-widget ui-state-default ui-corner-all ui-button-text-icon-left': true, \n                'ui-fileupload-choose-selected': hasFiles(),'ui-state-focus': focus, 'ui-state-disabled':disabled}\"\n              [ngStyle]=\"style\" [class]=\"styleClass\" (mouseup)=\"onSimpleUploaderClick($event)\">\n            <span class=\"ui-button-icon-left pi\" [ngClass]=\"{'pi-plus': !hasFiles()||auto, 'pi-upload': hasFiles()&&!auto}\"></span>\n            <span class=\"ui-button-text ui-clickable\">{{auto ? chooseLabel : hasFiles() ? files[0].name : chooseLabel}}</span>\n            <input #basicfileinput type=\"file\" [accept]=\"accept\" [multiple]=\"multiple\" [disabled]=\"disabled\"\n                   (change)=\"onFileSelect($event)\" *ngIf=\"!hasFiles()\" (focus)=\"onFocus()\" (blur)=\"onBlur()\">\n        </span>\n    "
        }),
        __metadata("design:paramtypes", [core_1.ElementRef, platform_browser_1.DomSanitizer, core_1.NgZone, http_1.HttpClient])
    ], FileUpload);
    return FileUpload;
}());
exports.FileUpload = FileUpload;
var FileUploadModule = /** @class */ (function () {
    function FileUploadModule() {
    }
    FileUploadModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, shared_1.SharedModule, button_1.ButtonModule, progressbar_1.ProgressBarModule, messages_1.MessagesModule],
            exports: [FileUpload, shared_1.SharedModule, button_1.ButtonModule, progressbar_1.ProgressBarModule, messages_1.MessagesModule],
            declarations: [FileUpload]
        })
    ], FileUploadModule);
    return FileUploadModule;
}());
exports.FileUploadModule = FileUploadModule;
//# sourceMappingURL=fileupload.js.map

/***/ }),

/***/ "./node_modules/primeng/components/messages/messages.js":
/*!**************************************************************!*\
  !*** ./node_modules/primeng/components/messages/messages.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
var animations_1 = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
var messageservice_1 = __webpack_require__(/*! ../common/messageservice */ "./node_modules/primeng/components/common/messageservice.js");
var Messages = /** @class */ (function () {
    function Messages(messageService) {
        this.messageService = messageService;
        this.closable = true;
        this.enableService = true;
        this.showTransitionOptions = '300ms ease-out';
        this.hideTransitionOptions = '250ms ease-in';
        this.valueChange = new core_1.EventEmitter();
    }
    Messages.prototype.ngOnInit = function () {
        var _this = this;
        if (this.messageService && this.enableService) {
            this.messageSubscription = this.messageService.messageObserver.subscribe(function (messages) {
                if (messages) {
                    if (messages instanceof Array) {
                        var filteredMessages = messages.filter(function (m) { return _this.key === m.key; });
                        _this.value = _this.value ? _this.value.concat(filteredMessages) : filteredMessages.slice();
                    }
                    else if (_this.key === messages.key) {
                        _this.value = _this.value ? _this.value.concat([messages]) : [messages];
                    }
                }
            });
            this.clearSubscription = this.messageService.clearObserver.subscribe(function (key) {
                if (key) {
                    if (_this.key === key) {
                        _this.value = null;
                    }
                }
                else {
                    _this.value = null;
                }
            });
        }
    };
    Messages.prototype.hasMessages = function () {
        return this.value && this.value.length > 0;
    };
    Messages.prototype.getSeverityClass = function () {
        return this.value[0].severity;
    };
    Messages.prototype.clear = function (event) {
        this.value = [];
        this.valueChange.emit(this.value);
        event.preventDefault();
    };
    Object.defineProperty(Messages.prototype, "icon", {
        get: function () {
            var icon = null;
            if (this.hasMessages()) {
                var msg = this.value[0];
                switch (msg.severity) {
                    case 'success':
                        icon = 'pi-check';
                        break;
                    case 'info':
                        icon = 'pi-info-circle';
                        break;
                    case 'error':
                        icon = 'pi-times';
                        break;
                    case 'warn':
                        icon = 'pi-exclamation-triangle';
                        break;
                    default:
                        icon = 'pi-info-circle';
                        break;
                }
            }
            return icon;
        },
        enumerable: true,
        configurable: true
    });
    Messages.prototype.ngOnDestroy = function () {
        if (this.messageSubscription) {
            this.messageSubscription.unsubscribe();
        }
        if (this.clearSubscription) {
            this.clearSubscription.unsubscribe();
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], Messages.prototype, "value", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], Messages.prototype, "closable", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], Messages.prototype, "style", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Messages.prototype, "styleClass", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], Messages.prototype, "enableService", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Messages.prototype, "key", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Messages.prototype, "showTransitionOptions", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Messages.prototype, "hideTransitionOptions", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], Messages.prototype, "valueChange", void 0);
    Messages = __decorate([
        core_1.Component({
            selector: 'p-messages',
            template: "\n        <div *ngIf=\"hasMessages()\" class=\"ui-messages ui-widget ui-corner-all\"\n                    [ngClass]=\"{'ui-messages-info':(value[0].severity === 'info'),\n                    'ui-messages-warn':(value[0].severity === 'warn'),\n                    'ui-messages-error':(value[0].severity === 'error'),\n                    'ui-messages-success':(value[0].severity === 'success')}\"\n                    [ngStyle]=\"style\" [class]=\"styleClass\" [@messageAnimation]=\"{value: 'visible', params: {showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions}}\">\n            <a tabindex=\"0\" class=\"ui-messages-close\" (click)=\"clear($event)\" (keydown.enter)=\"clear($event)\" *ngIf=\"closable\">\n                <i class=\"pi pi-times\"></i>\n            </a>\n            <span class=\"ui-messages-icon pi\" [ngClass]=\"icon\"></span>\n            <ul>\n                <li *ngFor=\"let msg of value\">\n                    <span *ngIf=\"msg.summary\" class=\"ui-messages-summary\" [innerHTML]=\"msg.summary\"></span>\n                    <span *ngIf=\"msg.detail\" class=\"ui-messages-detail\" [innerHTML]=\"msg.detail\"></span>\n                </li>\n            </ul>\n        </div>\n    ",
            animations: [
                animations_1.trigger('messageAnimation', [
                    animations_1.state('visible', animations_1.style({
                        transform: 'translateY(0)',
                        opacity: 1
                    })),
                    animations_1.transition('void => *', [
                        animations_1.style({ transform: 'translateY(-25%)', opacity: 0 }),
                        animations_1.animate('{{showTransitionParams}}')
                    ]),
                    animations_1.transition('* => void', [
                        animations_1.animate(('{{hideTransitionParams}}'), animations_1.style({
                            opacity: 0,
                            transform: 'translateY(-25%)'
                        }))
                    ])
                ])
            ]
        }),
        __param(0, core_1.Optional()),
        __metadata("design:paramtypes", [messageservice_1.MessageService])
    ], Messages);
    return Messages;
}());
exports.Messages = Messages;
var MessagesModule = /** @class */ (function () {
    function MessagesModule() {
    }
    MessagesModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            exports: [Messages],
            declarations: [Messages]
        })
    ], MessagesModule);
    return MessagesModule;
}());
exports.MessagesModule = MessagesModule;
//# sourceMappingURL=messages.js.map

/***/ }),

/***/ "./node_modules/primeng/components/progressbar/progressbar.js":
/*!********************************************************************!*\
  !*** ./node_modules/primeng/components/progressbar/progressbar.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
var ProgressBar = /** @class */ (function () {
    function ProgressBar() {
        this.showValue = true;
        this.unit = '%';
        this.mode = 'determinate';
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ProgressBar.prototype, "value", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], ProgressBar.prototype, "showValue", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ProgressBar.prototype, "style", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ProgressBar.prototype, "styleClass", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ProgressBar.prototype, "unit", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ProgressBar.prototype, "mode", void 0);
    ProgressBar = __decorate([
        core_1.Component({
            selector: 'p-progressBar',
            template: "\n        <div [class]=\"styleClass\" [ngStyle]=\"style\" role=\"progressbar\" aria-valuemin=\"0\" [attr.aria-valuenow]=\"value\" aria-valuemax=\"100\"\n            [ngClass]=\"{'ui-progressbar ui-widget ui-widget-content ui-corner-all': true, 'ui-progressbar-determinate': (mode === 'determinate'), 'ui-progressbar-indeterminate': (mode === 'indeterminate')}\">\n            <div class=\"ui-progressbar-value ui-progressbar-value-animate ui-widget-header ui-corner-all\" [style.width]=\"value + '%'\" style=\"display:block\"></div>\n            <div class=\"ui-progressbar-label\" [style.display]=\"value != null ? 'block' : 'none'\" *ngIf=\"showValue\">{{value}}{{unit}}</div>\n        </div>\n    "
        })
    ], ProgressBar);
    return ProgressBar;
}());
exports.ProgressBar = ProgressBar;
var ProgressBarModule = /** @class */ (function () {
    function ProgressBarModule() {
    }
    ProgressBarModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            exports: [ProgressBar],
            declarations: [ProgressBar]
        })
    ], ProgressBarModule);
    return ProgressBarModule;
}());
exports.ProgressBarModule = ProgressBarModule;
//# sourceMappingURL=progressbar.js.map

/***/ }),

/***/ "./node_modules/primeng/components/progressspinner/progressspinner.js":
/*!****************************************************************************!*\
  !*** ./node_modules/primeng/components/progressspinner/progressspinner.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
var ProgressSpinner = /** @class */ (function () {
    function ProgressSpinner() {
        this.strokeWidth = "2";
        this.fill = "none";
        this.animationDuration = "2s";
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ProgressSpinner.prototype, "style", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ProgressSpinner.prototype, "styleClass", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ProgressSpinner.prototype, "strokeWidth", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ProgressSpinner.prototype, "fill", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ProgressSpinner.prototype, "animationDuration", void 0);
    ProgressSpinner = __decorate([
        core_1.Component({
            selector: 'p-progressSpinner',
            template: "\n        <div class=\"ui-progress-spinner\" [ngStyle]=\"style\" [ngClass]=\"styleClass\">\n            <svg class=\"ui-progress-spinner-svg\" viewBox=\"25 25 50 50\" [style.animation-duration]=\"animationDuration\">\n                <circle class=\"ui-progress-spinner-circle\" cx=\"50\" cy=\"50\" r=\"20\" [attr.fill]=\"fill\" [attr.stroke-width]=\"strokeWidth\" stroke-miterlimit=\"10\"/>\n            </svg>\n        </div>\n    "
        })
    ], ProgressSpinner);
    return ProgressSpinner;
}());
exports.ProgressSpinner = ProgressSpinner;
var ProgressSpinnerModule = /** @class */ (function () {
    function ProgressSpinnerModule() {
    }
    ProgressSpinnerModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            exports: [ProgressSpinner],
            declarations: [ProgressSpinner]
        })
    ], ProgressSpinnerModule);
    return ProgressSpinnerModule;
}());
exports.ProgressSpinnerModule = ProgressSpinnerModule;
//# sourceMappingURL=progressspinner.js.map

/***/ }),

/***/ "./node_modules/primeng/dialog.js":
/*!****************************************!*\
  !*** ./node_modules/primeng/dialog.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/dialog/dialog */ "./node_modules/primeng/components/dialog/dialog.js"));

/***/ }),

/***/ "./node_modules/primeng/fileupload.js":
/*!********************************************!*\
  !*** ./node_modules/primeng/fileupload.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/fileupload/fileupload */ "./node_modules/primeng/components/fileupload/fileupload.js"));

/***/ }),

/***/ "./node_modules/primeng/progressspinner.js":
/*!*************************************************!*\
  !*** ./node_modules/primeng/progressspinner.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/progressspinner/progressspinner */ "./node_modules/primeng/components/progressspinner/progressspinner.js"));

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/editais/editais-pesquisa/editais-pesquisa.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/editais/editais-pesquisa/editais-pesquisa.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"ui-g\">\r\n\r\n    <form autocomplete=\"off\" (ngSubmit)=\"pesquisar()\">\r\n\r\n      <div class=\"ui-g-12\">\r\n        <h1>Editais</h1>\r\n      </div>\r\n\r\n      <div class=\"ui-g-12 ui-md-6 ui-fluid\">\r\n        <label>Ano</label>\r\n        <input pInputText type=\"text\" name=\"ano\" [(ngModel)]=\"filtro.ano\">\r\n      </div>\r\n\r\n      <div class=\"ui-g-12 ui-md-6 ui-fluid\">\r\n        <label>Processo</label>\r\n        <input pInputText type=\"text\" name=\"processo\" [(ngModel)]=\"filtro.processo\">\r\n      </div>\r\n\r\n      <div class=\"ui-g-12\">\r\n        <button pButton type=\"submit\" label=\"Pesquisar\"></button>\r\n      </div>\r\n\r\n    </form>\r\n\r\n  </div>\r\n\r\n  <div class=\"ui-g\">\r\n    <div class=\"ui-g-12\">\r\n      <p-table [value]=\"editais\" [responsive]=\"true\"\r\n        [paginator]=\"true\" [rows]=\"filtro.itensPorPagina\"\r\n        [lazy]=\"true\" [totalRecords]=\"totalRegistros\"\r\n        (onLazyLoad)=\"aoMudarPagina($event)\"\r\n        #tabela>\r\n        <ng-template pTemplate=\"header\">\r\n          <tr>\r\n            <th>Ano</th>\r\n            <th>Processo</th>\r\n            <th>Cidade</th>\r\n            <th>Estado</th>\r\n            <!--<th>Objeto</th>-->\r\n            <th class=\"col-data-header\">Abertura</th>\r\n            <th>Concorrente</th>\r\n            <th class=\"col-acoes-header\"></th>\r\n          </tr>\r\n        </ng-template>\r\n\r\n        <ng-template pTemplate=\"body\" let-edital>\r\n          <tr>\r\n            <td>{{ edital.ano }}</td>\r\n            <td>{{ edital.processo }}</td>\r\n            <td>{{ edital.cidade?.nome }}</td>\r\n            <td>{{ edital.cidade?.estado.nome }}</td>\r\n            <!--<td>{{ edital.objeto }}</td>-->\r\n            <td class=\"col-data\">{{ edital.dataAbertura | date:'dd/MM/yyyy' }}</td>\r\n            <td>{{ edital.concorrente?.nome }}</td>\r\n            <td class=\"col-acoes\">\r\n              <a pButton icon=\"fa fa-pencil\" class=\"col-acoes-button\"\r\n                pTooltip=\"Editar\" tooltipPosition=\"top\"\r\n                [routerLink]=\"['/editais', edital.id]\"></a>\r\n\r\n              <button pButton icon=\"fa fa-trash\" class=\"col-acoes-button\"\r\n                pTooltip=\"Excluir\" tooltipPosition=\"top\"\r\n                (click)=\"confirmarExclusao(edital)\"></button>\r\n            </td>\r\n          </tr>\r\n        </ng-template>\r\n\r\n        <ng-template pTemplate=\"emptymessage\">\r\n          <tr>\r\n            <td colspan=\"7\">\r\n              Nenhum edital encontrado\r\n            </td>\r\n          </tr>\r\n        </ng-template>\r\n      </p-table>\r\n    </div>\r\n\r\n    <div class=\"ui-g-12\">\r\n      <a pButton label=\"Novo Edital\" routerLink=\"/editais/novo\"></a>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/editais/edital-cadastro/edital-cadastro.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/editais/edital-cadastro/edital-cadastro.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <form #f=\"ngForm\" autocomplete=\"off\" (ngSubmit)=\"salvar(f)\">\r\n\r\n    <div class=\"ui-g\">\r\n      <div class=\"ui-g-12\">\r\n        <h1>{{ editando ? 'Edição de' : 'Novo' }} Edital</h1>\r\n      </div>\r\n\r\n      <div class=\"ui-g-12 ui-md-6 ui-fluid\">\r\n        <label>Ano</label>\r\n        <input pInputText type=\"number\" name=\"ano\"\r\n          [(ngModel)]=\"edital.ano\"\r\n          #ano=\"ngModel\" required minlength=\"4\" maxlength=\"4\">\r\n\r\n        <app-message [control]=\"ano\" error=\"required\"\r\n          text=\"Informe o ano\"></app-message>\r\n        <app-message [control]=\"ano\" error=\"minlength\"\r\n          text=\"Mínimo de {{ ano?.errors?.minlength?.requiredLength }} caracteres\"></app-message>\r\n      </div>\r\n\r\n      <div class=\"ui-g-12 ui-md-6 ui-fluid\">\r\n        <label>Processo</label>\r\n        <input pInputText type=\"text\" name=\"processo\"\r\n          [(ngModel)]=\"edital.processo\"\r\n          #processo=\"ngModel\" required minlength=\"1\" maxlength=\"30\">\r\n\r\n        <app-message [control]=\"processo\" error=\"required\"\r\n          text=\"Informe o processo\"></app-message>\r\n        <app-message [control]=\"processo\" error=\"minlength\"\r\n          text=\"Mínimo de {{ processo?.errors?.minlength?.requiredLength }} caracteres\"></app-message>\r\n      </div>\r\n\r\n      <div class=\"ui-g-12 ui-md-6 ui-fluid\">\r\n        <label>Estado</label>\r\n\r\n        <p-dropdown placeholder=\"Selecione...\" [autoWidth]=\"false\"\r\n          [filter]=\"true\" [options]=\"estados\"\r\n          [(ngModel)]=\"estadoSelecionado\" name=\"estadoSelecionado\"\r\n          (onChange)=\"carregarCidades()\"\r\n          #estado=\"ngModel\" required></p-dropdown>\r\n\r\n        <app-message [control]=\"estado\" error=\"required\"\r\n          text=\"Informe o estado\"></app-message>\r\n      </div>\r\n\r\n      <div class=\"ui-g-12 ui-md-6 ui-fluid\">\r\n          <label>Cidade</label>\r\n\r\n          <p-dropdown placeholder=\"Selecione...\" [autoWidth]=\"false\"\r\n            [filter]=\"true\" [options]=\"cidades\"\r\n            [(ngModel)]=\"edital.cidade.codigo\" name=\"cidade\"\r\n            #cidade=\"ngModel\" required\r\n            [disabled]=\"!estadoSelecionado\"></p-dropdown>\r\n\r\n          <app-message [control]=\"cidade\" error=\"required\"\r\n            text=\"Informe a cidade\"></app-message>\r\n      </div>\r\n\r\n      <div class=\"ui-g-12 ui-md-12 ui-fluid\">\r\n        <label>Objeto</label>\r\n        <textarea pInputTextarea\r\n          [(ngModel)]=\"edital.objeto\" name=\"objeto\"\r\n          #objeto=\"ngModel\" autoResize=\"autoResize\">\r\n        </textarea>\r\n      </div>\r\n\r\n      <div class=\"ui-g-6 ui-md-3 ui-fluid\">\r\n        <label>Abertura</label>\r\n        <p-calendar name=\"abertura\" dateFormat=\"dd/mm/yy\"\r\n        [inline]=\"false\" [readonlyInput]=\"false\" [showIcon]=\"false\"\r\n        [(ngModel)]=\"edital.dataAbertura\"\r\n        #abertura=\"ngModel\"></p-calendar>\r\n      </div>\r\n      <!--[inline]=\"false\" [readonlyInput]=\"false\" [showIcon]=\"false\">-->\r\n\r\n      <div class=\"ui-g-12 ui-md-6 ui-fluid\">\r\n        <label>Concorrente</label>\r\n\r\n        <p-dropdown placeholder=\"Selecione...\" [autoWidth]=\"false\"\r\n          [filter]=\"true\" [options]=\"concorrentes\"\r\n          [(ngModel)]=\"edital.concorrente.id\" name=\"concorrente\"\r\n          #concorrente=\"ngModel\" [showClear]=\"true\"></p-dropdown>\r\n      </div>\r\n\r\n      <div class=\"ui-g-6 ui-g-offset-6 ui-md-2 ui-md-offset-10 ui-fluid\"\r\n          *ngIf=\"!edital.anexo\">\r\n          <p-fileUpload name=\"anexo\" mode=\"basic\" auto=\"true\" maxFileSize=\"100000000\"\r\n            chooseLabel=\"Anexar\" accept=\"image/*,application/*\"\r\n            [url]=\"urlUploadAnexo\"\r\n            (onBeforeSend)=\"antesUploadAnexo($event)\"\r\n            (onUpload)=\"aoTerminarUploadAnexo($event)\"\r\n            (onError)=\"erroUpload($event)\"\r\n            [hidden]=\"uploadEmAndamento\"></p-fileUpload>\r\n\r\n          <p-progressSpinner [hidden]=\"!uploadEmAndamento\"\r\n            [style]=\"{ width: '25px', height: '25px' }\"></p-progressSpinner>\r\n        </div>\r\n\r\n        <div class=\"ui-g-12\" dir=\"rtl\"\r\n          *ngIf=\"edital.anexo\">\r\n          <button pButton type=\"button\" class=\"ui-button-danger\"\r\n            icon=\"fa fa-close\" pTooltip=\"Remover anexo\" tooltipPosition=\"top\"\r\n            (click)=\"removerAnexo()\"></button>\r\n\r\n          <a target=\"_blank\" pTooltip=\"Baixar anexo\" tooltipPosition=\"top\"\r\n            [href]=\"edital.urlAnexo\">{{ nomeAnexo }}</a>\r\n        </div>\r\n\r\n      <div class=\"ui-g-12\">\r\n        <button pButton type=\"submit\" label=\"Salvar\" [disabled]=\"f.invalid || uploadEmAndamento\"></button>\r\n        <button pButton type=\"button\" label=\"Novo\" class=\"ui-button-info\"\r\n          (click)=\"novo(f)\"></button>\r\n\r\n        <a routerLink=\"/editais\">Voltar para a pesquisa</a>\r\n      </div>\r\n    </div>\r\n\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/concorrentes/concorrente.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/concorrentes/concorrente.service.ts ***!
  \*****************************************************/
/*! exports provided: ConcorrenteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConcorrenteService", function() { return ConcorrenteService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _seguranca_editalsniffer_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../seguranca/editalsniffer-http */ "./src/app/seguranca/editalsniffer-http.ts");




let ConcorrenteService = class ConcorrenteService {
    constructor(http) {
        this.http = http;
        this.concorrentesUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}/concorrentes`;
    }
    listarTodos() {
        return this.http.get(this.concorrentesUrl);
    }
};
ConcorrenteService.ctorParameters = () => [
    { type: _seguranca_editalsniffer_http__WEBPACK_IMPORTED_MODULE_3__["EditalSnifferHttp"] }
];
ConcorrenteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ConcorrenteService);



/***/ }),

/***/ "./src/app/core/model.ts":
/*!*******************************!*\
  !*** ./src/app/core/model.ts ***!
  \*******************************/
/*! exports provided: Estado, Cidade, Endereco, Contato, Pessoa, Categoria, Lancamento */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Estado", function() { return Estado; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cidade", function() { return Cidade; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Endereco", function() { return Endereco; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contato", function() { return Contato; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pessoa", function() { return Pessoa; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Categoria", function() { return Categoria; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lancamento", function() { return Lancamento; });
class Estado {
}
class Cidade {
    constructor() {
        this.estado = new Estado();
    }
}
class Endereco {
    constructor() {
        this.cidade = new Cidade();
    }
}
class Contato {
    constructor(codigo, nome, email, telefone) {
        this.codigo = codigo;
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
    }
}
Contato.ctorParameters = () => [
    { type: Number },
    { type: String },
    { type: String },
    { type: String }
];
class Pessoa {
    constructor() {
        this.endereco = new Endereco();
        this.ativo = true;
        this.contatos = new Array();
    }
}
class Categoria {
}
class Lancamento {
    constructor() {
        this.tipo = 'RECEITA';
        this.pessoa = new Pessoa();
        this.categoria = new Categoria();
    }
}


/***/ }),

/***/ "./src/app/core/model/Concorrente.ts":
/*!*******************************************!*\
  !*** ./src/app/core/model/Concorrente.ts ***!
  \*******************************************/
/*! exports provided: Concorrente */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Concorrente", function() { return Concorrente; });
class Concorrente {
}


/***/ }),

/***/ "./src/app/core/model/Edital.ts":
/*!**************************************!*\
  !*** ./src/app/core/model/Edital.ts ***!
  \**************************************/
/*! exports provided: Edital */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Edital", function() { return Edital; });
/* harmony import */ var _Concorrente__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Concorrente */ "./src/app/core/model/Concorrente.ts");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../model */ "./src/app/core/model.ts");


class Edital {
    constructor() {
        this.cidade = new _model__WEBPACK_IMPORTED_MODULE_1__["Cidade"]();
        this.concorrente = new _Concorrente__WEBPACK_IMPORTED_MODULE_0__["Concorrente"]();
    }
}


/***/ }),

/***/ "./src/app/editais/editais-pesquisa/editais-pesquisa.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/editais/editais-pesquisa/editais-pesquisa.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXRhaXMvZWRpdGFpcy1wZXNxdWlzYS9lZGl0YWlzLXBlc3F1aXNhLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/editais/editais-pesquisa/editais-pesquisa.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/editais/editais-pesquisa/editais-pesquisa.component.ts ***!
  \************************************************************************/
/*! exports provided: EditaisPesquisaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditaisPesquisaComponent", function() { return EditaisPesquisaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var primeng_components_common_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/components/common/api */ "./node_modules/primeng/components/common/api.js");
/* harmony import */ var primeng_components_common_api__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_components_common_api__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/components/common/messageservice */ "./node_modules/primeng/components/common/messageservice.js");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _core_error_handler_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../core/error-handler.service */ "./src/app/core/error-handler.service.ts");
/* harmony import */ var _edital_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../edital.service */ "./src/app/editais/edital.service.ts");







let EditaisPesquisaComponent = class EditaisPesquisaComponent {
    constructor(editalService, errorHandler, confirmation, messageService, title) {
        this.editalService = editalService;
        this.errorHandler = errorHandler;
        this.confirmation = confirmation;
        this.messageService = messageService;
        this.title = title;
        this.totalRegistros = 0;
        this.filtro = new _edital_service__WEBPACK_IMPORTED_MODULE_6__["EditalFiltro"]();
        this.editais = [];
    }
    ngOnInit() {
        this.title.setTitle('Pesquisa de editais');
    }
    pesquisar(pagina = 0) {
        this.filtro.pagina = pagina;
        this.editalService.pesquisar(this.filtro)
            .subscribe(dados => {
            this.totalRegistros = dados.totalElements;
            this.editais = dados.content;
        }, erro => this.errorHandler.handle(erro));
    }
    aoMudarPagina(event) {
        const pagina = event.first / event.rows;
        this.pesquisar(pagina);
    }
    confirmarExclusao(edital) {
        this.confirmation.confirm({
            message: 'Tem certeza que deseja excluir?',
            accept: () => {
                this.excluir(edital);
            }
        });
    }
    excluir(item) {
        this.editalService.excluir(item.id)
            .subscribe(() => {
            if (this.grid.first === 0) {
                this.pesquisar();
            }
            else {
                this.grid.first = 0;
            }
            this.messageService.add({ severity: 'success', detail: 'Edital excluído com sucesso!' });
        }, erro => this.errorHandler.handle(erro));
    }
};
EditaisPesquisaComponent.ctorParameters = () => [
    { type: _edital_service__WEBPACK_IMPORTED_MODULE_6__["EditalService"] },
    { type: _core_error_handler_service__WEBPACK_IMPORTED_MODULE_5__["ErrorHandlerService"] },
    { type: primeng_components_common_api__WEBPACK_IMPORTED_MODULE_3__["ConfirmationService"] },
    { type: primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_4__["MessageService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tabela', { static: false })
], EditaisPesquisaComponent.prototype, "grid", void 0);
EditaisPesquisaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-editais-pesquisa',
        template: __webpack_require__(/*! raw-loader!./editais-pesquisa.component.html */ "./node_modules/raw-loader/index.js!./src/app/editais/editais-pesquisa/editais-pesquisa.component.html"),
        styles: [__webpack_require__(/*! ./editais-pesquisa.component.css */ "./src/app/editais/editais-pesquisa/editais-pesquisa.component.css")]
    })
], EditaisPesquisaComponent);



/***/ }),

/***/ "./src/app/editais/editais-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/editais/editais-routing.module.ts ***!
  \***************************************************/
/*! exports provided: EditaisRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditaisRoutingModule", function() { return EditaisRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _seguranca_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../seguranca/auth.guard */ "./src/app/seguranca/auth.guard.ts");
/* harmony import */ var _editais_pesquisa_editais_pesquisa_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editais-pesquisa/editais-pesquisa.component */ "./src/app/editais/editais-pesquisa/editais-pesquisa.component.ts");
/* harmony import */ var _edital_cadastro_edital_cadastro_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edital-cadastro/edital-cadastro.component */ "./src/app/editais/edital-cadastro/edital-cadastro.component.ts");






const routes = [
    {
        path: '',
        component: _editais_pesquisa_editais_pesquisa_component__WEBPACK_IMPORTED_MODULE_4__["EditaisPesquisaComponent"],
        canActivate: [_seguranca_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        data: { roles: ['ROLE_PESQUISAR_EDITAL'] }
    },
    {
        path: 'novo',
        component: _edital_cadastro_edital_cadastro_component__WEBPACK_IMPORTED_MODULE_5__["EditalCadastroComponent"],
        canActivate: [_seguranca_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        data: { roles: ['ROLE_CADASTRAR_EDITAL'] }
    },
    {
        path: ':id',
        component: _edital_cadastro_edital_cadastro_component__WEBPACK_IMPORTED_MODULE_5__["EditalCadastroComponent"],
        canActivate: [_seguranca_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        data: { roles: ['ROLE_CADASTRAR_EDITAL'] }
    }
];
let EditaisRoutingModule = class EditaisRoutingModule {
};
EditaisRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], EditaisRoutingModule);



/***/ }),

/***/ "./src/app/editais/editais.module.ts":
/*!*******************************************!*\
  !*** ./src/app/editais/editais.module.ts ***!
  \*******************************************/
/*! exports provided: EditaisModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditaisModule", function() { return EditaisModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/tooltip */ "./node_modules/primeng/tooltip.js");
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_tooltip__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/inputtext.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/dialog.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_dialog__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/inputtextarea */ "./node_modules/primeng/inputtextarea.js");
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/calendar */ "./node_modules/primeng/calendar.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primeng_calendar__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/fileupload */ "./node_modules/primeng/fileupload.js");
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primeng_fileupload__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/progressspinner */ "./node_modules/primeng/progressspinner.js");
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(primeng_progressspinner__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _editais_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./editais-routing.module */ "./src/app/editais/editais-routing.module.ts");
/* harmony import */ var _edital_cadastro_edital_cadastro_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./edital-cadastro/edital-cadastro.component */ "./src/app/editais/edital-cadastro/edital-cadastro.component.ts");
/* harmony import */ var _editais_pesquisa_editais_pesquisa_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./editais-pesquisa/editais-pesquisa.component */ "./src/app/editais/editais-pesquisa/editais-pesquisa.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./../shared/shared.module */ "./src/app/shared/shared.module.ts");


















let EditaisModule = class EditaisModule {
};
EditaisModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__["InputTextModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_6__["ButtonModule"],
            primeng_table__WEBPACK_IMPORTED_MODULE_5__["TableModule"],
            primeng_tooltip__WEBPACK_IMPORTED_MODULE_4__["TooltipModule"],
            primeng_dialog__WEBPACK_IMPORTED_MODULE_9__["DialogModule"],
            primeng_dropdown__WEBPACK_IMPORTED_MODULE_8__["DropdownModule"],
            primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_10__["InputTextareaModule"],
            primeng_calendar__WEBPACK_IMPORTED_MODULE_11__["CalendarModule"],
            primeng_fileupload__WEBPACK_IMPORTED_MODULE_12__["FileUploadModule"],
            primeng_progressspinner__WEBPACK_IMPORTED_MODULE_13__["ProgressSpinnerModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_17__["SharedModule"],
            _editais_routing_module__WEBPACK_IMPORTED_MODULE_14__["EditaisRoutingModule"]
        ],
        declarations: [_edital_cadastro_edital_cadastro_component__WEBPACK_IMPORTED_MODULE_15__["EditalCadastroComponent"], _editais_pesquisa_editais_pesquisa_component__WEBPACK_IMPORTED_MODULE_16__["EditaisPesquisaComponent"]]
    })
], EditaisModule);



/***/ }),

/***/ "./src/app/editais/edital-cadastro/edital-cadastro.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/editais/edital-cadastro/edital-cadastro.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXRhaXMvZWRpdGFsLWNhZGFzdHJvL2VkaXRhbC1jYWRhc3Ryby5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/editais/edital-cadastro/edital-cadastro.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/editais/edital-cadastro/edital-cadastro.component.ts ***!
  \**********************************************************************/
/*! exports provided: EditalCadastroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditalCadastroComponent", function() { return EditalCadastroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/components/common/messageservice */ "./node_modules/primeng/components/common/messageservice.js");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _core_error_handler_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../core/error-handler.service */ "./src/app/core/error-handler.service.ts");
/* harmony import */ var _edital_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../edital.service */ "./src/app/editais/edital.service.ts");
/* harmony import */ var _concorrentes_concorrente_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../concorrentes/concorrente.service */ "./src/app/concorrentes/concorrente.service.ts");
/* harmony import */ var _core_model_Edital__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../core/model/Edital */ "./src/app/core/model/Edital.ts");
/* harmony import */ var src_app_core_model_Concorrente__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/model/Concorrente */ "./src/app/core/model/Concorrente.ts");










let EditalCadastroComponent = class EditalCadastroComponent {
    constructor(editalService, concorrenteService, messageService, errorHandler, route, router, title) {
        this.editalService = editalService;
        this.concorrenteService = concorrenteService;
        this.messageService = messageService;
        this.errorHandler = errorHandler;
        this.route = route;
        this.router = router;
        this.title = title;
        this.edital = new _core_model_Edital__WEBPACK_IMPORTED_MODULE_8__["Edital"]();
        this.uploadEmAndamento = false;
    }
    antesUploadAnexo(event) {
        event.xhr.setRequestHeader('Authorization', 'Bearer ' + localStorage.getItem('token'));
        this.uploadEmAndamento = true;
    }
    aoTerminarUploadAnexo(event) {
        const anexo = JSON.parse(event.xhr.response);
        this.edital.anexo = anexo.nome;
        this.edital.urlAnexo = anexo.url;
        this.uploadEmAndamento = false;
    }
    erroUpload(event) {
        this.messageService.add({ severity: 'error', detail: 'Erro ao tentar enviar anexo!' });
        this.uploadEmAndamento = false;
    }
    removerAnexo() {
        this.edital.anexo = null;
        this.edital.urlAnexo = null;
    }
    get nomeAnexo() {
        const nome = this.edital.anexo;
        if (nome) {
            return nome.substring(nome.indexOf('_') + 1, nome.length);
        }
        return '';
    }
    get urlUploadAnexo() {
        return this.editalService.urlUploadAnexo();
    }
    ngOnInit() {
        const idEdital = this.route.snapshot.params['id'];
        this.title.setTitle('Novo edital');
        this.carregarEstados();
        this.carregarConcorrentes();
        if (idEdital) {
            this.carregarEdital(idEdital);
        }
    }
    carregarEstados() {
        this.editalService.listarEstados().subscribe(lista => {
            this.estados = lista.map(uf => ({ label: uf.nome, value: uf.codigo }));
        }, erro => this.errorHandler.handle(erro));
    }
    carregarCidades() {
        this.editalService.pesquisarCidades(this.estadoSelecionado).subscribe(lista => {
            this.cidades = lista.map(c => ({ label: c.nome, value: c.codigo }));
        }, erro => this.errorHandler.handle(erro));
    }
    carregarConcorrentes() {
        return this.concorrenteService.listarTodos()
            .subscribe(concorrentes => {
            this.concorrentes = concorrentes
                .map(c => ({ label: c.nome, value: c.id }));
        }, erro => this.errorHandler.handle(erro));
    }
    get editando() {
        return Boolean(this.edital.id);
    }
    carregarEdital(id) {
        this.editalService.buscarPorId(id)
            .subscribe(edital => {
            /* Quando o objeto pode vim nulo, vc deve instancia-lo */
            if (!edital.concorrente) {
                edital.concorrente = new src_app_core_model_Concorrente__WEBPACK_IMPORTED_MODULE_9__["Concorrente"]();
            }
            this.edital = edital;
            this.editalService.converterStringsParaDatas([this.edital]);
            this.estadoSelecionado = (this.edital.cidade) ?
                this.edital.cidade.estado.codigo : null;
            if (this.estadoSelecionado) {
                this.carregarCidades();
            }
            this.atualizarTituloEdicao();
        }, erro => this.errorHandler.handle(erro));
    }
    // salvar(form: FormControl) {
    salvar(form) {
        if (this.editando) {
            this.atualizarEdital(form);
        }
        else {
            this.adicionarEdital(form);
        }
    }
    adicionarEdital(form) {
        this.editalService.adicionar(this.edital)
            .subscribe(editalAdicionado => {
            this.messageService.add({ severity: 'success', detail: 'Edital adicionado com sucesso!' });
            this.router.navigate(['/editais', editalAdicionado.id]);
        }, erro => this.errorHandler.handle(erro));
    }
    atualizarEdital(form) {
        this.editalService.atualizar(this.edital)
            .subscribe(edital => {
            /* Quando o objeto pode vim nulo, vc deve instancia-lo */
            if (!edital.concorrente) {
                edital.concorrente = new src_app_core_model_Concorrente__WEBPACK_IMPORTED_MODULE_9__["Concorrente"]();
            }
            this.edital = edital;
            this.editalService.converterStringsParaDatas([this.edital]);
            this.messageService.add({ severity: 'success', detail: 'Edital alterado com sucesso!' });
            this.atualizarTituloEdicao();
        }, erro => this.errorHandler.handle(erro));
    }
    //novo(form: FormControl) {
    novo(form) {
        form.reset();
        setTimeout(function () {
            this.edital = new _core_model_Edital__WEBPACK_IMPORTED_MODULE_8__["Edital"]();
        }.bind(this), 1);
        this.router.navigate(['/editais/novo']);
    }
    atualizarTituloEdicao() {
        this.title.setTitle(`Edição de edital: ${this.edital.ano}/${this.edital.processo} - ${this.edital.cidade.nome}`);
    }
};
EditalCadastroComponent.ctorParameters = () => [
    { type: _edital_service__WEBPACK_IMPORTED_MODULE_6__["EditalService"] },
    { type: _concorrentes_concorrente_service__WEBPACK_IMPORTED_MODULE_7__["ConcorrenteService"] },
    { type: primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_4__["MessageService"] },
    { type: _core_error_handler_service__WEBPACK_IMPORTED_MODULE_5__["ErrorHandlerService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] }
];
EditalCadastroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edital-cadastro',
        template: __webpack_require__(/*! raw-loader!./edital-cadastro.component.html */ "./node_modules/raw-loader/index.js!./src/app/editais/edital-cadastro/edital-cadastro.component.html"),
        styles: [__webpack_require__(/*! ./edital-cadastro.component.css */ "./src/app/editais/edital-cadastro/edital-cadastro.component.css")]
    })
], EditalCadastroComponent);



/***/ })

}]);
//# sourceMappingURL=editais-editais-module-es2015.js.map