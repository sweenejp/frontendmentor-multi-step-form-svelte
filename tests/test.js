import { expect, test } from '@playwright/test';

test('index page has expected h1', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('heading', { name: 'Personal info' })).toBeVisible();
});

test('personal info form validation', async ({ page }) => {
	await page.goto('/');
	await page.getByLabel('Name').fill('Jimmy');
	await page.getByText('Next').click();
	await expect(page.getByRole('heading', { name: 'Personal Info' })).toBeVisible();
	await expect(page.getByText('This field is required').first()).toBeVisible();
	await expect(page.getByText('This field is required').nth(1)).toBeVisible();
});

test('personal info form validation - must have valid email', async ({ page }) => {
	await page.goto('/');
	await page.getByLabel('Email').fill('meow');
	await page.getByText('Next').click();
	await expect(page.getByRole('heading', { name: 'Personal info' })).toBeVisible();
	await expect(page.getByText('Please enter an email address')).toBeVisible();

	await page.getByLabel('Email').fill('meow@meow.com');
	// goes away after entering valid email
	await expect(page.getByText('Please enter an email address')).not.toBeVisible();
});

test('full end to end', async ({ page }) => {
	await page.goto('/');
	await page.getByLabel('Name').fill('Jimmy');
	await page.getByLabel('Email Address').fill('sweenejp@gmail.com');
	await page.getByLabel('Phone Number').fill('123-123-1234');
	await page.getByRole('button', { name: 'Next Step' }).click();
	await page.getByText('Advanced').click();
	await page.getByText('Monthly', { exact: true }).click();
	await page.getByRole('button', { name: 'Next Step' }).click();
	await page.getByText('Larger storage').click();
	await page.getByText('Online service').click();
	await page.getByRole('button', { name: 'Next Step' }).click();
	await page.getByRole('button', { name: 'Change' }).click();
	await page.getByRole('button', { name: 'Next Step' }).click();
	await page.getByRole('button', { name: 'Go Back' }).click();
	await page.getByText('Pro').click();
	await page.getByRole('button', { name: 'Next Step' }).click();
	await page.getByRole('button', { name: 'Next Step' }).click();
	await page.getByRole('button', { name: 'Confirm' }).click();
	await expect(page.getByText('Thank you!')).toBeVisible();
	await expect(page.getByText('Name: Jimmy')).toBeVisible();
	await expect(page.getByText('Email: sweenejp@gmail.com')).toBeVisible();
	await expect(page.getByText('Phone: 123-123-1234')).toBeVisible();
	await expect(page.getByText('Plan: Pro (Yearly)')).toBeVisible();
	await expect(page.getByText('Online service')).toBeVisible();
	await expect(page.getByText('Larger storage')).toBeVisible();
});
