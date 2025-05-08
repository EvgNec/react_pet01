import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  padding: 10px 16px;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  background-color: white;
  &:hover {
    background-color: #f5f7fa;
  }
`;
export const Status = styled.span`
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: 16px;
  background-color: ${props => (props.$isOnline ? '#4CAF50' : '#F44336')};
`;
export const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 16px;
  border: 2px solid #ddd;
`;

export const Name = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: #333;
`;
