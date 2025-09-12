import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import locations from "../../assets/warehouses.json";

// Custom Pin Icon
const customIcon = new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    popupAnchor: [0, -28],
});

// Component to fly to a location
function FlyToLocation({ location }) {
    const map = useMap();

    useEffect(() => {
        if (location) {
            map.flyTo([location.latitude, location.longitude], 12, {
                duration: 2, // fly animation duration in seconds
            });
        }
    }, [location, map]);

    return null;
}

export default function CoverageMap() {
    const [search, setSearch] = useState("");
    const [flyLocation, setFlyLocation] = useState(null);

    // Filter locations based on search input
    const filteredLocations = locations.filter(
        (loc) =>
            loc.city.toLowerCase().includes(search.toLowerCase()) ||
            loc.region.toLowerCase().includes(search.toLowerCase()) ||
            loc.covered_area.some((area) =>
                area.toLowerCase().includes(search.toLowerCase())
            )
    );

    // Set the first matching location to fly to
    useEffect(() => {
        if (search && filteredLocations.length > 0) {
            setFlyLocation(filteredLocations[0]);
        }
    }, [search]);

    return (
        <div className="w-full max-w-6xl mx-auto p-4">
            <h2 className="text-2xl font-bold mb-2 text-[#03373D]">
                We are available in 64 districts
            </h2>

            {/* Search Bar */}
            <div className="flex mb-4">
                <input
                    type="text"
                    placeholder="Search here..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="border rounded-full px-4 py-2 w-full max-w-md shadow-sm outline-[#CAEB66]"
                />
            </div>

            <p className="text-[#03373D] mb-4 text-xl">
                We deliver almost all over Bangladesh
            </p>

            {/* Map */}
            <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-lg">
                <MapContainer
                    center={[23.685, 90.3563]}
                    zoom={7}
                    scrollWheelZoom={true}
                    className="w-full h-full"
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                    />

                    {/* Fly to first filtered location */}
                    {flyLocation && <FlyToLocation location={flyLocation} />}

                    {/* Markers */}
                    {filteredLocations.map((loc, idx) => (
                        <Marker
                            key={idx}
                            position={[loc.latitude, loc.longitude]}
                            icon={customIcon}
                        >
                            <Popup>
                                <div className="text-sm">
                                    <p className="font-bold">{loc.city}</p>
                                    <p className="text-gray-600">{loc.region}</p>
                                    {loc.covered_area && (
                                        <ul className="mt-1 list-disc list-inside text-xs text-gray-500">
                                            {loc.covered_area.map((area, i) => (
                                                <li key={i}>{area}</li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </div>
        </div>
    );
}
