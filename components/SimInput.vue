<template>
  <Box class="flex flex-1 flex-col gap-1">
    <div class="flex justify-between">
      <label :for="name">{{ label }}</label>
      <span>{{ equilibrium.get(props.name) }}{{ end }}</span>
    </div>
    <input
      type="range"
      :name="name"
      id="name"
      :value="equilibrium.get(props.name)"
      @input="(event) => equilibrium.set(props.name, +(event.target! as HTMLInputElement).value)"
      :min="min"
      :max="max"
      :step="step"
    />
  </Box>
</template>

<script lang="ts" setup>
export interface Props {
  label: string;
  name: keyof EquilibriumState;
  min: number;
  max: number;
  end?: string;
  step?: number;
}

const props = withDefaults(defineProps<Props>(), {
  end: "",
  step: 1,
});
const equilibrium = useEquilibriumStore();
</script>
