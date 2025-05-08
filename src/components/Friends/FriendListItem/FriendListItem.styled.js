import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  background-color: #fff;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #f5f7fa;
  }
`;
export const Status = styled.li`
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: 16px;
  background-color: gray; /* За замовчуванням офлайн */

  &.online {
    background-color: #2ecc71;
  }

  &.offline {
    background-color: #e74c3c;
  }
`;
export const Avatar = styled.li`
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
