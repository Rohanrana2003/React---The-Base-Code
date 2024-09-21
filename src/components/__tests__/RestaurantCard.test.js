import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import RestaurantCard from '../RestaurantCard'
import MOCK_DATA from '../mocks/resCardMock.json'

it('Should check the props data of restaurant card is correct or not', ()=>{

    render(<RestaurantCard resData={MOCK_DATA}/>);

    const name = screen.getByText('Pizza Hut')

    expect(name).toBeInTheDocument();


})