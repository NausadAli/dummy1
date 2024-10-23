// app/components/LaunchList.jsx

export default function LaunchList({ launches }) {
  return (
    <div className="launch-list">
      {launches.map((launch) => (
        <div key={launch.flight_number} className="launch-item p-4 border border-gray-300 rounded-lg mb-4">
          <h2 className="text-xl font-semibold mb-2">{launch.mission_name}</h2>
          <p><strong>Launch Year:</strong> {launch.launch_year}</p>
          <p><strong>Rocket Name:</strong> {launch.rocket.rocket_name}</p>
          <p><strong>Launch Success:</strong> {launch.launch_success ? 'Yes' : 'No'}</p>
          {launch.details && <p className="mt-2"><strong>Details:</strong> {launch.details}</p>}
        </div>
      ))}
    </div>
  );
}
