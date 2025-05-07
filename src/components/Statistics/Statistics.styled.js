import styled from 'styled-components';

export const Container = styled.div`
  max-width: 400px;
  margin: 40px auto;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  font-family: 'Segoe UI', sans-serif;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: #333;
  background-color: #f7f7f7;
  padding: 20px 0;
  margin: 0;
  border-bottom: 1px solid #eee;
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Item = styled.li`
  flex: 1;
  padding: 20px 10px;
  background-color: #f0f4f8;
  border-right: 1px solid #e0e0e0;
  transition: background-color 0.3s ease;
  &:last-child {
    border-right: none;
  }
  &:hover {
    background-color: #dbe9f3;
  }
`;
export const Label = styled.span`
  display: block;
  font-size: 14px;
  color: black;
  margin-bottom: 8px;
`;

export const Percentage = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: black;
`;
