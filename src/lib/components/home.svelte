<script>
	import ResponsiveContainer from '$lib/components/responsive-container.svelte';
	import H1 from '$lib/components/typography/h1.svelte';
	import * as Avatar from '$lib/components/ui/avatar/index.js';
	import { Button } from '$lib/components/ui/button';
	import Icon from 'svelte-awesome';
	import * as Tooltip from '$lib/components/ui/tooltip/index.js';
	import HomeData from '$lib/data/home';
	import BaseData from '$lib/data/base';
	import avatar from '$lib/assets/my_picture.jpg';
	import H2 from '$lib/components/typography/h2.svelte';
	import Title from '$lib/components/title.svelte';
  
  const typingSvgMed =
    'https://readme-typing-svg.demolab.com?font=system-ui+Avenir+Helvetica+arial+sans-serif&weight=500&size=33&height=50&duration=4000&pause=1000&color=A1A1A1&center=false&random=false&width=395&lines=Front-end+Fixer;Back-end+Builder;Full+Stack+Developer';;
</script>

<Title title={'Home'} />
<div>
  <ResponsiveContainer className="flex flex-col justify-center flex-1 gap-16 max-w-2xl">
			<div
				class="flex flex-1 flex-col items-center justify-center gap-8 px-14 md:flex-row md:justify-between"
			>
				<div class="flex justify-between gap-4">
					<div
						class="flex flex-col items-center justify-center gap-4 text-center md:items-start md:text-left"
					>
						<H1>{HomeData.hero.title}</H1>
						<img src={typingSvgMed} alt="typing animation" />
						<div class="flex flex-row gap-1">
							{#each HomeData.hero.links as item}
								<a href={item.href} target="_blank">
									<Tooltip.Provider>
										<Tooltip.Root>
											<Tooltip.Trigger>
												<Button variant="outline" size="icon" class="border border-foreground">
													<Icon data={item.icon} className="text-lg" />
												</Button>
											</Tooltip.Trigger>
											<Tooltip.Content side="bottom">{item.label}</Tooltip.Content>
										</Tooltip.Root>
									</Tooltip.Provider>
								</a>
							{/each}
						</div>
					</div>
					<div>
						<Avatar.Root class="size-28 border">
							<Avatar.Image alt="avatar" src={avatar} />
							<Avatar.Fallback>{BaseData.initials}</Avatar.Fallback>
						</Avatar.Root>
					</div>
				</div>
			</div>
      <div class="flex flex-1 flex-col gap-4 px-14">
        <H2>About Me</H2>
        <div class="prose max-w-xl text-pretty font-sans text-md text-muted-foreground dark:prose-invert">{BaseData.about}</div>

        <div class="prose max-w-xl text-pretty font-sans text-md text-muted-foreground dark:prose-invert">Feel free to explore my projects, see where I've worked, or drop me a message.</div>
      </div>
		</ResponsiveContainer>
</div>