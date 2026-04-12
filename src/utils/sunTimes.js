const DEG_TO_RAD = Math.PI / 180
const RAD_TO_DEG = 180 / Math.PI

const normalizeAngle = (angle) => {
  let result = angle % 360
  if (result < 0) result += 360
  return result
}

const getDayOfYear = (date) => {
  const start = new Date(date.getFullYear(), 0, 0)
  const diff = date - start + (start.getTimezoneOffset() - date.getTimezoneOffset()) * 60000
  return Math.floor(diff / 86400000)
}

const calculateSunTime = (date, latitude, longitude, isSunrise) => {
  const dayOfYear = getDayOfYear(date)
  const lngHour = longitude / 15
  const t = dayOfYear + ((isSunrise ? 6 : 18) - lngHour) / 24

  const M = normalizeAngle(0.9856 * t - 3.289)
  const L = normalizeAngle(
    M + 1.916 * Math.sin(M * DEG_TO_RAD) + 0.020 * Math.sin(2 * M * DEG_TO_RAD) + 282.634
  )

  let RA = RAD_TO_DEG * Math.atan(0.91764 * Math.tan(L * DEG_TO_RAD))
  RA = normalizeAngle(RA)

  const Lquadrant = Math.floor(L / 90) * 90
  const RAquadrant = Math.floor(RA / 90) * 90
  RA += Lquadrant - RAquadrant
  RA /= 15

  const sinDec = 0.39782 * Math.sin(L * DEG_TO_RAD)
  const cosDec = Math.cos(Math.asin(sinDec))

  const cosH =
    (Math.cos(90.833 * DEG_TO_RAD) - sinDec * Math.sin(latitude * DEG_TO_RAD)) /
    (cosDec * Math.cos(latitude * DEG_TO_RAD))

  if (cosH > 1 || cosH < -1) {
    return null
  }

  let H = isSunrise
    ? 360 - RAD_TO_DEG * Math.acos(cosH)
    : RAD_TO_DEG * Math.acos(cosH)

  H /= 15

  const T = H + RA - 0.06571 * t - 6.622
  let UT = T - lngHour
  UT = UT % 24
  if (UT < 0) UT += 24

  const offset = -date.getTimezoneOffset() / 60
  const localT = UT + offset
  const adjusted = localT % 24
  const localHour = adjusted < 0 ? adjusted + 24 : adjusted

  const hour = Math.floor(localHour)
  const minute = Math.floor((localHour - hour) * 60)
  const result = new Date(date)
  result.setHours(hour, minute, 0, 0)

  return result
}

export const getSunriseSunset = (date, latitude, longitude) => {
  const sunrise = calculateSunTime(date, latitude, longitude, true)
  const sunset = calculateSunTime(date, latitude, longitude, false)
  return {
    sunrise,
    sunset,
  }
}

export const getAutoTheme = (date, latitude, longitude) => {
  const sunTimes = getSunriseSunset(date, latitude, longitude)
  if (!sunTimes.sunrise || !sunTimes.sunset) {
    return 'light'
  }

  const now = new Date(date)
  if (now >= sunTimes.sunrise && now < sunTimes.sunset) {
    return 'light'
  }
  return 'dark'
}
