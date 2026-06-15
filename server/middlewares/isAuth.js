import jwt from "jsonwebtoken";

const isAuth = async (req, res, next) => {
    try {
        const { token } = req.cookies;

        if (!token) {
            return res.status(401).json({
                message: "Authentication required. No token found."
            });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if (!decoded || !decoded.userId) {
            return res.status(401).json({
                message: "Invalid token"
            });
        }

        req.userId = decoded.userId;

        next();
    } catch (error) {
        return res.status(401).json({
            message: `Authentication failed: ${error.message}`
        });
    }
};

export default isAuth;