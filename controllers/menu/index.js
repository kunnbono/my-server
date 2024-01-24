import { menuInfo } from "../../api/menu.js";

export const getMenuInfo = async req => {
    return menuInfo()
};