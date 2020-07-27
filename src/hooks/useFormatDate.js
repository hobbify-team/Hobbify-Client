import { format } from 'date-fns'

const FormatDate = (stringDate) => {

  if (stringDate != undefined) {

    const cutText = stringDate.substring(0, 10)
    const newDate = Date.parse(cutText)
    const dateFormat = new Date(newDate)
    const dateFormatted = format(dateFormat, 'EEEE MMMM dd, yyy')

    return dateFormatted

  }

  return stringDate

}

export default FormatDate