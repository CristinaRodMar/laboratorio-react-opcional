import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";

export const DetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const location = useLocation();

    const searchParams = new URLSearchParams(location.search);
    const filter = searchParams.get("filter") || "";

    return (
        <div className="detail-container">
            <h2>Detalles</h2>
            <h3>Id: {id}</h3>
            <Link to={`/list?filter=${encodeURIComponent(filter)}`}> Volver a lista </Link>
        </div>
    )
}