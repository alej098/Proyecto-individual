// rootReducer.js
import { GET_DOGS, DETAIL, GET_TEMPERAMENTS, SEARCH, PAGINATE, ORDEN, FILTER, FILTERER } from "../actions/actions-types";


let initialState = {
  AllDogs: [],
  Alltemperaments: [],
  DogsDetail: {},
  AllDogsBackUp: [],
  Dogsfilterer:{},
  currentPage: 0
};

function rootReducer(state = initialState, action) {
  const num_cards = 8;

  switch (action.type) {
    case GET_DOGS:
      return {
        ...state,
        AllDogs: [...action.payload].splice(0, num_cards),
        AllDogsBackUp: action.payload
      };

    case DETAIL:
      return {
        ...state,
        DogsDetail: action.payload
      };

    case GET_TEMPERAMENTS:
      
      return {
        ...state,
        Alltemperaments: action.payload
      };

    case SEARCH:
      return {
        ...state,
        AllDogs: action.payload
      };

    case PAGINATE:
      const prev_page = state.currentPage - 1;
      const next_page = state.currentPage + 1;
      const firstIndex = action.payload === "next" ? next_page * num_cards : prev_page * num_cards;

      if (action.payload === "next" && firstIndex >= state.AllDogsBackUp.length) return state;
      else if (action.payload === "prev" && prev_page < 0) return state;

      return {
        ...state,
        AllDogs: [...state.AllDogsBackUp].splice(firstIndex, num_cards),
        currentPage: action.payload === "next" ? next_page : prev_page,
      };

    case ORDEN:
      switch (action.payload) {
        case "A-Z":
          let ascen = [...state.AllDogsBackUp].sort((prev, next) => {
            if (prev.name.toLowerCase() > next.name.toLowerCase()) return 1;
            if (prev.name.toLowerCase() < next.name.toLowerCase()) return -1;
            return 0;
          });
          return {
            ...state,
            AllDogs: [...ascen].splice(0, num_cards),
            AllDogsBackUp: ascen,
            currentPage: 0
          };

        case "Z-A":
          let descen = [...state.AllDogsBackUp].sort((prev, next) => {
            if (prev.name.toLowerCase() > next.name.toLowerCase()) return -1;
            if (prev.name.toLowerCase() < next.name.toLowerCase()) return 1;
            return 0;
          });
          return {
            ...state,
            AllDogs: [...descen].splice(0, num_cards),
            AllDogsBackUp: descen,
            currentPage: 0
          };

        case "PESO_ASC":
          let ascenPeso = [...state.AllDogsBackUp].sort((prev, next) => {
            if (prev.weight.imperial > next.weight.imperial) return 1;
            if (prev.weight.imperial < next.weight.imperial) return -1;
            return 0;
          });

          return {
            ...state,
            AllDogs: [...ascenPeso].splice(0, num_cards),
            AllDogsBackUp: ascenPeso,
            currentPage: 0
          };

        case "PESO_DESC":
          let descenPeso = [...state.AllDogsBackUp].sort((prev, next) => {
            if (prev.weight.imperial > next.weight.imperial) return -1;
            if (prev.weight.imperial < next.weight.imperial) return 1;
            return 0;
          });

          return {
            ...state,
            AllDogs: [...descenPeso].splice(0, num_cards),
            AllDogsBackUp: descenPeso,
            currentPage: 0
          };

        default:
          return state;
      }

      case FILTER:
        const tempe = [...state.AllDogsBackUp].filter((dog) => {
          return dog.temperament && dog.temperament.includes(action.payload); 
        });
    
        return {
          ...state,
          AllDogs: tempe
        };
      
        case FILTERER:
  if (action.payload === "DB") {
    return {
      ...state,
      AllDogs: [...state.AllDogsBackUp].filter((dog) => dog.iscreated === true).splice(0, num_cards),
      Dogsfilterer: [...state.AllDogsBackUp].filter((dog) => dog.iscreated === true),
    };
  } else {
    return {
      ...state,
      AllDogs: [...state.AllDogsBackUp].filter((dog) => !isNaN((dog.id))).splice(0, num_cards),
      Dogsfilterer: [...state.AllDogsBackUp].filter((dog) => !isNaN((dog.id))),
    };
  }

  
    default:
      return state;
  }
  
}

export default rootReducer;
