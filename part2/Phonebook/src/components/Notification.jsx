const Notification = ({user,task}) => {
    const success = {
        color: 'green',
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    }

    const failure = {
        color: 'red',
        background:'lightgrey',
        fontSize:20,
        borderStyle:'solid',
        borderRadiusL:5,
        padding:10,
        marginBottom:10
    }
    const message = (task==='create')?`Added Contact ${user}`:`Updated Contact ${user}`
    if(user===null){
        return null;
    }
    else if(task === 'Error'){     
        return(
            <div style={failure}>
               {`Information for ${user} has already been removed from server`}
            </div>
        )
    }else{
        return(
            <div style={success}>
                {message}
            </div>
        )
    }
}
export default Notification;