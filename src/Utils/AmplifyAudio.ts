const AmplifyAudio = (audio: HTMLAudioElement, volume: number) => {
	const context = new AudioContext()
	const source = context.createMediaElementSource(audio)

	const gain = context.createGain()

	source.connect(gain)
	gain.connect(context.destination)

	gain.gain.value = volume
}

export default AmplifyAudio
