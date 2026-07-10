import ApiError from "../utils/ApiError.js";

export const authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.userType)) {
      throw new ApiError(403, "Access denied");
    }

    next();
  };
};
