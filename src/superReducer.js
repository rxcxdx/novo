import {findIndex} from "lodash-es";
import { update, set, del } from "object-path-immutable";
import check from "check-types";
import { nanoid } from "nanoid";

const ESTADO_INICIAL = {
  username: "bruce",
  cart: [],
};

function buildNovo(o) {
  return {
    identifier: nanoid(),
    descricao: o.descricao,
    valor: o.valor,
    quantidade: 1,
  };
}

function superReducer(state = ESTADO_INICIAL, action) {
  switch (action.type) {
    case "REMOVER": {
      const cartIndex = findIndex(state.cart, {
        identifier: action.identifier,
      });
      return del(state, ["cart", cartIndex]);
    }
    case "ADICIONAR": {
      try {
        check.assert.nonEmptyObject(action.payload);
        return set(state, "cart", [buildNovo(action.payload), ...state.cart]);
      } catch {
        console.log("não adicionou");
        return state;
      }
    }
    case "PLUS_QUANTIDADE": {
      const cartIndex = findIndex(state.cart, {
        identifier: action.identifier,
      });
      return update(state, ["cart", cartIndex, "quantidade"], (c) => ++c);
    }
    case "RESET":
      return ESTADO_INICIAL;
    default: {
      return state;
    }
  }
}

export default superReducer;
