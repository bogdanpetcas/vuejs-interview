import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useHotelStore = defineStore('hotel', () => {
  const hotels = ref([
    { id: 1, name: "Hotel 1", address: "Park Avenue 34" },
    { id: 2, name: "Hotel 2", address: "Rounded square 5" },
    { id: 3, name: "Hotel 3", address: "Independence day 99" }
  ]);

  return {
    hotels
  };
});
