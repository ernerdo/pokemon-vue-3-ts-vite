<script setup lang="ts">
  interface Props {
    item: {
      base_stat: number
      stat: {
        name: string
      }
    }
  }

  defineProps<Props>()
</script>

<template>
  <li class="pokemon-stat">
    <span class="stat-name">
      <b>{{ item.stat.name }}: </b>
    </span>
    <span>{{ item.base_stat }}</span>
  </li>
</template>
