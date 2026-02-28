exports.handler = async function(event) {

  const data = JSON.parse(event.body)

  console.log("Payment update:", data)

  // Here you can:
  // save order
  // mark paid
  // send email
  // update database

  return {
    statusCode: 200,
    body: "OK"
  }
}