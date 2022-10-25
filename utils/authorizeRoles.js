const authorizeRoles =  (...roles) => (req, res, next) => {
    console.log(req.user, roles)
    if(!roles.includes(req.user.role)) {
        return res.status(401).json({
            success: false,
            message: "Your are not authorized to access this."
        })
    }
    next();
}

module.exports = authorizeRoles;