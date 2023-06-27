import React from "react";
import { useSelector } from "react-redux";
import {ProfileCard} from "./ProfileCard"






export const Profiles = ()=>{

    const profiles = useSelector(state => state.users);

    return (
        <section>
        {profiles.map((profile) => 
            <ProfileCard profile={profile}/>)}
        </section>
    );
}