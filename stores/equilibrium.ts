import Color from "colorjs.io";

export const useEquilibriumStore = defineStore("equilibriumStore", {
  state: (): EquilibriumState => ({
    temperature: 293.15,
    tempMin: 273.15,
    tempMax: 313.15,
    catalyst: 0, // doesn't do anything
    concentrationA: 0.5,
    concentrationB: 0.5,
    concentrationC: 0.5,
    equilibriumConstant: 0.5 / (0.5 * 0.5),
    pressure: 1,
  }),
  getters: {
    get: (state) => {
      return (name: keyof EquilibriumState) => state[name];
    },
    set: (state) => {
      return (name: keyof EquilibriumState, value: number) => {
        state[name] = value;
      };
    },
    progress: (state) => {
      let Q =
        state.concentrationC / (state.concentrationA * state.concentrationB);
      let tempPercent =
        ((state.temperature - state.tempMin) /
          (state.tempMax - state.tempMin)) *
        2;
      let pressurePercent = ((state.pressure - 0.1) / 1.8) * 2;

      const logistic =
        1 /
        (1 +
          Math.exp(
            -1 * (Q - state.equilibriumConstant * tempPercent * pressurePercent)
          ));
      return Math.abs(logistic - 1);
    },
    colors: (state) => {
      let progress = state.progress;

      let red = new Color("rgb(239 68 68)");
      let range = red.range(new Color("#6050DC"));

      let color = range(progress);
      let lighter = new Color(color);
      lighter.lighten(0.4);

      return [color.toString(), lighter.toString()];
    },
    fireOpacity: (state) => {
      return (state.temperature - 293.15) / (state.tempMax - 293.15);
    },
    stateInWords: (state) => {
      let progress = state.progress;
      progress = Math.round((progress + Number.EPSILON) * 10) / 10;
      if (progress < 0.5) {
        return "shifted to the left";
      } else if (progress > 0.5) {
        return "shifted to the right";
      } else {
        return "in equilibrium";
      }
    },
  },
});
