import { findIndex } from "lodash-es";
import check from "check-types";
import { nanoid } from "nanoid";
import toast from "react-hot-toast";
import { set, del, update } from "object-path-immutable";

function buildNovoBean(o) {
  return {
    identifier: nanoid(),
    descricao: o.descricao,
    valor: o.valor,
    quantidade: 1,
  };
}

const ESTADO_INICIAL = {
  username: "bruce",
  cart: [],
};

function superReducer(state = ESTADO_INICIAL, action) {
  switch (action.type) {
    case "VALOR": {
      try {
        check.assert.number(action.payload);
        const cartIndex = findIndex(state.cart, {
          identifier: action.identifier,
        });
        return set(state, ["cart", cartIndex, "valor"], action.payload);
      } catch {
        toast.error("não alterou valor");
        return state;
      }
    }
    case "QUANTIDADE": {
      try {
        check.assert.number(action.payload);
        const cartIndex = findIndex(state.cart, {
          identifier: action.identifier,
        });
        return set(state, ["cart", cartIndex, "quantidade"], action.payload);
      } catch {
        toast.error("não alterou quantidade");
        return state;
      }
    }
    case "PLUS": {
      const cartIndex = findIndex(state.cart, {
        identifier: action.identifier,
      });      
      return update(state, ["cart", cartIndex, "quantidade"], (v) => ++v);
    }

    case "REMOVER": {
      const cartIndex = findIndex(state.cart, {
        identifier: action.identifier,
      });
      return del(state, ["cart", cartIndex]);
    }
    case "ADICIONAR": {
      try {
        check.assert.nonEmptyObject(action.payload);
        return set(state, "cart", [
          buildNovoBean(action.payload),
          ...state.cart,
        ]);
      } catch {
        toast.error("não adicionou bean");
        return state;
      }
    }
    case "RESET_CART":
      return set(state, "cart", []);
    default:
      return state;
  }
}

export default superReducer;
