<script setup lang="ts">
  import type { Ref } from 'vue'
  import { computed, onMounted, ref } from 'vue'
  import VueMultiselect from 'vue-multiselect'

  // import Pokemon from '@/types/Pokemon'
  // interface Props {
  //   loading: boolean
  //   error: boolean
  //   pokemon: Pokemon
  //   pokemonId: number
  // }
  // defineProps<Props>()
  const pokemonNameToSearch: Ref<string> = ref('')
  const pokemonListStorage: Ref<string[]> = ref([])
  const emits = defineEmits<{
    (e: 'searchPokemon', pokemonName: string): void
  }>()
  const onSelect = (option: string) => {
    pokemonNameToSearch.value = option
    search()
  }

  const searchPokemon = computed(() => {
    return pokemonListStorage.value.filter((pokemon: string) => {
      return pokemon
        .toLowerCase()
        .includes(pokemonNameToSearch.value.toLowerCase())
    })
  })
  const search = () => {
    emits('searchPokemon', pokemonNameToSearch.value)
  }

  onMounted(() => {
    pokemonListStorage.value = JSON.parse(
      localStorage.getItem('pokemonListName') || '[]'
    )
  })
</script>
<template>
  <form class="pokemon-form" @:submit.prevent="search()">
    <VueMultiselect
      v-model="pokemonNameToSearch"
      :close-on-select="true"
      :options="pokemonListStorage"
      placeholder="Search pokemon"
      @select="onSelect"
    />
  </form>
</template>

<style src="vue-multiselect/dist/vue-multiselect.css"></style>
