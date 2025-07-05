
"use client";

import { useEffect, useState } from "react";

export default function AgeCounter() {
    const birthDate = new Date("2001-05-01T00:00:00Z");

    const getAge = () => {
        const now = new Date();
        const years = now.getFullYear() - birthDate.getFullYear();

        const lastBirthday = new Date(now.getFullYear(), 4, 1);
        if (now < lastBirthday)
            lastBirthday.setFullYear(now.getFullYear() - 1);
        const days = Math.floor(
            (now.getTime() - lastBirthday.getTime()) / (1000 * 60 * 60 * 24)
        );
        const yesterday = new Date(now);
        yesterday.setDate(now.getDate() - 1);

        const midnight = new Date(now);
        midnight.setHours(0, 0, 0, 0);
        const seconds = Math.floor((now.getTime() - midnight.getTime()) / 1000);

        return { years, days, seconds };
    };

    const [age, setAge] = useState(getAge());

    useEffect(() => {
        const interval = setInterval(() => setAge(getAge()), 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            I'm <strong>{age.years}</strong> years, <strong>{age.days}</strong> days, and <strong>{age.seconds}</strong> seconds old.
        </>
    );
}