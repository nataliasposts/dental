
const doctorList = [
    {doctorID: 9876, doctorName: "Jon Tern", doctorPosition: "dentist"}, 
    {doctorID: 9877, doctorName: "Mary Smith", doctorPosition: "dentist"},
    {doctorID: 9878, doctorName: "Alex Smirnov", doctorPosition: "dentist"},
    {doctorID: 9879, doctorName: "Anna Braun", doctorPosition: "dentist"}
  ];

  const initialState ={doctorList}
const doctorReducer = (state = initialState , action)=> {
    switch(action.type){
         default: return {...state}
    }
}

export default doctorReducer;