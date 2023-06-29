import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom.min"; 
import {ProfileCard} from "./ProfileCard"
import { selectAllUsers } from "./usersSlice";






export const Profiles = ()=>{

    const profiles = useSelector(selectAllUsers);

    const rendered = profiles.map((profile) => 
        <div className="card">
            <ProfileCard key = {profile.id} profile={profile}/>
            <Link to={`/Profiles/${profile.id}`} className="button muted-button">
                View Profile
            </Link>
        </div>
        )

    return (
        <section>
        {rendered}
        </section>
    )
}