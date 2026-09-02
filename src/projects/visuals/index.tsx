import type { ComponentType } from "react";
import OpenEMRVisual from "./OpenEMRVisual";
import RiteClinicVisual from "./RiteClinicVisual";
import AIExerciseVisual from "./AIExerciseVisual";
import RiteTutorVisual from "./RiteTutorVisual";
import RiteRestaurantVisual from "./RiteRestaurantVisual";
import HomeProsVisual from "./HomeProsVisual";
import InstantDeliveryVisual from "./InstantDeliveryVisual";

export const projectVisuals: Record<string, ComponentType> = {
  openemr: OpenEMRVisual,
  riteclinic: RiteClinicVisual,
  aitracker: AIExerciseVisual,
  ritetutor: RiteTutorVisual,
  riterestaurant: RiteRestaurantVisual,
  homepros: HomeProsVisual,
  instantdelivery: InstantDeliveryVisual,
};
