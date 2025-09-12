import { defineStore } from 'pinia';

export const useHotelStore = defineStore('hotel', {
  state: () => {
    return {
      selectedHotel: { name: "", address: "" }
    }
  },
  getters: {
    hotelName(state) {
      return state.selectedHotel.name;
    },
    hotelAddress(state) {
      return state.selectedHotel.address;
    }
  },
  actions: {
    setSelectedHotel(hotel: any) {
      console.log("selected hotel ", hotel);
      this.selectedHotel = hotel;
    }
  }
})
