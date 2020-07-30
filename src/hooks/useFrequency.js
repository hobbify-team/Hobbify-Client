
const useFrequency = (number) => {

  switch (number) {
    case 1:
      return 'Everyday'
    case 2:
      return 'Weekly'
    case 3:
      return 'Monthly'
    case 4:
      return 'Each three days.'
    case 5:
      return 'Weekends'
    default:
      return 'Unknown'
  }

}

export default useFrequency
