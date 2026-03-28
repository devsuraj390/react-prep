const AccordionItem = ({ title, content, isOpen, index, onItemClick }) => {
  return (
    <div style={{ border: '1px solid #ccc', marginBottom: '8px' }}>
      <button
        onClick={() => onItemClick(index)}
        style={{
          width: '100%',
          textAlign: 'left',
          padding: '10px',
          background: '#f5f5f5',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        {title}
      </button>

      {isOpen && (
        <div style={{ padding: '10px', background: '#eee' }}>{content}</div>
      )}
    </div>
  );
};

export default AccordionItem;
