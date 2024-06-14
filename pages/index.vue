<template>
  <div
    class="max-w-7xl mx-auto h-screen flex flex-col p-5 gap-3 text-zinc-900 text-lg"
  >
    <Box>
      <h1>Le Chatelier's Principle Simulation</h1>
    </Box>
    <div class="flex items-start gap-3 flex-wrap">
      <Box>
        <span>This reaction is endothermic.</span>
      </Box>
      <Box>
        <span>A, B, C are all gases at all temperatures.</span>
      </Box>
      <Box>
        <span>The reaction is {{ equilibrium.stateInWords }}.</span>
      </Box>
      <Box class="flex flex-col gap-2">
        <span>Equation:</span>
        <div class="flex gap-3 text-2xl sm:text-3xl">
          <div class="flex flex-col gap-1">
            <span>A + B</span>
            <span
              class="border-red-500 bg-red-500/10 text-base border-2 px-4 rounded-full self-start"
              >Red</span
            >
          </div>
          <div>&Equilibrium;</div>
          <div class="flex flex-col gap-1">
            <span>C</span>
            <span
              class="border-[#6050DC] bg-[#6050DC]/10 text-base border-2 px-4 rounded-full self-start"
              >Majorelle blue</span
            >
          </div>
        </div>
      </Box>
    </div>
    <div class="flex-1 min-h-[50%] relative aspect-video">
      <Beaker
        :liquid="equilibrium.colors[0]"
        :bubble="equilibrium.colors[1]"
        class="w-full h-full md:py-10"
      />
      <img
        src="~/assets/fire.jpg"
        alt=""
        class="absolute bottom-0 left-1/2 h-1/5 -translate-x-1/2"
        :style="{
          opacity: equilibrium.fireOpacity,
        }"
      />
      <img
        src="~/assets/ice.jpg"
        alt=""
        class="absolute bottom-0 left-1/2 h-1/5 -translate-x-1/2"
        :style="{
          opacity: -equilibrium.fireOpacity,
        }"
      />
    </div>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
      <SimInput
        label="Concentration of A"
        name="concentrationA"
        :min="0.1"
        :max="5"
        end=" M"
        :step="0.1"
      />
      <SimInput
        label="Concentration of B"
        name="concentrationB"
        :min="0.1"
        :max="5"
        end=" M"
        :step="0.1"
      />
      <SimInput
        label="Concentration of C"
        name="concentrationC"
        :min="0.1"
        :max="5"
        end=" M"
        :step="0.1"
      />
      <SimInput
        label="Temperature"
        name="temperature"
        :min="equilibrium.tempMin"
        :max="equilibrium.tempMax"
        end=" K"
        :step="0.05"
      />
      <SimInput
        label="Pressure"
        name="pressure"
        :min="0.1"
        :max="1.9"
        end=" atm"
        :step="0.01"
      />
      <SimInput
        label="Mass of catalyst"
        name="catalyst"
        :min="0"
        :max="100"
        end="g"
        :step="0.1"
      />
    </div>
    <Box class="flex justify-between flex-wrap">
      <span
        >Crafted by
        <StyledLink to="https://cyrusyip.com">Cyrus Yip</StyledLink>.</span
      >
      <span
        >This project is
        <StyledLink to="https://github.com/realcyguy/chatelier"
          >open-source!</StyledLink
        ></span
      >
    </Box>
  </div>
</template>

<script setup lang="ts">
const equilibrium = useEquilibriumStore();
</script>
