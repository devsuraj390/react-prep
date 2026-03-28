import { useParams } from 'react-router-dom';
import Accordion from '../components/accordion';

export default function ComponentPage() {
  const { name } = useParams();

  const renderComponent = () => {
    switch (name) {
      case 'accordion':
        return <Accordion />;
      default:
        return <div>Component Not Found!!</div>;
    }
  };

  return <div>{renderComponent()}</div>;
}
