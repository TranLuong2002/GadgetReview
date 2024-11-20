import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "session" model, go to https://importify.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  storageKey: "2Zq_q-Fol841",
  fields: {
    roles: {
      type: "roleList",
      default: ["unauthenticated"],
      storageKey: "WtSh-uAUOkxM",
    },
  },
  shopify: { fields: ["shop", "shopifySID"] },
};