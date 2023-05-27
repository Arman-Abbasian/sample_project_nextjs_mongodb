const ShowErrorsForm = ({fieldName,message}) => {
    return ( 
          <div className="text-red-700 flex gap-2">
            <p>{fieldName}: </p>
            <p>{message}</p>
          </div>
     );
}
 
export default ShowErrorsForm;