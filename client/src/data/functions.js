export default function totalTime(prep, cook) {
  let numPrep = 0
  let unitPrep = ""
  let numCook = 0
  let unitCook = ""
  let totalMins = 0
  let totalHrs = 0
  let dt = {
    minutes: {
      units: ["minutes", "minute", "mins", "min", "mm", "m"],
      value: 1,
    },
    hours: {
      units: ["hours", "hour", "hrs", "hr", "hh", "h"],
      value: 60,
    }
  }
  const trimPrep = prep.trim()
  const trimCook = cook.trim()
  
  const splitPrep = trimPrep.split(' ')

  if (splitPrep.length === 2) {
    [numPrep, unitPrep] = splitPrep
    numPrep = parseFloat(numPrep)
    if (dt.minutes.units.includes(unitPrep)) {
      totalMins += numPrep * dt.minutes.value
    } else if (dt.hours.units.includes(unitPrep)) {
      totalMins += numPrep * dt.hours.value
    }
  }
     
  const splitCook = trimCook.split(' ')

  if (splitCook.length === 2) {
    [numCook, unitCook] = splitCook
    numCook = parseFloat(numCook)
    if (dt.minutes.units.includes(unitCook)) {
      totalMins += numCook * dt.minutes.value
    } else if (dt.hours.units.includes(unitCook)) {
      totalMins += numCook * dt.hours.value
    }
  }
  
  totalHrs = totalMins / 60

  if (totalHrs > 1) {
    return `${parseInt(totalHrs)} hrs & ${totalMins % 60} mins`
  } else {
    return `${totalMins} minutes`
  }
}

