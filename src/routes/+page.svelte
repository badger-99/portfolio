<script>
  import ResponsiveContainer from "$lib/components/responsive-container.svelte";
	import H1 from "$lib/components/typography/h1.svelte";
	import Muted from "$lib/components/typography/muted.svelte";
	import { Button } from "$lib/components/ui/button";
	import Icon from 'svelte-awesome';
	import * as Tooltip from "$lib/components/ui/tooltip/index.js";
	import HomeData from "$lib/data/home";
</script>

<main class="mt-14 px-2 h-fit flex-1 flex flex-col snap-y snap-mandatory">
  <section id="home">
    <ResponsiveContainer className="flex flex-col justify-center flex-1">
      <div class="flex flex-1 flex-col items-center justify-center gap-8 px-14 md:flex-row md:justify-between">
		<div class="flex flex-col items-center justify-center gap-4 text-center md:items-start md:text-left">
			<H1>{HomeData.hero.title}</H1>
			<Muted>{HomeData.hero.description}</Muted>
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
    </div>
    </ResponsiveContainer>
  </section>

  <section id="about">
    <div>
      <h1>About Section</h1>
    </div>
  </section>

  <section id="projects">
    <div>
      <h1>Projects</h1>
    </div>
  </section>

  <section id="contact">
    <div>
      <h1>Contact Me</h1>
    </div>
  </section>
</main>

<style>
  section{
    min-height: calc(100dvh - 3.5rem);
    display: flex;
    align-items: center;
    justify-content: center;
    /* border: 1px solid; */
    scroll-snap-align: start;
    scroll-margin-top: calc(var(--spacing) * 14) /* 3.5rem = 56px */;
  }
</style>
