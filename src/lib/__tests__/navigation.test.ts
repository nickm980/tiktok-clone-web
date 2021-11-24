import { NavBar } from '../components'
import { render, fireEvent } from '@testing-library/svelte';

it('it works', async () => {
	const { getByText, getByTestId } = render(NavBar);
	expect(true).toBe(true);
});

