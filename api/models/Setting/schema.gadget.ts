import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "Setting" model, go to https://importify.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  storageKey: "Kk-JJUAg4mZz",
  fields: {
    key: { type: "number", storageKey: "nP-a-yLrTHfk" },
    maxReviewCount: { type: "number", storageKey: "W2E715SxwzxB" },
    user: {
      type: "hasOne",
      child: { model: "shopifyCustomer", belongsToField: "setting" },
      storageKey: "qy43mpTyNZku",
    },
    userId: { type: "string", storageKey: "qCoZQB75zvXl" },
  },
};
