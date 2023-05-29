import * as React from 'react';
import { List } from 'react-native-paper';

const MyComponent = () => {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  return (
    <List.Section>
      <List.Accordion
        title="Filtros"
        left={props => <List.Icon {...props} />}>
        <List.Item title="First item" />
        <List.Item title="Second item" />
      </List.Accordion>
    </List.Section>
  );
};

export default MyComponent;