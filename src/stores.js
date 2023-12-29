import { writable, derived } from 'svelte/store';

/**
 * @typedef FormStoreState
 * @property {string} name
 * @property {string} email
 * @property {string} phone
 * @property {Record<string, string | null | undefined>} errors
 * @property {string} plan
 * @property {boolean} isYearly
 * @property {string[]} addOns
 * @property {number} step
 */

/** @type {FormStoreState} */
const initialFormStoreState = {
	name: '',
	email: '',
	phone: '',
	errors: {},
	plan: 'arcade',
	isYearly: false,
	addOns: [],
	step: 1
};

const createFormStore = () => {
	const { subscribe, update, set } = writable(initialFormStoreState);

	return {
		subscribe,
		set,
		update,
		goToNextStep: () => update((formState) => ({ ...formState, step: formState.step + 1 })),
		goToPreviousStep: () => update((formState) => ({ ...formState, step: formState.step - 1 })),
		/** @param {number} step */
		setStep: (step) => update((formState) => ({ ...formState, step }))
	};
};

export const formStore = createFormStore();
/** @type {import('svelte/store').Readable<'yearly' | 'monthly'>} */
export const selectedBillingCycle = derived(formStore, ($formStore) =>
	$formStore.isYearly ? 'yearly' : 'monthly'
);

/** @typedef {'idle' |'pending' | 'success'} FormSubmissionState */
/** @type {import('svelte/store').Writable<FormSubmissionState>} */
export const formSubmission = writable('idle');
