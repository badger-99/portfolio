<script>
  import ResponsiveContainer from "$lib/components/responsive-container.svelte";
	import H1 from "$lib/components/typography/h1.svelte";
	import Muted from "$lib/components/typography/muted.svelte";
	import { Button } from "$lib/components/ui/button";
	import Icon from 'svelte-awesome';
  
  const typingSvgMed =
    'https://readme-typing-svg.demolab.com?font=system-ui+Avenir+Helvetica+arial+sans-serif&weight=500&size=33&height=50&duration=4000&pause=1000&color=A1A1A1&center=false&random=false&width=395&lines=Front-end+Fixer;Back-end+Builder;Full+Stack+Developer';;
</script>

						<img src={typingSvgMed} alt="typing animation" />

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
