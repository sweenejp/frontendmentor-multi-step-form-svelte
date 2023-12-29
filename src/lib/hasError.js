/**
 * @param {HTMLInputElement} field
 * @author Chris Fernandi https://css-tricks.com/form-validation-part-2-constraint-validation-api-javascript/
 * */
export default function hasError(field) {
	// Don't validate submits, buttons, file and reset inputs, and disabled fields
	if (
		field.disabled ||
		field.type === 'file' ||
		field.type === 'reset' ||
		field.type === 'submit' ||
		field.type === 'button'
	)
		return;

	// Get validity
	var validity = field.validity;

	// If valid, return null
	if (validity.valid) return;

	// If field is required and empty
	if (validity.valueMissing) return 'Please fill out this field.';

	// If not the right type
	if (validity.typeMismatch) {
		// Email
		if (field.type === 'email') return 'Please enter an email address.';

		// URL
		if (field.type === 'url') return 'Please enter a URL.';
	}

	// If too short
	if (validity.tooShort)
		return (
			'Please lengthen this text to ' +
			field.getAttribute('minLength') +
			' characters or more. You are currently using ' +
			field.value.length +
			' characters.'
		);

	// If too long
	if (validity.tooLong)
		return (
			'Please shorten this text to no more than ' +
			field.getAttribute('maxLength') +
			' characters. You are currently using ' +
			field.value.length +
			' characters.'
		);

	// If number input isn't a number
	if (validity.badInput) return 'Please enter a number.';

	// If a number value doesn't match the step interval
	if (validity.stepMismatch) return 'Please select a valid value.';

	// If a number field is over the max
	if (validity.rangeOverflow)
		return 'Please select a value that is no more than ' + field.getAttribute('max') + '.';

	// If a number field is below the min
	if (validity.rangeUnderflow)
		return 'Please select a value that is no less than ' + field.getAttribute('min') + '.';

	// If pattern doesn't match
	if (validity.patternMismatch) {
		// If pattern info is included, return custom error
		if (field.hasAttribute('title')) return field.getAttribute('title');

		// Otherwise, generic error
		return 'Please match the requested format.';
	}

	// If all else fails, return a generic catchall error
	return 'The value you entered for this field is invalid.';
}
