import React from "react";
import { useSelector } from "react-redux";
import { ProfileCard } from ""






export default Profiles(){
    const profiles = useSelector(state => state.users)

    return (
        <section>
        {profiles.map((profile) => 
            <)}
        </section>
    )
}