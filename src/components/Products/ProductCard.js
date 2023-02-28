import { Rating } from "@mui/material";

const ProductCard = ({ productInfo }) => {
  const { description, ratingScore } = productInfo;

  return (
    <div className="flex flex-col min-w-[16rem]">
      <img
        src={productInfo?.image}
        alt={productInfo?.product_name}
        className="h-56 object-cover w-full max-w-sm rounded-t-lg"
      />

      <div className="border border-[#3a998e] rounded-b-lg p-3">
        <h4 className="text-sm text-gray-800 min-h-[3rem] overflow-y-hidden">
          {description?.length <= 30
            ? description
            : description.slice(0, 50) + "..."}
        </h4>
        <h3 className="font-semibold">{productInfo?.price}</h3>
        <Rating value={ratingScore} readOnly size="medium" />
      </div>
    </div>
  );
};

export default ProductCard;
