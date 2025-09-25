import { type Hotel } from '@/models/Hotel';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useHotelStore = defineStore('hotel', () => {
  const hotels = ref<Hotel[]>([
    { id: 1, name: "Luxor hotel", address: "3900 S Las Vegas Blvd, Las Vegas, NV 89119, United States", imgUrl: "https://lh3.googleusercontent.com/p/AF1QipPIYfHhYXO7M8fGx63nLonkKIwd0SWArMEkfqhW=w408-h272-k-no" },
    { id: 2, name: "Marriott's Grand Chateau", address: "75 E Harmon Ave, Las Vegas, NV 89109, United States", imgUrl: "https://lh3.googleusercontent.com/p/AF1QipNNv1x2fV3HEzwY5_OncmCqKIxFtDaLIraJUZ9t=w408-h272-k-no" },
    { id: 3, name: "Hilton Vacation Club", address: "5165 S Decatur Blvd, Las Vegas, NV 89118, United States", imgUrl: "https://lh3.googleusercontent.com/p/AF1QipPIYfHhYXO7M8fGx63nLonkKIwd0SWArMEkfqhW=w408-h272-k-no" }
  ]);

  return {
    hotels
  };
});
