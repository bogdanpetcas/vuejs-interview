import { type IHotel } from '@/models/Hotel';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useHotelStore = defineStore('hotel', () => {
  const hotels = ref<IHotel[]>([
    { id: 1, name: "Luxor hotel", address: "3900 S Las Vegas Blvd, Las Vegas, NV 89119, United States", imgUrl: "luxor-hotel-casino.jpg" },
    { id: 2, name: "Marriott's Grand Chateau", address: "75 E Harmon Ave, Las Vegas, NV 89109, United States", imgUrl: "marriots_grand_chateau.jpg" },
    { id: 3, name: "Hilton Vacation Club", address: "5165 S Decatur Blvd, Las Vegas, NV 89118, United States", imgUrl: "hilton_vacation_club.jpg" }
  ]);

  return {
    hotels
  };
});
