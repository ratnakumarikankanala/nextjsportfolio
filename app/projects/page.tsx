const Projects = () => {
    return (<div className="flex flex-col p-4">
        <h1 className="text-blue-500 text-3xl font-bold">Projects</h1>
        <h3 className="text-blue-300  font-semibold">E-commerce</h3>
        <p>A healthcare test booking platform enabling users to schedule medical tests and manage orders.
        </p>
        <p><span className="text-gray-500">Technologies:</span> React.js, JavaScript, HTML5, CSS3, Material UI, REST APIs, Here Maps</p>
        <ul className="list-disc p-4">
            <li>Developed responsive UI for booking medical tests based on slot availability
            </li>
            <li>
                Implemented Parent & Child order functionality for family bookings
            </li>
            <li>
                Integrated APIs for slot availability, order management, and booking confirmation
            </li>
            <li>
                Built One-Click Booking feature using URL-based data extraction
            </li>
            <li>
                Integrated Here Maps for location-based services
            </li>
            <li>
                Improved SEO using schema markup
            </li>
            <li>
                Created reusable components to enhance maintainability</li>
        </ul>
        <h3 className="text-blue-300  font-semibold">Hc-portal</h3>
        <p>Internal portal for managing healthcare test bookings and scheduling.
        </p>
        <p><span className="text-gray-500">Technologies:</span> React.js, JavaScript, HTML5, CSS3, Material UI, REST APIs</p>
        <ul className="list-disc p-4">
            <li>Developed Slot Management Module for dynamic scheduling
            </li>
            <li>
                Integrated APIs for phlebotomist availability and booking management
            </li>
            <li>
                Implemented Repeat Sample Request (RSR) functionality
            </li>
            <li>
                Migrated maps from Google Maps to Here Maps
            </li>
            <li>
                Assisted in debugging and improving system reliability
            </li>
            <li>
                Created reusable components to enhance maintainability</li>
        </ul>
    </div>)
}
export default Projects