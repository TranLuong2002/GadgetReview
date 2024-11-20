import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "Review" model, go to https://importify.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  storageKey: "46ZIO5pBeOKN",
  fields: {
    productImage: { type: "string", storageKey: "Mysf_J0KZB6p" },
    products: {
      type: "belongsTo",
      parent: { model: "shopifyProduct" },
      storageKey: "KA6m-3ohMhTv",
    },
    rating: { type: "string", storageKey: "cEPU06q6J4Wi" },
    reviewContent: { type: "string", storageKey: "iDDHGKijeZmX" },
    userAvatar: { type: "string", storageKey: "1QwZuSTBBGya" },
    userContry: { type: "string", storageKey: "2z5wKTNSaNIN" },
    userName: {
      type: "string",
      validations: {
        required: true,
        stringLength: { min: 3, max: 10 },
      },
      storageKey: "j9xRz-EfgUAp",
    },
  },
};
