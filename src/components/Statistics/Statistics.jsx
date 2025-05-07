import { Container, Title, List, Item, Label, Percentage } from './Statistics.styled.js'

export default function Statistics( {title, stats} ) {
  return (
    <Container className="statistics">
  <Title className="title">Upload stats</Title>

      <List>
        {stats.map((item) => (
          <Item key={item.id}>
          <Label>{item.label}</Label>
          <Percentage>{item.percentage}</Percentage>
          </Item>
        ))}
      </List>
</Container>
  );
}