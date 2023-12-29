/**
 * @typedef BillingCycleI
 * @property {number} price
 * @property {number | null} monthsFree
 */

/**
 * @typedef PlanI
 * @property { {monthly: BillingCycleI, yearly: BillingCycleI} } billingCycles
 * @property {string} displayValue
 * @property {string} value
 * */

/**
 * @typedef AddOnI
 * @property { {monthly: BillingCycleI, yearly: BillingCycleI} } billingCycles
 * @property {string} displayValue
 * @property {string} value
 * @property {string} description
 */
