import { teamInfo } from "../../api/team.js";

export const getTeamInfo = async req => {
    return teamInfo()
};