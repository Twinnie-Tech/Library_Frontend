import React from 'react'
import UserArea from './UserArea'
const SiteHeader = () => {
    return (
        <header className="w-full bg-white headerContainer">
            <div className="container pt-3 sm:px-8 mx-auto h-14 flex items-center justify-between gap-4">
                <img
                    src="https://www.weareteachers.com/wp-content/uploads/Best-Library-Resources-for-Teachers.jpg"
                    alt="Library Resources"
                    width={178}
                    height={150}
                    title='Library'
                />
                <UserArea />
            </div>
        </header>
    )
}

export default SiteHeader
