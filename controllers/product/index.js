import { productAssignment } from "../../api/product_assignment.js";
import { productCharges } from "../../api/product_charges.js";

export const getAllCharges = () => {
  return productCharges;
};

export const getAllAssignments = () => {
  return productAssignment;
};
