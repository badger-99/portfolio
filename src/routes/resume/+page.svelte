<script>
	import { TitledPage } from '$lib/components';
	import ResumeData from '$lib/data/resume';
	import { buttonVariants } from '$lib/components/ui/button';
</script>

<TitledPage title={ResumeData.title}>
  <a
    href={ResumeData.resume}
    target="_blank"
    class={`mx-auto ${buttonVariants({ variant: 'default' })}`}
  >
    Download
  </a>
	<div class="hidden sm:flex border flex-col min-w-[600px]">
		<iframe src={ResumeData.resume} class="h-full min-h-[800px] xl:min-h-[1280px] w-full p-2" title={ResumeData.title}
		></iframe>
	</div>
	<div class="flex flex-col border w-full h-[500px] relative sm:hidden">
		<iframe src={ResumeData.resume} class="ablolute top-0 left-0 h-full w-full p-2" title={ResumeData.title}
		></iframe></div>
</TitledPage>
