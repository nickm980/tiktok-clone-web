import "svelte"
import { render, fireEvent, RenderResult, GetByText } from '@testing-library/svelte';
import NavBar from '../components/NavBar/NavBar.svelte'

it('navbar renders to screen', async () => {
	const result: RenderResult = render(NavBar);
	expect(true).toBe(true);
});

