import {useMemo} from "react";
import {GoogleMap, UseLoadScript, Marker, useLoadScript} from "@react-google-maps/api";
import styles from "./Map.module.css";
const Map = () =>{
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    });
    const center = useMemo(()=>({lat: 35.752579, lng: 51.336742}), [])
    const loader = <div>Loading...</div>;
    const map = 
    <GoogleMap
        zoom={18}
        center={center}
        mapContainerClassName="map-container"
    >
        <Marker position={center} />
    </GoogleMap>;
   
    
    
    return(
        <div className={styles.container}>
             { isLoaded ? map : loader }
        </div>
      
    );
};
export default Map;