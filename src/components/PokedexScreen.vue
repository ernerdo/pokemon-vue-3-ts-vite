<script setup lang="ts">
  import PokedexStat from '@/components/PokedexStat.vue'
  interface Pokemon {
    name: string
    sprites: {
      front_default: string
    }
    stats: Array<{
      base_stat: number
      stat: {
        name: string
      }
    }>
  }
  interface Props {
    loading: boolean
    error: boolean
    pokemon: Pokemon
    pokemonId: number | string
  }
  defineProps<Props>()
</script>
<template>
  <div class="pokedex-screen">
    <img
      v-if="error"
      src="../assets/error.gif"
      alt="Something was wrong pokemon"
      class="pokedex-no-screen"
    />
    <img
      v-else-if="loading"
      src="../assets/loading.gif"
      alt="We are searching your pokemon"
      class="pokedex-no-screen"
    />
    <div v-else class="pokemon-info">
      <h2 class="pokemon-name">{{ pokemon.name }}</h2>
      <img
        class="pokemon-img"
        :src="pokemon.sprites.front_default"
        :alt="pokemon.name"
      />
      <ul class="pokemon-stats">
        <PokedexStat
          v-for="item in pokemon.stats"
          :key="item.stat.name"
          :item="item"
        />
      </ul>
    </div>
  </div>
</template>
