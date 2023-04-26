import React, { useEffect, useState } from "react";

const HomePage = () => {
    const [avos, setAvos] = useState<TProduct[]>([]);

    useEffect(() => {
        fetch("/api/avo")
            .then((res) => res.json())
            .then((res) => {
                console.log(res), setAvos(res.data);
            })
            .catch((e) => console.log(e));
    }, []);
    return (
        <div>
            {avos.map((a) => (
                <div key={a.id}>{a.name}</div>
            ))}
        </div>
    );
};

export default HomePage;
