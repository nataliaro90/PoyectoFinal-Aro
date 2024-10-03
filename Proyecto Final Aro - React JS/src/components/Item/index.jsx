import { Link } from "react-router-dom";

const Item = ({ id, title, category, img, price, dues }) => {
    return (
        <article className="item">
            <Link to={`/detalle/${id}`} className="item-link">
                <picture className="item-picture">
                    <img 
                        className="item-picture-img" 
                        src={`/img/item/${img}`} 
                        alt={`${title} - Foto`} 
                        loading="lazy"
                    />
                </picture>
                <div className="item-info">
                    <h5 className="item-info-category">{category}</h5>
                    <h4 className="item-info-title">{title}</h4>
                    <h3 className="item-info-price">${price}.-</h3>
                    <h4 className="item-info-dues">{dues}Cuotas Sin Interés</h4>
                </div>
            </Link>
        </article>
    );
};

export default Item;

