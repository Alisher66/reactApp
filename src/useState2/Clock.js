import {useState} from 'react';

function Clock() {
    const [time, setTime] = useState(new Date());
   
    const getDateFormat = (date) => {
        let hours = (date.getHours()<=9) ? "0"+date.getHours() : date.getHours();
        let minutes = (date.getMinutes()<=9) ? "0"+date.getMinutes() :  date.getMinutes();
        let seconds = (date.getSeconds()<=9) ? "0"+date.getSeconds() : date.getSeconds();

        return (
            <span>
                {hours + ":" +minutes + ":" + seconds}
            </span>
        )
    }

    const getTime = () => {
        setInterval(() =>{
            setTime(new Date())
        }, 1000)
    }
    return (
        <div>
            {getTime()}
            <p>{getDateFormat(time)} </p>
        </div>
    )
}

export default Clock;