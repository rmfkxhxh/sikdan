// event
function ongoingEvents() {
  document.getElementById("eventOngoing").style.visibility = "visible"
  document.getElementById("eventDone").style.visibility = "hidden"
  //- console.log("ongoing~~~")
}
function endedEvents() {
  document.getElementById("eventOngoing").style.visibility = "hidden"
  document.getElementById("eventDone").style.visibility = "visible"
  // window.location.reload()
  //- console.log("ended~~~~~")
}

// coupon
function couponRegister() {
  document.getElementById("couponRegist").style.visibility = "visible"
  document.getElementById("ticketRegist").style.visibility = "hidden"
  //- console.log("ongoing~~~")
}
function ticketRegister() {
  document.getElementById("couponRegist").style.visibility = "hidden"
  document.getElementById("ticketRegist").style.visibility = "visible"
  // window.location.reload()
  //- console.log("ended~~~~~")
}


