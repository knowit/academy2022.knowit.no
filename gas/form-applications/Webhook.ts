function handleInvalidToken() {
  const data = {
    response_type: 'ephemeral',
    text: 'Request was invalid.',
  }
  return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(
    ContentService.MimeType.JSON
  )
}

/**
 * Webhook to handle a post request
 *
 * @param req google apps script request object
 * @returns
 */
function doPost(req) {
  if (req.parameters.token[0] !== secrets.token) {
    return handleInvalidToken()
  }

  const sheet =
    SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Form Responses 1')

  const data = sheet.getDataRange().getValues()
  const programs = {}
  const companies = {}

  data.forEach((i, x) => {
    if (x < 1) return
    programs[i[5]] = typeof programs[i[5]] === 'number' ? programs[i[5]] + 1 : 1
    companies[i[4]] =
      typeof companies[i[4]] === 'number' ? companies[i[4]] + 1 : 1
  })

  let programText = '*Programmer:*\n'
  for (const [program, value] of Object.entries(programs)) {
    programText += `*${value}:* ${program}\n`
  }
  programText += '\n*Selskaper:*\n'
  for (const [company, value] of Object.entries(companies)) {
    programText += `*${value}*: ${company}\n`
  }

  const res = {
    response_type: 'in_channel',
    blocks: [
      {
        type: 'header',
        text: {
          type: 'plain_text',
          text: 'Number of applicants to Knowit Academy',
          emoji: true,
        },
      },
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: programText,
        },
      },
    ],
  }

  return ContentService.createTextOutput(JSON.stringify(res)).setMimeType(
    ContentService.MimeType.JSON
  )
}
