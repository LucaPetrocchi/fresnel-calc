import appendListToNode from "../../utils/appendListToNode.js"
import getRadioButton from "../../utils/getRadioButton.js"

function modes(): [
  HTMLFormElement,
  HTMLFormElement,
  () => [string, string]
] {

  function modeForm() {
    const form = document.createElement('form')
    form.classList.add('flex', 'gap-4')
    return form
  }

  const distanceKm = getRadioButton(
    'Kilómetros',
    'distance',
    'km',
    'km',
    true
  )

  const distanceM = getRadioButton(
    'Metros',
    'distance',
    'm',
    'm'
  )

  const distanceModes = modeForm()
  appendListToNode([
    distanceKm,
    distanceM,
  ], distanceModes)

  const freqGhz = getRadioButton(
    'Gigahercios',
    'frequency',
    'ghz',
    'ghz',
    true
  )

  const freqMhz = getRadioButton(
    'Megahercios',
    'frequency',
    'mhz',
    'mhz'
  )

  const frequencyModes = modeForm()
  appendListToNode([
    freqGhz,
    freqMhz,
  ], frequencyModes)

  const getModeValues = (): [string, string] => {
    const dist = document.querySelector('input[name="distance"]:checked') as HTMLInputElement
    const freq = document.querySelector('input[name="frequency"]:checked') as HTMLInputElement

    let dT: string;
    let fT: string;
    if (!dist) { dT = 'km' }
    else { dT = dist.value }

    if (!freq) { fT = 'ghz' }
    else { fT = freq.value }
  
    return [fT, dT]
  }

  return [
    distanceModes,
    frequencyModes,
    getModeValues
  ]

}

export default modes