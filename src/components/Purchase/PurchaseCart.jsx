/* eslint-disable react/prop-types */


const PurchaseCart = ({pr}) => {
    const {photo_url,category_name}=pr
    console.log(pr)
    return (
        <div className="border flex justify-evenly items-center p-4 rounded-2xl">
            <div>
                <img className="w-48" src={photo_url} alt="" />
            </div>
            <div>
                <p className="text-4xl font-bold">{category_name}</p>
            </div>
        </div>
    );
};

export default PurchaseCart;