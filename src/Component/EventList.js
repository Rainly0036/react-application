export default function EventList({ events, handleClick }) {
    return (
        <div> 
            { events.map((event, index) => (
                <div key={event.id}>
                    <h2>{index + 1} - {event.title}</h2>
                    <button onClick={() => handleClick(event.id)}>Delete events</button>
                </div>
            ))}
        </div>
    )
}