import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDebounce } from "use-debounce";
import type { RickMorty } from "./types";

export const ListPage: React.FC = () => {
    const [members, setMembers] = useState<RickMorty[]>([]);
    const [texto, setTexto] = useState("");

    const [debouncedTexto] = useDebounce(texto, 500);

    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character")
            .then((res) => res.json())
            .then((data) => {
                setMembers(data.results);
            })
    }, []);

    const membersShow = members.filter((member) =>
        member.name.toLowerCase().includes(debouncedTexto.toLowerCase())
    );

    return (
        <>
            <input className="search-input" type="text" value={texto} onChange={(e) => setTexto(e.target.value)} placeholder="Buscar personaje..." />
            <div className="list-user-container">
                {membersShow.map((member) => (
                    <div key={member.id} className="character-card">
                        <img src={member.image} alt={member.name} />
                        <div className="info">
                            <h3>
                                <Link to={`/character/${member.id}`} className="character-name-link">
                                    {member.name}
                                </Link>
                            </h3>
                            <p>{member.status} - {member.species}</p>
                            <p><strong>Género:</strong> {member.gender}</p>
                            <p><strong>Tipo:</strong> {member.type || "Ninguno"}</p>
                            <p><strong>Origen:</strong> {member.origin.name}</p>
                            <p><strong>Última ubicación:</strong> {member.location.name}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};