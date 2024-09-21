import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import MOCK_DATA from '../mocks/resListData.json'
import Body from '../Body'
import { BrowserRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: ()=>{
            return Promise.resolve(MOCK_DATA)
        },
    });
});


it('Should search Res list for any text input ', async()=>{

      await act( async ()=>{render(
            <BrowserRouter>
                    <Body/>
            </BrowserRouter>
        )})

        const searchbtn = screen.getByRole('button', {name:'Search'});

        const searchInput = screen.getByTestId('searchInput');

        fireEvent.change(searchInput, {target: {value: 'dana'}});

        fireEvent.click(searchbtn);

        const cards = screen.getAllByTestId('resCard');

        expect(cards.length).toBe(2);

}) 