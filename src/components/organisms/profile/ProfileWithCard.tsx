import { Card } from "../../atoms/card/Card";
import {Profile} from "./Profile"
import type { ProfileProps } from '../../types/ProfileProps'


export const ProfileWithCard = (props: ProfileProps) => {
    const { image, job, biography, currentRole, email, twitterName, githubName, myname } = props;

    return (
        <>
            <Card>
                <Profile image={image} job={job} biography={biography} currentRole={currentRole} email={email} twitterName={twitterName} githubName={githubName} myname={myname}/>
            </Card>
        </>
    )
}