import { act } from 'react-dom/test-utils'
import RestaurantMenu from '../RestaurantMenu'
import MOCK_DATA from '../mocks/foodMenuData.json'
import { Provider } from 'react-redux'
import '@testing-library/jest-dom'
import { fireEvent, render, screen } from "@testing-library/react";
import appStore from '../../utils/ReduxStore/appStore';
import Header from '../Header'
import { BrowserRouter } from 'react-router-dom'


global.fetch = jest.fn(()=>
    Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA)
})
)

test('should check cart is updating or not', async()=>{

    await act(async () =>{

        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header/>
                    <RestaurantMenu/>
                </Provider>
            </BrowserRouter>
        )
    })

    const header = screen.getByText('Bread(10)');
    fireEvent.click(header);
    // expect(screen.getAllByTestId('menuItem').length).toBe(10);

    const addbtns = screen.getAllByRole('button', {name: 'ADD +'});
    fireEvent.click(addbtns[0]);

    expect(screen.getByText('Cart(1)')).toBeInTheDocument()

})
