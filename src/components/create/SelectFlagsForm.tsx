import React from "react";
import { TopScreen } from "../../styles/screens";
import SelectFlags from "../map/SelectFlags";
import Navigation from "../navigation/Navigation";

const SelectFlagsForm = () => {
    return (
        <TopScreen>
            <SelectFlags />

            <Navigation />
        </TopScreen>
    );
};

export default SelectFlagsForm;
