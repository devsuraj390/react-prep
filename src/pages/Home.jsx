import { Link } from 'react-router-dom';
import { componentList } from '../data/componentList';

export default function Home() {
  return (
    <div>
      {componentList.map((comp) => (
        <div key={comp.name}>
          <Link to={`/component/${comp.name}`}>{comp.label}</Link>
        </div>
      ))}
    </div>
  );
}
