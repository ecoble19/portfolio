import React from 'react';
import {render, screen, fireEvent} from "../../../../utils/tests/customRender";
import NavItem from './NavItem';
import defaultTheme from "../../../../utils/constants/theme";

describe('Nav Item Component', () => {
    test('renders title', () => {
        render(<NavItem title={'hello'} active={false} onClick={() => {
        }}/>);
        const el = screen.getByText(/hello/i);
        expect(el).toBeInTheDocument();
    });

    test('no border visible when inactive', () => {
        render(<NavItem title={'hello'} active={false} onClick={() => {
        }}/>);
        const el = screen.getByText(/hello/i).parentElement;
        expect(el).toHaveStyle('border-bottom: 4px solid transparent');
    });

    test('border visible when active', () => {
        render(<NavItem title={'hello'} active={true} onClick={() => {
        }}/>);
        const el = screen.getByText(/hello/i).parentElement;
        expect(el).toHaveStyle(`border-bottom: 4px solid ${defaultTheme.palette.primary.main}`);
    });

    test('on click triggers', () => {
        const mockFn = jest.fn();
        render(<NavItem title={'hello'} active={true} onClick={mockFn}/>);
        const el = screen.getByText(/hello/i);
        fireEvent.click(el);
        expect(mockFn).toHaveBeenCalled();
    });
});