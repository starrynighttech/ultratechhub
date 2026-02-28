exports.handler = async function(event) {
  try {
    const { amount } = JSON.parse(event.body)

    const integrationId = process.env.PAYNOW_INTEGRATION_ID
    const integrationKey = process.env.PAYNOW_INTEGRATION_KEY
    const resultUrl = process.env.PAYNOW_RESULT_URL
    const returnUrl = process.env.PAYNOW_RETURN_URL

    // Example PayNow redirect (simplified)
    // Replace with full API later if needed

    const paymentUrl =
      `https://www.paynow.co.zw/interface/initiatetransaction` +
      `?id=${integrationId}` +
      `&amount=${amount}` +
      `&resulturl=${encodeURIComponent(resultUrl)}` +
      `&returnurl=${encodeURIComponent(returnUrl)}`

    return {
      statusCode: 200,
      body: JSON.stringify({ url: paymentUrl })
    }

  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message })
    }
  }
}