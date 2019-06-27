
export default {

  namespace: 'example',

  state: {
  isshow:false,
  detail:[]
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *getdetail({ detail}, { call, put }) { 
      //param是从组件router传递过来的参数,这里就是上面定义的2
      //这里的call方法可以使用param参数传递给后台程序进行处理这里，也可以调用service层的方法进行调用后端程序，
      //这里的put表示存储在当前命名空间example中，通过save方法存在当前state中
 
 
       //在这里可以用ajax调用后台程序处理并返回数据，有很多种处理方式，当然有些处理不需要后端的，可以直接put方法更新state数据
  
       yield put({
          type: 'ret',   //这个就是调用reducers中的方法进行跟新当前命名空间state的数据
          detail:detail
       });
     },
     *isshow({isshow}, { call, put }) { 
      //param是从组件router传递过来的参数,这里就是上面定义的2
      //这里的call方法可以使用param参数传递给后台程序进行处理这里，也可以调用service层的方法进行调用后端程序，
      //这里的put表示存储在当前命名空间example中，通过save方法存在当前state中
 
 
       //在这里可以用ajax调用后台程序处理并返回数据，有很多种处理方式，当然有些处理不需要后端的，可以直接put方法更新state数据
  
       yield put({
          type: 'save',   //这个就是调用reducers中的方法进行跟新当前命名空间state的数据
          isshow:isshow
       });
     }
  },

  reducers: {
    save(state, action) { //这里的state是当前总的state，这里的action包含了上面传递的参数和type
      return { ...state, isshow:action.isshow }; //这里用ES6语法来更新当前state中num的值
    },
    ret(state, action) { //这里的state是当前总的state，这里的action包含了上面传递的参数和type
      return { ...state, isshow:action.detail }; //这里用ES6语法来更新当前state中num的值
    },
  },

};
