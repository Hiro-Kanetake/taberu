/**
 * BUTTONS
 */

export type button = {
    text: string;
    link: string;
};

/**
 * ALL RECIPE
 */
export interface recipeName {
    name: string;
};

/**
 * ACCOUNT
 */
export type account = {
    email: string;
    password: string;
};

export type accountId = {
    account_id: number | undefined;
};

export interface pincode {
pincode: number;
}

export type setAccountId = {
    setAccountId: (id: number | undefined) => void;
};

export interface newRegister {
    last_name: string;
    first_name: string;
    email: string;
    password: string;
    pincode: number;
}

/**
 * FAMILY
 */

export type familyName = {
    last_name: string;
    first_name: string;
};