<script>
	import typescript from '$lib/assets/logos/typescript.svg';
	import react from '$lib/assets/logos/react.svg';
	import nextjs from '$lib/assets/logos/nextjs.svg';
	import ruby from '$lib/assets/logos/ruby.svg';
	import postgresql from '$lib/assets/logos/postgresql.svg';
	import supabase from '$lib/assets/logos/supabase.svg';
</script>

<div id="cube-container">
	<div id="cube-spinner">
		<div class="faces" id="face1">
			<i class="devicon-typescript-plain colored"></i>
			<!-- <img src={typescript} alt = ''/> -->
		</div>

		<div class="faces" id="face2">
			<i class="devicon-react-original colored"></i>
			<!-- <img src={react} alt = ''/> -->
		</div>

		<div class="faces" id="face3">
			<i class="devicon-nextjs-plain"></i>
			<!-- <img src={nextjs} alt = ''/> -->
		</div>

		<div class="faces" id="face4">
			<i class="devicon-ruby-plain colored"></i>
			<!-- <img src={ruby} alt = ''/> -->
		</div>

		<div class="faces" id="face5">
			<i class="devicon-postgresql-plain colored"></i>
			<!-- <img src={postgresql} alt = 'postgresql'/> -->
		</div>

		<div class="faces" id="face6">
			<i class="devicon-supabase-plain colored"></i>
			<!-- <img src={supabase} alt='supabase' /> -->
		</div>
	</div>
	<div id="shadow"></div>
</div>

<style>
	/* Base cube container */
	#cube-container {
		position: absolute;
	}

	/* Spinner */
	#cube-container #cube-spinner {
		margin-top: -0rem;
		animation: spincube infinite 12s ease-in-out;
		transform-style: preserve-3d;
		transform-origin: 60px 60px 0;
		margin-left: calc(50% - 60px);
		z-index: 0;
	}

	/* Faces (each cube face) */
	/* faces size and font adjusted by +/-80px */
	#cube-container #cube-spinner .faces {
		position: absolute;
		width: 120px;
		height: 120px;
		border: 1px solid #fff;
		background: rgb(0, 0, 0);
		font-size: 100px;
		display: flex;
		justify-content: center;
		align-items: center;
		box-shadow:
    inset 0 0 50px 10px #031949,
    0 0 60px 2px #f2f4ff,
    0 0 60px 2px #3874f6;
	}

	/* Individual face transforms (translateZ = 60px on default) */
	#cube-container #cube-spinner #face1 {
		transform: translateZ(60px);
	}
	#cube-container #cube-spinner #face2 {
		transform: rotateY(90deg) translateZ(60px);
	}
	#cube-container #cube-spinner #face3 {
		transform: rotateY(90deg) rotateX(90deg) translateZ(60px);
	}
	#cube-container #cube-spinner #face4 {
		transform: rotateY(180deg) rotateZ(90deg) translateZ(60px);
	}
	#cube-container #cube-spinner #face5 {
		transform: rotateY(-90deg) rotateZ(90deg) translateZ(60px);
	}
	#cube-container #cube-spinner #face6 {
		transform: rotateX(-90deg) translateZ(60px);
	}

	/* Shadow element */
  /* shadow size afjusted by +/-80px (w- 200 -> 280, h- 125 -> 205) and bottom offset adjusted */
	#cube-container #shadow {
		/* shadow color */
		background: #75a0ff;
		position: absolute;
		perspective: 20rem;
		width: 200px;
		height: 125px;
		bottom: -33rem;
		right: -60px;
		border-radius: 35%;
		transform: rotateX(60deg);
		filter: blur(35px);
	}

	/* Keyframes */
	@keyframes spincube {
		from,
		to {
			transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
		}
		16% {
			transform: rotateY(-90deg) rotateZ(90deg);
		}
		33% {
			transform: rotateY(-90deg) rotateX(90deg);
		}
		50% {
			transform: rotateY(-180deg) rotateZ(90deg);
		}
		66% {
			transform: rotateY(-270deg) rotateX(90deg);
		}
		83% {
			transform: rotateX(90deg);
		}
	}

	@media screen and (min-width: 860px) {
		/* spinner origin / offsets adjusted by 40px */
		#cube-container #cube-spinner {
			transform-origin: 60px 60px 0;
			margin-left: calc(50% - 100px);
		}

		/* translateZ adjusted by +/-40px */
		#cube-container #cube-spinner #face1 {
			transform: translateZ(60px);
		}
		#cube-container #cube-spinner #face2 {
			transform: rotateY(90deg) translateZ(60px);
		}
		#cube-container #cube-spinner #face3 {
			transform: rotateY(90deg) rotateX(90deg) translateZ(60px);
		}
		#cube-container #cube-spinner #face4 {
			transform: rotateY(180deg) rotateZ(90deg) translateZ(60px);
		}
		#cube-container #cube-spinner #face5 {
			transform: rotateY(-90deg) rotateZ(90deg) translateZ(60px);
		}
		#cube-container #cube-spinner #face6 {
			transform: rotateX(-90deg) translateZ(60px);
		}
	}
</style>
