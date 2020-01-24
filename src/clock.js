function Clock() {
  this.formatted_date = ""
}

Clock.prototype.getFormattedDate = function() {
  let current_datetime = new Date()
  this.formatted_date = current_datetime.getDate() + " / " + (current_datetime.getMonth() + 1) + " / " + current_datetime.getFullYear()
  return this.formatted_date
}

if (typeof module !== 'undefined' && module.hasOwnProperty('exports')) {
  module.exports = Clock;
}
