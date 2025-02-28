import { render, screen } from "@testing-library/react"

import { GifGridItem } from "../../src/components/GifGridItem"

describe('Pruebas en GifGridItem', () => {
    const title = 'Saitana';
    const url = 'https://one-piece.com/luffy.jpg'

    test('Debe de hacer match con el snapshot', () => {
        const { container } = render(<GifGridItem title={title} url={url} />);
        expect(container).toMatchSnapshot();
    });

    test('Debe de mostrar la imagen con el URL y el ALT indicado', () => {
        render(<GifGridItem title={title} url={url} />);
        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( alt );
    });

    test('Debe de mostrar el titulo en el componente', () => { 
        render(<GifGridItem title={title} url={url} />);
        expect( screen.getByText( title ) ).toBeTruthy();
     })
 })