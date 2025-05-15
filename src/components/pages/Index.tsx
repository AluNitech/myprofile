import { ProfileWithCard } from '../organisms/profile/ProfileWithCard'
import { OnlyHeader } from '../templates/OnlyHeader'

export const Index = () => {
    return (
        <OnlyHeader>
            <div className="width-full max-w-4xl mx-auto px-4 py-8">
                <ProfileWithCard myname='Rikuto Uemura' email='con18974@ict.nitech.ac.jp' job='I study at Nagoya Institute of Technology' biography='' twitterName='@Mia_nitech' image='https://images.unsplash.com/photo-1744148070187-b3815f7a9dbc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' currentRole='Student3' githubName='Miaaagit' />
            </div>
        </OnlyHeader>
    )
}