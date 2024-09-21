import { render, screen} from "@testing-library/react";
import '@testing-library/jest-dom'
import Header from '../Header'
import { Provider } from "react-redux";
import appStore from '../../utils/ReduxStore/appStore';
import { BrowserRouter } from "react-router-dom";

it('Should load the header About items', ()=>{

    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    )

    const about = screen.getByText('About');
    expect(about).toBeInTheDocument();

}) 

it('Should load the header with cart Items  = 0', ()=>{

    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    )

    const cart = screen.getByText('Cart(0)');
    expect(cart).toBeInTheDocument();

}) 

it('Should load the header with cart', ()=>{

    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    )

    const cart = screen.getByText(/Cart/);
    expect(cart).toBeInTheDocument();

}) 