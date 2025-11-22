<script lang="ts">
	export let className: string = '';
</script>

<div class={`lg:w-auto xl:w-5xl xl:self-center ${className}`}><slot /></div>
