import { useParams } from "react-router-dom";
import { hotproduct } from "../Types/Types";
import AddInfo from "./AddInfos";
const ProductPage = () => {
    const { id } = useParams();
    const product = hotproduct.ProductData.find((item) => item.id === Number(id));
    if (!product) {
        return <div>Product not found</div>;
    }
  return (
    <div><AddInfo/></div>
  )
}

export default ProductPage