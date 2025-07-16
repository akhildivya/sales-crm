import React from 'react'

function Footer() {
    return (
        <div>
            <footer className="bg-danger text-light text-center py-3">
                &copy; {new Date().getFullYear()} CRM Dashboard. All rights reserved.
            </footer>
        </div>
    )
}

export default Footer