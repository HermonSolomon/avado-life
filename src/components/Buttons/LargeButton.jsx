// Use case of a large button component can be fount on "/home" page
const LargeButton = ({ title, image, onClick }) => {
   return (
      <button className="btn" onClick={onClick}>
         <img className="large-button" src={image} alt="" />
         <h5 className="large-button__text">{title}</h5>
      </button>
   );
};

export default LargeButton;
