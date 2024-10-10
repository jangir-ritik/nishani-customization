import React from "react";
import ShareIcon from "@/public/icons/share.svg";
import FavoriteIcon from "@/public/icons/heart.svg";

const ProductHeader: React.FC = () => (
    <div className="product-name-header-container">
        <h1>Curb Chain</h1>
        <div className="product-header-actions">
            <button>
                <ShareIcon />
            </button>
            <button>
                <FavoriteIcon />
            </button>
        </div>
    </div>
);

export default ProductHeader;