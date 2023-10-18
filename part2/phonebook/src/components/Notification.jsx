

function Notification({ message }) {

  return (
    <div className={message.type === 'success' ? 'success' : 'error'}>
      {message.message}
    </div>
  )
}

export default Notification