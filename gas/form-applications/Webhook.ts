function getCompanies(data) {
  const comp = {}

  data.forEach((i, x) => {
    if (x < 1) return
    comp[i[4]] = typeof comp[i[4]] === 'number' ? comp[i[4]] + 1 : 1
  })

  return comp
}

function getPrograms(data) {
  const programs = {}

  data.forEach((i, x) => {
    if (x < 1) return
    programs[i[5]] = typeof programs[i[5]] === 'number' ? programs[i[5]] + 1 : 1
  })

  return programs
}

/**
 * Webhook to handle a post request
 *
 * @param req google apps script request object
 * @returns
 */
function doPost(req) {
  // @ts-ignore
  if (req.parameters.token[0] !== secrets.token) {
    return handleInvalidToken()
  }

  const activesheet = SpreadsheetApp.getActiveSpreadsheet()
  const sheet = activesheet.getSheetByName('Form Responses 1')

  const data = sheet.getDataRange().getValues()
  const programs = getPrograms(data)
  const companies = getCompanies(data)

  let programText = '*Programmer:*\n'
  for (const [program, value] of Object.entries(programs)) {
    programText += `     *${value}:* ${program}\n`
  }
  programText += '\n*Selskaper:*\n'
  for (const [company, value] of Object.entries(companies)) {
    programText += `     *${value}*: ${company}\n`
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
      {
        type: 'context',
        elements: [
          {
            type: 'plain_text',
            text: ':zap: Brought to you by the Knowit Academy Development Team',
            emoji: true,
          },
        ],
      },
    ],
  }

  return ContentService.createTextOutput(JSON.stringify(res)).setMimeType(
    ContentService.MimeType.JSON
  )
}

function handleInvalidToken() {
  const data = {
    response_type: 'ephemeral',
    text: 'Request was invalid.',
  }
  return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(
    ContentService.MimeType.JSON
  )
}
