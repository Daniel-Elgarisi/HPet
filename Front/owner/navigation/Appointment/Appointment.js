var startDate = new Date();
startDate.setDate(startDate.getDate());
var endDate = new Date(startDate.getFullYear(),startDate.getMonth(), startDate.getDay() + 62)

$('#date').datepicker({ 
   startDate: startDate,
   endDate: endDate,
   daysOfWeekDisabled: [,6]
});
