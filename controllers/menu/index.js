import { menuInfo } from "../../api/menu.js";

export const getMenuInfo = async req => {
    try {
        const {stop_fake_errors} = req.query;
        return menuInfo(stop_fake_errors)
    } catch (error) {
        throw new Error (error)
    }
};