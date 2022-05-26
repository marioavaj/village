
function VillageItem(props){

    const styleObj = {display: 'inline-block', fontSize: props.size, color: props.color }
     
    return(
      <>
       <p style={styleObj}>{props.type}</p>
        </>
      )
            
    }

    export default VillageItem;