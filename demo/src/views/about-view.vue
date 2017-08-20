<template>
	<panel title="Acerca de">
		<p>
			Bienvenidos y bienvenidas a la web demo utilizada para enseñar 
			aquellos conceptos básicos sobre VueJS. 
		</p>
		<p>
			La web es un buscador de películas que te permite ver 
			ciertos detalles y la puntuación que otros 
			usuarios han dado.
		</p>
		<p>
			<a href="https://github.com/jdonsan/charla-aprendiendo-vuejs" target="_blank">
				La demo forma para de la charla 
				<b>Aprendiendo VueJS: Un ejemplo práctico de cómo usarlo</b>
				que puedes ver en este repositorio
			</a>
		</p>
		<img src="../assets/img/slide.png" alt="slide portada">
	</panel>
</template>

<script>
import Panel from '@/components/panel';

export default {
	name: 'about-view',
	components: {
		Panel
	}
}
</script>

<style lang="scss" scoped>
img {
	width: 100%;
}

p {
	font-size: 1.1rem;
	word-spacing: 0.1rem;
}

a:hover {
	cursor: pointer;
}
</style>


