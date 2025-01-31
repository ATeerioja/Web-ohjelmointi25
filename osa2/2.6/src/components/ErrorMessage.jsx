const ErrorMessage = ({ message}) => {
  const ErrorStyle = {
    color: 'green',
    background: 'lightgray',
    fontSize: 20,
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  }



  if (message === null) {
    return null
  }

  return (
    <div className="error" style={ErrorStyle}>
      {message}
    </div>
  )
}

export default ErrorMessage