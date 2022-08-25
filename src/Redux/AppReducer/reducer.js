import {
  FAILURE,
  FAILURE1,
  FAILURE2,
  FAILURE3,
  FAILURE4,
  REQUEST,
  REQUEST1,
  REQUEST2,
  REQUEST3,
  REQUEST4,
  SUCCESS,
  SUCCESS1,
  SUCCESS2,
  SUCCESS3,
  SUCCESS4,
} from "./actiontype";

const initState = {
  news: [],
  isLoading: false,
  isError: false,
  filterData: [],
  Moments: [],
  Resto: [],
  Amazing: [],
  Coupon: [],
};

const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case REQUEST: {
      return {
        ...state,
        isLoading: payload,
      };
    }
    case SUCCESS: {
      return {
        ...state,
        data: payload,
        isLoading: false,
        news: payload,
        //   Moments:payload
      };
    }
    case FAILURE: {
      return {
        ...state,
        isError: payload,
      };
    }

    //    1st ///////

    case REQUEST1: {
      return {
        ...state,
        isLoading: payload,
      };
    }
    case SUCCESS1: {
      return {
        ...state,
        data: payload,
        isLoading: false,
        Moments: payload,
      };
    }
    case FAILURE1: {
      return {
        ...state,
        isError: payload,
      };
    }

    //  2nd ////////////////

    case REQUEST2: {
      return {
        ...state,
        isLoading: payload,
      };
    }
    case SUCCESS2: {
      return {
        ...state,
        data: payload,
        isLoading: false,
        Resto: payload,
      };
    }
    case FAILURE2: {
      return {
        ...state,
        isError: payload,
      };
    }

    // 3rd ///////////

    case REQUEST3: {
      return {
        ...state,
        isLoading: payload,
      };
    }
    case SUCCESS3: {
      return {
        ...state,
        data: payload,
        isLoading: false,
        Amazing: payload,
      };
    }
    case FAILURE3: {
      return {
        ...state,
        isError: payload,
      };
    }

    //  4th //////////

    case REQUEST4: {
      return {
        ...state,
        isLoading: payload,
      };
    }
    case SUCCESS4: {
      return {
        ...state,
        data: payload,
        isLoading: false,
        Coupon: payload,
      };
    }
    case FAILURE4: {
      return {
        ...state,
        isError: payload,
      };
    }

    default: {
      return state;
    }
  }
};

export { reducer };
