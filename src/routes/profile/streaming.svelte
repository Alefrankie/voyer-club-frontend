<script lang="ts">
	import { session } from '$app/stores'
	import ChatBox from '$lib/components/Streaming/ChatBox.svelte'
	import io from 'socket.io-client'

	let videoRef = undefined

	const socket = io('https://services.voyerclub.com/', {
		transports: ['polling']
	})

	let broadcasterId = ''
	let peerConnections = {} as any
	let broadcastLaunched = false
	const constraints = {
		// audio: true,
		video: { facingMode: 'user' }
	}

	const config = {
		iceServers: [
			{
				urls: ['stun:stun.l.google.com:19302']
			}
		]
	}

	socket.on('broadcaster', (id) => {
		broadcasterId = id
	})

	socket.on('watcher', (id) => {
		const peerConnection = new RTCPeerConnection(config)
		peerConnections[id] = peerConnection
		peerConnections = peerConnections[id]
		const stream = videoRef.srcObject
		stream.getTracks().forEach((track: any) => peerConnection.addTrack(track, stream))

		peerConnection.onicecandidate = (event) => {
			if (event.candidate) {
				socket.emit('candidate', id, event.candidate)
			}
		}

		peerConnection
			.createOffer()
			.then((sdp) => peerConnection.setLocalDescription(sdp))
			.then(() => {
				socket.emit('offer', id, peerConnection.localDescription)
			})
	})

	socket.on('answer', (id, description) => {
		peerConnections.setRemoteDescription(description)
	})

	socket.on('candidate', (id, candidate) => {
		peerConnections.addIceCandidate(new RTCIceCandidate(candidate))
	})

	socket.on('disconnectPeer', (id) => {
		peerConnections.close()
	})

	const handleCanPlay = () => {
		videoRef.play()
	}

	const launchBroadcast = async () => {
		// const res = await http.Post({
		//   url: `${HOST}/streaming/new`,
		//   body: {
		//     socket_id: broadcasterId,
		//     username: $session.username
		//   }
		// })
		// broadcastLaunched = true
		// const { payload: broadcasterData } = await res.json()
		// socket.emit('new-broadcaster', broadcasterData)
		// return broadcasterData

		navigator.mediaDevices.getUserMedia(constraints).then((data) => {
			videoRef.srcObject = data
		})
		localStorage.setItem('streamingId', socket.id)
		socket.emit('broadcaster', { id: socket.id })
	}
</script>

<div class="container">
	<div class="row">
		<div class="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
			<div class="ui-block">
				<div class="ui-block-title inline-items">
					<div class="btn btn-control btn-control-small bg-yellow">
						<svg class="olymp-trophy-icon"><use xlink:href="#olymp-trophy-icon" /> </svg>
					</div>
					<h6 class="title">{$session.username}</h6>
					<div style="float: right; display: flex">
						<button
							class="btn btn-primary btn-md-2"
							disabled={!broadcastLaunched}
							style=" color: #fff"
							type="button"
						>
							Finalizar Transmisión
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<div class="container">
	<div class="row">
		<div class="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
			<div class="ui-block features-video">
				<div class="video-player">
					<video
						autoPlay
						muted
						on:canplay={handleCanPlay}
						playsInline
						bind:this={videoRef}
						poster="/img/voyer/profile.png"
					/>
					<a href="#/" class="play-video" on:click={launchBroadcast}>
						<svg class="olymp-play-icon">
							<use xlink:href="#olymp-play-icon" />
						</svg>
					</a>

					<div class="video-content">
						<div class="h4 title">{$session.username}</div>
					</div>

					<div class="overlay" />
				</div>

				<ChatBox />
			</div>
		</div>
	</div>
</div>

<style>
	video {
		width: 100%;
	}
</style>
