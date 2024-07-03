import React from 'react'

const ProfileImage = ({img}) => {
    return (
        <div>
            <img src={img} alt="profile image" width={300} height={200} className="rounded-full" />
        </div>
    )
}

export default ProfileImage