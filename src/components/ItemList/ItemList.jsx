import './ItemList.css'

const ItemList = ({ children }) => {
  return (
    <div className='box'>
      {children}
    </div>
  );
};

export default ItemList;
