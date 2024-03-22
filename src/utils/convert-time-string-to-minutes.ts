export function convertTimeStringToMinutes(timeString: string) {
  const [hours, minute] = timeString.split(':').map(Number)

  return hours * 60 + minute
}
