import { ICoordinate } from "../Utils/interfaces";

export const Map = ({ latitude, longitude }: ICoordinate) => {
    const mapSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.468929768056!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259f8d2f0b45d%3A0x9c1c2d8e4e4b6b0e!2sEmpire%20State%20Building!5e0!3m2!1sen!2sbd!4v1630365792164!5m2!1sen!2sbd`;

    return (
        <iframe
            allowFullScreen
            title="map"
            src={mapSrc}
            width="100%"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
        />
    );
}
