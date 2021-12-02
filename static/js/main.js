function ongoingEvents() {
  document.getElementById("eventOngoing").style.visibility = "visible"
  document.getElementById("eventDone").style.visibility = "hidden"
  //- console.log("ongoing~~~")
}
function endedEvents() {
  document.getElementById("eventOngoing").style.visibility = "hidden"
  document.getElementById("eventDone").style.visibility = "visible"
  //- console.log("ended~~~~~")
}
