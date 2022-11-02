<script setup lang="ts">
  import type { Ref } from 'vue'
  import { onMounted, ref } from 'vue'
  import VueMultiselect from 'vue-multiselect'

  const pokemonNameToSearch: Ref<string> = ref('')
  const pokemonListStorage: Ref<string[]> = ref([])
  const emits = defineEmits<{
    (e: 'searchPokemon', pokemonName: string): void
  }>()
  const onSelect = (option: string) => {
    pokemonNameToSearch.value = option
    search()
  }

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
  <VueMultiselect
    v-model="pokemonNameToSearch"
    :close-on-select="true"
    :options="pokemonListStorage"
    placeholder="Search pokemon"
    @select="onSelect"
  />
</template>

<style src="vue-multiselect/dist/vue-multiselect.css"></style>
