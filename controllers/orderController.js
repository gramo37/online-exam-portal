exports.createOrder = async (req, res, next) => {
    try {
        const {description, id, images, price} = req.body;
        console.log(description, id, images, price)
        res.status(200).json({
            success: true,
            message: "Order Placed Successfully"
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}