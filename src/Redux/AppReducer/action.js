import {
  FAILURE,
  FAILURE1,
  FAILURE2,
  FAILURE3,
  FAILURE4,
  FAILURE5,
  FAILURE6,
  REQUEST,
  REQUEST1,
  REQUEST2,
  REQUEST3,
  REQUEST4,
  REQUEST5,
  REQUEST6,
  SUCCESS,
  SUCCESS1,
  SUCCESS2,
  SUCCESS3,
  SUCCESS4,
  SUCCESS5,
  SUCCESS6,
} from "./actiontype";
import axios from "axios";
function getProductsData() {
  return async (dispatch) => {
    dispatch({
      type: REQUEST,
      payload: true,
    });
    let data = await axios.get("https://het4bs.sse.codesandbox.io/news");
    let ourData = data.data;
    console.log("ourData:", ourData);
    if (data) {
      dispatch({
        type: SUCCESS,
        payload: ourData,
      });
    } else {
      dispatch({
        type: FAILURE,
        payload: true,
      });
    }
  };
}

function getProductsData1() {
  return async (dispatch) => {
    dispatch({
      type: REQUEST1,
      payload: true,
    });
    let data = await axios.get("https://het4bs.sse.codesandbox.io/Moments");
    let ourData1 = data.data;
    console.log("ourData:", ourData1);
    if (data) {
      dispatch({
        type: SUCCESS1,
        payload: ourData1,
      });
    } else {
      dispatch({
        type: FAILURE1,
        payload: true,
      });
    }
  };
}

// 3rd  //////////////////////////

function getProductsData2() {
  return async (dispatch) => {
    dispatch({
      type: REQUEST2,
      payload: true,
    });
    let data = await axios.get("https://het4bs.sse.codesandbox.io/Resto");
    let ourData2 = data.data;
    console.log("ourData:", ourData2);
    if (data) {
      dispatch({
        type: SUCCESS2,
        payload: ourData2,
      });
    } else {
      dispatch({
        type: FAILURE2,
        payload: true,
      });
    }
  };
}

// 3rd//////////////

function getProductsData3() {
  return async (dispatch) => {
    dispatch({
      type: REQUEST3,
      payload: true,
    });
    let data = await axios.get("https://het4bs.sse.codesandbox.io/Amazing");
    let ourData3 = data.data;
    console.log("ourData:", ourData3);
    if (data) {
      dispatch({
        type: SUCCESS3,
        payload: ourData3,
      });
    } else {
      dispatch({
        type: FAILURE3,
        payload: true,
      });
    }
  };
}

// 4th ////////////////

function getProductsData4() {
  return async (dispatch) => {
    dispatch({
      type: REQUEST4,
      payload: true,
    });
    let data = await axios.get("https://het4bs.sse.codesandbox.io/Coupon");
    let ourData4 = data.data;
    console.log("ourData:", ourData4);
    if (data) {
      dispatch({
        type: SUCCESS4,
        payload: ourData4,
      });
    } else {
      dispatch({
        type: FAILURE4,
        payload: true,
      });
    }
  };
}



  //////////////// 5th /////////////

  function getProductsData5(p=1) {
    return async (dispatch) => {
      dispatch({
        type: REQUEST5,
        payload: true,
      });
      let data = await axios.get(`https://het4bs.sse.codesandbox.io/artical?_page=${p}&_limit=5`);
      let ourData5 = data.data;
      console.log("ourData:", ourData5);
      if (data) {
        dispatch({
          type: SUCCESS5,
          payload: ourData5,
        });
      } else {
        dispatch({
          type: FAILURE5,
          payload: true,
        });
      }
    };
  }
  


  ///////////////  6th ///////////



  function getProductsData6(p=1) {
    return async (dispatch) => {
      dispatch({
        type: REQUEST6,
        payload: true,
      });
      let data = await axios.get(`https://het4bs.sse.codesandbox.io/directory?_page=${p}&_limit=5`);
      let ourData6 = data.data;
      console.log("ourData:", ourData6);
      if (data) {
        dispatch({
          type: SUCCESS6,
          payload: ourData6,
        });
      } else {
        dispatch({
          type: FAILURE6,
          payload: true,
        });
      }
    };
  }
  


export {
  getProductsData,
  getProductsData1,
  getProductsData2,
  getProductsData3,
  getProductsData4,
  getProductsData5
  ,getProductsData6
};
