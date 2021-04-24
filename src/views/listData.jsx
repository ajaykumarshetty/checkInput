import { connect } from "react-redux"

const ListData = (props)=>{
    const { listData } = props;
    return(
        <div>
            {listData && listData.map((data)=>(
                    <p>{data}</p>
                ))
            }
        </div>
    )
}

const mapStateToProps = (state)=>{
    console.log(state)
    return{
        listData : state.listDataReducer.listData
    }
}

export default connect(mapStateToProps , null) (ListData)