import { useState } from "react";
import { connect } from "react-redux";
import { addData } from "../redux/action/listDataAction";

const AddList = (props) => {
    const [ name , setName]= useState("")

    
    const hadleSubmit = ()=>{
        if(name.length <= 5){
            return alert("Length should more than 5")
        }
        props.addData(name ,props.listData)
    }
    console.log(props)
  return (
    <div>
      <input onChange={(e)=>setName(e.target.value)} name="firstname" />
      <button onClick={hadleSubmit}>Submit</button>
    </div>
  );
};

const mapDispatchToState = (dispatch) => {
  return {
    addData: (data , list) => dispatch(addData(data , list)),
  };
};

const mapStateToProps = (state)=>{
    return{
        listData : state.listDataReducer.listData
    }
}

export default connect(mapStateToProps, mapDispatchToState)(AddList);
