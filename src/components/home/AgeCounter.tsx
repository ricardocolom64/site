import { useCallback, useEffect, useState } from "react";

export default function AgeCounter() {
    const birthDate = new Date("2001-05-01T00:00:00Z");

    const getAge = useCallback(() => {
        const now = new Date();
        const lastBirthday = new Date(now.getFullYear(), 4, 1);

        if (now < lastBirthday) {
            lastBirthday.setFullYear(now.getFullYear() - 1);
        }

        const years = lastBirthday.getFullYear() - birthDate.getFullYear();
        const days = Math.floor(
            (now.getTime() - lastBirthday.getTime()) / (1000 * 60 * 60 * 24)
        );
        const midnight = new Date(now);
        midnight.setHours(0, 0, 0, 0);
        const seconds = Math.floor((now.getTime() - midnight.getTime()) / 1000);

        return { years, days, seconds };
    }, []);

    const [age, setAge] = useState(getAge());

    useEffect(() => {
        const interval = setInterval(() => setAge(getAge()), 1000);
        return () => clearInterval(interval);
    }, [getAge]);

    return (
        <>
            {"I'm "}<strong>{age.years}</strong> years, <strong>{age.days}</strong> days, and <strong>{age.seconds}</strong> seconds old.
        </>
    );
}