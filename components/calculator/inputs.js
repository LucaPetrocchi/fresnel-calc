function inputs() {
    const frequencyInputLabel = document.createElement('label');
    frequencyInputLabel.htmlFor = 'frequencyInput';
    frequencyInputLabel.innerText = 'Frecuencia (en gigahercios)';
    const frequencyInput = document.createElement('input');
    frequencyInput.type = 'number';
    frequencyInput.name = "frequencyInput";
    frequencyInput.min = '1';
    frequencyInput.step = 'any';
    frequencyInput.required = true;
    const distanceInputLabel = document.createElement('label');
    distanceInputLabel.htmlFor = 'distanceInput';
    distanceInputLabel.innerText = 'Distancia (en kilómetros)';
    const distanceInput = document.createElement('input');
    distanceInput.type = 'number';
    distanceInput.name = 'distanceInput';
    distanceInput.min = '1';
    distanceInput.step = 'any';
    distanceInput.required = true;
    return {
        frequencyInputLabel,
        frequencyInput,
        distanceInputLabel,
        distanceInput
    };
}
export default inputs;