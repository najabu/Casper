import Calendar from 'tui-calendar'; /* ES6 */
(function (window, document) {
    var calendar = new Calendar('#calendar', {
        defaultView: 'month',
        taskView: true,
        template: {
          monthDayname: function(dayname) {
            return '<span class="calendar-week-dayname-name">' + dayname.label + '</span>';
          }
        }
      });
      
  
})(window, document);

