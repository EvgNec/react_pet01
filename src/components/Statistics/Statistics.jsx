import { Container, Title, List, Item, Label, Percentage } from './Statistics.styled.js'

// функція для рандомного кольору статистики
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 12345678).toString(16)}`;
  }

export default function Statistics( {title, stats} ) {
  return (
    <Container className="statistics">
  {title && <Title className="title">Upload stats</Title>}

      <List>
        {stats.map((item) => (
          <Item key={item.id} 
          style={{
                backgroundColor: getRandomHexColor(),
              }}>
          <Label>{item.label}</Label>
          <Percentage>{item.percentage}</Percentage>
          </Item>
        ))}
      </List>
</Container>
  );
}