import { markRaw } from "vue";
import PhotoList from "./pages/PhotoList/PhotoList.vue";

export const PAGE = {
  PHOTO_LIST: 'PHOTO_LIST',
  PHOTO_INFO: 'PHOTO_INFO'
};

export const COMPONENT_CONFIG = {
  [PAGE.PHOTO_LIST]: markRaw(PhotoList),
}