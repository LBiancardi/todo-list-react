function ActionButton({ color, text, onClick, messageId, className }) {
  return (
    <button
      onClick={onClick}
      id={messageId}
      className={className}
      style={{
        backgroundColor: `${color}`,
      }}
    >
      {text}
    </button>
  );
}

export default ActionButton;
