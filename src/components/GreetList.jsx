export default function GreetList({ data }) {
  console.log('LIST RENDER');
  return (
    <table border={1} style={{ width: '100%' }}>
      <thead>
        <tr>
          <th>No</th>
          <th>Words</th>
          <th>Title</th>
          <th>URL</th>
          {/* Add unique field for key on list rendering */}
          <th>Created</th>
        </tr>
      </thead>
      <tbody>
        {data.map((greet, index) => (
          // <tr key={index}>
          <tr key={greet.created}>
            <td>{index + 1}</td>
            <td>{greet.words}</td>
            <td>{greet.title}</td>
            <td>{greet.url}</td>
            {/* Convert timestamp to string for the full meaning */}
            <td>{new Date(greet.created).toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
