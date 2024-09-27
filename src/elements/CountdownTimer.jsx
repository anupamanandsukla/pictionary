import moment from "moment";
import { useEffect, useState } from "react";

export function CountdownTimer({ date }) { // Pass date as a prop
    const momentObject = moment(date);
    const [remainingTimeString, setRemainingTimeString] = useState(
        getRemainingTimeString(momentObject) // Initial remaining time string
    );

    useEffect(() => {
        const intervalId = setInterval(() => {
            const newRemainingTimeString = getRemainingTimeString(momentObject);
            setRemainingTimeString(newRemainingTimeString);
        }, 1000);

        // Cleanup function to clear interval on component unmount
        return () => clearInterval(intervalId);
    }, [date]); // Dependency array to rerun effect when momentObject changes

    if (momentObject.isValid() === false) return <></>;

    return (
        <div
            className={`${remainingTimeString?.isExpired ? 'text-red-500' : 'text-[#17972C]'}`}>
            {remainingTimeString?.text}
        </div>
    );
}
function getRemainingTimeString(momentObject) {
    const now = moment();
    const timeDifference = moment.duration(momentObject.diff(now)); // Time difference using Moment.js

    // Handle positive (future) and negative (past) differences
    const isExpired = timeDifference.asMilliseconds() < 0; // Check if target date is in the past
    const absoluteDifference = timeDifference.abs(); // Get absolute duration

    // Extract components in absolute values
    const days = absoluteDifference.asDays().toFixed(0);
    const hours = absoluteDifference.hours();
    const minutes = absoluteDifference.minutes();
    const seconds = absoluteDifference.seconds();

    // Format the output string
    const timeString = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    return { text: isExpired ? `-${timeString}` : timeString, isExpired };
}