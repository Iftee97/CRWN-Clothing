import styled from 'styled-components'

export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

export const ShoppingIcon = styled.img`
  width: 24px;
  height: 24px;
`

export const ItemCount = styled.span` 
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;

  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-select: none;
`
